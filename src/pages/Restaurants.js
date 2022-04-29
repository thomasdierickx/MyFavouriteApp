import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import BackButton from "./BackButton";
import { Alert, CircularProgress, Container, ImageListItem, Link, Stack, Typography } from '@mui/material';
import HairDresserCard from '../components/Card';

const Restaurants = () => {

    const { data: categories, isLoading, error } = useQuery("categories", async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories?populate=*`).then(r => r.json());
        return data;
    });

    console.log(categories);

    return (
        <>
            <BackButton />
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Something went wrong</Alert>}
            <Container>
                <Typography variant="h2" component="h1">Restaurants</Typography>
                <Stack spacing={2}>
                    {categories && categories.data[0].attributes.restaurants.data.map((category, i) =>
                        <ImageListItem key={i} component={Link} to={`/detail/${category.id}`} restaurant={category} style={{ textDecoration: "none" }}>
                            <HairDresserCard key={category.id} restaurant={category} counter={i + 1} />
                        </ImageListItem>
                    )}
                </Stack>
            </Container>
            <Outlet />
        </>
    );
}

export default Restaurants;