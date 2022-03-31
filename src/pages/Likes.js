import more from '../components/more.module.css';
import useFetch from '../hooks/useFetch';

const Likes = () => {
    console.log("http://localhost:1337/api/users?username=Help")

    // , isloading, error
    const { data: users } = useFetch("http://localhost:1337/api/restaurants?populate=*");
    console.log(users);
    return (
        <>
            <header className={more.header}>
                <h2 className={more.h2}>Likes</h2>
            </header>
        </>
    );
}

export default Likes;