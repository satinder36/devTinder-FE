import { useEffect } from "react";
import axios from "../../service/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addFeed } from "../../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store?.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      let res = await axios.get("/feed");
      console.log("res", res?.data?.data);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err?.response?.data?.message);
    }
  };

  console.log("feed", feed);
  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
