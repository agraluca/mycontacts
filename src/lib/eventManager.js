export default class EventManager {
  constructor() {
    this.listeners = {};
  }
  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }
  emit(event, payload) {
    const listeners = this.listeners[event];
    if (!listeners) return;
    listeners.forEach((listener) => {
      listener(payload);
    });
  }
  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];
    if (!listeners) return;
    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    );
    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

const addToast = (payload) => {
  console.log("executou o listener", payload);
};

toastEventManager.on("addtoast", addToast);
toastEventManager.emit("addtoast", { type: "success", message: "teste" });

toastEventManager.removeListener("addtoast", addToast);

toastEventManager.emit("addtoast", "depois de remover");

console.log(toastEventManager);
