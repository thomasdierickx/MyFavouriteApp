import styles from '../components/app.module.css';
import { Alert, Box, CircularProgress, IconButton, Stack, Typography, Link } from '@mui/material';
import { Outlet } from 'react-router-dom';
// ICONS INLADEN
import SearchIcon from '@mui/icons-material/Search';

// ROUTER
import React from 'react';
import { Link as LinkR } from "react-router-dom";
import { useQuery } from 'react-query';

const Home = () => {
    const { data: categories, isLoading: isLoadingCat, error: errorCat } = useQuery("categories", async () => {
        const data = await fetch("http://localhost:1337/api/categories?populate=*").then(r => r.json());
        return data;
    });

    const { data: reviews, isLoading: isLoadingR, error: errorR } = useQuery("reviews", async () => {
        const data = await fetch("http://localhost:1337/api/reviews?populate=*").then(r => r.json());
        return data;
    });

    const { data: restaurants, isLoading: isLoadingRest, error: errorRest } = useQuery("restaurants", async () => {
        const data = await fetch("http://localhost:1337/api/restaurants?populate=*").then(r => r.json());
        return data;
    });

    const { data: users, isLoading: isLoadingU, error: errorU } = useQuery("users", async () => {
        const data = await fetch("http://localhost:1337/api/users?populate=*").then(r => r.json());
        return data;
    });

    let totalReviews = 0;

    return (
        <>
            {isLoadingCat && <CircularProgress />}
            {errorCat && <Alert severity="error">Something went wrong</Alert>}
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
                    <LinkR to={`/searchCat`} style={{ textDecoration: "none" }} >
                        <IconButton sx={{ bgcolor: 'white', width: "90%", borderRadius: ".5rem", marginLeft: "1rem", boxShadow: ".1rem .1rem .5rem grey", paddingTop: "1rem", paddingBottom: "1rem" }} component="span">
                            <SearchIcon style={{ color: "grey", height: "2rem", width: "2rem" }} />
                            <Typography component='p' color="grey" paddingLeft={1}>Search for burgers, delivery, etc...</Typography>
                        </IconButton>
                    </LinkR>
                </article>
                <article className={styles.searchCategories}>
                    {categories && categories.data.map((category, i) =>
                        <Stack component={Link} to={`/${category.attributes.name}`} key={i} style={{ textDecoration: "none", color: "black" }} categories={categories}>
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
                        </Stack>
                    )}
                </article>
            </Box >

            <Box sx={{ width: "90%", backgroundColor: "#c41200", borderRadius: "1rem", display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "0 1rem 0 1rem", margin: "0 auto", marginTop: "1rem", boxShadow: ".1rem .1rem .5rem grey" }} >
                {isLoadingR && <CircularProgress />}
                {errorR && <Alert severity="error">Something went wrong</Alert>}
                <Typography align="center" color="white">Al</Typography>
                {
                    reviews === null ?
                        <CircularProgress /> :
                        <Typography variant='h3' component="h2" fontWeight="bold" color="white" >{totalReviews}</Typography>
                }

                <Typography align="center" color="white">reviews geschreven!</Typography>
            </Box>

            <Box sx={{ width: "90%", backgroundColor: "white", borderRadius: "1rem", display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "0 1rem 0 1rem", margin: "0 auto", marginTop: "1rem", boxShadow: ".1rem .1rem .5rem grey" }} >
                {isLoadingRest && <CircularProgress />}
                {errorRest && <Alert severity="error">Something went wrong</Alert>}
                <Typography align="center">Op</Typography>
                {
                    restaurants === null ?
                        <CircularProgress /> :
                        <Typography variant='h3' component="h2" fontWeight="bold" color="#c41200" >Works</Typography>
                }
                <Typography align="center">verschillende restaurants geplaatst!</Typography>
            </Box>

            <Box sx={{ width: "90%", backgroundColor: "white", borderRadius: "1rem", display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "0 1rem 0 1rem", margin: "0 auto", marginTop: "1rem", boxShadow: ".1rem .1rem .5rem grey" }} >
                {isLoadingU && <CircularProgress />}
                {errorU && <Alert severity="error">Something went wrong</Alert>}
                <Typography align="center">Door</Typography>
                {
                    users === null ?
                        <CircularProgress /> :
                        <Typography variant='h3' component="h2" fontWeight="bold" color="#c41200" >Works</Typography>
                }
                <Typography align="center">verschillende gebruikers!</Typography>
            </Box>
            <Outlet />
        </>
    );
}

export default Home;