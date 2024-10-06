"use client";

import { useState } from "react";
import Modal from "@/components/Modal/core";
import Login from "../Login/Core";
import Register from "../Register/Core";

const signInContext = "signin";
const signUpContext = "signup";
const defaultModalContext = signInContext;

const AuthModal = ({ isModalOpen, closeModal }) => {
  const [modalContext, setModalContext] = useState(defaultModalContext);

  const setSignUpContext = () => {
    setModalContext(signUpContext);
  };

  const setSignInContext = () => {
    setModalContext(signInContext);
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          {modalContext === signInContext && (
            <Login
              closeModal={closeModal}
              setSignUpContext={setSignUpContext}
            />
          )}
          {modalContext === signUpContext && (
            <Register
              closeModal={closeModal}
              setSignInContext={setSignInContext}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default AuthModal;
