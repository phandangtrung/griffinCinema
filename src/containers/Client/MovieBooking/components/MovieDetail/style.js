import { convertLegacyProps } from 'antd/lib/button/button';

export const style = {
  detail_box: {
    width: 400,
    height: '90vh',
    position: 'relative',
  },
  background_box: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage:
      'linear-gradient(to bottom, rgba(44,52,63,0.8) 0%,rgba(44,52,63,1) 100%)',
    zIndex: 11,
  },
  back_image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
  },
  movie_name: {
    left: 30,
    bottom: 50,
    position: 'absolute',
    textTransform: 'capitalize',
    fontSize: '40px',
    color: '#ffff',
    fontFamily: 'Lobster, cursive',
    textShadow: '2px 2px 2px grey',
    zIndex: 12,
  },
  movie_date: {
    left: 30,
    bottom: 0,
    position: 'absolute',
    textTransform: 'capitalize',
    fontSize: '17px',
    color: '#ffff',
    fontFamily: 'Lobster, cursive',
    fontStyle: 'oblique',
    zIndex: 12,
  },
};
