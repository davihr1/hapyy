import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate()

  function handleProject() {
    navigate('/Projects');
  }

  return (
    <footer className="flex p-10 items-center justify-between w-[300px]">
      <a href="https://github.com/davihr1" target='_blank' className='cursor-pointer flex items-center justify-center gap-4 focus:border-none'>
        <img src="/github.png" alt="github" className='w-[2rem]'/>
      <h1 className='text-primary-100'>Github: Davi Henrique</h1>
      </a>
    </footer>
  )
}
