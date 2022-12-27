import { GreaterThen } from "../SVGs";

import { toggleMoreInfo } from "../../App";
import { useAtom } from "jotai";

const InfoButton = () => {
  const [infoState, setInfoState] = useAtom(toggleMoreInfo);
  return (
    <div
      onClick={() => setInfoState(!infoState)}
      className="group cursor-pointer w-fit pr-2 pl-3 py-2
      border-none rounded-full bg-white flex gap-3 items-center
      mt-6"
    >
      <span className="uppercase text-gray-600 text-sm tracking-widest font-bold ">
        More
      </span>
      <button
        className={`w-7 aspect-square bg-gray-900 text-white rounded-full 
        ${infoState ? "-rotate-90" : "rotate-90"}
      flex justify-center items-center`}
      >
        <GreaterThen />
      </button>
    </div>
  );
};

export default InfoButton;
