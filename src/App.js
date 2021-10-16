import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SupplierProfilePage } from "./Components/SupplierProfilePage/SupplierProfilePage";

import { LandingBackgroundVideo } from "./Components/LandingPage/LandingBackgroundVideo";
import { LandingNavBar } from "./Components/LandingPage/LandingNavBar";
import { LandingFooter } from "./Components/LandingPage/LandingFooter";
import { ClientProfilePage } from "./Components/ClientProfilePage/ClientProfilePage";

import { Login } from "./Components/Login/Login";
import EventForm from "./Components/FullEventForms/EventForm";
import Register from "./Components/Login/Register";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Auctions } from "./Components/Auctions/Auctions";

export const App = () => {
  const { client } = useContext(AuthContext);
  return (
    <Router>
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <LandingBackgroundVideo />
                <LandingNavBar />
                <EventForm />
                <LandingFooter />
              </>
            )}
          />
          <Route path="/supplier" component={SupplierProfilePage} />
          <Route path="/client">
            <ClientProfilePage />
          </Route>

          <Route exact path="/login">
            {client ? <Redirect to="/client" /> : <Login />}
          </Route>

          <Route exact path="/register">
            {client ? <Redirect to="/client" /> : <Register />}
          </Route>
          <Route exact path="/auctions">
            <Auctions />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
export default App;
