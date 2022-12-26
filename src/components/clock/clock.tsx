import Greeting from "../greeting/greeting";
import InfoButton from "../infoButton/infoButton";
import InfoList from "../infoList/infoList";
import Location from "../location/location";
import Time from "../time/time";

import { getIcon } from "./utils";

import { useClock } from "../hooks/clock";

const Clock = () => {
  const { date, hours, minutes } = useClock();
  const icon = getIcon(+hours);

  return (
    <div>
      <Greeting icon={icon} hours={hours} />
      <Time hours={hours} minutes={minutes} />
      <Location />
      <InfoButton />
      <InfoList date={date} />
    </div>
  );
};

export default Clock;
