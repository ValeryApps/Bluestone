import { Form, Formik } from "formik";
import React from "react";
import { Button, Label } from "semantic-ui-react";
import CustomeTextInput from "../common/form/CustomeTextInput";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ModalWrapper } from "../common/modals/modalWrapper";
import { closeModal } from "../common/modals/modalReducer";
import { useHistory } from "react-router";
import { signInWithEmail } from "../firestore/authService";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });
  return (
    <ModalWrapper size="mini" header="Login">
      <Formik
        initialValues={user}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await signInWithEmail(values);
            setSubmitting(false);
            history.push("/");
            dispatch(closeModal());
          } catch (error) {
            setErrors({ auth: "Wrong email or password" });
            setSubmitting(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className="ui form">
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
                basic
                style={{ marginBottom: 10 }}
              />
            )}
            <Button
              type="submit"
              floated="right"
              style={{ background: "#C21725", color: "#fff" }}
              content="Submit"
              disabled={!dirty || !isValid || isSubmitting}
              loading={isSubmitting}
            />
            <Button
              onClick={() => {
                dispatch(closeModal());
              }}
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

export default Login;
