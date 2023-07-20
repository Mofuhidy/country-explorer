import store from '../redux/store'
import { fetchCountries } from '../redux/countries/countriesSlice';

const yemen = {
  officialName: 'Republic of Yemen',
  commonName: 'Yemen',
  continent: 'Asia',
  flag: 'https://flagcdn.com/ye.png',
  capital: 'Sana\'a',
  area: 527968,
  population: 29825968,

};

describe('test the store', () => {
  it('check if the store initial State is empty', () => {
    const initialState = store.getState().countries;
    expect(initialState).toEqual({"countries": [], "error": undefined, "loading": "idle"});
  });

  it('check if the store  initial State is fill with data after dispatch', async () => {
     await store.dispatch(fetchCountries());
    const currentState = store.getState().countries;
    expect(currentState.countries.length).toBeGreaterThan(5);
  });
});