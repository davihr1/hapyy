import './main.css';

function App() {
  return (
    <div>
      <div className='items-center flex flex-col justify-center w-full py-8'>
        <img className='rounded-full w-20' src="https://avatars.githubusercontent.com/u/63513686?v=4" alt="img" />
        <h1 className='text-white font-medium text-2xl'>Davi Henrique</h1>
      </div>
      <div className='items-center justify-center flex flex-col bg-[#111827] w-[90vw] mx-auto rounded-xl'>
        <h1 className='text-white font-medium text-3xl'>Games</h1>
        <div className='flex flex-row py-4'>
        <img className='px-4 rounded-md w-40' src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg" alt="fortnite" />
        <img className='px-4 rounded-md w-40' src="https://static-cdn.jtvnw.net/ttv-boxart/512980-285x380.jpg" alt="fallguys" />
        </div>
      </div>

      <div className='items-center justify-center flex flex-col bg-[#111827] w-[90vw] mx-auto rounded-xl my-10'>
        <h1 className='text-white font-medium text-3xl'>Cursos</h1>
        <div className='flex flex-row py-4'>

        <img className='px-4 rounded-md w-28 h-20' src="data:image/png;base64,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" alt="rocketseat" />
        <img className='px-4 rounded-md w-28 h-20' src="data:image/jpeg;base64,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" alt="rocketseat" />
        </div>
      </div>

      <div className='items-center justify-center flex flex-col bg-[#111827] w-[90vw] mx-auto rounded-xl my-10'>
        <h1 className='text-white font-medium text-3xl'>Social</h1>
        <div className='flex flex-row py-4'> 
        
        <img className='px-4 rounded-md w-28 h-20' src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="github" />
        <img className='px-4 rounded-md w-28 h-20' src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png" alt="discord" />
        <img className='px-4 rounded-md w-28 h-20' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default App
