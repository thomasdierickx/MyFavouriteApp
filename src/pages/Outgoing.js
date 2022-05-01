import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";

import { Alert, CircularProgress, Container, IconButton, ImageListItem, Link, Stack, Typography } from '@mui/material';
import HairDresserCard from '../components/Card';
import { useQuery } from "react-query";

const Outgoing = () => {

    const { data: categories, isLoading, error } = useQuery("categories", async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories?populate=*`).then(r => r.json());
        return data;
    });

    return (
        <>
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Something went wrong</Alert>}
            <Container style={{ width: "100vw", height: "30vh", backgroundImage: `url(https://res.cloudinary.com/dgebgtlsp/image/upload/v1651406515/Screenshot_2022-05-01_at_13.54.34_tgizgl.png)`, backgroundSize: "cover", paddingTop: "4rem" }}>
                <IconButton sx={{ bgcolor: 'white', width: "90%", borderRadius: ".5rem", marginLeft: "1rem", boxShadow: ".1rem .1rem .5rem grey", paddingTop: ".5rem", paddingBottom: ".5rem", display: "flex", justifyContent: "flex-start", alignItems: "center" }} component="span">
                    <BackButton />
                    <Typography component='h1' variant="h6" color="black" paddingLeft={1}>Outgoing</Typography>
                </IconButton>
            </Container>
            <Container>
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