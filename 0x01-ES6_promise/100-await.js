import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const res1 = await uploadPhoto();
    const res2 = await createUser();
    return { photo: res1, user: res2 };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();
