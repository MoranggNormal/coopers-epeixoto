const SubmitButton = ({ text, className = "", ...props }) => {
  return (
    <button
      type="submit"
      className={`bg-primary disabled:bg-gray-500 rounded-[4px] text-center text-white text-[16px] font-bold py-3 hover:bg-primary-dark hover-up transition-all ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
