const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-primary rounded-[4px] text-center text-white text-[16px] font-bold py-3 hover:bg-primary-dark hover-up transition-all"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
