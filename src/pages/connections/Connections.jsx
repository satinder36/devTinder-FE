import { useEffect } from "react";
import axios from "../../service/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addConnections } from "../../utils/connectionSlice";
import { ROUTES } from "../../utils/constants";

const Connections = () => {
  const connections = useSelector((store) => store?.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      let res = await axios.get("/user/connections");
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections?.length == 0)
    return <div> Such Empty Much Wow</div>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto justify-between"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <Link to={`${ROUTES.CHAT}/${_id}`} className="self-center">
              <button className="btn btn-primary">Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Connections;
