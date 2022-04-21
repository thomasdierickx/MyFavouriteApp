import React, { useState } from 'react';
import styles from '../components/app.module.css';
import { Checkbox, Container, Typography } from '@mui/material';
import more from '../components/more.module.css';
import useFetch from '../hooks/useFetch';

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

    let idUser = localStorage.getItem('id');
    const { data: users } = useFetch(`http://localhost:1337/api/users/${idUser}?populate=*`);
    console.log(users);


    const { data: reviews } = useFetch("http://localhost:1337/api/reviews?populate=*");
    console.log(reviews);

    return (
        <>
            {isLogged ?
                <>
                    <Container fixed>
                        <Typography variant='p' fontWeight="bold">Al jouw reviews</Typography>
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
