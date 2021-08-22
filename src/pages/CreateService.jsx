import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Segment, Button, Container, Header } from "semantic-ui-react";
import * as yup from "yup";
import CustomeTextInput from "../common/form/CustomeTextInput";
import LoadingComponent from "../components/LoadingComponent";
import NavMenu from "../components/NavMenu";
import {
  addServiceToFirebase,
  listentToServiceFromFirestore,
  upateserviceInFirebase,
} from "../firestore/firestoreService";
import { useFirestsoreDoc } from "../firestore/hooks/useFirestoreDoc";
import { listenToServicesAction } from "../store/data_reducers/servicesReducer";

const CreateService = ({ match, history }) => {
  const service = useSelector((state) =>
    state.services.services.find((x) => (x.id = match.params.id))
  );
  const { loading, error } = useSelector((state) => state.async);
  const dispatch = useDispatch();
  useFirestsoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listentToServiceFromFirestore(match.params.id),
    data: () => dispatch(listenToServicesAction([service])),
    deps: [match.params.id, dispatch],
  });

  const validationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  });
  const initialValus = service ?? {
    title: "",
    description: "",
  };
  if (loading || (!service && error)) {
    return <LoadingComponent />;
  }

  return (
    <>
      <NavMenu />
      <Container>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Segment clearing>
              <Header content="Add New Service" textAlign="center" />
              <Formik
                initialValues={initialValus}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    service
                      ? await upateserviceInFirebase(values)
                      : await addServiceToFirebase(values);
                    setSubmitting(false);
                    history.push("/");
                  } catch (error) {
                    toast.error(error.message);
                    setSubmitting(false);
                  }
                }}
                validationSchema={validationSchema}
              >
                {({ isSubmitting, isValid, dirty }) => (
                  <Form className="ui form">
                    <CustomeTextInput name="title" placeholder="Title" />
                    <CustomeTextInput
                      name="description"
                      placeholder="Description"
                    />
                    <Button content="cancel" type="button" floated="right" />
                    <Button
                      disabled={!isValid || !dirty || isSubmitting}
                      loading={isSubmitting}
                      content="Submit"
                      type="submit"
                      floated="right"
                      primary
                    />
                  </Form>
                )}
              </Formik>
            </Segment>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateService;
