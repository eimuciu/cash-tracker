import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export function AuthContextProvider({ children }: { children: any }) {
  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ isAuthorized: true }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
