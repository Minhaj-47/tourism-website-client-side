import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import AdminDashboard from "./component/Admin/AdminDashBoard/AdminDashBoard";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import MyOrders from "./component/MyOrders/MyOrders";
import NotFound from "./component/NotFound/NotFound";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

import AuthProvider from "./Context/AuthProvider";

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
            <PrivateRoute path="/service/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
