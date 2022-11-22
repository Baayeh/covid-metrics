import axios from 'axios';
import { fetchWorldData, URL, headers } from '../redux/api/world-data';

jest.mock('axios');

describe('Fetch World Data', () => {
  describe('When API Call is successful', () => {
    it('returns Total Number of Cases', async () => {
      axios.get.mockResolvedValue({
        data: [
          {
            id: '40f44943-8413-4a31-a4df-deee8111f85f',
            rank: 0,
            Country: 'World',
            Continent: 'All',
            TwoLetterSymbol: null,
            ThreeLetterSymbol: null,
            Infection_Risk: 0,
            Case_Fatality_Rate: 1.04,
            Test_Percentage: 0,
            Recovery_Proporation: 96.84,
            TotalCases: 638436604,
            NewCases: 67303,
            TotalDeaths: 6608108,
            NewDeaths: 76,
            TotalRecovered: '618292791',
            NewRecovered: 157139,
            ActiveCases: 13535705,
            TotalTests: '0',
            Population: '0',
            one_Caseevery_X_ppl: 0,
            one_Deathevery_X_ppl: 0,
            one_Testevery_X_ppl: 0,
            Deaths_1M_pop: 847.8,
            Serious_Critical: 35698,
            Tests_1M_Pop: 0,
            TotCases_1M_Pop: 81905,
          },
        ],
      });

      const result = await fetchWorldData();

      expect(axios.get).toHaveBeenCalledWith(URL, { headers });
      expect(result[0].TotalCases).toEqual(638436604);
    });
  });

  describe('When API Call fails', () => {
    it('returns empty list', async () => {
      axios.get.mockResolvedValue({
        data: [],
      });

      const result = await fetchWorldData();

      expect(axios.get).toHaveBeenCalledWith(URL, { headers });
      expect(result).toEqual([]);
    });
  });
});
