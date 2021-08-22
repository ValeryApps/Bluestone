import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../common/modals/modalReducer";

const SignedOutMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        basic
        content="Login"
        onClick={() => {
          dispatch(openModal({ modalType: "Login" }));
        }}
      />
      <Button
        basic
        content="Register"
        style={{ marginLeft: "0.5rem" }}
        onClick={() => {
          dispatch(openModal({ modalType: "Register" }));
        }}
      />
    </>
  );
};

export default SignedOutMenu;
