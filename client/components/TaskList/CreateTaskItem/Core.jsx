"use client";
import { useState } from "react";
import { useUser } from "@/app/userContext";

import Image from "next/image";

import elipse from "@/app/icons/elipse.svg";
import AuthModal from "@/components/Auth/AuthModal/Core";

const DEFAULT_TASK_ITEM_TEXT = "Editing an item...";

const CreateTaskItem = ({ addNewPendingTask }) => {
  const { user } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");

  const openModal = async () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
  };

  const handleChange = ({ target }) => {
    setText(() => target.value);
  };

  const handleCreateTask = async (task) => {
    if (!task) {
      return;
    }

    if (!user) {
      openModal();
      return;
    }

    let bodyContent = JSON.stringify({
      task,
    });

    const response = await fetch(`/api/task/createTask`, {
      method: "POST",
      body: bodyContent,
    });

    const { newTask } = await response.json();

    addNewPendingTask(newTask);

    setText(() => "");
  };

  const handleKeyDown = ({ key, target }) => {
    if (key === "Enter") {
      handleCreateTask(target.value);
    }
  };

  return (
    <>
      <button
        className="relative p-2 w-full group flex gap-4 py-2 text-[16px] transition-all text-secondary"
        aria-label={"Start typing to create a new task"}
      >
        <Image
          className="w-[20px] h-[20px]"
          src={elipse.src}
          alt="Create a new task"
          width={1}
        height={1}
        />
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

      <AuthModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default CreateTaskItem;
