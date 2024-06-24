import { getUserById } from '@/app/(public)/contratar/[userId]/services/get-user-profile'; // Replace with the correct path to your module
import { BASE_URL } from "@/helpers/constants";
import { mockFetch } from '../../../../../mockFetch';

describe('getUserById function', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Reset mocks before each test
    window.fetch = mockFetch as any
  });

  it('fetches user data correctly', async () => {
    const userId = '123';
    const mockUserData = { id: '123', name: 'Test User' };
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockUserData),
    } as any; 

    jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const result = await getUserById(userId);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/cleaner/${userId}`, {"next": {"tags": ["get-user-by-id"]}});

    expect(result).toEqual(mockUserData);
  });

  it('handles fetch error', async () => {
    const userId = '456';

    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Fetch failed'));

    await expect(getUserById(userId)).rejects.toThrow('Fetch failed');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/cleaner/${userId}`, {"next": {"tags": ["get-user-by-id"]}});
  });
});
