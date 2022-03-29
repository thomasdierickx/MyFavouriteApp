import styles from '../components/app.module.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
// ICONS INLADEN
import { FiCoffee } from 'react-icons/fi';
import { BiDrink, BiGasPump } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { GiHairStrands } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import { MdPlace, MdFavorite, MdOutlineTakeoutDining, MdOutlineDateRange } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { IoIosRestaurant } from 'react-icons/io';
import { useState } from 'react';

// ROUTER
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Layout from '../components/Layout';

const Home = () => {

    const [click, setClick] = useState(false);

    return (
        <>
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
                        <ImCross style={{ color: "white", height: "1.5rem", width: "1.5rem" }} onClick={() => setClick(!click)} /> :
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
                    <article className={styles.searchCategories}>
                        <section className={styles.searchCategory}>
                            <IoIosRestaurant style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Restaurant</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <FiCoffee style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Koffie en thee</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <GiHairStrands style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Kappers</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <BiDrink style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Bars</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <GrDeliver style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Thuislevering</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <MdOutlineTakeoutDining style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >TakeOut</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <MdOutlineDateRange style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Reservation</p>
                        </section>
                        <section className={styles.searchCategory}>
                            <BiGasPump style={{ height: "2.5rem", width: "2.5rem" }} />
                            <p className={styles.searchCategoryName} >Tankstations</p>
                        </section>
                    </article>
                }

            </Box >
        </>
    );
}

export default Home;