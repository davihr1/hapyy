import { useEffect } from "react";

export const Verified = 'https://scontent.faqa6-1.fna.fbcdn.net/v/t39.8562-6/348844619_770943601161134_682627952237959991_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=U00jEL4OoSQAX-KRLfa&_nc_ht=scontent.faqa6-1.fna&oh=00_AfDRLRyt_NoOsx_2NmXykotovYJSZZq7YfNV02WwQLUbmQ&oe=64B1AB5E'

export function Home() {
  useEffect(() => {
    document.title = 'Perfil'
  })
  return (
    <div className="w-screen flex flex-col p-20 items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <img
         src="https://scontent.faqa6-1.fna.fbcdn.net/v/t39.30808-6/358622870_3572711753000561_132579872199898720_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_eui2=AeFy1sAPX_S8kqNz0bdtSFLAcT7fSQx7x1txPt9JDHvHW0gWjDkkLeYOQLKI6LqYDZrFThk7ZESRjCYlm3uvk3mD&_nc_ohc=pLGTfDmDlUsAX-Jik5_&_nc_ht=scontent.faqa6-1.fna&oh=00_AfB0pZP3Ri7doPnqVzEOKKmyF7fJLmPJ_1f3cNccTKXtTA&oe=64B0F47E"
          className="rounded-full w-32" />

        <div className="flex items-center gap-2 justify-center h-10" >
          <h1 className="text-main-100 text-3xl font-medium mt-2 dark:text-dark-1000">@davihenrique</h1>
          <img src={Verified} className="rounded-full w-4 mt-2" title='this profile is real booster'/>
        </div>
      </div>

      <nav className="m-6 flex flex-col gap-4" >
        <a href="https://www.rocketseat.com.br/ignite" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-main-100 dark:border-dark-1000 border-2 mobile:w-[80vw]
        text-black-250 dark:text-dark-1000 text-lg"  target="_blank" >
          Rocketseat - ignite
        </a>

        <a href="https://www.betrybe.com" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-main-100 dark:border-dark-1000 border-2 mobile:w-[80vw]
        text-black-250 dark:text-dark-1000 text-lg"  target="_blank" >
         Trybe Formação completa em tecnologia
        </a>

        <a href="https://ada.tech/sou-aluno" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-main-100 border-2 mobile:w-[80vw]
        text-black-250 dark:text-dark-1000 dark:border-dark-1000 text-lg" >
          Ada Tech
        </a>

        <a href="https://github.com/davihr1" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-main-100 dark:border-dark-1000 border-2 animate-pulse mobile:w-[80vw]
        text-black-250 dark:text-dark-1000 text-lg" >
          github - portfolio the code
        </a>

      </nav>

      <footer>

      </footer>
    </div>
  );
}