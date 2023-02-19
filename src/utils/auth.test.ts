import {clearUser, updateUser, getUser} from './auth';
import {User} from "../@types/authentication";

describe('Authentication Functions', () => {
  // Test case for clearUser function
  test('clearUser function removes user from localStorage', () => {
    // Set up
    const user: User = {
      id: "1",
      email: 'test@gmail.com',
      username: 'test',
      image: 'test',
      firstName: 'test',
      lastName: 'test'
    };
    localStorage.setItem('user', JSON.stringify(user));

    // Execute
    clearUser();

    // Verify
    expect(localStorage.getItem('user')).toBeNull();
  });

  // Test case for updateUser function
  test('updateUser function updates user in localStorage', () => {
    // Set up
    const user: User = {
      id: "1",
      email: 'test@gmail.com',
      username: 'test',
      image: 'test',
      firstName: 'test',
      lastName: 'test'
    };

    // Execute
    updateUser(user);

    // Verify
    expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));
  });

  // Test case for getUser function
  test('getUser function returns null when localStorage does not contain user', () => {
    // Set up
    localStorage.removeItem('user');

    // Execute
    const user = getUser();

    // Verify
    expect(user).toBeNull();
  });

  // Test case for getUser function
  test('getUser function returns user when localStorage contains user', () => {
    // Set up
    const user: User = {
      id: "1",
      email: 'test@gmail.com',
      username: 'test',
      image: 'test',
      firstName: 'test',
      lastName: 'test'
    };
    localStorage.setItem('user', JSON.stringify(user));

    // Execute
    const retrievedUser = getUser();

    // Verify
    expect(retrievedUser).toEqual(user);
  });
});