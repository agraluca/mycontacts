export const isEmailValid = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const isPhoneValid = (phoneNumber) => {
  const regex =
    /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
  return regex.test(phoneNumber);
};

export const formatPhone = (phoneNumber) => {
  return phoneNumber
    .replace(/\D/g, "")
    .replace(/^(\d{2})\B/, "($1) ")
    .replace(/(\d{1})?(\d{4})(\d{4})/, "$1$2-$3");
};

export const removePhoneMask = (phoneNumber) => {
  return phoneNumber.replace(/\D/g, "");
};
