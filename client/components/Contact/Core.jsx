import InputField from "../InputField/Core";
import SubmitButton from "../SubmitButton/Core";

import woman from "@/static/images/woman.png";
import graphism from "@/static/images/graphism-2.svg";
import iconMail from "@/app/icons/icon-mail.svg";

const Contact = () => {
  return (
    <section className="relative w-full min-h-[820px] my-20 flex flex-col items-center">
      <div className="absolute -top-[135px] lg:-top-[95px] w-[190px] h-[190px] rounded">
        <img src={woman.src} alt="Woman" className="w-full h-full" />
        <img
          src={graphism.src}
          alt="Graphism"
          className="absolute top-0 left-[-25%] -z-20 w-full h-full"
        />
      </div>

      <div className="w-full max-w-[640px] py-20 px-10 md:px-20 rounded-[4px] shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] bg-primary rounded-[2px] flex items-center justify-center">
            <img src={iconMail.src} alt="Mail" className="w-[32px] h-[32px]" />
          </div>
          <h3 className="text-[24px]">
            GET IN <br /> <b>TOUCH</b>
          </h3>
        </div>

        <form className="flex flex-col gap-6" aria-label="Contact form">
          <InputField
            id="name"
            label="Your name"
            placeholder="Type your name here..."
          />
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              id="email"
              label="Email*"
              type="email"
              placeholder="example@example.com"
              required
            />
            <InputField
              id="phone"
              label="Telephone*"
              type="tel"
              placeholder="( ) ____-____"
              required
            />
          </div>
          <label htmlFor="message" className="text-[#06152B] text-[16px]">
            Message*
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              required
              className="w-full min-h-[150px] ring-[1px] ring-[#06152B] placeholder-[#9A9A9A] focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary rounded-[4px] px-4 py-2"
            />
          </label>
          <SubmitButton text="SEND NOW" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
