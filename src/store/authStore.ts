import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const AUTH_STORAGE = "auth-store";

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

type UseAuth = {
  accessToken: string;
  refreshToken: string;
  setTokens: (tokens: Tokens) => void;
  // clearPersist: () => void;
};

export const useAuthStore = create<UseAuth>()(
  devtools(
    persist(
      (set) => ({
        accessToken: "",
        refreshToken: "",

        setTokens: ({ accessToken, refreshToken }) => {
          set({ accessToken, refreshToken });
        },

        // clearPersist: () => {
        //   localStorage.removeItem(AUTH_STORAGE);
        //   set({ accessToken: "", refreshToken: "" });
        // },
      }),
      { name: AUTH_STORAGE }
    )
  )
);
