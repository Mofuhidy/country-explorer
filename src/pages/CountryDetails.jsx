import { BiChevronLeft } from "@react-icons/all-files/bi/BiChevronLeft.esm";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { BiMicrophone } from "@react-icons/all-files/bi/BiMicrophone";
import yemen from "../assets/tn_ym-flag.png";
import asia from "../assets/images/filled/asia.svg";
import { useNavigate } from "react-router-dom";
function CountryDetails() {
  const nav = useNavigate();
  return (
    <div>
      <div className=" bg-main w-full h-16 flex items-center justify-around">
        <button type="button" onClick={() => nav(`/`)}>
          <BiChevronLeft className=" text-3xl" />
        </button>
        <p className=" font-bold">Information and Stats</p>
        <div className="flex">
          <BiMicrophone className=" text-lg mr-2" />
          <AiFillSetting className=" text-lg" />
        </div>
      </div>
      <div className="contianer">
        <div className="general flex flex-row justify-around items-center h-48 bg-sec">
          <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
            <p className=" absolute top-36 font-bold uppercase">Asia</p>
            <div className=" w-24 ">
              <img src={asia} alt="Asia continent" />
            </div>
          </div>
          <div className="country flex flex-col-reverse items-center justify-around h-40 relative mb-6">
            <p className=" absolute top-36 font-bold uppercase">Yemen</p>
            <div className=" w-28">
              <img src={yemen} alt="yemen" />
            </div>
          </div>
        </div>
        <div className="details overflow-auto flex justify-center">
          <ul className=" flex flex-col justify-center w-full">
            <li className="flex justify-around h-16 items-center">
              <span className=" font-semibold">Data:</span>
              <span className=" font-medium text-base">hello 10</span>
            </li>
            <li className="flex justify-around h-16 items-center">
              <span className=" font-semibold">Data:</span>
              <span className=" font-medium text-base">hello 10</span>
            </li>
            <li className="flex justify-around h-16 items-center">
              <span className=" font-semibold">Data:</span>
              <span className=" font-medium text-base">hello 10</span>
            </li>
            <li className="flex justify-around h-16 items-center">
              <span className=" font-semibold">Data:</span>
              <span className=" font-medium text-base">hello 10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CountryDetails;
