import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SupplierProfilePage } from "./Components/SupplierProfilePage/SupplierProfilePage";

import { LandingBackgroundVideo } from "./Components/LandingPage/LandingBackgroundVideo";
import { LandingNavBar } from "./Components/LandingPage/LandingNavBar";
import { LandingFooter } from "./Components/LandingPage/LandingFooter";
import { ClientProfilePage } from "./Components/ClientProfilePage/ClientProfilePage";
import { Venue } from "./Components/FullEventForms/Venue";
import { Login } from "./Components/Login/Login";
import EventForm from "./Components/FullEventForms/EventForm";
import Register from "./Components/Login/Register";

export const App = () => {
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
          <Route path="/client" component={ClientProfilePage} />
          <Route
            exact
            path="/createevent"
            render={(props) => (
              <>
                <LandingBackgroundVideo />
                <LandingNavBar />
                <Venue />
                <LandingFooter />
              </>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <>
                <LandingBackgroundVideo />
                <LandingNavBar />
                <Login />
                <LandingFooter />
              </>
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <>
                <LandingBackgroundVideo />
                <LandingNavBar />
                <Register />
                <LandingFooter />
              </>
            )}
          />
        </Switch>
      </>
    </Router>
  );
};
export default App;
