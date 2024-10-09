"use client";

import { useState } from "react";
import { useUser } from "@/app/userContext";

import Link from "next/link";
import AuthModal from "../Auth/AuthModal/Core";
import Logo from "../Logo/Core";

const Button = ({ text, onClick, classes = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black font-poppins w-[80px] h-[40px] md:w-[120px] md:h-[40px] text-[14px] leading-[21px] font-bold text-white cursor-pointer transition-all ${classes}`}
    >
      {text}
    </button>
  );
};

const Header = () => {
  const { user, logout } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = async () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
  };

  return (
    <>
        <div className="w-full h-6 fixed top-0 bg-black z-[999] text-center text-white font-poppins bold"><Link href="/resources">API Documentation</Link></div>

      <header className="w-full absolute top-[54px] px-[22px] md:px-[60px] lg:px-[80px] z-10">
        <div className="flex justify-between">
          <Logo />
          <div>
            {user ? (
              <div className="flex items-center gap-8">
                <p className="hidden md:block">
                  Welcome, <u>{user.name}</u>!
                </p>
                <Button text="Sign out" onClick={logout} classes="hover-down" />
              </div>
            ) : (
              <Button text="Sign in" onClick={openModal} classes="hover-up" />
            )}
          </div>
        </div>
      </header>
      <AuthModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
