import { icons } from "react-icons";
import { FaPaw } from "react-icons/fa";
export function Team() {
  return (
    <div id="equipe" className="mx-auto bg-gray-200 font-amatic">
      <div className="container flex flex-col justify-center mx-auto">
        <div className="flex items-center mx-auto">
          <h1 id="sobrenós" className="px-5 text-6xl font-bold text-center ">
            Nossa Equipe
          </h1>
          <FaPaw className="text-4xl text-primary-600" />
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto mt-5">
        <div className="flex flex-col items-center">
          <div className="grid w-full grid-flow-row grid-cols-4 gap-24 pt-10 pb-2 mx-auto">
            <div className="flex flex-col items-center w-64 h-64 rounded-full shadow-md ">
              <img
                className="object-cover w-64 h-64 rounded-full "
                src="dra.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="items-center mr-16 font-sans font-bold text-center text-primary-600 ">
            <h1>Dra Ana</h1>
            <p className="text-sm font-semibold text-gray-500 ">
              Médica Veterinária Clínica Médica e Intensivismo
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid w-full grid-flow-row grid-cols-4 gap-24 pt-10 pb-2 mx-auto">
            <div className="flex flex-col items-center w-64 h-64 rounded-full shadow-md ">
              <img
                className="object-cover w-64 h-64 rounded-full "
                src="dra1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="items-center mr-16 font-sans font-bold text-center text-primary-600 ">
            <h1>Dra Claudete </h1>
            <p className="text-sm font-semibold text-gray-500 ">
              Médica Veterinária Clínica Médica e Intensivismo
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid w-full grid-flow-row grid-cols-4 gap-24 pt-10 pb-2 mx-auto">
            <div className="flex flex-col items-center w-64 h-64 rounded-full shadow-md ">
              <img
                className="object-cover w-64 h-64 rounded-full "
                src="draline.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="items-center mr-16 font-sans font-bold text-center text-primary-600 ">
            <h1>Dra Fernanda </h1>
            <p className="text-sm font-semibold text-gray-500 ">
              Médica Veterinária Clínica Médica e Intensivismo
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid w-full grid-flow-row grid-cols-4 gap-24 pt-10 pb-2 mx-auto">
            <div className="flex flex-col items-center w-64 h-64 rounded-full shadow-md ">
              <img
                className="object-cover w-64 h-64 rounded-full "
                src="dra2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="items-center mr-16 font-sans font-bold text-center text-primary-600 ">
            <h1>Dra Aline </h1>
            <p className="text-sm font-semibold text-gray-500 ">
              Médica Veterinária Clínica Médica e Intensivismo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
