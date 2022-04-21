import styles from '../components/app.module.css';
import { Box, IconButton, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
// ICONS INLADEN
import SearchIcon from '@mui/icons-material/Search';

// ROUTER
import React from 'react';
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data: categories } = useFetch("http://localhost:1337/api/categories?populate=*");

    return (
        <>
            <Box>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <header className={styles.header}>
                    <Typography component="h1" fontWeight="bold" color="white" fontSize="2rem" padding={2}>
                        We know just the place
                    </Typography>
                    <IconButton sx={{ bgcolor: '#c41200', width: "60%", borderRadius: ".5rem", marginLeft: "1rem" }} component="span">
                        <SearchIcon style={{ color: "white" }} />
                        <Typography component='p' color="white" paddingLeft={1}>Unieke restaurants</Typography>
                    </IconButton>
                </header>
                <article style={{ marginTop: "-2rem" }}>
                    <IconButton sx={{ bgcolor: 'white', width: "90%", borderRadius: ".5rem", marginLeft: "1rem", boxShadow: ".1rem .1rem .5rem grey", paddingTop: "1rem", paddingBottom: "1rem" }} component="span">
                        <SearchIcon style={{ color: "grey", height: "2rem", width: "2rem" }} />
                        <Typography component='p' color="grey" paddingLeft={1}>Search for burgers, delivery, etc...</Typography>
                    </IconButton>
                </article>
                <article className={styles.searchCategories}>
                    {categories && categories.data.map((category, i) =>
                        <Link to={`/${category.attributes.name}`} key={i} style={{ textDecoration: "none", color: "black" }}>
                            <section className={styles.searchCategory}>
                                <div style={{
                                    backgroundImage: `url(${category.attributes.icon.data.attributes.url})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "3rem",
                                    width: "3rem",
                                    height: "3rem",
                                }}></div>
                                <p className={styles.searchCategoryName}>{category.attributes.name}</p>
                            </section>
                        </Link>
                    )}
                </article>
            </Box >
            <Outlet />
        </>
    );
}

export default Home;