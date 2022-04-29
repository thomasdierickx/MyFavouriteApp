import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";

import { Alert, CircularProgress, Container, ImageListItem, Link, Stack, Typography } from '@mui/material';
import HairDresserCard from '../components/Card';
import { useQuery } from "react-query";

const Outgoing = () => {

    const { data: categories, isLoading, error } = useQuery("categories", async () => {
        const data = await fetch("http://localhost:1337/api/categories?populate=*").then(r => r.json());
        return data;
    });

    return (
        <>
            <BackButton />
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Something went wrong</Alert>}
            <Container>
                <Typography variant="h2" component="h1">{categories.data[4].attributes.name}</Typography>
                {error && <Alert severity="error">Something went wrong</Alert>}
                <Stack spacing={2}>
                    {categories && categories.data[4].attributes.restaurants.data.map((category, i) =>
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

export default Outgoing;