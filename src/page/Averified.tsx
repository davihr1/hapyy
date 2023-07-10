import { useEffect } from "react";
import { Verified } from "./Home";

export function Atmverified() {
  useEffect(() => {
    document.title = 'Atom Verified';
  })
  return (
    <div className="flex h-screen flex-col bg-verse bg-cover">
      <main className="px-6 flex flex-col gap-2 py-36" >
        <img src={Verified} className="w-20 ml-28" alt="verified img" title="selo verified" />
        <h1 className="text-5xl font-light" >
          Intoducing Atom Verified
        </h1>
        <p className="font-medium w-64" >
          A subscription bundle to help you establish your presence on Instagram and Facebook.
        </p>

        <button className="bg-main-100 w-52 h-14 text-primary-100 mt-4 rounded-full" >ThreVision</button>
      </main>
    </div>
  );
}