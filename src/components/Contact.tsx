import React from "react";
import { FaPaw, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Contact() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div id="contato" className="pt-20 mx-auto font-amatic">
        <div className="container flex flex-col justify-center mx-auto">
          <div className="flex items-center mx-auto">
            <h1 id="sobrenós" className="px-5 text-6xl font-bold text-center ">
              Entre em contato conosco
            </h1>
            <FaPaw className="text-4xl text-primary-600" />
          </div>
          <div className="container flex justify-center pt-10 mx-auto">
            <img className="max-w-2xl rounded" src="/dogecat.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto mt-5">
        <button
          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none bg-primary-600 hover:shadow-lg focus:outline-none"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          INFORMAÇÕES
        </button>
      </div>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto max-w-sm mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Canais de atendimento
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-3xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex flex-col items-start ml-16">
                  <span className="flex flex-row items-start py-4 space-x-3 text-xl text-gray-700">
                    <FaPhone className="text-2xl text-primary-600" />
                    <p> 11 2255-2255 </p>
                  </span>
                  <span className="flex flex-row items-start py-4 space-x-3 text-xl text-gray-700">
                    <FaWhatsapp className="text-2xl text-primary-600" />
                    <p>11 99955-9999</p>
                  </span>
                  <span className="flex flex-row items-start py-4 space-x-3 text-xl text-gray-700">
                    <FaEnvelope className="text-2xl text-primary-600" />
                    <p>example@gmail.com</p>
                  </span>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-gray-300 border-solid rounded-b">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none hover:shadow-lg focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    <FaPaw className="text-2xl text-green-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
