import {
  FaPaw,
  FaHome,
  FaStethoscope,
  FaShoppingCart,
  FaDog,
  FaCat,
  FaClinicMedical,
  FaBone,
  FaLaughBeam,
  FaUserNurse,
} from "react-icons/fa";

export function Servi() {
  return (
    <div className="font-bold bg-gray-200 font-amatic">
      <div className="container flex flex-col justify-center mx-auto">
        <div className="flex items-center mx-auto">
          <h1 id="sobrenós" className="px-5 text-6xl font-bold text-center ">
            Sobre nós
          </h1>
          <FaPaw className="text-4xl text-primary-600" />
        </div>
        <div className="flex flex-col items-center text-3xl tracking-wider">
          <p>
            Aqui seu animal de estimação tem atendimento médico veterinário
            <span className="text-green-700"> completo</span>,
          </p>
          <p>
            para que sua <span className="text-green-700">saúde</span> seja
            tratada com total zelo e&nbsp;
            <span className="text-green-700">compromisso</span>.
          </p>
        </div>
        <div className="flex flex-col items-center pt-32 text-3xl tracking-wider">
          <div className="flex items-center mx-auto">
            <h1 id="servi" className="px-5 text-6xl font-bold text-center ">
              Serviços
            </h1>
            <FaPaw className="text-4xl text-primary-600" />
          </div>
          <p className="text-3xl font-bold ">
            Confira as nossas
            <span className="text-green-700"> especialidades </span> e veja que
            podemos fazer pelo seu Pet hoje
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto mt-5">
        <div className="grid w-full grid-flow-row grid-cols-4 gap-16 pt-10 pb-20 mx-auto">
          <div className="flex flex-col items-center w-auto h-auto border shadow-lg rounded-2xl ">
            <FaStethoscope className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Consultas</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Entre em contato para marcarmos uma consulta.
            </p>
          </div>
          <div className="flex flex-col items-center h-64 border shadow-lg rounded-2xl">
            <FaHome className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Hospedagem</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Durante as férias, é aqui que os amigos peludos vão passar o
              tempo.
            </p>
          </div>
          <div className="flex flex-col items-center h-64 border shadow-lg rounded-2xl">
            <FaDog className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Banho e Tosa</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Com produtos de qualidade, acessórios especiais e todo carinho
              para o seu pet.
            </p>
          </div>
          <div className="flex flex-col items-center h-64 border shadow-lg rounded-2xl">
            <FaShoppingCart className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Pet Shop</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Encontre aqui variadas opções para conforto, alimentação e
              diversão.
            </p>
          </div>
          <div className="flex flex-col items-center w-auto h-auto border shadow-lg rounded-2xl ">
            <FaClinicMedical className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Internação</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Instalações confortaveis, com cuidado e acompanhamento 24hrs.
            </p>
          </div>
          <div className="flex flex-col items-center h-64 border shadow-lg rounded-2xl">
            <FaBone className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Dietas</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Ajudando na qualidade de vida, melhorando a sua alimentação.
            </p>
          </div>
          <div className="flex flex-col items-center h-64 border shadow-lg rounded-2xl">
            <FaLaughBeam className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Creche</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Aqui seu pet pode passar um tempo para bricadeiras enquanto vc
              trabalha.
            </p>
          </div>
          <div className="flex flex-col items-center h-64 border shadow-lg rounded-2xl">
            <FaUserNurse className="mt-5 text-6xl text-primary-600" />
            <h1 className="text-4xl font-bold">Cirurgia</h1>
            <p className="m-3 font-sans font-normal text-center text-gray-600 text-md">
              Equipamentos de última geração garantindo total segurança de seu
              animal durante a operação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
