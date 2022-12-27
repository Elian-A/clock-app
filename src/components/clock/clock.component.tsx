import Greeting from "../greeting/greeting.component";
import InfoButton from "../infoButton/infoButton.component";
import InfoList from "../infoList/infoList.component";
import Location from "../location/location.component";
import Time from "../time/time.component";

import { useClock } from "../../hooks/clock";
import { FC } from "react";

const Clock: FC<{ infoState: boolean }> = ({ infoState }) => {
  const { date, hours, minutes } = useClock();

  return (
    <div className={`flex flex-col gap-2`}>
      <Greeting hours={+hours} />
      <Time hours={hours} minutes={minutes} />
      <Location />
      <InfoButton />
      {infoState ? <InfoList date={date} /> : null}
    </div>
  );
};

export default Clock;
