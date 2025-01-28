import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWithAuth } from "../initAPI";
import { MessageTypeForm } from "../../types/messages";
import { toast } from "sonner";
import { useSearchDataStore } from "../../store/messageStore";

export const useAddSms = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: MessageTypeForm ) => {
        console.log('HELLO FORM::', formData);
        const response = axiosWithAuth.post("api/Messages/create", formData); 
        return response;
    },
    onSuccess(data) {
      console.log('SMS DATA:: ',data.data);
      toast.success('Вы успешно создали сообщение')
      queryClient.invalidateQueries({ queryKey: ["sms-table"] });
    },
    onError() {
      toast.error('Не получился добавить СМС')
    },
  });
};

export const useSearchSms = () => {
  const {setSearchData} = useSearchDataStore()

  return useMutation({
    mutationFn: (formData) => {
      console.log('FORM DATA SEARCH: ',formData);
      return axiosWithAuth.post('/api/Messages/search', formData)
    },
    onSuccess(data) {
      console.log(data);
      setSearchData(data.data);
    },
    onError() {
        toast.error('Сообщеие не найден');
    },

  })
}