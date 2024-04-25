import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2])
    .then((values) => {
      let obj = {};
      for (const item of values) {
        obj = { ...obj, ...item };
      }
      console.log(obj.body, obj.firstName, obj.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
