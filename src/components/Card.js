import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const HairDresserCard = ({ restaurant, images }) => {

    console.log(restaurant);
    return (<Card sx={{ maxWidth: 345, marginTop: "2rem" }}>
        <CardMedia
            component="img"
            alt={"Test"}
            height="140"
            image={"https://source.unsplash.com/random/?food"}
        />
        <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
                {restaurant.attributes.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {restaurant.attributes.description}
            </Typography>

        </CardContent>
    </Card>);
}

export default HairDresserCard;