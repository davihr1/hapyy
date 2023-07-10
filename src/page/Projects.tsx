import { useEffect } from "react";

export function Projects() {
  useEffect(() => {
    document.title = 'Certificado'
  } )
  return (
    <div className="gap-10 flex flex-col items-center justify-between">

      <div className="">
        <h1 className="text-primary-100 text-[1.5rem] px-10 mt-20">Digital Innovation One</h1>

        <div className="overflow-x-auto w-screen flex items-center gap-10 py-10">
          <img src="https://hermes.dio.me/certificates/cover/E9F6BC9F.jpg" className="w-[20rem] mx-6" />
          <img src="https://hermes.dio.me/certificates/cover/D8998B77.jpg" className="w-[20rem] mx-10" />
          <img src="https://hermes.dio.me/certificates/cover/E5FBE584.jpg" className="w-[20rem]" />
          <img src="https://hermes.dio.me/certificates/cover/A672F362.jpg" className="w-[20rem]" />
          <img src="https://hermes.dio.me/certificates/cover/A02378BB.jpg" className="w-[20rem]" />
          <img src="https://hermes.dio.me/certificates/cover/B5058F42.jpg" className="w-[20rem]" />
        </div>
      </div>
    </div>
  );
}