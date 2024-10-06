import InputField from "@/components/InputField/Core";
import SubmitButton from "@/components/SubmitButton/Core";

import signIn from "@/static/images/signin.png";

const Login = ({ handleSubmit, hasError }) => {
  return (
    <div className="p-20 items-center">
      <div className="flex gap-8 items-center">
        <img src={signIn.src} alt="Woman pointing top-right" />
        <span>
          <p className="text-[80px]">
            <b>Sign In</b>
          </p>
          <p className="text-primary text-[50px]">to access your list</p>
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

export default Login;
