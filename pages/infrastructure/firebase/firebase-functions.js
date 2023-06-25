import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const signInUser = (authentication, email, password) => {
  try {
    signInWithEmailAndPassword(authentication, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (authentication, email, password) => {
  try {
    createUserWithEmailAndPassword(authentication, email, password);
  } catch (error) {
    console.log(error);
  }
};
