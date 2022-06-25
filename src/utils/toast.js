import EventManager from "lib/eventManager";

export const toastEventManager = new EventManager();

export const toast = {
  error: (message) => {
    toastEventManager.emit("addtoast", { type: "error", message });
  },
  success: (message) => {
    toastEventManager.emit("addtoast", { type: "success", message });
  },
  default: (message) => {
    toastEventManager.emit("default", { type: "success", message });
  },
};
