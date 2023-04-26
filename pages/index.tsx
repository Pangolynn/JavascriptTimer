import { Inter } from "next/font/google";
import Timer from "@/components/Timer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex h-screen mt-8 container text-center mx-auto ${inter.className}`}
    >
      <div className="container mx-auto">
        <h1 className="text-[40px] font-mono pb-8">
          Java<sub className="align-middle">(script)</sub> Timer
        </h1>
        <hr className="yellow-500"></hr>
        <Timer className="timer rounded container mx-auto mt-10 p-10 max-w-lg bg-opacity-50 bg-white"></Timer>
      </div>
    </main>
  );
}
