"use client";

import { useState, forwardRef } from "react";
import { useUser } from "@/app/userContext";

import elipse from "@/app/icons/elipse.svg";
import checkedIcon from "@/app/icons/checked-icon.svg";
import DeleteItem from "../DeleteItem/Core";

const TaskItem = forwardRef(
  ({ id, title, removeTask, markTaskAsCompleted }, ref) => {
    const { user } = useUser();

    const [text, setText] = useState(title);
    const [isChecked, setIsChecked] = useState(false);

    const taskId = `task-${id}`;

    const handleChange = (e) => {
      setText(() => e.target.value);
    };

    const handleCompleteTask = async () => {
      if (!user) {
        return;
      }

      let bodyContent = JSON.stringify({
        id,
      });

      const response = await fetch(`/api/task/markTaskAsComplete`, {
        method: "PUT",
        body: bodyContent,
      });

      await response.json();

      setIsChecked(true);
      markTaskAsCompleted(id);
    };

    const handleUpdateTaskTitle = async (id, title) => {
      if (!user) {
        return;
      }

      let bodyContent = JSON.stringify({
        id,
        title,
      });

      const response = await fetch(`/api/task/updateTaskTitle`, {
        method: "PUT",
        body: bodyContent,
      });

      await response.json();
    };

    const handleKeyDown = ({ key, target }) => {
      if (key === "Enter" && id && target.value !== "") {
        handleUpdateTaskTitle(id, target.value);
      }
    };
    return (
      <div
        ref={ref}
        className="relative w-full group flex gap-4 py-2 text-[16px] transition-all cursor-grab"
      >
        <button
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={handleCompleteTask}
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
        </label>
        <input
          type="text"
          id={taskId}
          className="cursor-text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-label="Task description"
        />
        <DeleteItem id={id} removeTask={removeTask} />
      </div>
    );
  }
);

export default TaskItem;
