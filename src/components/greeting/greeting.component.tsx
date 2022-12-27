import { FC } from "react";
import { Moon, Sun } from "../SVGs";
import { greet } from "./greeting.utils";

const Greeting: FC<{ hours: number }> = ({ hours }) => {
  return (
    <div className="flex gap-3 items-center">
      <i className="pb-1">{hours > 6 && hours < 18 ? <Sun /> : <Moon />}</i>
      <p className="font-mono font-thin text-white text-2xl tracking-wider uppercaseb">
        {greet(hours)}
      </p>
    </div>
  );
};

export default Greeting;
