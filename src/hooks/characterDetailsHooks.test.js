import { renderHook } from '@testing-library/react-hooks';
import { useCharacterDetails } from './characterDetailsHooks';

jest.mock('../services/avatar.js', () => ({
  getCharacterDetails() {
    return Promise.resolve({
      _id: '12345',
      name: 'Aang',
      affiliation: 'Air Nomads',
      gender: 'male'
    });
  }
}));

describe('useCharacterDetails hooks', () => {
  it('sets the character details on mount', () => {
    const { result, waitFor } = renderHook(() => useCharacterDetails());

    waitFor(() => {
      expect(result.current).toEqual({
        _id: '12345',
        name: 'Aang',
        affiliation: 'Air Nomads',
        gender: 'male'
      });
    });
  });
});
