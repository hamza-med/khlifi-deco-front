import { createContext, useState } from "react";

import { useEffect } from "react";
import { publicRequest } from "@/api/makeRequest";
import { getLocalStorageItem } from "@/utils/localStorage";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const authToken = getLocalStorageItem("token");

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await publicRequest.get("users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      setUserData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
