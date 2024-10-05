import Link from "next/link";

import bgHero from "@/static/images/bg-hero.svg";
import iconScroll from "@/app/icons/icon-scroll.svg";

const Hero = () => {
  return (
    <section className="relative w-full h-[734px] flex top-[24px] ml-[25px] sm:ml-[40px] md:ml-[80px] xl:ml-[120px] 2xl:ml-[400px] 3xl:ml-[550px]">
      <div className="slides hidden xl:block absolute w-full h-[481px] mt-[156px]" />
      <div
        className={`bg-center bg-no-repeat absolute right-[-78%] sm:right-[-70%] md:right-[-25%] lg:right-[-15%] xl:right-[5%] 2xl:right-[20%] top-[-8%] md:top-[0%] -z-10 w-[640px] h-[734px] bg-[length:15%] sm:bg-[length:50%] md:bg-[length:70%] xl:bg-[length:100%] 2xl:bg-[length:100%]`}
        style={{ backgroundImage: `url(${bgHero.src})` }}
      />
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
          className="absolute top-[464px] z-20 font-bold text-white text-[24px] leading-[29px]"
        >
          <button className="z-20 w-[240px] md:w-[300px] h-[64px] bg-primary rounded-[10px]">
            Go to To-do list
          </button>
        </Link>
      </div>

      <Link
        href="#to-do-list"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 -ml-[25px] sm:-ml-[40px] md:-ml-[80px] xl:-ml-[120px] 2xl:-ml-[400px] 3xl:-ml-[550px]"
      >
        <button name="navigate">
          <img className="w-[40px] h-[40px]" src={iconScroll.src} alt="arrow bottom"></img>
        </button>
      </Link>
    </section>
  );
};

export default Hero;
