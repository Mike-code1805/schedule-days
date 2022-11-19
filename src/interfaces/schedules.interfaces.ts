import { Props as ContainerProps } from '../components/ContainerSchedule';
import { Props as ScheduleProps } from '../components/Schedule';

export interface DataProps {
  id: string;
  name: string;
  days: DaysProps | any;
  color: string;
  semester?: string;
  cat?: string;
  career?: string;
}

export interface DaysProps {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}

export interface PropsHoursValue {
  VisualValue: string;
  dataValue: string;
}

export interface ScheduleHOCProps {
  ({ courses }: ScheduleProps): JSX.Element;
  Container: (Props: ContainerProps) => JSX.Element;
}
