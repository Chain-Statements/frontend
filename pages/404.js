import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Layout } from "../components/Layout";

const FourOFour = () => {
  return (
    <Layout>
      <div className="px-5 pb-5 lg:px-0 lg:pb-0 w-full flex flex-col justify-center items-center">
        <Head>
          <title>Eth Bogota - Chain Statements</title>
        </Head>
        <div className="font-david-libre mt-5 lg:mt-10 w-full lg:w-[50%] h-auto bg-[#27292af2] text-white container-box-shadow rounded-lg p-6 flex flex-col justify-center items-center">
          <img src="/static/404-error.png" className="w-[20%]" />
          <div className="mt-3 text-4xl font-bold">Page Not Found!</div>
          <div>
            <Link href="/">
              <div className='relative transition after:transition-[transform] after:content-[""] after:block after:absolute after:w-full after:-bottom-[4px] after:border-b after:border-white after:origin-center after:transform after:scale-x-0 hover:after:scale-x-100 cursor-pointer'>
                Back to home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FourOFour;
