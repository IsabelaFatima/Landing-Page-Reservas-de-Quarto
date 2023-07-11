
export default function Home() {
    return (
        <>
            <section className="w-full h-screen font-sans flex justify-center items-center h-96 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                <div className="w-4/5 h-auto rounded-lg flex flex-col items-center bg-white lg:flex-row">
                    <div className="w-full flex border-b-2 border-orange-300 lg:border-0">
                        <p className="p-2">Localização:</p> 
                        <input className="w-full h-10 " type="text" />
                    </div>

                    <div className="w-full flex border-b-2 border-orange-300 lg:justify-around lg:border-0 ">
                        <p className="p-2">Adultos</p>
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

                    <div className="w-full flex border-b-2 border-orange-300 lg:justify-around lg:border-0">
                    <p className="p-2">Crianças</p>
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

                    <div className="w-full bg-orange-400 h-full rounded text-center text-white flex justify-center items-center hover:bg-orange-800">
                        <button className="h-12">
                            Pesquisar
                        </button>
                    </div>
                </div>
            </section>


            <section className="h-auto flex justify-center">
                <div className="flex flex-col justify-center items-center px-4 lg:flex-row ">
                    <div className="flex justify-center items-center my-10 gap-4 sm:gap-6">
                        <div className="w-1/2">
                            <img className="w-44 h-56 sm:w-60 sm:h-72" src="https://images.pexels.com/photos/3460599/pexels-photo-3460599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-4">
                            <img className="w-44 h-56 sm:w-60 sm:h-72" src="https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <img className="w-44 h-56 sm:w-60 sm:h-72" src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>

                    <div className="px-10 text-center lg:w-1/2">
                        <h1 className="text-2xl font-semibold pb-4 lg:pb-8">Encontre o quarto perfeito para a sua estadia. </h1>
                        <p>Temos uma ampla seleção de quartos confortáveis e convenientemente localizados para atender às suas necessidades. Comece a explorar agora!</p>
                        <p>Oferecemos quartos individuais e compartilhados espaçosos e bem decorados, perfeitos para quem busca privacidade e tranquilidade durante a sua estadia. Cada quarto é equipado com comodidades modernas para garantir o seu conforto. Reserve o seu quarto individual hoje mesmo e aproveite uma estadia relaxante.</p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center py-10">
                <h1 className="text-2xl font-semibold py-10">Reservas</h1>
                <div className="w-full flex justify-center px-4 gap-2 sm:gap-4">

                    <div className="w-2/6 flex flex-col justify-around items-center">
                        <img className="w-full h-44 sm:h-52" src="https://images.pexels.com/photos/2607113/pexels-photo-2607113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p className="font-semibold">Aparthotel Stare Miasto</p>
                        <p>Old Town, Poland, Kraków </p>
                        <button className="py-3 px-8 m-4 rounded-md ring-2 ring-slate-200 hover:bg-slate-300">Reserve Já</button>
                    </div>

                    <div className="w-2/6 flex flex-col justify-around items-center">
                        <img className="w-full h-44 sm:h-52" src="https://images.pexels.com/photos/2363808/pexels-photo-2363808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p className="font-semibold">Seasons Apartments 06.</p>
                        <p> Terézváros, Hungary, Budapest</p>
                        <button className="py-3 px-8 m-4 rounded-md ring-2 ring-slate-200 hover:bg-slate-300">Reserve Já</button>
                    </div>

                    <div className="w-2/6 flex flex-col justify-around items-center">
                        <img className="w-full h-44 sm:h-52" src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p className="font-semibold">Cheval Three Quays</p>
                        <p>United Kingdom, London</p>
                        <button className="py-3 px-8 m-4 rounded-md ring-2 ring-slate-200 hover:bg-slate-300">Reserve Já</button>
                    </div>
                </div>

            </section>

            <section className="w-full h-80 bg-slate-700 flex flex-col justify-center items-center gap-2 text-center">
                <div>
                    <p className="text-2xl font-semibold text-white">Cadastre-se</p>
                    <p className="text-white">Enviaremos as melhores ofertas para você!</p>
                </div>
                <div>
                    <input type="text" placeholder=" Seu email..." className="w-96 h-10 rounded" />
                    <button className="bg-orange-400 h-10 rounded my-2 px-6 ml-2 text-white hover:bg-orange-700">Inscrever</button>
                </div>
            </section>
        </>
    )
}
