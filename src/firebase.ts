import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//TODO move senseitive data to .env file
const firebaseConfig = {
  apiKey: 'AIzaSyD88YYwO-D4sPNwXqVSDpKuoUVcq7is4HM',
  authDomain: 'household-ef131.firebaseapp.com',
  projectId: 'household-ef131',
  storageBucket: 'household-ef131.appspot.com',
  messagingSenderId: '229413205973',
  appId: '1:229413205973:web:dcd82c411539b6a59baf5c',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
