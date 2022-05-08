import { API } from "../services/Api";
import { toast } from "react-toastify";
import * as Urls from "../constants/urls";
import { USER_CREATED, COLLECTIVE_ERROR_MSG } from "../constants/message";
import { DASHBOARD } from "../constants/path";

export const signUpUser = (body, navigate) => {
  return API.post(Urls.CREATE_USER, body)
    .then((response) => {
      if (response.status === 200) {
        toast.success(USER_CREATED);
        navigate(DASHBOARD);
      }
      return response;
    })
    .catch((error) => {
      toast.error(
        COLLECTIVE_ERROR_MSG(
          error?.response?.data?.details[0]?.message.toString()
        )
      );
    });
};

export const listUsers = (setDataList) => {
  return API.get(Urls.LIST_USERS).then((response) => {
    if (response?.status === 200) {
      setDataList(response?.data);
    }
  });
};

export const updateUser = (body, id, navigate) => {
  return API.put(Urls.UPDATE_USER(id), body)
    .then((response) => {
      if (response.status === 200) {
        toast.success(response?.data?.message);
        navigate(DASHBOARD);
      }
    })
    .catch((error) => {
      toast.error(
        COLLECTIVE_ERROR_MSG(
          error?.response?.data?.details[0]?.message.toString()
        )
      );
    });
};

export const deleteUser = (id, setDataList) => {
  return API.delete(Urls.DELETE_USER(id))
    .then((response) => {
      if (response.status === 200) {
        toast.success(response?.data?.message);
        listUsers(setDataList);
      }
    })
    .catch((error) => {
      toast.error(error);
    });
};
