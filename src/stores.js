import { writable } from "svelte/store";

export const user = writable();

function createZdog() {
    const { subscribe, set, update } = writable({
        "New Element": {
            shape: "Rect",
            data: {
                addTo: illo,
                width: 120,
                height: 80,
                stroke: 20,
                color: "#FFF"
            }
        }
    });

    // add() {

    // }
    return {
        subscribe,
        // add: element =>
        //     update(elements => {
        //         return { ...elements, element };
        //     }),
        reset: () => () => set({})
    };
}

export const zdogData = createZdog();
