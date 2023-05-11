const verificate = 'https://firebasestorage.googleapis.com/v0/b/mercurylabs-c3961.appspot.com/o/imgs_important%2Fverificad-portfolio.png?alt=media&token=425eaa08-6ea6-4f73-941a-c627e294d9ed'
const verificateSpace = 'https://firebasestorage.googleapis.com/v0/b/mercurylabs-c3961.appspot.com/o/imgs_important%2Fverificad05.png?alt=media&token=5b9fb587-d16c-4e29-8d2d-dce39cd7dcfb'

export function Home() {
  return (
    <div className="w-screen flex flex-col p-20 items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <img src="https://github.com/davihr1.png" className="rounded-full w-28" />

        <div className="flex items-center gap-2 justify-center h-10" >
          <h1 className="text-primary-100 text-xl font-medium mt-2">@davihenrique</h1>
          <img src={verificateSpace} className="rounded-full w-10 mt-2" title='this profile is real booster'/>
        </div>
      </div>

      <nav className="m-6 flex flex-col gap-4" >
        <a href="https://www.rocketseat.com.br/ignite" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 mobile:w-[80vw]
        text-primary-100 text-lg"  target="_blank" >
          Rocketseat - ignite
          <img src={verificate} className="rounded-full w-8 ml-2" title='this page is booster' />
        </a>

        <a href="https://www.betrybe.com" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 mobile:w-[80vw]
        text-primary-100 text-lg"  target="_blank" >
         Trybe Formação completa em tecnologia
          <img src={verificate} className="rounded-full w-8 ml-2" title='this page is booster' />
        </a>

        <a href="https://ada.tech/sou-aluno" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 mobile:w-[80vw]
        text-primary-100 text-lg" >
          Ada Tech
          <img src={verificate} className="rounded-full w-8 ml-2" title='this page is booster' />

        </a>

        <a href="https://github.com/davihr1" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 animate-pulse mobile:w-[80vw]
        text-primary-100 text-lg" >
          github - portfolio the code
        </a>

      </nav>

      <footer>

      </footer>
    </div>
  );
}