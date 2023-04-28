import logoCard from './../assets/card-invite.svg'

export function Card() {
  return (
    <main className='flex-wrap flex flex-row items-center flex-1 justify-around w-full gap-x-10 h-[calc(100vh - 10rem)]'>
      <div>
        <h1 className='text-primary-100 text-[2rem] font-sans'>Hello World! my name is Davi Henrique </h1>

        <p className='text-primary-100 text-base flex-wrap max-w-[28rem]'>
          Olá <span>Internautas</span> sou developer frontend cursando expert Reactjs na <a className='text-[#8257e6] border-b p-1 m-3' href="https://rocketseat.com.br">@Rocketseat</a>
          .Sou apaixonado pelo mundo da programação/tecnologia e gostode usar a tecnologia para melhorar o mundo
        </p>
      </div>

      <img src={logoCard} alt="" className='mt-16'/>
    </main>
  )
}


{/* <span className='flex gap-4 items-center justify-center'>
        <img src="https://xesque.rocketseat.dev/platform/tech/node.svg" alt="" />
        <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt="" />
        <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="" />
      </span> */}