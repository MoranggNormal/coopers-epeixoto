import { useState } from "react";
import { useUser } from "@/app/userContext";
import InputField from "@/components/InputField/Core";
import SubmitButton from "@/components/SubmitButton/Core";
import { HTTP_EXCEPTIONS } from "@/constants/http-status-code";

import signIn from "@/static/images/signin.png";

const Login = ({ closeModal, setSignUpContext }) => {
  const { login } = useUser();

  const [hasError, setHasError] = useState("");
  const [hasManyErrors, setHasManyErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasError) {
      setHasError(() => "");
    }

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

      if (errors) {
        setHasManyErrors(errors);
        return;
      }

      setHasError(() => msg);
      return;
    }

    login(data);
    closeModal();
  };

  return (
    <div className="p-20 items-center">
      <div className="flex gap-8 items-center">
        <img src={signIn.src} alt="Woman pointing top-right" />
        <span>
          <p className="text-[70px]">
            <b>Sign In</b>
          </p>
          <p className="text-primary text-[32px]">to access your list</p>
        </span>
      </div>

      <div className="mt-8 flex justify-center">
        <form action="POST" className="w-1/3 space-y-4" onSubmit={handleSubmit}>
          <InputField id="user-email" label="Email:" type="email" required />
          <InputField
            id="user-password"
            label="Password:"
            type="password"
            required
          />
          <div>
            <SubmitButton text="Sign in" className="w-full mt-8" />
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="text-center text-[14px] bold"
              onClick={setSignUpContext}
            >
              Don't have an account? <u>Click here</u>
            </button>
          </div>

          {hasError && (
            <div className="flex justify-center mt-4">
              <span className="text-center text-[20px] text-red-400 bold">
                {hasError}
              </span>
            </div>
          )}

          {hasManyErrors && (
            <div className="flex flex-col justify-center mt-4">
              {hasManyErrors.map((error, index) => {
                return (
                  <span
                    key={index}
                    className="text-left text-[13x] text-red-400 bold"
                  >
                    {error.msg}
                  </span>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
