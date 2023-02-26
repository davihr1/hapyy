import { useNavigate } from "react-router-dom";

import { Card } from "../Components/Card";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export function Home() {
    const navigate = useNavigate()

    function handleSubscriber() {
        navigate('/Projects');
    }
  return (
      <div className="flex items-center justify-center flex-col  w-screen h-screen">
        <Card />
        <Footer />
      </div>
  );
}