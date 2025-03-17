"use client"

import { useEffect } from "react";

export default function Dashboard(){
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if(!token){
            window.location.href = "/";
        }
    }, [])
    return (
        <div className="h-screen w-screen relative z-0" style={{
            backgroundImage: "url('background.jpg')",
            backgroundSize: 'cover'
        }}>
            <div className="bg-black absolute w-full h-full opacity-70 flex justify-center items-center z-10"></div>
            <div className="relative z-20 text-white w-full h-full flex justify-center items-center flex-col"></div>
        </div>
    );
}