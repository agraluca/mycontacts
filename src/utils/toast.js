export const toast = {
  error: (message) => {
    const event = new CustomEvent("addtoast", {
      detail: {
        type: "error",
        message,
      },
    });
    document.dispatchEvent(event);
  },
  success: (message) => {
    const event = new CustomEvent("addtoast", {
      detail: {
        type: "success",
        message,
      },
    });
    document.dispatchEvent(event);
  },
  default: (message) => {
    const event = new CustomEvent("addtoast", {
      detail: {
        type: "default",
        message,
      },
    });
    document.dispatchEvent(event);
  },
};
