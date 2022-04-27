import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";
import { Alert, CircularProgress, Container, ImageListItem, Link, Stack, Typography } from '@mui/material';
import HairDresserCard from '../components/Card';
import { useQuery } from "react-query";

const Restaurants = () => {

    const { data: categories, isLoading, error } = useQuery("categories", async () => {
        const data = await fetch("http://localhost:1337/api/categories?populate=*").then(r => r.json());
        return data;
    });

    return (
        <>
            <BackButton />
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Something went wrong</Alert>}
            {
                categories === null ?
                    <Stack style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <CircularProgress width="15rem" height="15rem" />
                    </Stack> :
                    <Container>
                        <Typography variant="h2" component="h1">{categories.data[0].attributes.name}</Typography>
                        {error && <Alert severity="error">Something went wrong</Alert>}
                        <Stack spacing={2}>
                            {categories && categories.data[0].attributes.restaurants.data.map((category, i) =>
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

export default Restaurants;