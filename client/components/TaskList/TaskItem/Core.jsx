"use client";

import { useState } from "react";

import elipse from "@/app/icons/elipse.svg";
import checkedIicon from "@/app/icons/checked-icon.svg";
import DeleteItem from "../DeleteItem/Core";

const TaskItem = ({ id, description }) => {
  const [text, setText] = useState(description);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  const handleBlur = (e) => {
    console.log(e.target.value);
  };

  return (
    <button className="relative w-full group flex gap-4 py-2 text-[16px] transition-all cursor-default">
      <img
        className="w-[20px] h-[20px] cursor-pointer"
        src={isChecked ? checkedIicon.src : elipse.src}
        onClick={() => setIsChecked((prev) => !prev)}
      />

      <input
        type="text"
        id={id}
        className="cursor-text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <DeleteItem id={id} />
    </button>
  );
};

export default TaskItem;
