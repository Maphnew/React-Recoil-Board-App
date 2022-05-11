import { makeObservable, observable } from "mobx";

export const saveInfoStore = observable({
    author: "Anonymous",
    date: new Date(),

    setAuthor(author) {
        this.author = author;
    },
    setDate(date) {
        this.date = date;
    },
});
