"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/app/userContext";

import CreateTaskItem from "./CreateTaskItem/Core";
import DoneItem from "./DoneItem/Core";
import EraseItems from "./EraseItems/Core";
import TaskItem from "./TaskItem/Core";

import { ERASE_ITEMS } from "@/constants/task-items";

import graphism from "@/static/images/graphism.svg";

const CARD_LIST_CLASSES =
  "w-[320px] md:w-[380px] min-h-[600px] border-t-[20px] shadow-lg bg-background";

const TaskList = () => {
  const { user } = useUser();
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addNewPendingTask = (newTask) => {
    setPendingTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    if (!user) {
      setPendingTasks([]);
      setCompletedTasks([]);
    }

    if (user) {
      const fetchTaskList = async () => {
        const response = await fetch(`/api/task/getTasks`, {
          method: "GET",
        });

        const { pending, completed } = await response.json();

        setPendingTasks(pending);
        setCompletedTasks(completed);
      };

      fetchTaskList();
    }
  }, [user]);

  return (
    <section className="relative my-24 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
      <div className={CARD_LIST_CLASSES + " border-t-secondary"}>
        <div className="flex flex-col py-4 items-center">
          <p className="font-bold text-[40px]">To-do</p>
          <p className="text-[24px] text-center">
            Take a breath. <br /> Start doing.
          </p>
        </div>
        <div className="mx-8 max-h-[280px] overflow-y-auto">
          {pendingTasks.length > 0 &&
            pendingTasks.map(({ id, title }) => (
              <TaskItem key={id} id={id} description={title} />
            ))}
        </div>
        <div className="mx-8">
          <CreateTaskItem addNewPendingTask={addNewPendingTask} />
          <EraseItems context={ERASE_ITEMS.PENDING} />
        </div>
      </div>

      <div className={CARD_LIST_CLASSES + " border-t-primary"}>
        <div className="flex flex-col py-4 items-center">
          <p className="font-bold text-[40px]">Done</p>
          {completedTasks.length > 0 ? (
            <p className="text-[24px] text-center">
              Congratulations! <br />{" "}
              <span className="font-bold">
                You have done {completedTasks.length} tasks
              </span>
            </p>
          ) : (
            <p className="px-2 text-[20px] text-center">
              You don't have completed any yet...
              <br />{" "}
              <span className="font-bold">
                They will appear here once you mark them as complete!
              </span>
            </p>
          )}
        </div>
        <div className="mx-8 max-h-[280px] overflow-y-auto">
          {completedTasks.length > 0 &&
            completedTasks.map(({ id, title }) => {
              return <DoneItem key={id} id={id} description={title} />;
            })}
        </div>
        {completedTasks.length > 0 && (
          <div className="mx-8">
            <EraseItems context={ERASE_ITEMS.DONE} />
          </div>
        )}
      </div>

      <img
        src={graphism.src}
        alt=""
        className="absolute left-0 -top-[5%] -z-20"
      />
    </section>
  );
};

export default TaskList;
