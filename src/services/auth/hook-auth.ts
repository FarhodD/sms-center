import { useMutation } from "@tanstack/react-query";
import { axiosClassic } from "../initAPI";
import { toast } from "sonner"; 
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const {setTokens}= useAuthStore();
  const navigate = useNavigate();


  return useMutation({
    mutationFn: async (formData) => {
      const response = await axiosClassic.post("/Auth/login", formData);
      return response.data;
      // console.log(response.data);
    },
    onSuccess: (data) => {
      toast.success("Успешный вход");
      // console.log('RES DATA::: ',data);
      const { accessToken, refreshToken } = data
      // console.log('ACCESS::: ',accessToken);
      setTokens({accessToken, refreshToken})
      // navigate('/dashboard')
    },
    onError: (error: any) => {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during login.");
      }
    },
  });
};
