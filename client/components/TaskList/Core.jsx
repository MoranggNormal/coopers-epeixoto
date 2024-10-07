"use client";

import { useState, useEffect, useRef } from "react";
import { useUser } from "@/app/userContext";

import CreateTaskItem from "./CreateTaskItem/Core";
import DoneItem from "./DoneItem/Core";
import EraseItems from "./EraseItems/Core";
import TaskItem from "./TaskItem/Core";

import { ERASE_ITEMS } from "@/constants/task-items";

import graphism from "@/static/images/graphism.svg";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const CARD_LIST_CLASSES =
  "w-[320px] md:w-[380px] min-h-[600px] border-t-[20px] shadow-lg bg-background";

const TaskList = () => {
  const { user } = useUser();
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const taskListRef = useRef(null);

  const scrollToBottom = () => {
    if (taskListRef.current) {
      taskListRef.current.scrollTo({
        top: taskListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const addNewPendingTask = (newTask) => {
    setPendingTasks((prevTasks) => [...prevTasks, newTask]);
    scrollToBottom();
  };

  const removeTask = (id) => {
    setPendingTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setCompletedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const markTaskAsCompleted = (id) => {
    setPendingTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setCompletedTasks((prevTasks) => [
      ...prevTasks,
      pendingTasks.find((task) => task.id === id),
    ]);
  };

  const erasePending = () => {
    setPendingTasks([]);
  };

  const eraseCompleted = () => {
    setCompletedTasks([]);
  };

  const reorderTasks = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    result.forEach((task, index) => {
      task.order = index;
    });

    return result;
  };

  const onDragEnd = async (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const reorderedTasks = reorderTasks(
      pendingTasks,
      source.index,
      destination.index
    );
    setPendingTasks(reorderedTasks);

    const tasksToUpdate = reorderedTasks.filter(
      (task, index) => task.order !== pendingTasks[index].order
    );
    const tasksToSend = tasksToUpdate.map(({ id, order }) => ({ id, order }));

    if (tasksToSend.length > 0) {
      await fetch("/api/task/updateTaskOrder", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tasks: tasksToSend }),
      });
    }
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
          <p className="font-bold text-[40px] font-poppins">To-do</p>
          <p className="text-[24px] text-center">
            Take a breath. <br /> Start doing.
          </p>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="pendingTasks">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mx-8 max-h-[280px] overflow-y-auto"
              >
                {pendingTasks.length > 0 &&
                  pendingTasks.map(({ id, title }, index) => (
                    <Draggable
                      key={id}
                      draggableId={id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskItem
                            id={id}
                            title={title}
                            removeTask={removeTask}
                            markTaskAsCompleted={markTaskAsCompleted}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="mx-8">
          <CreateTaskItem addNewPendingTask={addNewPendingTask} />
          <EraseItems
            context={ERASE_ITEMS.PENDING}
            erasePending={erasePending}
            eraseCompleted={eraseCompleted}
          />
        </div>
      </div>

      <div className={CARD_LIST_CLASSES + " border-t-primary"}>
        <div className="flex flex-col py-4 items-center">
          <p className="font-bold text-[40px] font-poppins">Done</p>
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
              return (
                <DoneItem
                  key={id}
                  id={id}
                  description={title}
                  removeTask={removeTask}
                />
              );
            })}
        </div>
        {completedTasks.length > 0 && (
          <div className="mx-8">
            <EraseItems
              context={ERASE_ITEMS.DONE}
              erasePending={erasePending}
              eraseCompleted={eraseCompleted}
            />
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
