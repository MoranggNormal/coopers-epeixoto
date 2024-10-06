"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../Modal/core";
import InputField from "../InputField/Core";
import SubmitButton from "../SubmitButton/Core";

import { useUser } from "@/app/userContext";

import { HTTP_EXCEPTIONS } from "@/constants/http-status-code";

import logo from "@/app/icons/logo.svg";
import signIn from "@/static/images/signin.png";

const Header = () => {
  const { user, login, logout } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState("");

  const openModal = async () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasError) {
      setHasError(() => "");
    }

    const formData = new FormData(e.target);
    const email = formData.get("user-email");
    const password = formData.get("user-password");

    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === HTTP_EXCEPTIONS.BAD_REQUEST.code) {
      setHasError(() => data.message);
      return;
    }

    login(data);
    closeModal();
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
              <div>
                <h1>Welcome, {user.name}!</h1>
                <button
                  onClick={logout}
                  className="bg-black w-[80px] h-[40px] md:w-[120px] md:h-[40px] text-[14px] leading-[21px] font-bold text-white cursor-pointer hover-down transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={openModal}
                className="bg-black w-[80px] h-[40px] md:w-[120px] md:h-[40px] text-[14px] leading-[21px] font-bold text-white cursor-pointer hover-up transition-all"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="p-20 items-center">
            <div className="flex gap-8 items-center">
              <img src={signIn.src} alt="Woman pointing top-right" />
              <span>
                <p className="text-[80px]">
                  <b>Sign In</b>
                </p>
                <p className="text-primary text-[50px]">to access your list</p>
              </span>
            </div>

            <div className="mt-8 flex justify-center">
              <form
                action="POST"
                className="w-1/3 space-y-4"
                onSubmit={handleSubmit}
              >
                <InputField
                  id="user-email"
                  label="Email:"
                  type="email"
                  required
                />
                <InputField
                  id="user-password"
                  label="Password:"
                  type="password"
                  required
                />
                <div>
                  <SubmitButton text="Sign in" className="w-full mt-8" />
                </div>

                {hasError && (
                  <div className="flex justify-center mt-4">
                    <span className="text-center text-[20px] text-red-400 bold">
                      {hasError}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;
