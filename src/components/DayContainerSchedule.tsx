import { DataProps } from '../interfaces/schedules.interfaces';
import '../styles/schedule/schedule.css';
import { ContainerSchedule } from './ContainerSchedule';

export interface Props {
  borderRightSchedule?: boolean;
  data: DataProps[];
  daysVal: string;
  daysPosition: string;
  onClickId?: (id: string) => void;
}

export const DayContainerSchedule = ({
  borderRightSchedule,
  data,
  daysVal,
  daysPosition,
  onClickId,
}: Props) => {
  return (
    <div
      className={
        daysPosition === 'saturday'
          ? 'container_schedule_lineTime_caps_mini_courseSat'
          : 'container_schedule_lineTime_caps_mini_course'
      }
      style={
        daysPosition !== 'saturday'
          ? {
              borderRight: borderRightSchedule ? '1px solid #D4D4D4' : '',
            }
          : {}
      }
    >
      {data.map((value, keyIndex) =>
        value.days[`${daysPosition}`].includes(`${daysVal}`) ? (
          <ContainerSchedule
            key={keyIndex}
            title={value.name}
            backgroundColor={value.color}
            idValue={value._id}
            onClickId={onClickId}
          />
        ) : null
      )}
    </div>
  );
};
