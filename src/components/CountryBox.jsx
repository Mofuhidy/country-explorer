import { useNavigate } from "react-router-dom";

import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";
function CountryBox({ flag, name, capital, pop, id, alt }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="country-box col-span-1 text-white p-4 relative flex flex-col"
        id={id}>
        <button type="button" onClick={() => navigate(`/conutrydata/`)}>
          <FiArrowRightCircle className=" absolute right-2 top-1 text-xl" />
        </button>
        <div className=" h-20 w-20 self-center">
          <img src={flag} alt={alt} />
        </div>
        <div className="smallDetails self-end">
          <p className="countryName font-bold uppercase text-right text-xl">
            {name}
          </p>
          <p className="countryName font-light text-sm text-right">{capital}</p>
          <p className="population  text-sm">
            population: <span className=" font-bold text-base">{pop}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default CountryBox;
