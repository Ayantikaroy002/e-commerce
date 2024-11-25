"use client";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Create the context
export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [jwt, setJwt] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedJwt = sessionStorage.getItem('jwt');
      const storedUser = sessionStorage.getItem('user');
      setJwt(storedJwt);
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  const signOut = () => {
    sessionStorage.clear();
    router.push('/signin');
    setJwt(null);
    setUser(null);
  };

  return (
    <SessionContext.Provider value={{ jwt, user, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};
