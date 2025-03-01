"use client";
import React from "react";

function PromoBanner() {
  return (
    <header className="flex flex-col justify-center items-end px-16 py-6 w-full text-2xl font-bold tracking-widest text-white uppercase bg-green-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59de2e2665230e9fcd43ed86d14156b103f1847ec7c3fa997db7736de7c99e7e?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
          alt="Promotion icon"
          className="object-contain shrink-0 w-12 aspect-[1.12]"
        />
        <p className="flex-auto self-start max-md:max-w-full">
          🔥 FLASH SALE : 40% SUR TOUT • CODE : FLASH40 • Fin dans = 23:30:59
        </p>
      </div>
    </header>
  );
}

export default PromoBanner;
