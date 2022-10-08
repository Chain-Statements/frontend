import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-cover bg-center md:bg-[center_top] min-w-screen min-h-screen bg-[url('/static/bglanding.png')]">
      <Head>
        <title>Eth Bogota - Chain Statements</title>
      </Head>
      <div className="md:ml-[100px] flex flex-col items-center md:items-start justify-center w-screen md:w-[50%] min-h-[90vh] text-white font-poppins">
        <div className="text-gray-400">The future way to show your assets</div>
        <h1 className="lg:-mt-5 text-[40px] md:text-[60px] lg:text-[90px] font-bold text-gradient">
          Eth Bogota
        </h1>
        <h2 className="lg:-mt-5 text-[20px] md:text-[40px] lg:text-[60px] font-semibold">
          chain-statements
        </h2>
        <div className="font-poppins text-gray-300">
          decentralized “bank” statements for
        </div>
        <div className="text-[#AB7DFC] font-bold"> blockchain assets</div>
        <div className="hover:scale-105 transition cursor-pointer mt-5 get-started-gradient rounded-lg py-2 px-4 font-medium">
          Get started
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bottom-5 flex items-center justify-center ">
        <div className="flex items-center justify-center w-full md:w-[50%]">
          <img
            src="/static/samplesponsor1.png"
            className="mx-3 w-[30%] md:w-[25%] rounded cursor-pointer hover:opacity-90 transition"
          />
          <img
            src="/static/samplesponsor1.png"
            className="mx-3 w-[30%] md:w-[25%] rounded cursor-pointer hover:opacity-90 transition"
          />
        </div>
      </div>
    </div>
  );
}
