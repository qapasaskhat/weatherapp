export const FETCH_WEATHER_BEGIN   = 'FETCH_WEATHER_BEGIN';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeathersBegin = () => ({
  type: FETCH_WEATHER_BEGIN
});

export const fetchWeathersSuccess = weathers => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { weathers }
});

export const fetchWeathersFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error }
});

export function fetchWeather(city) {
    return dispatch => {
      dispatch(fetchWeathersBegin());
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=81f8a9c3d7461071793c9dcccb4a64d4&units=metric&lang=ru&q=${city}`)
        .then(res => res.json())
        .then(json => {
         // console.log(json)
          dispatch(fetchWeathersSuccess(json.list));
          return json.list;
        })
        .catch(error => dispatch(fetchWeathersFailure(error)));
    };
  }
  