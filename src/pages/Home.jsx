import React, { useState } from "react";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-scroll";
import { Image, Sidebar, Icon, Segment } from "semantic-ui-react";
import SignedOutMenu from "../components/SignedOutMenu";
import SignedInMenu from "../components/SignedInMenu";
import { useDispatch, useSelector } from "react-redux";
import { listenToServicesFromFirestore } from "../firestore/firestoreService";
import { listenToServicesAction } from "../store/data_reducers/servicesReducer";
import { useFirestoreCollection } from "../firestore/hooks/useFirestoreCollection";
import SideBarComponent from "../components/SideBarComponent";

const Home = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  useFirestoreCollection({
    query: () => listenToServicesFromFirestore(),
    data: (services) => dispatch(listenToServicesAction(services)),
    deps: [dispatch],
  });
  return (
    <>
      <nav
        id="menu"
        className="navbar navbar-expand-sm navbar-light bg-light fixed-top"
      >
        <div className="container">
          <Icon
            onClick={() => setVisible(!visible)}
            name={visible ? "times" : "sidebar"}
            size="huge"
            className="bg-transparent"
            style={{ cursor: "pointer" }}
            color={visible ? "red" : "teal"}
          />

          <Link
            className="navbar-brand page-scroll"
            to="/"
            spy
            smooth
            duration={1000}
            style={{ cursor: "pointer" }}
            exact="true"
          >
            <Image src="/bluestone/bluestone6.png" style={{ width: "80px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="header"
                  className="page-scroll nav-link"
                  spy
                  smooth
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="about"
                  className="page-scroll nav-link"
                  spy
                  smooth
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="contact"
                  className="page-scroll nav-link"
                  spy
                  smooth
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
              </li>
              <li>{currentUser ? <SignedInMenu /> : <SignedOutMenu />}</li>
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar.Pushable as={Segment}>
        <SideBarComponent visible={visible} setVisible={setVisible} />
        <Sidebar.Pusher dimmed={visible}>
          <Header />
          <About />
          {/* <Services /> */}
          {/* <Portfolio /> */}
          {/* <Team /> */}
          <Contacts />
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Home;
