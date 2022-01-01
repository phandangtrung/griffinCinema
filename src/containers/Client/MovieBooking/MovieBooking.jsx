import React, { useState, useEffect } from 'react';
import MovieDetail from './components/MovieDetail/MovieDetail';
import BookingContainer from './components/BookingContainer/BookingContainer';
import CircularIndeterminate from '../../../components/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { style } from './style';
import { useParams } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { getBooklist, showAlert, closeAlert } from './bookingSlice';
import './Moviestyle.css';

function MovieBooking() {
  
  let { maLichChieu } = useParams();
  const [bookInfo, setbookInfo] = useState({});
  const handleCloseAler = () => {
    dispatch(closeAlert());
  };
  const { container } = style;
  const isloading = useSelector((state) => state.movieBooking.isLoading);
  const dispatch = useDispatch();
  const getbooklist = async () => {
    const data = await dispatch(getBooklist(maLichChieu));
    const dataResult = unwrapResult(data);
    setbookInfo(dataResult);
    console.log('dataResult', dataResult);
  };
  
  useEffect(() => {
    getbooklist();
  }, []);
  
  return (
    <>
      <div style={{ ...container }}>
        {isloading ? (
          <CircularIndeterminate />
        ) : (
          <>
            <MovieDetail />
            <BookingContainer />
          </>
        )}
      </div>
    </>
  );
}

export default MovieBooking;
