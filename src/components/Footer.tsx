import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <div className="absolute w-full bg-gray-200">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#48C1F1"
            fill-opacity="1"
            d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,176C840,181,960,235,1080,229.3C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container flex items-end justify-between w-full h-px mx-auto -mt-4 font-sans bg-gray-200">
        <div>
          <footer className="flex flex-col text-sm text-gray-200 ">
            <div>
              <p> Copyright &#169; 2020</p>
            </div>
            <div className="flex ">
              Desenvolvido com&nbsp;
              <FaHeart className="mt-1 text-red-600" /> &nbsp;por&nbsp;
              <span className="font-bold border-b-2 border-r-4 rounded cursor-pointer text-primary-700 hover:border-primary-700">
                Kayle
              </span>
            </div>
          </footer>
        </div>
        <div
          id="contato"
          className="space-y-3 text-xl text-gray-200 cursor-pointer "
        >
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}
