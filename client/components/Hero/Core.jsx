import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[734px] flex top-[24px] ml-[250px]">
      <div className="slides absolute w-full h-[481px] mt-[156px]"></div>
      <div className="bg-hero absolute right-[12%] -z-10 w-[640px] h-[734px]"></div>
      <div className="w-[55%] mt-[208px]">
        <h1 className="relative font-bold text-[80px] leading 64px flex flex-col">
          Organize
          <span className="absolute top-20 font-normal text-[60px] text-primary">
            your daily jobs
          </span>
        </h1>

          <Link href="https://epeixoto.dev" className="absolute top-[464px] z-20 font-bold text-white text-[24px] leading-[29px]">
            <button className="z-20 w-[300px] h-[64px] bg-primary rounded-[10px]">
              Go to To-do list
            </button>
          </Link>
      </div>
    </section>
  );
};

export default Hero;
