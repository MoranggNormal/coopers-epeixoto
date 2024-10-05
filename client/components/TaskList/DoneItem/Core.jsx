"use client";

import { useState } from "react";

import doneIcon from "@/app/icons/done-icon.svg";
import DeleteItem from "../DeleteItem/Core";

const DoneItem = ({ id, description }) => {
  return (
    <button className="relative w-full group flex gap-4 py-2 text-[16px] transition-all cursor-default">
      <img className="w-[20px] h-[20px]" src={doneIcon.src} alt="Completed task" />

      <p>{description}</p>

      <DeleteItem id={id} />
    </button>
  );
};

export default DoneItem;
