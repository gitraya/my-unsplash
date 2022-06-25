import List from "../list.json";
import { useState } from "react";
import ModalDelete from "./Modals/Delete";
const Main = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const toggleModalDelete = () => setModalDelete(!modalDelete);

  return (
    <main
      className={`mt-2 sm:mt-8 mb-2 px-6 sm:px-10 md:px-20 w-full flex ${
        List.length ? "" : "h-full"
      }`}
    >
      {List.length > 0 ? (
        <div className="w-full masonry sm:masonry-sm md:masonry-md space-y-6">
          {List.map((item, index) => {
            return (
              <div
                className="break-inside shadow-sm rounded-lg relative"
                key={index}
              >
                <img
                  alt={item.name}
                  src={item.url}
                  className="w-full rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col p-5 bg-black/0 rounded-lg opacity-0 hover:opacity-100 hover:bg-black/50">
                  <button
                    type="button"
                    onClick={toggleModalDelete}
                    className="w-min ml-auto text-rose-500 border-rose-500 border font-medium rounded-full text-sm px-3.5 py-1 text-center"
                  >
                    delete
                  </button>
                  <h3 className="text-xl font-semibold text-white mt-auto">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="self-center w-full text-center text-lg font-semibold items-center">
          No images found
        </div>
      )}

      <ModalDelete isOpen={modalDelete} onClose={toggleModalDelete} />
    </main>
  );
};

export default Main;
