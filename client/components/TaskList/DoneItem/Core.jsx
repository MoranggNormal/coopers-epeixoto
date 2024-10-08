"use client";
import Image from "next/image";

import doneIcon from "@/app/icons/done-icon.svg";
import DeleteItem from "../DeleteItem/Core";

const DoneItem = ({ id, description, removeTask }) => {
  return (
    <button
      className="relative w-full group flex gap-4 py-2 text-[16px] transition-all cursor-default"
      aria-label={"This task is already complete"}
    >
      <Image
        className="w-[20px] h-[20px]"
        src={doneIcon.src}
        alt="Completed task"
        width={1}
        height={1}
      />

      <p>{description}</p>

      <DeleteItem id={id} removeTask={removeTask}/>
    </button>
  );
};

export default DoneItem;
