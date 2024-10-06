"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../Modal/core";

import { useUser } from "@/app/userContext";

import { HTTP_EXCEPTIONS } from "@/constants/http-status-code";

import logo from "@/app/icons/logo.svg";
import Login from "../Auth/Login/Core";

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
          <Login handleSubmit={handleSubmit} hasError={hasError} />
        </Modal>
      )}
    </>
  );
};

export default Header;
