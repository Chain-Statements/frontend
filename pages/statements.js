import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { AiFillFilePdf, AiOutlineClose } from "react-icons/ai";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hideAddress } from "../utils/hideAddress";

const Statements = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [isShowPDF, setIsShowPDF] = useState(false);
  const [isConnected, setIsConnected] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [passNum, setPassNum] = useState("");
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isPassNumCorrect, setIsPassNumCorrect] = useState(true);
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [shortenAddr, setShortenAddr] = useState();

  useEffect(() => {
    setIsConnected(address);
    setShortenAddr(hideAddress(address));
  }, [address]);

  const handleValidateUser = () => {
    setIsShowPDF(true);
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Eth Bogota - Chain Statements</title>
        </Head>
        <div>
          <div className="px-5 pb-5 lg:px-0 lg:pb-0 w-full flex flex-col justify-center items-center">
            <div>
              {isShowPDF && (
                <div
                  className={`fixed translate-x-[-50%] left-[50%] w-[95%] lg:w-[80%] top-5 h-[90vh]  transition rounded px-3 py-2 z-[100] exploreMoreBuildFocus bg-[#27292a] border border-[#f93cd367] overflow-y-auto ${
                    isShowPDF ? "scale-100 " : "scale-0"
                  }`}
                >
                  <div className="flex items-center justify-end">
                    <div
                      className="flex items-center transition  hover:text-[#ff98eab9] cursor-pointer hover:scale-105 mb-2"
                      onClick={() => setIsShowPDF(false)}
                    >
                      Close <AiOutlineClose className="mt-[2px]" />
                    </div>
                  </div>
                  <div className="h-[95%] pb-3">
                    <iframe
                      src="https://ipfs.io/ipfs/bafybeicmg4flnzstp422x7qfpnppj3htmjkcpkfqgf4bevuywzortqi4dy/output2.pdf"
                      width="100%"
                      height="100%"
                      className="block"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center mt-5 lg:mt-10 lg:w-[50%] h-auto bg-[#27292af2] text-white w-full container-box-shadow rounded-lg p-6 font-david-libre">
              {shortenAddr ? (
                <div className="p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full">
                  <div>
                    <div className="flex items-center">
                      <AiOutlineUser className="text-2xl mr-2" />
                      <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="string"
                        className="disabled:bg-gray-400 disabled:cursor-not-allowed px-2 py-1 rounded w-full outline-0 border-b-2 border-white bg-transparent transition focus:bg-[#292d2d]"
                        placeholder="Name"
                      />
                    </div>
                    {!isNameCorrect && (
                      <div className="rounded mt-2 px-2 bg-red-100 text-red-700 flex items-center text-sm lg:text-base">
                        <BiErrorCircle className="hidden lg:block mr-1 mt-[1px]" />
                        Name should not contain numbers or symbols
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-5">
                    <BsCalendarDate className="text-2xl mr-2" />

                    <DatePicker
                      className="px-2 py-1 rounded w-full outline-0 border-b-2 border-white bg-transparent transition focus:bg-[#292d2d]"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div>
                    <div className="flex items-center mt-5">
                      <FaPassport className="text-2xl mr-2" />
                      <input
                        value={passNum}
                        onChange={(e) => {
                          setPassNum(e.target.value);
                        }}
                        type="string"
                        className="px-2 py-1 rounded w-full outline-0 border-b-2 border-white bg-transparent transition focus:bg-[#292d2d]"
                        placeholder="Passport number"
                      />
                    </div>
                    {!isPassNumCorrect && (
                      <div className="rounded mt-2 px-2 bg-red-100 text-red-700 flex items-center text-sm lg:text-base">
                        <BiErrorCircle className="hidden lg:block mr-1 mt-[1px]" />
                        Invalid passport number
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center mt-5">
                      <MdPassword className="text-2xl mr-2" />
                      <input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="string"
                        className="px-2 py-1 rounded w-full outline-0 border-b-2 border-white bg-transparent transition focus:bg-[#292d2d]"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  {isConnected && (
                    <div className="mt-10 flex justify-center">
                      <div
                        onClick={() => handleValidateUser()}
                        className="flex items-center justify-center  generate p-3 lg:p-5 rounded-full w-fit cursor-pointer transition"
                      >
                        <div className="lg:text-2xl">
                          Generate Account Statements
                        </div>
                        <AiFillFilePdf className="ml-1 text-3xl" />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  Connect your wallet in order to continue to
                  <div className="ml-2 text-2xl font-bold text-underline">
                    Eth Bogota - Chain Statements
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statements;
