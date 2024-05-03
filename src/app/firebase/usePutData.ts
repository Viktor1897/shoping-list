import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

type PutDataResponse<T> = {
  putData: (collectionName: string, data: T) => Promise<void>;
  isLoading: boolean;
  error: unknown;
};

const usePutData = <T extends object>(): PutDataResponse<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const putData = async (collectionName: string, data: object) => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log('Документ успешно записан с ID: ', docRef.id);
    } catch (e) {
      console.error('Ошибка добавления документа: ', e);
      setError(e);
    }
    setIsLoading(false);
  };

  return { putData, isLoading, error };
};

export default usePutData;
