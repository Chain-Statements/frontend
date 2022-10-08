import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        enableOverlay={true}
        direction="left"
        className="text-white"
        style={{ backgroundColor: "#27292af2" }}
      >
        <div className="font-david-libre flex flex-col items-center justify-between text-xl">
          <Link className="cursor-pointer" href="/">
            <div
              onClick={toggleDrawer}
              className={`p-5 text-center w-full hover:opacity-90 hover:bg-gray-700 cursor-pointer transition  ${
                router.pathname == "/" ? "font-bold" : "font-normal"
              }`}
            >
              Home
            </div>
          </Link>
          <Link href="/statements">
            <div
              onClick={toggleDrawer}
              className={`hover:opacity-90 hover:bg-gray-700 cursor-pointer p-5 text-center w-full  transition  ${
                router.pathname == "/statements" ? "font-bold" : "font-normal"
              }`}
            >
              Statements
            </div>
          </Link>
        </div>
      </Drawer>{" "}
      <div className="font-david-libre px-3 lg:pt-5 lg:pr-5 flex items-center justify-between lg:grid lg:grid-cols-3 place-items-center h-[60px] text-sm lg:text-xl">
        <div className="hidden lg:block"></div>
        <div className="hidden lg:flex text-white flex justify-center items-center">
          <Link className="cursor-pointer" href="/">
            <div
              className={`cursor-pointer transition hover:scale-110 ${
                router.pathname == "/" ? "font-bold" : "font-normal"
              }`}
            >
              Home
            </div>
          </Link>
          <Link href="/statements">
            <div
              className={`ml-4 cursor-pointer transition hover:scale-110 ${
                router.pathname == "/statements" ? "font-bold" : "font-normal"
              }`}
            >
              Statements
            </div>
          </Link>
        </div>
        <div onClick={toggleDrawer} className="text-white block lg:hidden">
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        </div>

        <div className="text-xs lg:text-xl">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
