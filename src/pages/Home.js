import styles from '../components/app.module.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
// ICONS INLADEN
import { AiOutlineShopping } from 'react-icons/ai';
import { BiDrink, BiGasPump } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { GiHamburgerMenu, GiHairStrands } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import { MdPlace, MdFavorite, MdOutlineTakeoutDining, MdOutlineDateRange } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { IoIosRestaurant } from 'react-icons/io';
import { useState } from 'react';

// ROUTER
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    const [click, setClick] = useState(false);

    const location = [
        "restaurants",
        "coffee",
        "kappers",
        "bars",
        "delivery",
        "takeout",
        "reservation",
        "tankstations"
    ];

    const amount = [0, 1, 2, 3, 4, 5, 6, 7];

    const icon = [
        <IoIosRestaurant style={{ height: "2.5rem", width: "2.5rem" }} />,
        <AiOutlineShopping style={{ height: "2.5rem", width: "2.5rem" }} />,
        <GiHairStrands style={{ height: "2.5rem", width: "2.5rem" }} />,
        <BiDrink style={{ height: "2.5rem", width: "2.5rem" }} />,
        <GrDeliver style={{ height: "2.5rem", width: "2.5rem" }} />,
        <MdOutlineTakeoutDining style={{ height: "2.5rem", width: "2.5rem" }} />,
        <MdOutlineDateRange style={{ height: "2.5rem", width: "2.5rem" }} />,
        <BiGasPump style={{ height: "2.5rem", width: "2.5rem" }} />
    ];

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
                        {amount && amount.map(i =>
                            <Link to={`/${location[i]}`} key={i} style={{ textDecoration: "none", color: "black" }}>
                                <section className={styles.searchCategory}>
                                    {icon[i]}
                                    <p className={styles.searchCategoryName}>{location[i]}</p>
                                </section>
                            </Link>
                        )}
                    </article>
                }

            </Box >
            <Outlet />
        </>
    );
}

export default Home;