import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/userContext";
import Image from "next/image";
import InputField from "@/components/InputField/Core";
import SubmitButton from "@/components/SubmitButton/Core";
import { HTTP_EXCEPTIONS } from "@/constants/http-exceptions-code";

import signIn from "@/static/images/signin.png";
import useFormErrors from "@/hooks/useFormErrors";
import ErrorMessage from "@/components/FormErrors/ErrorMessage/Core";
import ManyErrorsMessage from "@/components/FormErrors/ManyErrorsMessage/Core";

const Login = ({ closeModal, setSignUpContext }) => {
  const { login } = useUser();
  const { refresh } = useRouter();

  const [isSigningIn, setIsSigningIn] = useState(false);

  const { errorMessage, errorsMessages, setError, setMultipleErrors, resetErrors } =
    useFormErrors();

  const handleSubmit = async (e) => {
    e.preventDefault();

    resetErrors();

    setIsSigningIn(true);

    const formData = new FormData(e.target);
    const email = formData.get("user-email");
    const password = formData.get("user-password");

    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === HTTP_EXCEPTIONS.BAD_REQUEST.code) {
      const {
        data: { errors, msg },
      } = data;
      
      setIsSigningIn(false);

      if (errors) {
        setMultipleErrors(errors);
        return;
      }

      setError(msg);
      return;
    }

    login(data);
    setIsSigningIn(false);
    closeModal();
    refresh();
  };

  return (
    <div className="p-20 items-center">
      <div className="flex gap-8 items-center">
        <Image src={signIn.src} alt="Woman pointing top-right" className="hidden lg:block" width={1}
        height={1}/>
        <span>
          <p className="text-[70px]">
            <b>Sign In</b>
          </p>
          <p className="text-primary text-[32px]">to access your list</p>
        </span>
      </div>

      <div className="mt-8 flex justify-center">
        <form action="POST" className="lg:w-1/3 space-y-4" onSubmit={handleSubmit}>
          <InputField id="user-email" label="Email:" type="email" required />
          <InputField
            id="user-password"
            label="Password:"
            type="password"
            required
          />
          <div>
            <SubmitButton
            text={isSigningIn ? "Signing In..." : "Sign in"}
            className="w-full mt-8"
            disabled={isSigningIn}
          />
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="text-center text-[14px] bold"
              onClick={setSignUpContext}
            >
              Don't have an account? <u>Click here</u>
            </button>
          </div>

          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

          {errorsMessages && <ManyErrorsMessage errors={errorsMessages} />}
        </form>
      </div>
    </div>
  );
};

export default Login;
