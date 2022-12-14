import { Schedule } from './components/Schedule';
import { courses } from './data/courses';

const App = () => {

  const getIdCourse = (id: string) => {
    console.log(id);
  }
  return <Schedule courses={courses} borderBottomSchedule borderRightSchedule onClickId={getIdCourse} />;
};

export default App;
