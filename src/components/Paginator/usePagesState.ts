import { useEffect, useState } from 'react';

export function usePagesState<T> (data:T[], countPerPage:number, selectedPage:number) {
  const [pagesCount, setPagesCount] = useState(1);
  const [selectedPageOrFirst, setSelectedPageOrFirst] = useState(0);
  const [pagesArray, setPagesArray] = useState<T[][]>([]);

  useEffect(() => {
    setPagesCount(Math.ceil(data.length / countPerPage));
    // divide the data array into pages
    let pgArray = [];
    for (let page = 0; page < pagesCount; page++) {
      pgArray.push(data.slice(countPerPage * page, countPerPage + countPerPage * page));
    }

    setPagesArray(pgArray);
    // when pages are changed selectedPage doesnt change automatically 
    // so to prevent errors we check the length and return to first page
    setSelectedPageOrFirst(selectedPage > pagesCount - 1 ? 0 : selectedPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, countPerPage]);

  return { pagesCount, selectedPageOrFirst, pagesArray };
};
