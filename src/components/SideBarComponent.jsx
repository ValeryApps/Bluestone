import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
// import * as admin from "firebase-admin";


// admin.initializeApp();
const SideBarComponent =  ({ visible, setVisible }) => {

  const {currentUser} = useSelector(state=>state.auth);
 
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      inverted
      icon="labeled"
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width="wide"
      className="bg-info pt-5 "
    >
      <Menu.Item as={Link} to="/">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/about">
        <Icon name="address book" />
        About us
      </Menu.Item>
      <Menu.Item as={Link} to="/services">
        <Icon name="settings" />
        Our Serices
      </Menu.Item>
      <Menu.Item as={Link} to="/pictorials">
        <Icon name="image" />
        Our Pictorials
      </Menu.Item>
      {currentUser?.uid === "ecwjrFC2GoYR43Ii4IHrkkCG7BI2" && <Menu.Item as={Link} to="/messages">
        <Icon name="mail" />
        Messages
      </Menu.Item>}
      
    </Sidebar>
  );
};

export default SideBarComponent;
