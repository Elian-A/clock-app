import Greeting from "../greeting/greeting";
import InfoButton from "../infoButton/infoButton";
import InfoList from "../infoList/infoList";
import Location from "../location/location";
import Time from "../time/time";

import { useClock } from "../../hooks/clock";

const Clock = () => {
  const { hours, minutes } = useClock();

  return (
    <div className="flex flex-col gap-2">
      <Greeting hours={+hours} />
      <Time hours={hours} minutes={minutes} />
      <Location />
      {/* <InfoButton />
      <InfoList date={date} /> */}
    </div>
  );
};

export default Clock;
