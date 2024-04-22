import { useData } from '@/utils/dataContext';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDoc,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD70YB2b2kW5Q9pofO1fvItemlXLFfcHI0',
  authDomain: 'windowsassistant-8db02.firebaseapp.com',
  projectId: 'windowsassistant-8db02',
  storageBucket: 'windowsassistant-8db02.appspot.com',
  messagingSenderId: '312940286579',
  appId: '1:312940286579:web:a5b36dd4693ba279819006',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = (email, password, name, age) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserData(user.uid, name, age);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
export const setUserData = async (id, name, age, sleep, stress) => {
  await setDoc(doc(db, 'Mirthly-Health', id), {
    age: age,
    name: name,
    sleep: [],
    stress: [],
  });
};

export const fetchAll = async (userid) => {
  const docRef = doc(db, 'Mirthly-Health', userid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return docSnap.data();
  } else {
    console.log('No such document!');
  }
};

// const name = doc(db, 'name');
// const nameQuery = async () => {
//   await getDoc(name);
// };
// const age = doc(db, 'age');
// const ageQuery = async () => {
//   await getDoc(age);
// };

// console.log('Document data:', nameQuery.data());
// console.log('Document data:', ageQuery.data());

// const sleep = await getDocs(collection(db, 'sleep'));
// sleep.forEach((doc) => {
//   console.log(doc.id, ' => ', doc.data());
// });
// const stress = await getDocs(collection(db, 'stress'));
// stress.forEach((doc) => {
//   console.log(doc.id, ' => ', doc.data());
// });
// const avgSleep = sleep.reduce((sum, dat) => sum + dat) / sleep.length;
// const avgStress = sleep.reduce((sum, dat) => sum + dat) / sleep.length;
