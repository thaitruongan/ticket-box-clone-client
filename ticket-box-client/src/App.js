import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./features/sign-in/SignIn";
import Movies from "./pages/movies/Movies";
import BuyPage from "./pages/buy/Buy";
import Payment from "./pages/payment/Payment";
import ManagerFilm from "./pages/manager-film/ManagerFilm";

import ListQl from "./features/manager-film/list/ListQl";

import Profile from "./features/profile/Profile";
import FilmDetail from "./features/film-detail/FilmDetail";
import SeatMap from "./features/seatMap/SeatMap";
import ImportOtp from "./features/sign-in/importOTP/ImportOtp";
import { useEffect } from "react";
import UserAPI from "./api/userAPI";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "./app/userSlice";

function App() {
  const dispatch = useDispatch();
  const checkToken = localStorage.getItem("token");
  //check token
  useEffect(() => {
    const checkTokenFetchUser = async () => {
      if (checkToken) {
        try {
          const response = await UserAPI.checkToken(checkToken);
          const currentUser = {token: checkToken, user: response.data}
          dispatch(addCurrentUser(currentUser))
        } catch (error) {
          localStorage.setItem("token", "");
          console.log(localStorage.getItem("token"))
          console.log(error)
        }
      }
    };

    checkTokenFetchUser();
  },[checkToken, dispatch]);

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
        {/* authentication for log */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<ManagerFilm />} />
        <Route path="/film" element={<ListQl/>}/>
      </Routes>
    </Router>
  );
}

export default App;
