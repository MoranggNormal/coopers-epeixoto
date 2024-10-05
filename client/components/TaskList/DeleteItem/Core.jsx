import React from "react";

const DeleteItem = ({ id }) => {
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <span
      onClick={() => handleDelete(id)}
      className="hidden group-hover:block absolute right-0 font-bold text-[#999999] hover:text-red-400 transition-all"
    >
      delete
    </span>
  );
};

export default DeleteItem;
