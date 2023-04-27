import logoCard from './../assets/card-invite.svg'

export function Card() {
    return (
        <main>
          <img src={logoCard} alt="" />
          <span className='flex gap-4 items-center justify-center'>
            <img src="https://xesque.rocketseat.dev/platform/tech/node.svg" alt="" />
            <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt="" />
            <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="" />
          </span>
        </main>
    )
}
