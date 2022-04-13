import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const HairDresserCard = ({ restaurant }) => {

    console.log(restaurant);
    return (<Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt={""}
            height="140"
            image={""}
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