"use client";
import { ERASE_ITEMS } from "@/constants/task-items";

const EraseItems = ({ context }) => {
  const requestEraseItems = () => {
    switch (context) {
      case ERASE_ITEMS.PENDING:
        console.log(ERASE_ITEMS.PENDING);
        break;
      case ERASE_ITEMS.DONE:
        console.log(ERASE_ITEMS.DONE);
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
