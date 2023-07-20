import { useNavigate } from "react-router-dom";
import yemen from "../assets/tn_ym-flag.png";
import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";
function CountryBox() {
  const navigate = useNavigate();

  return (
    <>
      <div className="country-box col-span-1 text-white p-4 relative flex flex-col">
        <button type="button" onClick={() => navigate(`/conutrydata/`)}>
          <FiArrowRightCircle className=" absolute right-2 top-1 text-xl" />
        </button>
        <div className=" h-20 w-20 self-center">
          <img src={yemen} alt="yemen" />
        </div>
        <div className="smallDetails self-end">
          <p className="countryName font-bold uppercase text-right text-xl">
            Yemen
          </p>
          <p className="countryName font-light text-sm text-right">Sanaa</p>
          <p className="population  text-sm">
            population: <span className=" font-bold text-base">30M</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default CountryBox;
