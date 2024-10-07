const ManyErrorsMessage = ({ errors }) => {
  return (
    <div className="flex flex-col justify-center mt-4">
      {errors.map((error, index) => {
        return (
          <span key={index} className="text-left text-[13x] text-red-400 bold">
            {error.msg}
          </span>
        );
      })}
    </div>
  );
};

export default ManyErrorsMessage;
