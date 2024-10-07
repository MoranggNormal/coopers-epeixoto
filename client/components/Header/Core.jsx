"use client";

import { useState } from "react";
import { useUser } from "@/app/userContext";

import Image from "next/image";

import logo from "@/app/icons/logo.svg";
import AuthModal from "../Auth/AuthModal/Core";

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
      <header className="w-full absolute top-[54px] px-[22px] md:px-[60px] lg:px-[80px] z-10">
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
          <div>
            {user ? (
              <div className="flex items-center gap-8">
                <p>
                  Welcome, <u>{user.name}</u>!
                </p>
                <button
                  onClick={logout}
                  className="bg-black font-poppins w-[80px] h-[40px] md:w-[120px] md:h-[40px] text-[14px] leading-[21px] font-bold text-white cursor-pointer hover-down transition-all"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={openModal}
                className="bg-black font-poppins w-[80px] h-[40px] md:w-[120px] md:h-[40px] text-[14px] leading-[21px] font-bold text-white cursor-pointer hover-up transition-all"
              >
                Sign in
              </button>
              
            )}
          </div>
        </div>
      </header>
      <AuthModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
