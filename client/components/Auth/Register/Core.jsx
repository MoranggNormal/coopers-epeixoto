import { useState } from "react";
import { useUser } from "@/app/userContext";
import InputField from "@/components/InputField/Core";
import SubmitButton from "@/components/SubmitButton/Core";
import { HTTP_EXCEPTIONS } from "@/constants/http-status-code";

import signIn from "@/static/images/signin.png";

const Register = ({ closeModal }) => {
  const { login } = useUser();

  const [hasError, setHasError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasError) {
      setHasError(() => "");
    }

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
      setHasError(() => data.message);
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
            <b>Sign Up</b>
          </p>
          <p className="text-primary text-[32px]">to start creating your list</p>
        </span>
      </div>

      <div className=" flex justify-center">
        <form action="POST" className="w-1/3 space-y-4" onSubmit={handleSubmit}>
          <InputField id="user-name" label="Name:" type="text" required />
          <InputField id="user-email" label="Email:" type="email" required />
          <InputField
            id="user-password"
            label="Password:"
            type="password"
            required
          />
          <div>
            <SubmitButton text="Register now" className="w-full mt-8" />
          </div>

          {hasError && (
            <div className="flex justify-center mt-4">
              <span className="text-center text-[20px] text-red-400 bold">
                {hasError}
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
