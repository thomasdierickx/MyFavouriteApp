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
import Shopping from './pages/Shopping';
import Kappers from './pages/Kappers';
import Bars from './pages/Bars';
import TakeOut from './pages/TakeOut';
import Reservation from './pages/Reservation';
import TankStations from './pages/TankStations';
import Detail from './pages/Detail';
import Outgoing from './pages/Outgoing';
import LoginRedirect from './pages/LoginRedirect';
import Login from './pages/Login';

function App() {


  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route exact path="/connect/:providerName/redirect" element={<LoginRedirect />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="likes" element={<Likes />} />
          <Route path="more" element={<More />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="Winkelen" element={<Shopping />} />
          <Route path="kappers" element={<Kappers />} />
          <Route path="bars" element={<Bars />} />
          <Route path="Uitgaansleven" element={<Outgoing />} />
          <Route path="takeout" element={<TakeOut />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="tankstations" element={<TankStations />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
