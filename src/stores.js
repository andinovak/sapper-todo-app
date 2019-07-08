import { writable, derived, readable } from "svelte/store";
export const user = writable();

export const zdogFormData = writable({
    name: "Rectangle",
    shape: "Rect",
    width: 120,
    height: 80,
    stroke: 1,
    color: "#FFF",
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    translate: {
        x: 0,
        y: 0,
        z: 0
    },
    fill: false
});

export const nameList = readable(new Set([]));

// function createCanvas() {
//     const { subscribe, set, update } = writable();

//     return {
//         subscribe,
//         set,
//         update
//     };
// }

// export const zdogCanvas = createCanvas();
export const zdogCanvas = writable();

export const zdogChildren = derived(zdogCanvas, $zdogCanvas =>
    $zdogCanvas && $zdogCanvas.children ? $zdogCanvas.children : []
);

export const currentChild = writable({
    name: "New element",
    shape: "Rect",
    width: 120,
    height: 80,
    stroke: 20,
    color: "#FFF"
});

// export const updateZdogCanvas = derived(
//     [zdogFormData, zdogCanvas],
//     ($zdogFormData, $zdogCanvas) => {
//         let child = $zdogCanvas.children.filter(
//             el => el.name === $zdogFormData.name
//         )[0];
//         let keys = Object.keys($zdogFormData).filter(key => key != "name");
//         keys.forEach(key => (child[key] = $zdogFormData[key]));
//         console.log(keys);
//         console.log(child);
//         // child = { ...child, ...$zdogFormData };
//         // $zdogCanvas.set({ canvas });
//     }
// );
