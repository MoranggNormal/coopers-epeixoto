import Link from "next/link";

import bgHero from "@/static/images/bg-hero.svg";
import iconScroll from "@/app/icons/icon-scroll.svg";

const Hero = () => {
  return (
    <>
      <section className="relative w-screen h-[734px] flex top-[24px] ml-[25px] sm:ml-[40px] md:ml-[80px] xl:ml-[120px] 2xl:ml-[400px] 3xl:ml-[550px]">
        <div className="slides hidden xl:block absolute w-full h-[481px] mt-[156px]" />
        <div className="w-[55%] mt-[208px]">
          <h1 className="relative font-bold text-[60px] md:text-[80px] leading 64px flex flex-col">
            Organize
            <span className="absolute top-20 font-normal text-[25px] sm:text-[40px] md:text-[60px] text-primary">
              your daily jobs
            </span>
          </h1>

          <p className="xl:hidden absolute top-[384px] font-bold text-[18px] sm:text-[20px] leading-[29px]">
            The only way to get things done
          </p>

          <Link
            href="#to-do-list"
            className="absolute top-[464px] z-20 font-bold text-white text-[24px] leading-[29px] w-[240px] md:w-[300px] h-[64px] bg-primary rounded-[10px] transition-all grid place-content-center hover-up"
          >
            Go to To-do list
          </Link>
        </div>

        <Link
          href="#to-do-list"
          className="absolute p-8 bottom-4 left-1/2 -translate-x-1/2 -ml-[25px] sm:-ml-[40px] md:-ml-[80px] xl:-ml-[120px] 2xl:-ml-[400px] 3xl:-ml-[550px]"
        >
          <button name="navigate">
            <img
              className="w-[40px] h-[40px]"
              src={iconScroll.src}
              alt="arrow bottom"
            ></img>
          </button>
        </Link>
      </section>
      <img
        src={bgHero.src}
        alt=""
        className="absolute right-0 top-[24px] -z-20 object-contain w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[640px]"
      />
    </>
  );
};

export default Hero;
