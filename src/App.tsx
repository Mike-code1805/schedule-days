import { Schedule } from './components/Schedule';
import { courses } from './data/courses';

const App = () => {
  return <Schedule courses={courses} borderBottomSchedule />;
};

export default App;
