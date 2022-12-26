import Greeting from "../greeting/greeting";
import InfoButton from "../infoButton/infoButton";
import InfoList from "../infoList/infoList";
import Location from "../location/location";
import Time from "../time/time";

import { moonUrl, sunUrl } from "./utils";

import { useClock } from "../hooks/clock";

const Clock = () => {
  const { date, hours, minutes } = useClock();
  const icon = {
    src: +hours > 6 && +hours < 18 ? sunUrl : moonUrl,
    alt: +hours > 6 && +hours < 18 ? "sun" : "moon",
  };

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
