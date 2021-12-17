import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./features/sign-in/SignIn";
import Movies from "./pages/movies/Movies";
import BuyPage from "./pages/buy/Buy";
import Payment from "./pages/payment/Payment";
import ManagerFilm from "./pages/manager-film/ManagerFilm";

import Profile from "./features/profile/Profile";
import FilmDetail from "./features/film-detail/FilmDetail";
import SeatMap from "./features/seatMap/SeatMap";
import ImportOtp from "./features/sign-in/importOTP/ImportOtp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/login/import-otp" element={<ImportOtp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/detail-movies" element={<FilmDetail />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/select-seat" element={<SeatMap />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<ManagerFilm />} />
      </Routes>
    </Router>
  );
}

export default App;
