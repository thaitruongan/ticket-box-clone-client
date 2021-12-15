import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./features/sign-in/SignIn";
import Movies from "./pages/movies/Movies";
import Buy from "./pages/buy/Buy";
import ThanhToan from "./pages/thanh-toan/ThanhToan";
import QLPhimPage from "./pages/ql-phim/QLPhimPage";
import Profile from "./features/profile/Profile";
import FilmDetail from "./features/film-detail/FilmDetail";
import SeatMap from "./features/seatMap/SeatMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/detail-movies" element={<FilmDetail />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/select-seat" element={<SeatMap />} />
        <Route path="/thanhtoan" element={<ThanhToan />} />
        <Route path="/admin" element={<QLPhimPage />} />
      </Routes>
    </Router>
  );
}

export default App;
