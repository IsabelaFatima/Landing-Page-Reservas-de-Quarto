
export default function Home() {
    return (
        <>
        <section className="w-full h-screen font-sans flex justify-center items-center h-96 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className="w-3/5 h-12 rounded-lg flex  items-center bg-white">
                <div className="w-2/6">Localização:
                <input className="h-10" type="text" />
                </div>

                <div className="w-1/4">Adultos
                <select className="ml-4" name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                </select>
                </div>
                
                <div className="w-1/4">Crianças
                <select className="ml-4" name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                </select>
                </div>

                <div className="w-1/6 bg-orange-400 h-full rounded text-center text-white flex justify-center items-center">
                    <button>
                      Pesquisar  
                    </button>    
                </div>
        </div>
        </section>
    
        <section className="h-auto flex justify-center py-28">
            <div className="bg-white w-4/5 flex justify-center items-center px-14">
                <div className="w-3/6 pr-8">
                <h2 className="text-2xl font-semibold py-4 pl-4">Sobre Nós</h2>
                Nós nos dedicamos a oferecer uma experiência excepcional de aluguel de quartos. Com anos de experiência no setor, entendemos a importância de fornecer acomodações de qualidade e um serviço personalizado aos nossos clientes. Nosso objetivo é tornar a sua estadia confortável, conveniente e memorável.
                </div>
                <span className="w-1 h-40 bg-slate-400 mx-2 rounded"></span>
                <div className="w-3/6 flex justify-center">
                    <img className="w-4/5 h-72" src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </section>

        <section className="h-auto flex justify-center">
            <div className="bg-white w-4/5 flex justify-center items-center px-14">
                <div className="w-2/6">
                    <img className="w-72 h-80" src="https://images.pexels.com/photos/3460599/pexels-photo-3460599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="w-2/6 flex flex-col gap-4">
                    <img className="w-72 h-80" src="https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className="w-72 h-80" src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="w-2/6">
                    <h1 className="text-2xl font-semibold pb-4">Encontre o quarto perfeito para a sua estadia. </h1>
                    <p>Temos uma ampla seleção de quartos confortáveis e convenientemente localizados para atender às suas necessidades. Comece a explorar agora!</p>
                    <p>Oferecemos quartos individuais e compartilhados espaçosos e bem decorados, perfeitos para quem busca privacidade e tranquilidade durante a sua estadia. Cada quarto é equipado com comodidades modernas para garantir o seu conforto. Reserve o seu quarto individual hoje mesmo e aproveite uma estadia relaxante.</p>
                </div>
            </div>
        </section>

        <section className="w-full h-auto flex flex-col justify-center items-center py-10">
            <h1 className="text-2xl font-semibold py-10">Reservas</h1>
            <div className="flex justify-center w-4/5">
                <div className="w-2/6 flex flex-col justify-center items-center">
                    <img className="w-72 h-72" src="https://images.pexels.com/photos/2607113/pexels-photo-2607113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p className="font-semibold">Aparthotel Stare Miasto</p>
                    <p>Old Town, Poland, Kraków </p>                
                    <button className="py-3 px-8 m-4 rounded-md ring-2 ring-slate-200">Reserve Já</button>
                </div>
                <div className="w-2/6 flex flex-col justify-center items-center">
                <img className="w-72 h-72" src="https://images.pexels.com/photos/2363808/pexels-photo-2363808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className="font-semibold">7 Seasons Apartments Budapest 06.</p>
                <p> Terézváros, Hungary, Budapest</p>
                    <button className="py-3 px-8 m-4 rounded-md ring-2 ring-slate-200">Reserve Já</button>
                </div>

                <div className="w-2/6 flex flex-col justify-center items-center ">
                <img className="w-72 h-72" src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className="font-semibold">Cheval Three Quays at The Tower of London</p>
                <p>City of London, United Kingdom, London</p>
                <button className="py-3 px-8 m-4 rounded-md ring-2 ring-slate-300">Reserve Já</button>
                </div>
            </div>
           
            {/*  */}
        </section>

        <section className="w-full h-80 bg-slate-700 flex flex-col justify-center items-center gap-2 text-center">
            <div>
                <p className="text-2xl font-semibold text-white">Cadastre-se</p>
                <p className="text-white">Enviaremos as melhores ofertas para você!</p>
            </div>
            <div>
                <input type="text" placeholder=" Seu email..."  className="w-96 h-10 rounded"/>
                <button className="bg-orange-400 h-10 rounded px-6 ml-2 text-white">Inscrever</button>
            </div>
        </section>
        </>
    )
}
