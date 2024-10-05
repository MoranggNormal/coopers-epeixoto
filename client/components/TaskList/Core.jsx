"use client";

import CreateTaskItem from "./CreateTaskItem/Core";
import DoneItem from "./DoneItem/Core";
import EraseItems from "./EraseItems/Core";
import TaskItem from "./TaskItem/Core";

import { toDos } from "@/mock/to-dos";
import { ERASE_ITEMS } from "@/constants/task-items";

import graphism from "@/static/images/graphism.svg";

const CARD_LIST_CLASSES = (color) =>
  `w-[320px] md:w-[380px] min-h-[600px] border-t-[20px] border-t-${color} shadow-lg bg-background`;

const TaskList = () => {
  return (
    <section className="relative my-24 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
      <div className={CARD_LIST_CLASSES("secondary")}>
        <div className="flex flex-col py-4 items-center">
          <p className="font-bold text-[40px]">To-do</p>
          <p className="text-[24px] text-center">
            Take a breath. <br /> Start doing.
          </p>
        </div>
        <div className="mx-8 max-h-[280px] overflow-y-auto">
          {toDos.map(({ id, description }) => {
            return <TaskItem key={id} id={id} description={description} />;
          })}
        </div>
        <div className="mx-8">
          <CreateTaskItem />
          <EraseItems context={ERASE_ITEMS.PENDING} />
        </div>
      </div>

      <div className={CARD_LIST_CLASSES("primary")}>
        <div className="flex flex-col py-4 items-center">
          <p className="font-bold text-[40px]">Done</p>
          <p className="text-[24px] text-center">
            Congratulations!. <br />{" "}
            <span className="font-bold">You have done 5 tasks</span>
          </p>
        </div>
        <div className="mx-8 max-h-[280px] overflow-y-auto">
          {toDos.map(({ id, description }) => {
            return <DoneItem key={id} id={id} description={description} />;
          })}
        </div>
        <div className="mx-8">
          <EraseItems context={ERASE_ITEMS.DONE} />
        </div>
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
