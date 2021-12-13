import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./features/sign-in/SignIn";
import Movies from "./pages/movies/Movies";
import Buy from "./pages/buy/Buy";
import ThanhToan from "./pages/thanh-toan/ThanhToan";
import QLPhimPage from "./pages/ql-phim/QLPhimPage";
import { QLAddPhimPage } from "./pages/ql-phim/QLAddPhimPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/thanhtoan" element={<ThanhToan />} />
        <Route path="/admin" element={<QLPhimPage />} />
        <Route path="/add-phim" element={<QLAddPhimPage />} />
      </Routes>
    </Router>
  );
}

export default App;
