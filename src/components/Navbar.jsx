import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { BiMicrophone } from "@react-icons/all-files/bi/BiMicrophone";

import icons8GoogleEarth from "../../public/icons8-google-earth.svg";

function Navbar() {
  return (
    <div className=" bg-main w-full h-16 flex items-center justify-around">
      <img src={icons8GoogleEarth} alt="google earth icon" className=" h-10" />
      <p className=" font-bold">Country Explorer</p>
      <div className="flex">
        <BiMicrophone className=" text-lg mr-2" />
        <AiFillSetting className=" text-lg" />
      </div>
    </div>
  );
}
export default Navbar;
