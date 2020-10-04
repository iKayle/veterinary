export function Hero() {
  return (
    <div id="início" className="relative font-amatic">
      <div className="absolute h-40">
        <video src="dog2.mov" playsInline autoPlay muted loop></video>
      </div>
      <div className="absolute w-full h-full bg-black bg-opacity-25" />
      <div className="container relative z-10 flex justify-between mx-auto">
        <div className="flex justify-center w-64 mt-6">
          <img className="h-auto" src="clinica.png" alt="logo clinica" />
        </div>
        <nav className="cursor-pointer ">
          <ul className="flex justify-between pt-20 space-x-8 font-semibold text-primary-900">
            <li className="px-3 py-2 text-xl font-bold tracking-wider text-white border-white rounded-lg bg-primary-600 hover:bg-white hover:text-primary-600 border-1 ">
              <a href="#início">Início</a>
            </li>
            <li className="px-3 py-2 text-xl font-bold tracking-wider text-white border-white rounded-lg bg-primary-600 hover:bg-white hover:text-primary-600 border-1 ">
              <a href="#sobrenós">Sobre nós</a>
            </li>
            <li className="px-3 py-2 text-xl font-bold tracking-wider text-white border-white rounded-lg bg-primary-600 hover:bg-white hover:text-primary-600 border-1 ">
              <a href="#servi">Serviços</a>
            </li>
            <li className="px-3 py-2 text-xl font-bold tracking-wider text-white border-white rounded-lg bg-primary-600 hover:bg-white hover:text-primary-600 border-1 ">
              <a href="#equipe"> Nossa Equipe</a>
            </li>
            <li className="px-3 py-2 text-xl font-bold tracking-wider text-white border-white rounded-lg bg-primary-600 hover:bg-white hover:text-primary-600 border-1 ">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container relative z-50 flex flex-col items-start pt-32 ml-20 text-center">
        <h1 className="items-center px-2 py-4 text-4xl font-bold text-center text-white ">
          Desde o momento em que nossos
          <br /> amigos farejam <br /> seu caminho através da porta até que eles
          <br /> abanem o rabo à tarde,
          <br /> nós atendemos a sua natureza.
        </h1>
      </div>
      <div className="relative z-20 -mt-64">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#EDF2F7"
            fill-opacity="1"
            d="M0,64L30,106.7C60,149,120,235,180,250.7C240,267,300,213,360,197.3C420,181,480,203,540,218.7C600,235,660,245,720,240C780,235,840,213,900,186.7C960,160,1020,128,1080,138.7C1140,149,1200,203,1260,202.7C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
