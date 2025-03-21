import React from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import Waves from "../components/Waves";
import { SubHeading } from "../components/SubHeading";

export function SignUp(){
    return (
        <div className="h-screen flex justify-center">
        <div className="flex justify-center w-full h-full bg-[#F3F3F3] [--color:#E1E1E1] [background-image:linear-gradient(0deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color)_25%,var(--color)_26%,transparent_27%,transparent_74%,var(--color)_75%,var(--color)_76%,transparent_77%,transparent)] [background-size:55px_55px]">
        
            <div className="relative w-100 h-160 pt-5 my-12 shadow-2xl bg-gray-700 rounded overflow-hidden flex flex-col items-center space-y-2">
            <div className="h-full w-full absolute inset-0 z-0">
                <Waves />
            </div>
                <Heading className="relative font-display" label={"SignUp"}></Heading>
                <SubHeading className="relative font-display" label={"Welcome! Please sign up to get started"}></SubHeading>
            <div className="text-white relative space-y-5 py-8">
                <InputBox label={"Fullname"} placeholder={""}></InputBox>
                <InputBox label={"Username"} placeholder={""}></InputBox>
                <InputBox label={"Password"} placeholder={""}></InputBox>
                <InputBox label={"Branch"} placeholder={""}></InputBox>
            </div>
            <div className="relative">
                <Button label={"Login"}></Button>
            </div>
            </div>
        </div>
        </div>
    )
}
