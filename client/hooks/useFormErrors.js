import { useState } from "react";

const useFormErrors = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorsMessages, setErrorsMessages] = useState([]);

  const resetErrors = () => {
    setErrorMessage("");
    setErrorsMessages([]);
  };

  const setError = (msg) => {
    setErrorMessage(msg);
  };

  const setMultipleErrors = (errors) => {
    setErrorsMessages(errors);
  };

  return {
    errorMessage,
    errorsMessages,
    setError,
    setMultipleErrors,
    resetErrors,
  };
};

export default useFormErrors;