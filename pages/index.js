import { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { chainId, useAccount, useSigner ,useNetwork} from "wagmi";
import { hideAddress } from "../utils/hideAddress";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast'
import Head from "next/head";
import axios from "axios";
import { ethers } from 'ethers';
import { Layout } from "../components/Layout";
import { formatBytes32String, parseBytes32String } from "ethers/lib/utils";
import { Identity } from "@semaphore-protocol/identity"
import addresses from "../utils/addresses";
import contractABI from "../utils/ChainStatement.json";

export default function Home() {
  const { address, isConnected, isDisconnected } = useAccount();
  const { chain } = useNetwork()
  const [startDate, setStartDate] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [passNum, setPassNum] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [shortenAddr, setShortenAddr] = useState();
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isPassNumCorrect, setIsPassNumCorrect] = useState(true);
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { data: signer } = useSigner();

  useEffect(() => {
    setShortenAddr(hideAddress(address));
  }, [address]);

  const handleConnectToName = async () => {

    if(!address || !signer) return;

    const nameReg = /^[a-zA-Z\s]+$/;
    const passReg = /^[A-Za-z][0-9]{8}$/;
    if (!nameReg.test(userName)) {
      setIsNameCorrect(false);
    } else {
      setIsNameCorrect(true);
    }
    if (!passReg.test(passNum)) {
      setIsPassNumCorrect(false);
    } else {
      setIsPassNumCorrect(true);
    }

    if(!isNameCorrect || !isPassNumCorrect || userName.length == 0) return;

    let identityParams = userName.replace(" ","");
    // identityParams = identityParams + startDate.getTime();
    identityParams = identityParams + passNum;
    identityParams = identityParams.toLowerCase();
    // identityParams = identityParams + userPwd;

    let identity = new Identity(identityParams);
    console.log("DEBUG : ", identityParams);
    console.log(process.env.RELAY_URL)
    try {
      const data = await axios.post("http://127.0.0.1:9002/join-protocol", {
        identityCommitment: identity.generateCommitment().toString(),
        address : address,
        chainId : chain.id.toString()
      });
      console.log(data);
      if (data.status == 200) {
          toast.success(`You joined the Greeter group event 🎉 Greet anonymously!`)
      } else {
          toast.error("Some error occurred when calling the server, please try again!")
      }

    }catch (e) {
        console.log(e);
        toast.error("Transaction can't be perform, make sure you this address hasnt been added before")
    }


  };

  return (
    <Layout>
      <div className="px-5 pb-5 lg:px-0 lg:pb-0 w-full flex flex-col justify-center items-center">
        <Head>
          {/* <title>Eth Bogota - Chain Statements</title> */}
        </Head>
        <div className="font-david-libre mt-5 lg:mt-10 w-full lg:w-[50%] h-auto bg-[#27292af2] text-white container-box-shadow rounded-lg p-6 ">
          {shortenAddr ? (
            <div>
              <div className="font-mono pb-2 text-xl text-center">
                Hello, {address ? shortenAddr : ""}
              </div>
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
                      value={userPwd}
                      onChange={(e) => {
                        setUserPwd(e.target.value);
                      }}
                      type="string"
                      className="px-2 py-1 rounded w-full outline-0 border-b-2 border-white bg-transparent transition focus:bg-[#292d2d]"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  {isLoading ? (
                    <div className="mt-6 w-[50px] h-[50px] border-t-2 border-[#fd0bcde3] rounded-full animate-spin"></div>
                  ) : (
                    <div
                      onClick={() => handleConnectToName()}
                      className="mt-10 mb-5 w-full lg:w-[50%] cursor-pointer px-3 py-2 rounded-full text-center text-xl transition connect-name-button opacity-90 hover:opacity-100 transition hover:scale-105"
                    >
                      Connect wallet to my name
                    </div>
                  )}
                </div>
              </div>
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
    </Layout>
  );
}
