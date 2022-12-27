import { FC } from "react";
import Info from "../info/info.component";
import { getInfoList } from "./infoList.utils";

const InfoList: FC<{ date: Date }> = ({ date }) => {
  const infoList = getInfoList(date);
  return (
    <div>
      {infoList.map((info) => (
        <Info key={info.id} info={info} />
      ))}
    </div>
  );
};

export default InfoList;
