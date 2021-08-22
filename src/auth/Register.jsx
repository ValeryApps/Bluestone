import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Button, Label } from "semantic-ui-react";
import * as Yup from "yup";
import CustomeTextInput from "../common/form/CustomeTextInput";
// import { register } from "../api/auth";
import { ModalWrapper } from "../common/modals/modalWrapper";
import { useDispatch } from "react-redux";
import { closeModal } from "../common/modals/modalReducer";
import { registerInFirebase } from "../firestore/authService";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const user = {
    displayName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    displayName: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return (
    <ModalWrapper size="mini" header="Register">
      <Formik
        initialValues={user}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await registerInFirebase(values);
            setSubmitting(false);
            toast.success("Registration successful");
            dispatch(closeModal());
            history.push("/login");
          } catch (error) {
            setErrors({ auth: error.message });
            setSubmitting(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form className="ui form">
            <CustomeTextInput name="displayName" placeholder="displayName" />
            <CustomeTextInput name="email" placeholder="email" />
            <CustomeTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            {errors.auth && (
              <Label
                content={errors.auth}
                color="red"
                style={{ marginBottom: 10 }}
                basic
              />
            )}
            <Button
              disabled={!isValid || isSubmitting || !dirty}
              loading={isSubmitting}
              type="submit"
              floated="right"
              content="Submit"
              style={{ background: "#C21725", color: "#fff" }}
            />
            <Button
              onClick={() => dispatch(closeModal())}
              floated="right"
              basic
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default Register;
