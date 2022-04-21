import { Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BackButton from "./BackButton";

import { Alert, CircularProgress, Container, ImageListItem, Link, Stack, Typography } from '@mui/material';
import HairDresserCard from '../components/Card';

const Bars = () => {

    const { data: categories, error } = useFetch("http://localhost:1337/api/categories?populate=*");
    //{categories.data[1].attributes.restaurants.data && categories.data[1].attributes.restaurants.data.map(hair =>
    // <ImageListItem key={hair.attributes.id} component={Link} to={`/detail/${hair.attributes.id}`} data={hair.attributes}>
    //     <RestaurantCard key={hair.attributes.id} hair={hair.attributes} />
    // </ImageListItem>
    //                 )}

    // PROPERTIES
    return (
        <>
            <BackButton />
            {
                categories === null ?
                    <Stack style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <CircularProgress width="15rem" height="15rem" />
                    </Stack> :
                    <Container>
                        <Typography variant="h2" component="h1">{categories.data[2].attributes.name}</Typography>
                        {error && <Alert severity="error">Something went wrong</Alert>}
                        <Stack spacing={2}>
                            {categories.data[2].attributes.restaurants && categories.data[2].attributes.restaurants.data.map((category, i) =>
                                <ImageListItem key={i} component={Link} to={`/detail/${category.id}`} restaurant={category} style={{ textDecoration: "none" }}>
                                    <HairDresserCard key={category.id} restaurant={category} />
                                </ImageListItem>
                            )}

                        </Stack>
                    </Container>
            }

            <Outlet />
        </>
    );
}

export default Bars;