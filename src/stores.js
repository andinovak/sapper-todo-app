import { writable } from "svelte/store";

export const user = writable();

function createZdog() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        add: element => update(d => [...d, element]),
        reset: () => () => set([])
    };
}

export const zdogData = createZdog();
