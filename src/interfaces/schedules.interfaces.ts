export interface DataProps {
  id: string;
  name: string;
  days: DaysProps;
  color: string;
}

interface DaysProps {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}
