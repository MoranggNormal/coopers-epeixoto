"use client";
import { useState } from "react";

import elipse from "@/app/icons/elipse.svg";
import { DEFAULT_TASK_ITEM_TEXT } from "@/constants/task-items";

const CreateTaskItem = () => {
  const [text, setText] = useState(DEFAULT_TASK_ITEM_TEXT);

  const handleChange = ({ target }) => {
    setText(() => target.value);
  };

  const handleCreateItem = (e) => {
    setText(() => DEFAULT_TASK_ITEM_TEXT);
  };

  const handleKeyDown = ({ key, target }) => {
    if (key === "Enter") {
      handleCreateItem(target);
    }
  };

  return (
    <button className="relative w-full group flex gap-4 py-2 text-[16px] transition-all text-secondary">
      <img className="w-[20px] h-[20px]" src={elipse.src} alt="Create a new task"></img>
      <input
        type="text"
        id="create-to-do-item"
        className="cursor-text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleCreateItem}
      />
    </button>
  );
};

export default CreateTaskItem;
