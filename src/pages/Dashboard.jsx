import React from "react";
import { Link } from "react-router-dom";

export function Dashboard(){
    return <div className="font-display item-center text-center mt-70 pd-5">
        You have successfully logged in
        <div className="flex justify-center gap-3"><div className="hover:underline">
        <Link to={'/login'}>Login</Link></div>
        <div className=" hover:underline">
        <Link to={'/signup'}>SignUp</Link>
        </div></div>
    </div>
}