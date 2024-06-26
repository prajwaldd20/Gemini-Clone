import React, { useContext, useState } from "react";
import { assets } from "../assets/assets/assets";
import { Context } from "../context/Context";
const SideArea = () => {
  const [extended, setExtended] = useState(true);

  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className=" font-Outfit min-h-screen inline-flex flex-col justify-between bg-slate-200  p-5 ">
      <div className="top">
        <img
          className=" h-5 w-5 block ml-3 cursor-pointer mb-4"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
        />
        <div
          onClick={() => newChat()}
          className="new-chat className='mt-10 inline-flex items-center gap-2 pt-2 pb-2 pl-3 pr-3 bg-[#cdced3] text-xl text-grey cursor-pointer rounded-3xl "
        >
          <img className=" h-5 w-5 " src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recents flex flex-col">
            <p className=" mt-8 mb-5 ">Recents</p>

            {prevPrompt.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry flex items-start gap-3 p-3 pr-10 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#c9d1db] "
                >
                  <img className=" h-5 w-5" src={assets.message_icon} />
                  <p>{item.slice(0, 18)} </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom flex-col ">
        <div className="help  hover:bg-[#c9d1db] flex items-start gap-3 p-3 pr-4 rounded-3xl text-[#282828] cursor-pointer ">
          <img className=" h-5 w-5" src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="activity  hover:bg-[#c9d1db] flex items-start gap-3 p-3 pr-4 rounded-3xl text-[#282828] cursor-pointer ">
          <img className=" h-5 w-5" src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="settings  hover:bg-[#c9d1db] flex items-start gap-3 p-3 pr-4 rounded-3xl text-[#282828] cursor-pointer">
          <img className=" h-5 w-5" src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideArea;
