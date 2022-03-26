import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { ILogin, IRegister } from "types";
import { auth } from "../../Firebase";

export const registerApi = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    await updateProfile(res.user, {
      displayName: user.name,
    });

    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};

export const loginApi = async (user: ILogin) => {
  try {
    const { email, password, remember } = user;

    await setPersistence(
      auth,
      remember ? browserLocalPersistence : browserSessionPersistence
    );

    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);

    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};
