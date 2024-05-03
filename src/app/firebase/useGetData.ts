import { db } from './firebase';
import {
  collection,
  query,
  where,
  getDocs,
  WhereFilterOp,
} from 'firebase/firestore';
import { useState, useEffect, useCallback } from 'react';

interface DataItem {
  id: string;
  [key: string]: unknown;
}

const useGetData = <T extends DataItem>(
  collectionName: string,
  condition?: [string, WhereFilterOp, unknown],
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const q = condition
        ? query(collection(db, collectionName), where(...condition))
        : query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() }) as T,
      );
      setData(dataList);
    } catch (e) {
      console.error('Ошибка получения документа: ', e);
      setError(e);
    }
    setIsLoading(false);
  }, [collectionName, condition]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

export default useGetData;
