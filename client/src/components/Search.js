import { useContext } from "react";
import { Context } from "./Context";

const Search = () => {
  const { setSearchQuery } = useContext(Context);

  return (
    <form className="order-last sm:order-none w-full sm:w-64 relative mt-4 sm:mt-0">
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name"
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-11"
      />
      <i className="fa-solid fa-magnifying-glass absolute top-3 left-4 text-gray-400" />
    </form>
  );
};

export default Search;
