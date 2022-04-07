import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft style={{ height: "1.5rem", width: "1.5rem", color: "white" }} />
        </Button>
    );
}

export default BackButton;