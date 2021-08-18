import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import BookingList from "./components/ClientPages/BookingList/BookingList";
import Booking from "./components/ClientPages/BookingPage/Booking";
import Review from './components/ClientPages/Review/Review';
import OrderList from "./components/Admin/OrderList/OrderList";
import AddServices from "./components/Admin/AddServices/AddServices";
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Route path="/booking_list">
          <BookingList />
        </Route>
        <Route path="/booking">
          <Booking/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/orderList">
          <OrderList/>
        </Route>
        <Route path="/addService">
          <AddServices/>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
