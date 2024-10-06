"use client";

import { useState, forwardRef } from "react";

import elipse from "@/app/icons/elipse.svg";
import checkedIcon from "@/app/icons/checked-icon.svg";
import DeleteItem from "../DeleteItem/Core";

const TaskItem = forwardRef(({ id, description }, ref) => {
  const [text, setText] = useState(description);
  const [isChecked, setIsChecked] = useState(false);

  const taskId = `task-${id}`;

  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  const handleBlur = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      ref={ref}
      className="relative w-full group flex gap-4 py-2 text-[16px] transition-all cursor-default"
    >
      <button
        className="w-[20px] h-[20px] cursor-pointer"
        onClick={() => setIsChecked((prev) => !prev)}
        aria-label={
          isChecked ? "Mark task as incomplete" : "Mark task as complete"
        }
      >
        <img
          src={isChecked ? checkedIcon.src : elipse.src}
          alt="Complete task"
        />
      </button>
      <label htmlFor={taskId} className="sr-only">
        Task item
      </label>{" "}
      {/* Ensures a hidden but accessible label */}
      <input
        type="text"
        id={taskId}
        className="cursor-text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-label="Task description"
      />
      <DeleteItem id={id} />
    </div>
  );
});

export default TaskItem;
