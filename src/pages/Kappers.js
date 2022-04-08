import { Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BackButton from "./BackButton";

import { Alert, CircularProgress, Container, ImageListItem, Link, Stack, Typography } from '@mui/material';
import RestaurantCard from '../components/RestaurantCard';

const Kappers = () => {

    const { data: categories, isloading, error } = useFetch("http://localhost:1337/api/categories?populate=*");
    //{categories.data[1].attributes.restaurants.data && categories.data[1].attributes.restaurants.data.map(hair =>
    // <ImageListItem key={hair.attributes.id} component={Link} to={`/detail/${hair.attributes.id}`} data={hair.attributes}>
    //     <RestaurantCard key={hair.attributes.id} hair={hair.attributes} />
    // </ImageListItem>
    //                 )}

    console.log(categories.data[1].attributes.restaurants.data.length - 1);
    return (
        <>
            <BackButton />
            <Container>
                <Typography variant="h2" component="h1">{categories.data[1].attributes.name}</Typography>
                {isloading && <CircularProgress />}
                {error && <Alert severity="error">Something went wrong</Alert>}
                <Stack spacing={2}>

                </Stack>
            </Container>
            <Outlet />
        </>
    );
}

export default Kappers;