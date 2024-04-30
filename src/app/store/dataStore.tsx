import { createContext, useState, useContext } from 'react';

const DataContext = createContext({});

interface Props {
  children: any;
}

export function DataContextProvider({ children }: Props) {
  const [dataList, setDataList] = useState([1, 2, 3, 4, 5]);

  return (
    <DataContext.Provider value={{ dataList, setDataList }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
