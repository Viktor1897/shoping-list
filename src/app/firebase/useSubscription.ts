import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

interface Document {
  id: string;
  [key: string]: unknown;
}

/**
 * Хук для подписки на изменения в коллекции Firestore.
 * @param collectionName - Название коллекции в Firestore.
 * @returns Возвращает массив документов из коллекции, состояние загрузки и возможную ошибку.
 */
const useSubscription = <T extends Document>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const results: T[] = [];
        snapshot.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id } as T);
        });
        setData(results);
        setLoading(false);
      },
      (error) => {
        console.error('Ошибка при подписке на коллекцию:', error);
        setError(error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { data, loading, error };
};

export default useSubscription;
