export const USER_CREATED = "User is created successfully!";
export const COLLECTIVE_ERROR_MSG = (response) => {
  console.log(response);
  if (response?.match("fails to match the required pattern"))
    return "Password should contain alphabets and special characters only!";
  else return response;
};
