import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { addUser } from "../utils/userSlice";
import axios from "../service/axiosInstance";

const Body = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    if (userData) return;

    try {
      const res = await axios.get("/profile/view");
      dispatch(addUser(res.data));
    } catch (err) {
      console.error(err?.message);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
