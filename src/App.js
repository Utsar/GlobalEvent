import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SupplierProfilePage } from "./Components/SupplierProfilePage/SupplierProfilePage";
import { LandingEventForm } from "./Components/LandingPage/LandingEventForm";
import { LandingBackgroundVideo } from "./Components/LandingPage/LandingBackgroundVideo";
import { LandingNavBar } from "./Components/LandingPage/LandingNavBar";
import { LandingFooter } from "./Components/LandingPage/LandingFooter";
import { LandingIntro } from "./Components/LandingPage/LandingIntro";
import { ClientProfilePage } from "./Components/ClientProfilePage/ClientProfilePage";

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
                <LandingIntro />
                <LandingEventForm />
                <LandingFooter />
              </>
            )}
          />
          <Route path="/supplier" component={SupplierProfilePage} />
          <Route path="/client" component={ClientProfilePage} />
        </Switch>
      </>
    </Router>
  );
};
export default App;
