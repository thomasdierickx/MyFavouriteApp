import { Alert, CircularProgress, ImageListItem, Typography, Link, Container, Stack } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import BackButton from "./BackButton";

const SearchCat = () => {

    const [chooseCat, setchooseCat] = useState("");

    const { data: categories, isLoading, error } = useQuery("categories", async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories?populate=*`).then(r => r.json());
        return data;
    });

    console.log(categories);

    const { data: restaurants, isLoading2, error2 } = useQuery("restaurants", async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurants?populate=*`).then(r => r.json());
        return data;
    });

    console.log(restaurants);

    return (
        <>
            <BackButton margin={2} />
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Something went wrong</Alert>}
            <article style={{ width: "100%", overflowX: "scroll", display: "flex" }}>
                {
                    categories && categories.data.map((category, i) =>
                        <Typography fontSize=".9rem" style={{ backgroundColor: "lightgrey", borderRadius: "25rem", padding: "1rem", width: "10rem", textAlign: "center", margin: ".5rem" }} key={i} onClick={() => setchooseCat(`${category.attributes.name}`)} >{category.attributes.name}</Typography>
                    )
                }
            </article>
            {isLoading2 && <CircularProgress />}
            {error2 && <Alert severity="error">Something went wrong</Alert>}
            <Container>
                {
                    chooseCat === "" ?
                        <>
                            <Stack spacing={2}>
                                {
                                    restaurants && restaurants.data.map((restaurant, i) =>
                                        <ImageListItem key={i} component={Link} to={`/detail/${restaurant.id}`} restaurant={restaurant} style={{ textDecoration: "none" }}>
                                            <Card key={i} restaurant={restaurant} />
                                            {
                                                console.log(restaurant.attributes.category.data.attributes.name)
                                            }
                                        </ImageListItem>
                                    )
                                }
                            </Stack>
                        </> :
                        <>
                            <Stack spacing={2}>
                                {
                                    restaurants && restaurants.data.map((restaurant, i) =>
                                        restaurant.attributes.category.data.attributes.name === chooseCat ?
                                            <ImageListItem key={i} component={Link} to={`/detail/${restaurant.id}`} restaurant={restaurant} style={{ textDecoration: "none" }}>
                                                <Card key={i} restaurant={restaurant} />
                                            </ImageListItem> : ""
                                    )
                                }
                            </Stack>
                        </>
                }
            </Container>
        </>
    );
}

export default SearchCat;