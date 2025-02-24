import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Login from "./pages/auth/Login";
import Profile from "./pages/user/Profile";
import appStore from "./utils/appStore";
import Feed from "./pages/feed/Feed";
import Connections from "./pages/connections/Connections";
import { ROUTES } from "./utils/constants";
import Requests from "./pages/requests/Requests";
import Premium from "./pages/payments/Premium";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path={ROUTES.HOME} element={<Body />}>
              <Route path={ROUTES.HOME} element={<Feed />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.CONNECTIONS} element={<Connections />} />
              <Route path={ROUTES.REQUESTS} element={<Requests />} />
              <Route path={ROUTES.PREMIUM} element={<Premium />} />
              <Route path={`${ROUTES.CHAT}/:targetUserId`} element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
