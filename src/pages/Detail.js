import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BackButton from "./BackButton";
import { useQuery } from 'react-query';
import Restaurants from "./Restaurants";

const Detail = () => {
    const { id } = useParams();
    const { data: restaurant, isLoading, isError } = useQuery('restaurant', () => fetch(`http://localhost:1337/api/restaurants/${id}/?populate=*`).then(r => r.json()));

    if (restaurant.data === null) {
        return <p>Everything is loading</p>;
    }

    return (
        <>
            <BackButton margin={2} />
            {isLoading && <CircularProgress />}
            {isError && <Alert severity="error">Something went wrong</Alert>}
            <Stack component="section">
                <Typography variant="h2" marginLeft={1}>{ }</Typography>
                <Typography varaint="p" marginLeft={2}>{ }</Typography>
            </Stack>
        </>
    );
}

export default Detail;