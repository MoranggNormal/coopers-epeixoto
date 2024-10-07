const ErrorMessage = ({errorMessage}) => {
  return (
    <div className="flex justify-center mt-4">
      <span className="text-center text-[20px] text-red-400 bold">
        {errorMessage}
      </span>
    </div>
  );
};

export default ErrorMessage;
