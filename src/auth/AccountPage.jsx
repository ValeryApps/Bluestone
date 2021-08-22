import { Form, Formik } from "formik";
import React from "react";
// import { useSelector } from "react-redux";
import { Button, Header, Label, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import CustomeTextInput from "../common/form/CustomeTextInput";
import NavMenu from "../components/NavMenu";
import { updateUserPassword } from "../firestore/authService";

const AccountPage = () => {
  // const { currentUser } = useSelector((state) => state.auth);
  return (
    <>
      <NavMenu />
      <Segment className="col-md-4 mx-auto">
        <Header
          dividing
          content="Change your password"
          size="large"
          textAlign="center"
        />
        <Formik
          initialValues={{
            newPassword1: "",
            newPassword2: "",
          }}
          validationSchema={Yup.object({
            newPassword1: Yup.string().required("Password is required"),
            newPassword2: Yup.string()
              .required()
              .oneOf([Yup.ref("newPassword1"), null], "password do not match"),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await updateUserPassword(values);
            } catch (error) {
              setErrors({ auth: error.message });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, isValid, dirty }) => (
            <Form className="form ui">
              <CustomeTextInput
                name="newPassword1"
                placeholder="New Password"
                type="password"
              />
              <CustomeTextInput
                name="newPassword2"
                placeholder="Confirm Password"
                type="password"
              />
              {errors.auth && (
                <Label
                  basic
                  color="red"
                  content={errors.auth}
                  style={{ marginBottom: "10px" }}
                />
              )}
              <Button
                positive
                size="large"
                content="Update Password"
                loading={isSubmitting}
                disabled={isSubmitting || !isValid || !dirty}
                fluid
              />
            </Form>
          )}
        </Formik>
      </Segment>
    </>
  );
};

export default AccountPage;
