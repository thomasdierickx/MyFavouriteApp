import { Card, CardContent, CardMedia, Typography, Container, Alert, CircularProgress } from "@mui/material";
import { AiFillStar } from 'react-icons/ai';

import { useQuery } from "react-query";

const HairDresserCard = ({ restaurant, counter }) => {

    const { data: reviews, isLoading, error } = useQuery("reviews", async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/reviews/?populate=*`).then(r => r.json());
        return data;
    });

    let counterArr = [];

    return (<Card sx={{ width: "90vw", borderBottom: ".2rem solid lightgrey", boxShadow: "none", borderRadius: "0" }}>
        {isLoading && <CircularProgress />}
        {error && <Alert severity="error">Something went wrong</Alert>}
        <CardContent sx={{ padding: "1rem 0 1rem 0" }} >
            <Typography gutterBottom variant="h6" component="h3">
                {counter}. {restaurant.attributes.name}
            </Typography>
            <Container style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "0 0 1rem 0" }}>
                {
                    reviews && reviews.data.map((review, i) =>
                        <article key={i}>
                            {
                                review.attributes.restaurant.data.id === restaurant.id ?
                                    <AiFillStar style={{ backgroundColor: "red", color: "white", width: "1rem", height: "1rem" }} /> : ""
                            }
                        </article>)
                }
                {
                    reviews && reviews.data.map((review, i) =>
                        <article key={i}>
                            {
                                review.attributes.restaurant.data.id === restaurant.id ?
                                    <>
                                        <Typography style={{ display: "none" }} >{counterArr.push(i)}</Typography>
                                    </> : ""
                            }
                        </article>)
                }
                <Typography paddingLeft={1}>{counterArr.length}</Typography>
            </Container>
            <Typography variant="body3" color="text.secondary">
                {restaurant.attributes.adres}
            </Typography>
        </CardContent>
        <CardMedia
            component="img"
            alt={"Test"}
            height="140"
            image={"https://source.unsplash.com/random/?food"}
            style={{ marginBottom: "2rem" }}
        />
    </Card>);
}

export default HairDresserCard;