import { FC } from "react";
import Info from "../info/info.component";
import { getInfoList } from "./infoList.utils";

const InfoList: FC<{ date: Date }> = ({ date }) => {
  const infoList = getInfoList(date);
  return (
    <div
      className="flex flex-col gap-2 blur-[.3px] px-5 py-10"
      style={{ backgroundColor: "rgba(0 0 0 / .7)" }}
    >
      {infoList.map((info) => (
        <Info key={info.id} info={info} />
      ))}
    </div>
  );
};

export default InfoList;
