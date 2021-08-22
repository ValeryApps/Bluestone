import React, { useState } from "react";
import { Header, Sidebar } from "semantic-ui-react";
import NavMenu from "../components/NavMenu";
import SideBarComponent from "../components/SideBarComponent";

const ServicePage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NavMenu visible={visible} setVisible={setVisible} />
      <Sidebar.Pushable>
        <SideBarComponent visible={visible} setVisible={setVisible} />
        <Sidebar.Pusher dimmed={visible}>
          <Header content="Service Page" textAlign="center" />
          <div style={{ height: 600 }}></div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default ServicePage;
