"use client";

export default function TechSymbol() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-8 pr-10 hidden lg:block">
      <div className="relative w-[300px] h-[300px]">
        {/* Rotating circles */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#dc2626] rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#dc2626] rounded-full" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#dc2626] rounded-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#dc2626] rounded-full" />
        </div>

        {/* Hexagon */}
        <div className="absolute inset-0 animate-spin-reverse-slow">
          <div className="absolute inset-0 border-2 border-[#dc2626] opacity-20 rotate-45" />
        </div>

        {/* Code brackets */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[#FF3131] text-6xl font-mono opacity-20 animate-pulse">
            {"{"}
          </div>
          <div className="text-[#FF3131] text-6xl font-mono opacity-20 animate-pulse ml-16">
            {"}"}
          </div>
        </div>
      </div>
    </div>
  );
}
