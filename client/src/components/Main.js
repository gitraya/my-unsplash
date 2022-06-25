import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import ModalDelete from "./Modals/Delete";
import { Context } from "./Context";

const Main = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { updateImages } = useContext(Context);

  const toggleModalDelete = () => setModalDelete(!modalDelete);

  const onDeleteImage = (id) => {
    setImageId(id);
    toggleModalDelete();
  };

  useEffect(() => {
    axios.get("/api/images").then((res) => {
      setImages(res.data);
      setIsLoading(false);
    });
  }, [updateImages]);

  return (
    <main
      className={`mt-2 sm:mt-8 mb-2 px-6 sm:px-10 md:px-20 w-full flex ${
        images.length ? "" : "h-full"
      }`}
    >
      {images.length > 0 ? (
        <div className="w-full masonry sm:masonry-sm md:masonry-md space-y-6">
          {images.map((item) => {
            return (
              <div
                className="break-inside shadow-sm rounded-lg relative"
                key={item.id}
              >
                <img
                  alt={item.name}
                  src={item.url}
                  className="w-full rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col p-5 bg-black/0 rounded-lg opacity-0 hover:opacity-100 hover:bg-black/50">
                  <button
                    type="button"
                    onClick={() => onDeleteImage(item.id)}
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
        <div className="self-center w-full text-center text-lg font-semibold items-center justify-center">
          {isLoading ? <Spinner /> : "No images found"}
        </div>
      )}

      <ModalDelete
        isOpen={modalDelete}
        onClose={toggleModalDelete}
        imageId={imageId}
      />
    </main>
  );
};

export default Main;
