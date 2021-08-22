import { Route } from "react-router";
import ServiceDetails from "./pages/ServiceDetails";
import Home from "./pages/Home";
import CreateService from "./pages/CreateService";
import AccountPage from "./auth/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PictorialPage from "./pages/PictorialPage";
import MessageList from "./pages/MessageList";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/services/:id" component={ServiceDetails} />
      <Route path="/create-service" component={CreateService} />
      <Route path="/account" component={AccountPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicePage} />
      <Route path="/pictorials" component={PictorialPage} />
      <Route path="/messages" component={MessageList} />
    </>
  );
}

export default App;
