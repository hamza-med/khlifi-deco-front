import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export function useAuthContext() {
  return useContext(AuthContext);
}
