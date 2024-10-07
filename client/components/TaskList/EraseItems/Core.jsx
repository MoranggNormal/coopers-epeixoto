"use client";
import { ERASE_ITEMS } from "@/constants/task-items";

const EraseItems = ({ context, erasePending, eraseCompleted }) => {
  const requestEraseItems = async () => {
    switch (context) {
      case ERASE_ITEMS.PENDING:
        await fetch("/api/task/erasePendingTasks", {
          method: "DELETE",
        });

        erasePending()
        break;
      case ERASE_ITEMS.DONE:
        await fetch("/api/task/eraseCompleteTasks", {
          method: "DELETE",
        });

        eraseCompleted()
        break;
      default:
        break;
    }
  };

  return (
    <button
      onClick={() => requestEraseItems()}
      className="w-[260px] md:w-[300px] h-[64px] bg-black text-white font-bold text-[24px] rounded-[10px] my-10 hover-up transition-all"
    >
      Erase All
    </button>
  );
};

export default EraseItems;
