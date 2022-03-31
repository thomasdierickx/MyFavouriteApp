import { Box } from '@mui/material';
import './App.css';

// ROUTER
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Likes from './pages/Likes';
import More from './pages/More';
import Restaurants from './pages/Restaurants';
import Coffee from './pages/coffee';
import Kappers from './pages/Kappers';
import Bars from './pages/Bars';
import Delivery from './pages/Delivery';
import TakeOut from './pages/TakeOut';
import Reservation from './pages/Reservation';
import TankStations from './pages/TankStations';

function App() {


  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="likes" element={<Likes />} />
          <Route path="more" element={<More />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="kappers" element={<Kappers />} />
          <Route path="bars" element={<Bars />} />
          <Route path="Delivery" element={<Delivery />} />
          <Route path="takeout" element={<TakeOut />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="tankstations" element={<TankStations />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
