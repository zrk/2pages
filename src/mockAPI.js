export const properEmail = 'a@b.com';
export const properPassword = 'qwerty';
export const properTimeout = 1000;

export default function auth(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === properEmail && password === properPassword) resolve();
      else reject();
    }, properTimeout);
  });
}
