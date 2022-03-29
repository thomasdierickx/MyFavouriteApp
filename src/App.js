import styles from './components/app.module.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';
// ICONS INLADEN
import IoRestaurantOutline from 'react-icons/ri';
import FiCoffee from 'react-icons/ri';
import BiDrink from 'react-icons/ri';
import GrDeliver from 'react-icons/ri';
import MdOutlineTakeoutDining from 'react-icons/ri';
import MdOutlineDateRange from 'react-icons/ri';
import GiHairStrands from 'react-icons/ri';
import BiGasPump from 'react-icons/ri';
import AiOutlineShopping from 'react-icons/ri';
import GiPartyPopper from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import { MdPlace, MdFavorite } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

function App() {

  const [click, setClick] = useState(false);

  return (
    <Box>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <header className={styles.header}>
        <a style={{ textDecoration: "none" }} href='https://play.google.com/store/apps/details?id=com.yelp.android&referrer=adjust_reftag%3Dcxn4BoyOVe0Q1%26utm_source%3DMobile%2BSite%2B%2528100%2525%2529%26utm_campaign%3Dmobile_site_service%26utm_content%3Dhome.searchbar_app_link'>
          <Button variant="contained" color="error" size="small">Opennen in app</Button>
        </a>
        <article className={styles.logo}></article>
        {click ?
          <ImCross style={{ color: "white", height: "1rem", width: "1rem" }} onClick={() => setClick(!click)} /> :
          <GiHamburgerMenu style={{ color: "white", height: "1.5rem", width: "1.5rem" }} onClick={() => setClick(!click)} />
        }

      </header>
      {click ?
        <article className={styles.hamburgerMenu}>
          <section className={styles.menu}>
            <div className={styles.menuItem}>
              <BsPersonCircle color="red" />
              <p className={styles.strong}>Registreren</p>
            </div>
          </section>
          <section className={styles.menu}>
            <div className={styles.menuItem}>
              <BsPersonCircle color="grey" />
              <p>Inloggen</p>
            </div>
          </section>
          <section className={styles.menu}>
            <div className={styles.menuItem}>
              <MdPlace color="grey" />
              <p>In de buurt</p>
            </div>
          </section>
          <section className={styles.menu}>
            <div className={styles.menuItem}>
              <MdFavorite color="grey" />
              <p>Favorieten</p>
            </div>
          </section>
          <section className={styles.menu}>
            <div className={styles.menuItem}>
              <RiBuilding2Fill color="grey" />
              <p>Een bedrijf toevoegen</p>
            </div>
          </section>
          <section className={styles.extra}>
            <p className={styles.extraText}>Aankondegingsopties</p>
            <p className={styles.extraText}>Hulp</p>
          </section>
        </article> :
        <article>DIT IS EEN TEST</article>
      }

    </Box >
  );
}

export default App;
