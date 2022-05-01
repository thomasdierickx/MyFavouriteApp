import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const LikeButton = ({ restaurant_id }) => {

    const queryClient = useQueryClient();

    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));

    let user;

    if (isLogged) {
        user = localStorage.getItem('id');
        console.log(user);
    } else if (!isLogged) {
        user = 3;
        console.log(user);
    }

    const defaultValues = {
        restaurant_id: restaurant_id,
        user: user,
    }

    const { handleSubmit, reset, formState: { isValid } } = useForm({ mode: "all", defaultValues })

    const postLike = async (like) => {
        return await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: like })
        }).then(r => r.json())
    }

    const mutation = useMutation(postLike, {
        onSuccess: () => {
            console.log("Like added");
            queryClient.invalidateQueries("likes");
            reset();
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
    }

    return (
        <>
            <Stack as="form" noValidate onSubmit={handleSubmit(onSubmit)} >
                <LoadingButton loading={mutation.isLoading} loadingIndicator="Adding Like" type="submit" variant="outlined" disabled={!isValid} sx={{ border: "none", bgcolor: "transparant" }} >
                    <BsBookmark style={{ height: "1.5rem", width: "1.5rem", color: "white" }} />
                </LoadingButton>
            </Stack>
        </>
    );
}

export default LikeButton;