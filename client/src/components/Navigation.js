import { useState } from "react";
import Search from "./Search";
import ModalCreate from "./Modals/Create";

const Navigation = () => {
  const [modalCreate, setModalCreate] = useState(false);
  const toggleModalCreate = () => setModalCreate(!modalCreate);
  return (
    <nav className="w-full h-40 sm:h-20 flex flex-wrap items-center py-6 sm:py-0 px-6 sm:px-10 md:px-20 fixed top-0 z-50 bg-white">
      <img src="/images/my_unsplash_logo.svg" alt="Logo" className="h-7 mr-3" />
      <Search />
      <button
        type="button"
        onClick={toggleModalCreate}
        className="ml-auto shadow-md focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        <span className="hidden sm:flex">Add a photo</span>
        <i className="fa-solid fa-upload flex sm:hidden" />
      </button>
      <ModalCreate isOpen={modalCreate} onClose={toggleModalCreate} />
    </nav>
  );
};

export default Navigation;
