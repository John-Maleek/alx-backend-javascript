import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser(), Promise.reject()])
    .then((values) => {
      let obj = {};
      for (const item of values) {
        obj = { ...obj, ...item };
      }
      console.log(obj.body, obj.firstName, obj.lastName);
    })
    .catch(() => console.error('Signup system offline'));
}

handleProfileSignup();
