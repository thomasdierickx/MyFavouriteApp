import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";

const Restaurants = () => {
    return (
        <>
            <BackButton />
            <p>DIT IS DE RESTAURANT PAGINA</p>
            <Outlet />
        </>
    );
}

export default Restaurants;