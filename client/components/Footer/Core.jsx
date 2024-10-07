const Footer = () => {
  return (
    <section className="w-full h-[246px] relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-[40px] w-[200%] h-[120%] bg-black -rotate-2 -z-20" />
      <div className="mt-[30px]">
        <h3 className="font-semibold text-white text-[24px] leading-[20px] text-center">
          Need help?
        </h3>
        <h4 className="font-semibold text-white text-[24px] leading-[18px] text-center mt-8">
          <a href="mailto:coopers@coopers.pro">coopers@coopers.pro</a>
        </h4>
        <p className="mt-4 font-normal text-white text-[14px] leading-[29px] text-center">
          © 2021 Coopers. All rights reserved.
        </p>
      </div>
      <div className="absolute -bottom-2 w-[50%] lg:w-[40%] h-[41px] bg-primary -rotate-1 -z-10" />
    </section>
  );
};

export default Footer;
