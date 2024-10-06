"use client";
import { useState } from "react";

import elipse from "@/app/icons/elipse.svg";

export const DEFAULT_TASK_ITEM_TEXT = "Editing an item...";

const CreateTaskItem = () => {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(() => target.value);
  };

  const handleCreateTask = async (task) => {
    let bodyContent = JSON.stringify({
      task,
    });

    const response = await fetch(`/api/task/createTask`, {
      method: "POST",
      body: bodyContent,
    });

    const newTask = await response.json();

    setText(() => "");
  };

  const handleKeyDown = ({ key, target }) => {
    if (key === "Enter") {
      handleCreateTask(target.value);
    }
  };

  return (
    <button
      className="relative w-full group flex gap-4 py-2 text-[16px] transition-all text-secondary"
      aria-label={"Start typing to create a new task"}
    >
      <img
        className="w-[20px] h-[20px]"
        src={elipse.src}
        alt="Create a new task"
      ></img>
      <label htmlFor="create-task-item" className="sr-only">
        {text}
      </label>
      <input
        type="text"
        id="create-task-item"
        className="cursor-text"
        placeholder={DEFAULT_TASK_ITEM_TEXT}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </button>
  );
};

export default CreateTaskItem;
