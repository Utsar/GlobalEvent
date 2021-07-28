import './App.css';
import { EventForm } from './Components/LandingPage/EventForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import { LandingPageVideo } from './Components/LandingPage/LandingPageVideo';
import { LandingNavBar } from './Components/NavBar/LandingNavBar';
import { LandingFooter } from './Components/LandingPage/LandingFooter';


export const App = () => {
  return (
    <>
    <LandingNavBar/>
      <LandingPageVideo/>
      <EventForm />
      <LandingFooter/>
    </>
  );
}


