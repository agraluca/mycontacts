import EventManager from "lib/eventManager";

export const toastEventManager = new EventManager();

export const toast = {
  error: (message, duration) => {
    toastEventManager.emit("addtoast", { type: "error", message, duration });
  },
  success: (message, duration) => {
    toastEventManager.emit("addtoast", { type: "success", message, duration });
  },
  default: (message, duration) => {
    toastEventManager.emit("default", { type: "success", message, duration });
  },
};
