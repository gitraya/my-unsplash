const ModalDelete = ({ isOpen = false, onClose }) => {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      aria-modal="true"
      role="dialog"
      className={`${
        isOpen ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center bg-black bg-opacity-25`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start pb-4 pt-6 px-8 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Are you sure?
            </h3>
          </div>
          <form className="px-8 space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-normal text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                type="text"
                placeholder="******************"
                className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </form>
          <div className="flex items-center justify-end p-6 px-8 space-x-2 rounded-b border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Cancel
            </button>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
