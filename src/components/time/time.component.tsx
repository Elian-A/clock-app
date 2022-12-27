import { FC } from "react";

const Time: FC<{ hours: string; minutes: string }> = ({ hours, minutes }) => {
  return (
    <p className="text-white text-8xl font-bold tracking-wide flex gap-1">
      <span>{`${hours}`}</span>
      {/* To Do: Center points */}
      <span>:</span>
      <span>{`${minutes}`}</span>
      <small className="text-2xl font-medium self-end pb-2">BST</small>
    </p>
  );
};

export default Time;
