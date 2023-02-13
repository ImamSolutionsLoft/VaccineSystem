const INITIAL_STATE = {
  vaccineType: '',
  dayFrom: '',
  dayTo: '',
  fromTime: '',
  toTime: '',
  fromBreakTime: '',
  toBreakTime: '',
  bookingTime: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VaccineType':
      return {...state, vaccineType: action.payload};
    case 'DayFrom':
      return {...state, dayFrom: action.payload};
    case 'DayTo':
      return {...state, dayTo: action.payload};
    case 'FromTime':
      return {...state, fromTime: action.payload};
    case 'ToTime':
      return {...state, toTime: action.payload};
    case 'FromBreakTime':
      return {...state, fromBreakTime: action.payload};
    case 'ToBreakTime':
      return {...state, toBreakTime: action.payload};
    case 'BookingTime':
      return {...state, bookingTime: action.payload};
    default:
      return state;
  }
}
