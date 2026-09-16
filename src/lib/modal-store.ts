import { useSyncExternalStore } from "react";

type Listener = () => void;

let modalOpen = false;
const listeners = new Set<Listener>();

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const modalStore = {
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  open: () => {
    modalOpen = true;
    emitChange();
  },
  close: () => {
    modalOpen = false;
    emitChange();
  },
  setOpen: (value: boolean) => {
    modalOpen = value;
    emitChange();
  },
  getSnapshot: () => modalOpen,
};

export const useModalOpen = () =>
  useSyncExternalStore(modalStore.subscribe, modalStore.getSnapshot);
