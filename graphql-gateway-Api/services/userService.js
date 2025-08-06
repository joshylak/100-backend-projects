import fetch from 'node-fetch';

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
};
