import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '70vh',
  },
  img: {
    width: '100%',
    height: '70vh',
  },
}));

function Banner({ data }) {
  const classes = useStyles();
  return (
    <Carousel
      fullHeightHover={false}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 50,
          margin: '0px 10px',
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '5px', // 5
        },
      }}
      className={classes.root}
    >
      {data.map((item) => (
        <Paper key={item.maBanner}>
          <img className={classes.img} src={item.hinhAnh} alt="Banner" />
        </Paper>
      ))}
    </Carousel>
  );
}

export default Banner;
