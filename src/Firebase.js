import * as yoshifirebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '../config/FirebaseConfig';

yoshifirebase.initializeApp(firebaseConfig);
const dbh = yoshifirebase.firestore();
export const getData = async () =>
  dbh
    .collection('weight')
    .get()
    .then((querySnapshot) => querySnapshot);

export const test = 'aaa';
