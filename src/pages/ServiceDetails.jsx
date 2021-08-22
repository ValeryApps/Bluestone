import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Segment, Header, Image } from "semantic-ui-react";
import LoadingComponent from "../components/LoadingComponent";
import NavMenu from "../components/NavMenu";
import { listentToServiceFromFirestore } from "../firestore/firestoreService";
import { useFirestsoreDoc } from "../firestore/hooks/useFirestoreDoc";
import { listenToServicesAction } from "../store/data_reducers/servicesReducer";

const ServiceDetails = ({ match }) => {
  const { loading, error } = useSelector((state) => state.async);
  const service = useSelector((state) =>
    state.services.services.find((e) => e?.id === match?.params?.id)
  );
  const dispatch = useDispatch();
  useFirestsoreDoc({
    query: () => listentToServiceFromFirestore(match.params.id),
    data: (service) => dispatch(listenToServicesAction([service])),
    deps: [match.params.id, dispatch],
  });
  if (loading || (!service && !error)) {
    return <LoadingComponent />;
  }

  if (error) {
    return <Redirect to="/error-page" />;
  }
  return (
    <>
      <NavMenu />
      <Container>
        <Row>
          <Col>
            <Segment>
              <Header content={service.title} />
              <Image src={service.imageUrl} />
              {service.description}
            </Segment>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetails;
