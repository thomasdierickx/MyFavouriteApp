import more from '../components/more.module.css';
import { useQuery } from "react-query";
import { Container, CircularProgress, Alert, Typography } from "@mui/material";
import Card from '../components/Card';
import { MdDelete } from 'react-icons/md';

const Likes = () => {

    const { data: likes, isLoading, error } = useQuery("likes", async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/likes?populate=*`).then(r => r.json());
        return data;
    });

    const deleteReview = async (like) => {
        return await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/likes/${like}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => r.json())
    }

    return (
        <>
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Something went wrong</Alert>}
            <header className={more.header} style={{ margin: "0" }}>
                <Typography variant='h2' component='h2' style={{ fontSize: "1.5rem", color: "white", fontWeight: "700", padding: "1rem", }} >Likes</Typography>
            </header>
            <Container style={{ paddingBottom: "10vh" }}>
                {
                    likes && likes.data.map((like, i) =>
                        <article key={i}>
                            {
                                like.attributes.user.data.id === JSON.parse(localStorage.getItem('id')) ?
                                    <>
                                        <Card key={i} restaurant={like.attributes.restaurant_id.data} counter={i + 1} />
                                        <button style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                            backgroundColor: "white",
                                            borderRadius: "25rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "none",
                                            marginTop: "-5rem",
                                            marginLeft: "1rem",
                                            position: "relative",
                                        }} as="form" noValidate onClick={() => deleteReview(like.id)} >
                                            <MdDelete style={{ width: "1.5rem", height: "1.5rem" }} />
                                        </button>
                                    </> : ""
                            }
                        </article>
                    )
                }
            </Container>
        </>
    );
}

export default Likes;