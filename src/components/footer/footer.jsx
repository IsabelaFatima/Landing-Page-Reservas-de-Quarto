import { AiFillFacebook , AiFillTwitterSquare , AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-300 flex justify-around">
        <div className="flex flex-col py-10">
            <div><span className='text-orange-600'>@</span>2023</div>
            <a href="/" className='hover:underline hover:text-orange-600'>Privacidade</a>
            <a href="/" className='hover:underline hover:text-orange-600'>Termos</a>
            <a href="/" className='hover:underline hover:text-orange-600'>Mais informações</a>
        </div>
        <div className="flex flex-col py-10">
            <a href="/" className='text-2xl hover:bg-slate-100'><AiFillFacebook/></a>
            <a href="/" className='text-2xl hover:bg-slate-100'><AiFillTwitterSquare/></a>
            <a href="/" className='text-2xl hover:bg-slate-100'><AiFillInstagram/></a>
            <a href="/" className='text-2xl hover:bg-slate-100'><AiFillYoutube/></a>
        </div>
        
      </footer>
    </>
  )
}
