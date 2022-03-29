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

function App() {


  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="likes" element={<Likes />} />
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
