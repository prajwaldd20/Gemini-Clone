import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";
import { Context } from "../context/Context";

const HeroSection = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main flex-1 min-h-screen pb-44 relative">
      <div className="nav-bar flex items-center justify-between text-xl p-5 text-[#585858]">
        <p>Gemini</p>
        <img
          className="w-12 rounded-full"
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>
      <div className="main-container max-w-4xl mx-auto px-4">
        {!showResult ? (
          <>
            <div className="greet mt-12 mb-12 text-5xl text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent">
                  Hello, User...
                </span>
              </p>
              <p> How can I help you today? </p>
            </div>
            <div className="cards grid gap-4 p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="card h-48 p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Suggest beautiful places to see on a road trip!
                </p>
                <img
                  className="absolute w-9 p-2 bg-white rounded-3xl bottom-3 right-3"
                  src={assets.compass_icon}
                  alt="Compass Icon"
                />
              </div>
              <div className="card h-48 p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Briefly summarize the concept: Deforestation
                </p>
                <img
                  className="absolute w-9 p-2 bg-white rounded-3xl bottom-3 right-3"
                  src={assets.bulb_icon}
                  alt="Bulb Icon"
                />
              </div>
              <div className="card h-48 p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Suggest measures to improve communication
                </p>
                <img
                  className="absolute w-9 p-2 bg-white rounded-3xl bottom-3 right-3"
                  src={assets.message_icon}
                  alt="Message Icon"
                />
              </div>
              <div className="card h-48 p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-lg">
                  Give the code to generate beautiful responsive image card
                </p>
                <img
                  className="absolute w-9 p-2 bg-white rounded-3xl bottom-3 right-3"
                  src={assets.code_icon}
                  alt="Code Icon"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result pt-0 pb-0 pr-1 pl-1 max-h-128 overflow-y-scroll no-scrollbar">
            <div className="result-title mt-10 mb-10 flex items-center gap-5">
              <img
                className="w-10 rounded-full"
                src={assets.user_icon}
                alt="User Icon"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img
                className="w-10 rounded-full"
                src={assets.gemini_icon}
                alt="Gemini Icon"
              />
              {loading ? (
                <div className="loader w-full flex flex-col gap-3 animate-pulse">
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                </div>
              ) : (
                <p
                  className="text-base font-normal leading-7"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-4 w-full max-w-4xl pt-0 pb-0 pr-5 pl-5 mx-auto">
          <div className="search-box flex items-center content-between gap-5 bg-[#f0f4f9] pt-2 pb-2 pr-5 pl-5 mb-4 rounded-3xl">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none p-2 text-md"
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div className="flex items-center gap-4">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt="Gallery Icon"
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt="Mic Icon"
              />
              <img
                onClick={() => onSent()}
                className="w-6 cursor-pointer"
                src={assets.send_icon}
                alt="Send Icon"
              />
            </div>
          </div>
          <p className="text-sm text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
