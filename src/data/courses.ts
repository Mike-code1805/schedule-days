import { DataProps } from '../interfaces/schedules.interfaces';

export const courses: DataProps[] = [
  {
    _id: '01',
    name: 'ASTRONOMÍA Y GEOLOGÍA',
    days: {
      monday: ['07-08', '09-10'],
      tuesday: [],
      wednesday: ['07-08', '08-09'],
      thursday: ['07-09'],
      friday: ['07-09'],
      saturday: ['12-13'],
    },
    color: '#4F91DE',
    career: {
      _id: '6377d2ad72c4b90827c9f55b',
      img: 'http://ci.unsaac.edu.pe/storage/entidad/logo.png',
      name: 'Ingeniería Civil',
    },
    cat: 'EEP',
    semester: '0',
    course: 'IC556ZCI',
  },
  {
    _id: '02',
    name: 'Programación II',
    days: {
      monday: ['14-16'],
      tuesday: ['20:00 - 21:00'],
      wednesday: ['14:00 - 15:00', '15:00 - 16:00'],
      thursday: [],
      friday: [],
      saturday: ['15:00 - 16:00'],
    },
    color: 'black',
  },
  {
    _id: '03',
    name: 'Programación I',
    days: {
      monday: [],
      tuesday: ['7:00 - 8:00', '8:00 - 9:00'],
      wednesday: [],
      thursday: ['8:00 - 9:00'],
      friday: ['8:00 - 9:00'],
      saturday: [],
    },
    color: 'green',
  },
  {
    _id: '04',
    name: 'Programación I',
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
    color: 'pink',
  },
  {
    _id: '05',
    name: 'Programación I',
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
    color: 'gold',
  },
  {
    _id: '06',
    name: 'Programación I',
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
    color: 'orange',
  },
  {
    _id: '07',
    name: 'Programación I',
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
    color: 'blue',
  },
];

export const coursesInitialValue: DataProps[] = [
  {
    _id: '',
    name: '',
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
    color: 'red',
  },
];
