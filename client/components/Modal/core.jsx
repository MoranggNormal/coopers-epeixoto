const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed left-0 top-0 overflow-hidden z-50">
      <div className="w-screen h-screen bg-[#0c0c0cd0] grid place-content-center">
        <div className="relative w-[932px] h-[721px] bg-white shadow-md">
          <button className="font-bold text-[20px] absolute right-4 top-2" onClick={closeModal}>
            close
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
