import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, DropdownDivider, Menu, Image } from "semantic-ui-react";
import { signOutFromFirebase } from "../firestore/authService";

const SignedInMenu = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const history = useHistory();
  const handleSignOut = async () => {
    try {
      await signOutFromFirebase();
      history.push("/");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <Menu.Item position="right">
      <Image avatar size="mini" src={"/assets/user.png"} />
      <Dropdown pointing="top right" text={currentUser?.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-event"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            as={Link}
            to={`/profile/${currentUser?.id}`}
            text="Profile Settings"
            icon="user"
          />
          <Dropdown.Item
            text="Account Settings"
            icon="settings"
            as={Link}
            to="/account"
          />
          <DropdownDivider />
          <Dropdown.Item text="Logout" icon="power" onClick={handleSignOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
