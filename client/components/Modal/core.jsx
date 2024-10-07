const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed left-0 top-0 z-50">
      <div
        className="w-screen h-screen bg-[#0c0c0cd0] grid place-content-center"
        // onClick={closeModal}
      >
        <div className="relative lg:w-[932px] lg:h-[820px] bg-white overflow-y-auto shadow-md">
          <button
            className="font-bold text-[20px] absolute right-4 top-2"
            onClick={closeModal}
          >
            close
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
