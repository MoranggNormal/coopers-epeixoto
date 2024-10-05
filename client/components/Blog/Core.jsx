"use client";

import Post from "./Post/Core";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { posts } from "@/mock/posts";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1440: {
    slidesPerView: 4,
  },
};

const Blog = () => {
  return (
    <section className="mt-20 mb-80 w-full flex lg:ml-[140px] justify-center lg:justify-start">
      <div className="relative w-[320px] sm:w-[640px] md:w-[740px] lg:w-[800px] xl:w-[1300px] h-[520px] rounded-[10px] bg-primary pl-[34px] pt-10 pb-10 lg:pl-20 lg:pt-20 lg:pb-20">
        <h2 className="font-bold text-[32px] lg:text-[48px] text-white">
          good things
        </h2>

        <div className="absolute top-28 lg:top-48  max-w-[280px] sm:max-w-[640px] lg:max-w-[1200px] xl:max-w-[1600px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ paddingBottom: "3em" }}
            breakpoints={breakpoints}
          >
            {posts.map(({ id, context, title, imageSrc }) => {
              return (
                <SwiperSlide key={id}>
                  <Post
                    id={id}
                    context={context}
                    title={title}
                    imageSrc={imageSrc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
