import React, { useState } from 'react';
import styles from '../components/app.module.css';
import { Card, Checkbox, CircularProgress, Container, Stack, Typography } from '@mui/material';
import more from '../components/more.module.css';
import useFetch from '../hooks/useFetch';
import Geocode from "react-geocode";
import { useQuery } from 'react-query';

// const backendUrl = process.env.REACT_APP_BACKEND_URL;

const providersNames = [
    'twitch',
    'google',
];

const LoginButton = (props) => <a href={`http://localhost:1337/api/connect/${props.providerName}`}>
    <button className={styles.button}>Verdergaan met {props.providerName}</button>
</a>;

const LogoutButton = (props) => <button className={styles.button} onClick={props.onClick}>Logout</button>;

const Profile = (props) => {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        localStorage.removeItem('data');
        setIsLogged(false);
    };

    let buttons;
    const [checked, setChecked] = useState(false);

    if (isLogged) {
        buttons = <LogoutButton onClick={logout} />;
    } else {
        buttons = <ul style={{ listStyleType: 'none', width: "90%" }}>
            {providersNames.map((providerName, i) => <li key={providerName}>
                {
                    checked === true ?
                        <LoginButton providerName={providerName} /> :
                        <LoginButton disabled={true} providerName={providerName} />
                }

            </li>)}
        </ul>;
    }

    let text;

    if (isLogged) {
        text = `Welcome ${localStorage.getItem('username')}, you are connected!`;
    } else {
        text = `Log in met je e-mailadres en wachtwoord.`;
    }

    // <div>
    //     <Typography variant='p' component='p' textAlign="center">{text}</Typography>
    //     {buttons}
    // </div>

    // {
    //     reviews.data && reviews.data.map(i =>
    //         <>
    //             {
    //                 reviews.data[i].attributes.user.data.id === JSON.parse(localStorage.getItem('id')) ?
    //                     <p>Dit werkt</p> : <p>Dit niet</p>
    //             }
    //         </>
    //     )
    // }
    const { data: reviews, isLoading, error } = useQuery("reviews", async () => {
        const data = await fetch("http://localhost:1337/api/reviews?populate=*").then(r => r.json());
        return data;
    });

    let string = ""

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        localStorage.setItem('latitude', position.coords.latitude);
        localStorage.setItem('longitude', position.coords.longitude);
        string = `${position.coords.latitude}, ${position.coords.longitude}`;
        return string;
    });

    return (
        <>
            {isLogged ?
                <>
                    <Container fixed>
                        {
                            reviews === null ?
                                <Stack style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                    <CircularProgress width="15rem" height="15rem" />
                                </Stack> :
                                <>
                                    <Container fixed>
                                        <Typography variant='h4' component='h2' align='center' fontWeight='bold' padding={1}>
                                            {localStorage.getItem('username')}
                                        </Typography>
                                        <Container style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                            <Typography variant="p" fontSize=".7rem" color="grey" style={{ textAlign: "center" }}>
                                                {localStorage.getItem('latitude')}, {localStorage.getItem('longitude')}
                                            </Typography>
                                        </Container>

                                    </Container>
                                    <Typography variant='h5' component="h3" fontWeight="bold">Mijn impact</Typography>
                                    <section style={{ display: "flex", overflowX: "scroll" }} >
                                        {
                                            reviews && reviews.data.map((review, i) =>
                                                <article key={i} style={{ margin: ".2rem" }}>
                                                    {
                                                        review.attributes.user.data.id === JSON.parse(localStorage.getItem('id')) ?
                                                            <Card sx={{
                                                                height: "10rem",
                                                                width: "20rem",
                                                                padding: "1rem",
                                                                marginTop: "1rem",
                                                                marginBottom: "1rem",
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "flex-start",
                                                                flexDirection: "column",
                                                            }}>
                                                                <article>
                                                                    <Typography variant='h3' fontSize="1rem" fontWeight="bold">
                                                                        {review.attributes.title}
                                                                    </Typography>
                                                                    <Typography variant='p' fontSize="1rem" sx={{ marginTop: "1rem" }} >
                                                                        {review.attributes.description}
                                                                    </Typography>
                                                                </article>
                                                                <article>
                                                                    <Typography variant="p" fontSize=".8rem" color="grey">
                                                                        {review.attributes.restaurant.data.attributes.name}
                                                                    </Typography><br />
                                                                    <Typography variant="p" fontSize=".6rem" color="grey">
                                                                        {review.attributes.date}
                                                                    </Typography>
                                                                </article>
                                                                {
                                                                    console.log(review)
                                                                }
                                                            </Card> :
                                                            ""
                                                    }
                                                </article>
                                            )
                                        }
                                    </section>
                                </>
                        }
                        {buttons}
                    </Container>
                </> :
                <>
                    <header className={more.header}>
                        <h2 className={more.h2}>Aanmelden</h2>
                    </header>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src="https://res.cloudinary.com/dgebgtlsp/image/upload/v1650442278/loginpng_vzk3xz.png" style={{ width: "10rem", height: "10rem", marginTop: "1rem", marginBottom: "2rem" }} alt="Dit is een foto" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Typography variant='p' component='p' padding={1} fontSize=".9">{text}</Typography>
                        <div style={{ width: "90%", display: "flex", justifyContent: "space-arround", alignItems: "center", flexDirection: "column" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Checkbox onClick={() => setChecked(!checked)} />
                                <Typography component="p" variant="p" style={{ fontSize: ".7rem", color: "grey" }} padding={1}>
                                    Door verder te gaan, ga ik akkoord met de Gebruiksvoorwaarden van Yelp en bevestig ik het Privacybeleid vann Yelp, inclusief het cookiebeleid van Yelp
                                </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Checkbox onClick={() => setChecked(!checked)} />
                                <Typography component="p" variant="p" style={{ fontSize: ".7rem", color: "grey" }} padding={1}>
                                    Ja, ik wil graag e-mails ontvangen over de producten en diensten van Yelp en over de lokale evenementen. Ik kan me op elk moment uitschrijven.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {buttons}
                    </div>
                </>
            }

        </>
    )
}

export default Profile;
