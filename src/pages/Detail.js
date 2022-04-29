import { Alert, CircularProgress, Stack, Typography, TextField, Snackbar } from "@mui/material";
import { useParams } from "react-router-dom";
import BackButton from "./BackButtonWhite";
import { useForm } from "react-hook-form";

// Icons
import { BsBookmark, BsShareFill, BsMap, BsCamera, BsPatchCheck, BsCheck } from 'react-icons/bs';
import { FiMoreVertical, FiPhoneCall } from 'react-icons/fi';
import { useState } from "react";
import { AiOutlineExport, AiOutlineInfoCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiRestaurantLine } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { LoadingButton } from "@mui/lab";

const Detail = () => {
    const { id } = useParams();

    let today = new Date();
    let date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();

    const defaultValues = {
        title: "",
        description: "",
        stars_amount: 3,
        date: date.toString(),
        restaurant: id,
        user: 3,
    }

    const { data: detail, isLoading: loadingDetail, error: errorDetail } = useQuery("detail", async () => {
        const data = await fetch(`${process.env.REACT_PUBLIC_STRAPI_URL}/api/restaurants/${id}?populate=*`).then(r => r.json());
        return data;
    });

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: "all", defaultValues })

    const [click, setClick] = useState(true);
    const [clickReview, setClickReview] = useState(true);

    const queryClient = useQueryClient();

    const postReview = async (review) => {
        return await fetch(`${process.env.REACT_PUBLIC_STRAPI_URL}/api/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: review })
        }).then(r => r.json())
    }

    const mutation = useMutation(postReview, {
        onSuccess: () => {
            console.log("Review added");
            queryClient.invalidateQueries("reviews");
            reset();
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
    }

    const handleCloseSnackbar = () => {
        mutation.reset();
    }

    console.log(detail);

    return (
        <>
            {loadingDetail && <CircularProgress />}
            {errorDetail && <Alert severity="error">Something went wrong</Alert>}
            {
                detail === undefined ? "" :
                    <>
                        <Snackbar open={mutation.isSuccess} onClose={handleCloseSnackbar} autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: "right" }} style={{ position: "absolute", top: "90vh", right: "1", zIndex: "999" }} >
                            <Alert severity="success" sx={{ width: '100%' }}>Review added</Alert>
                        </Snackbar>
                        <a id="writeReview" href=".."></a>
                        <article
                            style={{
                                backgroundImage:
                                    `url(${detail.data.attributes.images.data[0].attributes.url})`,
                                height: "30vh",
                                backgroundSize: "cover"
                            }}>
                            <nav style={{ paddingTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <BackButton margin={2} />
                                <div style={{ width: "8rem", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                                    <BsBookmark style={{ height: "1.5rem", width: "1.5rem", color: "white" }} />
                                    <BsShareFill style={{ height: "1.5rem", width: "1.5rem", color: "white" }} />
                                    {
                                        click ?
                                            <FiMoreVertical style={{ height: "1.5rem", width: "1.5rem", color: "white" }} onClick={() => setClick(!click)} /> :
                                            ""
                                    }

                                </div>
                            </nav>
                            <Stack component="section">
                                <Typography variant="h2" paddingLeft={2} paddingTop={4} color="white" fontSize="3rem" fontWeight="bold">{detail.data.attributes.name}</Typography>
                                <Typography varaint="p" marginLeft={2}>
                                    <AiFillStar style={{ color: "orange", height: "2rem", width: "2rem" }} />
                                    <AiFillStar style={{ color: "orange", height: "2rem", width: "2rem" }} />
                                    <AiFillStar style={{ color: "orange", height: "2rem", width: "2rem" }} />
                                    <AiFillStar style={{ color: "orange", height: "2rem", width: "2rem" }} />
                                    <AiOutlineStar style={{ color: "orange", height: "2rem", width: "2rem" }} />
                                </Typography>
                            </Stack>
                        </article>

                        {
                            !click ?
                                <section style={{ width: "60vw", backgroundColor: "lightgrey", top: "0", right: "0", position: "absolute", paddingLeft: "1rem", display: "flex", flexDirection: "column", justifyContent: "", alignItems: "flex-start" }} onClick={() => setClick(!click)} >
                                    <a style={{ textDecoration: "none", color: "black", width: "auto", paddingTop: ".5rem", paddingBottom: ".5rem" }} href="#review">Schrijf een review</a>
                                    <p>Voeg een foto of video toe</p>
                                    <p>Check In</p>
                                    <p>Voeg een tip toe</p>
                                    <p>Aan favorieten toevoegen</p>
                                    <a style={{ textDecoration: "none", color: "black", width: "auto", paddingTop: ".5rem", paddingBottom: ".5rem" }} href="#company">Bellen</a>
                                    <a style={{ textDecoration: "none", color: "black", width: "auto", paddingTop: ".5rem", paddingBottom: ".5rem" }} href="#company">Bedrijf bewerken</a>
                                    <a style={{ textDecoration: "none", color: "black", width: "auto", paddingTop: ".5rem", paddingBottom: ".5rem" }} href="#company">Bedrijf opslaan in contacten</a>
                                </section> : ""
                        }
                        <Stack component="article">
                            <Typography variant="p" marginTop={2} marginBottom={1} marginLeft={2}>€ &#9679; Belgisch</Typography>
                            <Typography variant="p" marginBottom={2} marginLeft={2}><strong style={{ color: "green" }}>Open</strong> tot 22:30</Typography>
                            <section style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", paddingBottom: "2rem", borderBottom: "solid .7rem lightgrey" }}>
                                <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <FiPhoneCall style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                                </div>
                                <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <BsMap style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                                </div>
                                <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <AiOutlineExport style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                                </div>
                                <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <AiOutlineInfoCircle style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                                </div>
                            </section>
                        </Stack>
                        <Stack component="article" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                            <Typography variant="p" fontWeight="bold" paddingTop={2}>Schrijf een review</Typography>
                            {clickReview ?
                                <a href="#writeReview" style={{ textDecoration: "none" }}>
                                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: ".2rem", padding: "1rem" }} onClick={() => setClickReview(!clickReview)} >
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                    </div>
                                </a> : ""
                            }
                        </Stack>
                        {
                            !clickReview ?
                                <Stack as="form" noValidate onSubmit={handleSubmit(onSubmit)} position="absolute" top="0" left="0" width="100vw" height="100vh" backgroundColor="white" style={{ zIndex: "1" }} >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="h3" fontSize="1rem" fontWeight="bold" padding="1rem">{detail.data.attributes.name}</Typography>
                                        <ImCross style={{ margin: "1rem", width: "1rem", height: "1rem", color: "black" }} onClick={() => setClickReview(!clickReview)} />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: ".2rem", padding: "0rem 1rem 1rem 1rem" }} onClick={() => setClickReview(!clickReview)} >
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                        <AiFillStar style={{ backgroundColor: "red", color: "white", width: "2.5rem", height: "2.5rem" }} />
                                    </div>
                                    <div style={{ padding: "1rem" }}>
                                        <TextField
                                            id="title"
                                            label="title"
                                            required
                                            error={!!errors?.title}
                                            helperText={errors?.title?.message}
                                            {...register("title", { required: "title is required" })}
                                        />
                                    </div>
                                    <div style={{ padding: "1rem" }}>
                                        <TextField
                                            id="description"
                                            label="description"
                                            error={!!errors?.description}
                                            helperText={errors?.description?.message}
                                            multiline
                                            rows={6}
                                            fullWidth
                                            {...register("description", { required: "Description is required" })}
                                        />
                                    </div>
                                    <div style={{ padding: "1rem" }}>
                                        <TextField
                                            id="stars_amount"
                                            label="stars_amount"
                                            type="number"
                                            required
                                            min={1}
                                            max={5}
                                            error={!!errors?.stars_amount}
                                            helperText={errors?.stars_amount?.message}
                                            {...register("stars_amount", { required: "Stars are required" })}
                                        />
                                    </div>
                                    <div style={{ padding: "1rem", display: "none" }}>
                                        <TextField
                                            id="date"
                                            label="date"
                                            type="date"
                                            value={date}
                                            required
                                            error={!!errors?.date}
                                            helperText={errors?.date?.message}
                                            {...register("date", { required: "Date are required" })}
                                        />
                                    </div>
                                    <div style={{ padding: "1rem", display: "none" }}>
                                        <TextField
                                            id="user"
                                            label="user"
                                            type="user"
                                            value={JSON.parse(localStorage.getItem('id')) === null ? 3 : JSON.parse(localStorage.getItem('id'))}
                                            required
                                            error={!!errors?.date}
                                            helperText={errors?.date?.message}
                                            {...register("date", { required: "Date are required" })}
                                        />
                                    </div>
                                    <div style={{ padding: "1rem" }}>
                                        <LoadingButton loading={mutation.isLoading} loadingIndicator="Adding Review" type="submit" variant="contained" disabled={!isValid}>
                                            Add Review
                                        </LoadingButton>
                                    </div>
                                </Stack> : ""
                        }
                        <Stack component="article" display="flex" justifyContent="space-evenly" alignItems="center" paddingTop={2} flexDirection="row" style={{ paddingBottom: "2rem", borderBottom: "solid .7rem lightgrey" }}>
                            <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <BsCamera style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </div>
                            <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <BsPatchCheck style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </div>
                            <div style={{ backgroundColor: "lightgrey", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <BsBookmark style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </div>
                        </Stack><a id="company" href=".." style={{ display: "none" }} >Review</a>
                        <Stack component="article" padding={2} style={{ borderBottom: "solid .7rem lightgrey" }}>
                            <Typography variant="h3" fontSize="2rem" fontWeight="bold">Bedrijfsinfo</Typography>
                            <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2} style={{ borderBottom: "solid .1rem lightgrey" }} >
                                <Typography variant="p">Bel 0{detail.data.attributes.number}</Typography>
                                <FiPhoneCall style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </Stack>
                            <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2} style={{ borderBottom: "solid .1rem lightgrey" }} >
                                <Typography variant="p">Menufoto's bekijken</Typography>
                                <RiRestaurantLine style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </Stack>
                            <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2} style={{ borderBottom: "solid .1rem lightgrey" }} >
                                <Typography variant="p">Website {detail.data.attributes.website}</Typography>
                                <AiOutlineExport style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </Stack>
                            <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2}>
                                <Typography variant="p">Werk je bij dit bedrijf?</Typography>
                                <BsCheck style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                            </Stack><a id="review" href=".." style={{ display: "none" }} >Review</a>
                        </Stack>
                        <Stack component="article" padding={2} style={{ borderBottom: "solid .7rem lightgrey" }}>
                            <Typography variant="h3" fontSize="2rem" fontWeight="bold">Leave a review</Typography>
                            {
                                clickReview ?
                                    <div style={{ padding: "1rem" }}>
                                        <a href="#writeReview" style={{ textDecoration: "none" }}>
                                            <TextField
                                                id="Clickdescription"
                                                label="Review"
                                                required
                                                error={!!errors?.description}
                                                helperText={errors?.description?.message}
                                                multiline
                                                rows={2}
                                                fullWidth
                                                onClick={() => setClickReview(!clickReview)}
                                            />
                                        </a>
                                    </div> :
                                    <div style={{ padding: "1rem" }}>
                                        <a href="#writeReview" style={{ textDecoration: "none" }}>
                                            <TextField
                                                id="CLickdescription"
                                                label="Review"
                                                required
                                                error={!!errors?.description}
                                                helperText={errors?.description?.message}
                                                multiline
                                                rows={2}
                                                fullWidth
                                                onClick={() => setClickReview(clickReview)}
                                            />
                                        </a>
                                    </div>
                            }

                        </Stack>
                        <Stack component="article" padding={2} style={{ borderBottom: "solid .7rem lightgrey" }}>
                            <Typography variant="h3" fontSize="2rem" fontWeight="bold">Aanbevolen reviews</Typography>
                            {detail.data.attributes.reviews.data.map(review =>
                                <Stack key={review.id} paddingTop={2}>
                                    <Typography variant="h4" fontSize="1.5rem">{review.attributes.title}</Typography>
                                    <p style={{ fontSize: ".8rem", color: "grey" }}>
                                        <AiFillStar /> {review.attributes.stars_amount} &#9679; {review.attributes.date}</p>
                                    <Typography variant="p" fontSize="1rem">{review.attributes.description}</Typography>
                                </Stack>
                            )}
                        </Stack>
                    </>
            }
        </>
    );
}

export default Detail;