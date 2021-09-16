import "bootstrap/dist/css/bootstrap.min.css";
// import { LandingEventForm } from "./Components/LandingPage/LandingEventForm";
// import { LandingBackgroundVideo } from "./Components/LandingPage/LandingBackgroundVideo";
// import { LandingNavBar } from "./Components/LandingPage/LandingNavBar";
// import { LandingFooter } from "./Components/LandingPage/LandingFooter";
// import { LandingIntro } from "./Components/LandingPage/LandingIntro";
import { ClientProfilePage } from "./Components/ClientProfilePage/ClientProfilePage";

// import { FullEventForm } from "./Components/FullEventForm/FullEventForm";

export const App = () => {
  return (
    <>
      {/* <LandingNavBar />
      <LandingBackgroundVideo />
      <LandingIntro />
      <LandingEventForm />
      <LandingFooter /> */}
      <ClientProfilePage />
      {/* <FullEventForm /> */}
    </>
  );
};
