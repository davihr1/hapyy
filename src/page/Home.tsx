import { Card } from "../Components/Card";
import { Certificates } from "../Components/Curses";
import { Footer } from "../Components/Footer";

export function Home() {
  return (
      <div className="flex items-center justify-center flex-col mt-10">
        <Card />
        <Footer />

        <Certificates />
      </div>
  );
}