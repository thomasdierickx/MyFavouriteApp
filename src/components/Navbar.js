
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    return (<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            width="xs"
        >
            <BottomNavigationAction label="Zoeken" to="/" icon={<SearchIcon />} />
            <BottomNavigationAction label="Profiel" to="/profile" icon={<PersonIcon />} />
            <BottomNavigationAction label="Verzamelingen" to="/likes" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Meer" to="/more" icon={<GiHamburgerMenu style={{ height: "2rem", width: "2rem" }} />} />
        </BottomNavigation>
    </Paper>);
}

export default NavBar;