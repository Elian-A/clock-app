import { FC } from "react";

interface Info {
  id: number;
  title: string;
  data: string | number;
}

const Info: FC<{ info: Info }> = ({ info }) => {
  const { data, title } = info;
  return (
    <div className="flex justify-between items-center pb-4 last:pb-0">
      <p className="font-serif uppercase text-gray-400">{title}</p>
      <p className="font-sans font-bold text-white">{data}</p>
    </div>
  );
};

export default Info;
