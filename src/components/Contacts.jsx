import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import CustomeTextInput from "../common/form/CustomeTextInput";
import CustomTextArea from "../common/form/CustomTextAreaInput";
import * as yup from "yup";
import { Button } from "semantic-ui-react";
import { sendMessage } from "../firestore/firestoreService";
import { toast } from "react-toastify";

const Contacts = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: ""
              }}
              validationSchema={yup.object({
                name: yup.string().required(),
                email: yup
                  .string()
                  .required()
                  .email(),
                message: yup.string().required()
              })}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await sendMessage(values);
                  setSubmitting(false);
                } catch (error) {
                  setSubmitting(false);
                  toast.error(error.message);
                }
              }}
            >
              {({ dirty, isSubmitting, isValid }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <CustomeTextInput placeholder="Name" name="name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <CustomeTextInput name="email" placeholder="Email" />
                    </div>
                  </div>

                  <CustomTextArea
                    name="message"
                    placeholder="Message"
                  ></CustomTextArea>

                  <div id="success"></div>
                  <Button
                    disabled={!dirty || !isValid || isSubmitting}
                    loading={isSubmitting}
                    type="submit"
                    className="btn btn-custom btn-lg text-white"
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h4>Contact Info</h4>
              <p>
                <span>Address</span>4321 Monrovia St,
                <br /> Liberia, CA 12345
              </p>
            </div>
            <div className="contact-item">
              <div>
                <span>Phone</span> <p className="phone">+231 0770 452 647</p>
              </div>
            </div>
            <div className="contact-item">
              <p>
                <span>Email</span> bdcig@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
