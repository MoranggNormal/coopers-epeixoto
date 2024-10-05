import Link from "next/link";

import coopersIcon from "@/app/icons/coopers-icon.svg";

const Post = ({ id, context, title, imageSrc }) => {
  return (
    <div className="w-[260px] lg:w-[360px] h-[430px] rounded-[16px] bg-white shadow-lg">
      <div className="w-full h-1/2 relative">
        <img
          className="w-full h-full object-cover rounded-t-[16px]"
          src={imageSrc}
          alt={context}
        />

        <img
          src={coopersIcon.src}
          alt="Coopers Digital"
          className="absolute bottom-[-12%] right-4"
        />
      </div>
      <div className="w-full h-1/2 p-6 flex flex-col justify-between">
        <div>
          <span className="px-[12px] py-[4px] border-[1px] border-[#9499B3] rounded-[16px] font-normal text-[16px] text-[#9499B3]">
            {context}
          </span>

          <p className="mt-4 text-[18px] text-[#312F4F]">{title}</p>
        </div>

        <div className="mt-auto">
          <Link href="#" className="text-primary">
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
