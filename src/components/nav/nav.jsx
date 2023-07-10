
export default function Nav() {
    return (
      <>
        <nav className='bg-slate-100 flex justify-between py-6 px-10 sm:px-20 ;
  '>
          <div className="font-semibold text-2xl">Logo</div>
  
          <div className="flex">
          <a href="/" className="px-3 text-sm underline font-semibold hover:text-orange-600 sm:px-4 sm:text-base">Anuncie</a>
          <a href="/" className="px-3 text-sm underline	font-semibold	hover:text-orange-600 sm:px-4 sm:text-base">Cadastre-se</a>
          </div>
          
        </nav>
      </>
    )
  }
  