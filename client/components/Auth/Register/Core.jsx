import { useState } from "react";
import { useRouter } from "next/navigation";
import useFormErrors from "@/hooks/useFormErrors";
import { useUser } from "@/app/userContext";
import InputField from "@/components/InputField/Core";
import SubmitButton from "@/components/SubmitButton/Core";
import { HTTP_EXCEPTIONS } from "@/constants/http-exceptions-code";

import signIn from "@/static/images/signin.png";
import ErrorMessage from "@/components/FormErrors/ErrorMessage/Core";
import ManyErrorsMessage from "@/components/FormErrors/ManyErrorsMessage/Core";

const Register = ({ closeModal, setSignInContext }) => {
  const { login } = useUser();
  const { refresh } = useRouter();

  const [isRegistering, setIsRegistering] = useState(false);

  const { errorMessage, errorsMessages, setError, setMultipleErrors, resetErrors } =
    useFormErrors();

  const handleSubmit = async (e) => {
    e.preventDefault();

    resetErrors();

    setIsRegistering(true);

    const formData = new FormData(e.target);
    const name = formData.get("user-name");
    const email = formData.get("user-email");
    const password = formData.get("user-password");

    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.status === HTTP_EXCEPTIONS.BAD_REQUEST.code) {
      const {
        data: { errors, msg },
      } = data;

    setIsRegistering(false);


      if (errors) {
        setMultipleErrors(errors);
        return;
      }

      setError(msg);
      return;
    }

    login(data);
    setSignInContext();
    setIsRegistering(false);
    closeModal();
    refresh();
  };

  return (
    <div className="p-20 items-center">
      <div className="flex gap-8 items-center">
        <img src={signIn.src} alt="Woman pointing top-right" className="hidden lg:block" />
        <span>
          <p className="text-[70px]">
            <b>Sign Up</b>
          </p>
          <p className="text-primary text-[32px]">
            to start creating your list
          </p>
        </span>
      </div>

      <div className=" flex justify-center">
        <form action="POST" className="lg:w-1/3 space-y-4" onSubmit={handleSubmit}>
          <InputField id="user-name" label="Name:" type="text" required />
          <InputField id="user-email" label="Email:" type="email" required />
          <InputField
            id="user-password"
            label="Password:"
            type="password"
            minLength="6"
            required
          />
          <div>
            <SubmitButton
            text={isRegistering ? "Creating account..." : "Register now"}
            className="w-full mt-8"
            disabled={isRegistering}
          />
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="text-center text-[14px] bold"
              onClick={setSignInContext}
            >
              <u>Already registered</u>
            </button>
          </div>

          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

          {errorsMessages && <ManyErrorsMessage errors={errorsMessages} />}
        </form>
      </div>
    </div>
  );
};

export default Register;
