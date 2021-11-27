import NotFound from "./Component/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import Booking from "./Booking/Booking/Booking";
import Login from "./Login/Login/Login";
import Header from "../src/Component/Shared/Header/Header";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import ManageBooking from "./Component/Home/Home/ManageBookings/ManageBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/managebooking">
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
