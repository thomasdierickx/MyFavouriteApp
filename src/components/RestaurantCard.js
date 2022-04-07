import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const RestaurantCard = ({ restaurant }) => {

    return (<Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt={restaurant.attributes.images.data[0].attributes.hash}
            height="140"
            image={restaurant.attributes.images.data[0].attributes.url}
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

export default RestaurantCard;