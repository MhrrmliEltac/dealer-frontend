import { useSyncExternalStore } from "react";

type Listener = () => void;

let sidebarOpen = false;
const listeners = new Set<Listener>();

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const sidebarStore = {
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot: () => sidebarOpen,
  open: () => {
    sidebarOpen = true;
    emitChange();
  },
  close: () => {
    sidebarOpen = false;
    emitChange();
  },
  setOpen: (value: boolean) => {
    sidebarOpen = value;
    emitChange();
  },
};

export const useSidebarOpen = () =>
  useSyncExternalStore(sidebarStore.subscribe, sidebarStore.getSnapshot);
