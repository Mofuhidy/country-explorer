import CountryBox from "../components/CountryBox";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className=" h-10 w-full bg-sec p-2 flex items-center ">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="p-1 pl-8 rounded text-blue-950 bg-slate-200 placeholder:text-xs text-xs  focus-visible:outline-0 w-48 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search by country name"
            />
          </div>
        </div>
      </div>
      <div className="countries-grid grid grid-cols-2 sm:grid-cols-4 container">
        <CountryBox />
        <CountryBox />
      </div>
    </>
  );
}
export default HomePage;
