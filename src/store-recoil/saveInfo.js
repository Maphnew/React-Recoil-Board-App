import { atom, selector } from "recoil";

export const saveInfoState = atom({
    key: "saveInfoState",
    default: {
        author: "Anonymous",
        date: new Date(),
    },
});

export const setAuthorState = selector({
    key: "setAuthor",
    get: ({ get }) => get(saveInfoState),
    set: ({ get, set }, author) => {
        const saveInfo = get(saveInfoState);
        set(saveInfoState, { ...saveInfo, author });
    },
});

export const setDateState = selector({
    key: "setDate",
    get: ({ get }) => get(saveInfoState),
    set: ({ get, set }, date) => {
        const saveInfo = get(saveInfoState);
        set(saveInfoState, { ...saveInfo, date });
    },
});
