import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BASE_URL } from "@/helpers/constants";

export const useAuth = (router: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getMe() {
      const token = Cookies.get("token");

      if (!token) {
        router.push("/entrar");
        return;
      }

      const response = await fetch(`${BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        Cookies.remove("token");
        router.push("/entrar");

        return;
      }

      const user = await response.json();
      
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    getMe();
  }
  , [router]);


  return user;
}