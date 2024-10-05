import Image from "next/image";
import logo from "@/app/icons/logo.svg";

const Header = () => {
  return (
    <header className="w-full absolute top-[54px] px-[24px] md:px-[60px] lg:px-[80px] z-10">
      <div className="flex justify-between">
        <div>
          <Image
            src={logo.src}
            alt="Coopers Digital Production"
            width={180}
            height={50}
            priority
          />
        </div>
        <div className="">
          <button className="bg-black w-[120px] h-[40px] text-[14px] leading-[21px] font-bold text-white cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
