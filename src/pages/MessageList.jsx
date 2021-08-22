import React, {useState} from "react";
import { useFirestoreCollection } from "../firestore/hooks/useFirestoreCollection";
import { readMessages } from "../firestore/firestoreService";
import { useDispatch, useSelector } from "react-redux";
import { readMessageAction } from "../store/data_reducers/messageReducer";
import { Container, Sidebar, Header } from "semantic-ui-react";
import { Table } from "react-bootstrap";
import NavMenu from '../components/NavMenu'
import SideBarComponent from "../components/SideBarComponent";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const MessageList = () => {
  const { messages } = useSelector(state => state.messages);
  const [visible, setVisible]=useState(false)

  const dispatch = useDispatch();
  useFirestoreCollection({
    query: () => readMessages(),
    data: message => dispatch(readMessageAction(message)),
    deps: [dispatch]
  });
  let num = 1;
  return (
    <>
      <NavMenu setVisible={setVisible} visible={visible}/>
      <Sidebar.Pushable>
        <SideBarComponent visible={visible} setVisible={setVisible}/>
        <Sidebar.Pusher dimmed={visible}>
    <Container>
      <Header content="Messages" textAlign="center" as="h1" color="green"/>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(message=>(
            <tr  key ={message.id}>
              
               <td>{num++}</td>
               <td>{message.name}</td>
               <td>{message.email}</td>
               <td>{message.message}</td>
               <td><Link to="/">Read More</Link></td>
            
            </tr>
            
          ))}
        </tbody>
      </Table>
    </Container>
      <Footer />
    </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default MessageList;
