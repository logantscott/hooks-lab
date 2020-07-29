import { renderHook } from '@testing-library/react-hooks';
import { useAvatar } from './avatarHooks';

jest.mock('../services/avatar.js', () => ({
  getCharacters() {
    return Promise.resolve([
      { _id: '5cf5679a915ecad153ab68c9', name: 'Aang', affiliation: ' Air Nomads Team Avatar' },
      { _id: '5cf5679a915ecad153ab68d3', name: 'Appa', affiliation: 'Air Nomads' },
      { _id: '5cf5679a915ecad153ab68da', name: 'Azula', affiliaton: 'Azula\'s team (formerly) Dai Li (formerly) Fire Nation Fire Nation Royal Family Fire Warriors Royal Fire Academy for Girls (formerly)' }
    ]);
  }
}));

describe('useAvatar hooks', () => {
  it('has characters state', () => {
    const { result } = renderHook(() => useAvatar());

    expect(result.current.characters).not.toBeUndefined();
  });

  it('sets the characters state on mount', () => {
    const { result, waitFor } = renderHook(() => useAvatar());

    waitFor(() => {
      expect(result.current.characters).toEqual([
        { _id: '5cf5679a915ecad153ab68c9', name: 'Aang', affiliation: ' Air Nomads Team Avatar' },
        { _id: '5cf5679a915ecad153ab68d3', name: 'Appa', affiliation: 'Air Nomads' },
        { _id: '5cf5679a915ecad153ab68da', name: 'Azula', affiliaton: 'Azula\'s team (formerly) Dai Li (formerly) Fire Nation Fire Nation Royal Family Fire Warriors Royal Fire Academy for Girls (formerly)' }
      ]);
    });
  });
});
