import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res1 = await uploadPhoto();
  const res2 = await createUser();
  return { phote: res1, user: res2 };
}
