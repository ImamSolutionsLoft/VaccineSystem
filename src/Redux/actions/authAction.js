export const vaccineType = data => async dispatch => {
  dispatch({type: 'VaccineType', payload: data});
};

export const dayFrom = data => async dispatch => {
  dispatch({type: 'DayFrom', payload: data});
};

export const dayTo = data => async dispatch => {
  dispatch({type: 'DayTo', payload: data});
};

export const fromTime = data => async dispatch => {
  dispatch({type: 'FromTime', payload: data});
};

export const toTime = data => async dispatch => {
  dispatch({type: 'ToTime', payload: data});
};

export const fromBreakTime = data => async dispatch => {
  dispatch({type: 'FromBreakTime', payload: data});
};

export const toBreakTime = data => async dispatch => {
  dispatch({type: 'ToBreakTime', payload: data});
};

export const bookingTime = data => async dispatch => {
  dispatch({type: 'BookingTime', payload: data});
};
