import { Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BackButton from "./BackButton";

import { Alert, CircularProgress, Container, ImageListItem, Link, Stack, Typography } from '@mui/material';
import RestaurantCard from '../components/RestaurantCard';

const Restaurants = () => {

    const { data: restaurants, isloading, error } = useFetch("http://localhost:1337/api/restaurants?populate=*");

    return (
        <>
            <BackButton />
            <Container>
                <Typography variant="h2" component="h1">Restaurants</Typography>
                {isloading && <CircularProgress />}
                {error && <Alert severity="error">Something went wrong</Alert>}
                <Stack spacing={2}>
                    {restaurants && restaurants.data.map((restaurant, i) =>
                        <ImageListItem key={i} component={Link} to={`/detail/${restaurant.id}`} restaurant={restaurant}>
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        </ImageListItem>
                    )}
                </Stack>
            </Container>
            <Outlet />
        </>
    );
}

export default Restaurants;