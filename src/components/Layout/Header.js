import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/gym.jpg';
import classes from './Header.module.css';
import flt from '../../assets/ftl.png';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={flt} className={classes.foto} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
