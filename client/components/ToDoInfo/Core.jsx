const ToDoInfo = () => {
  return (
    <section
      id="to-do-list"
      className="w-full h-[420px] relative flex items-center justify-center"
    >
      <div className="absolute w-[200%] h-[75%] bg-black -rotate-4 -z-20" />
      <div>
        <h1 className="font-bold text-white text-[60px] leading-[60px] text-center underline underline-offset-[16px] decoration-2 decoration-primary">
          To-do List
        </h1>
        <p className="mt-8 font-normal text-white text-[24px] leading-[29px] text-center">
          Drag and drop to set your main priorities, check <br /> when done and
          create what´s new.
        </p>
      </div>
    </section>
  );
};

export default ToDoInfo;
