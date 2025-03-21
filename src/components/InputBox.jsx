import React from "react";
export function InputBox({label, placeholder}){
    return <div className="flex flex-col">
            {label}
            <input
                className="font-display bg-[#212121] max-w-[190px] h-[40px] p-[10px] border-2 border-white rounded-[5px] focus:text-cyan-500 focus:bg-[#212121] focus:outline-cyan-500 focus:shadow-[-3px_-3px_15px_rgb(0,255,255)] transition-[box-shadow] duration-[0.1s]"
                type="text" placeholder={placeholder}/>
    </div>
}