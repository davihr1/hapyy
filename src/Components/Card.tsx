import logoCard from './../assets/cardstudant.png'

export function Card() {
  return (
    <main className='w-full flex items-center justify-between px-8
    mobile:items-center
    mobile:flex-col
     mobile:space-y-10 mobile:mt-4'>
      <div className='flex flex-col text-primary-100'>
        <h1 className='text-primary-100 font-bold text-[1.25rem] mb-6'>Hello World! my name is Davi Henrique </h1>

        <p className='w-[28rem] mobile:items-center mobile:w-[80vw]'>
          Olá <span className='text-ignite-100'>Internautas</span> sou developer frontend cursando expert Reactjs na <a className='text-[#8257e6] border-b p-1 m-3' href="https://rocketseat.com.br">@Rocketseat</a>
          .Sou apaixonado pelo mundo da programação/tecnologia e gostode usar a tecnologia para melhorar o mundo
        </p>
      </div>

      <img src={logoCard} alt="" className='h-[28rem]'/>
    </main>
  )
}


{/* <span className='flex gap-4 items-center justify-center'>
        <img src="https://xesque.rocketseat.dev/platform/tech/node.svg" alt="" />
        <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt="" />
        <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="" />
      </span> */}