import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import BackButton from "./BackButtonWhite";
import { useQuery } from 'react-query';

// Icons
import { BsBookmark, BsShareFill, BsMap, BsCamera, BsPatchCheck, BsCheck } from 'react-icons/bs';
import { FiMoreVertical, FiPhoneCall } from 'react-icons/fi';
import { useState } from "react";
import { AiOutlineExport, AiOutlineInfoCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiRestaurantLine } from 'react-icons/ri';

const Detail = ({ datax }) => {
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery('restaurant', () => fetch(`http://localhost:1337/api/restaurants/${id}/?populate=*`).then(r => r.json()));

    console.log(data);
    const [click, setClick] = useState(true);

    // ${data.data.attributes.images.data[0].attributes.formats.small.url}

    return (
        <>
            <article style={{ backgroundImage: `url(${data.data.attributes.images.data[0].attributes.formats.small.url})`, height: "30vh", backgroundSize: "cover" }}>
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
                {isLoading && <CircularProgress />}
                {isError && <Alert severity="error">Something went wrong</Alert>}
                <Stack component="section">
                    <Typography variant="h2" paddingLeft={2} paddingTop={4} color="white" fontSize="3rem" fontWeight="bold">{data.data.attributes.name}</Typography>
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
                <p>REVIEW COMPONENTS INVOEGEN</p>
            </Stack>
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
            </Stack><a id="company"></a>
            <Stack component="article" padding={2} style={{ borderBottom: "solid .7rem lightgrey" }}>
                <Typography variant="h3" fontSize="2rem" fontWeight="bold">Bedrijfsinfo</Typography>
                <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2} style={{ borderBottom: "solid .1rem lightgrey" }} >
                    <Typography variant="p">Bel 0{data.data.attributes.number}</Typography>
                    <FiPhoneCall style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                </Stack>
                <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2} style={{ borderBottom: "solid .1rem lightgrey" }} >
                    <Typography variant="p">Menufoto's bekijken</Typography>
                    <RiRestaurantLine style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                </Stack>
                <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2} style={{ borderBottom: "solid .1rem lightgrey" }} >
                    <Typography variant="p">Website {data.data.attributes.website}</Typography>
                    <AiOutlineExport style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                </Stack>
                <Stack component="section" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" paddingTop={2} paddingBottom={2}>
                    <Typography variant="p">Werk je bij dit bedrijf?</Typography>
                    <BsCheck style={{ color: "black", width: "1.5rem", height: "1.5rem" }} />
                </Stack><a id="review"></a>
            </Stack>
            <Stack component="article" padding={2} style={{ borderBottom: "solid .7rem lightgrey" }}>
                <Typography variant="h3" fontSize="2rem" fontWeight="bold">Leave a review</Typography>
                <p>--REVIEW FORM--</p>
            </Stack>
            <Stack component="article" padding={2} style={{ borderBottom: "solid .7rem lightgrey" }}>
                <Typography variant="h3" fontSize="2rem" fontWeight="bold">Aanbevolen reviews</Typography>
                {data.data.attributes.reviews.data.map(review =>
                    <Stack key={review.id} paddingTop={2}>
                        <Typography variant="h4" fontSize="1.5rem">{review.attributes.title}</Typography>
                        <p style={{ fontSize: ".8rem", color: "grey" }}>
                            <AiFillStar /> {review.attributes.stars_amount} &#9679; {review.attributes.date}</p>
                        <Typography variant="p" fontSize="1rem">{review.attributes.description}</Typography>
                    </Stack>
                )}
            </Stack>
        </>
    );
}

export default Detail;