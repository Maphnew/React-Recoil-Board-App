import { atom, selector } from "recoil";

export const articleListState = atom({
    key: "articleListState",
    default: [],
});

export const create = selector({
    key: "createArticleState",
    get: ({ get }) => get(articleListState),
    set: ({ get, set }, newArticle) => {
        const articles = get(articleListState);
        if (articles.length === 0) {
            newArticle.number = 1;
        } else {
            const numList = articles.map((a) => parseInt(a.number));
            newArticle.number = Math.max(...numList) + 1;
        }
        const appendedList = [...articles, newArticle];
        set(articleListState, appendedList);
    },
});

export const update = selector({
    key: "updateArticleState",
    get: ({ get }) => get(articleListState),
    set: ({ get, set }, item) => {
        const articles = get(articleListState);
        const updatedArticleList = articles.map((article) => {
            if (item.author === article.author && item.number === article.number) {
                return item;
            }
            return article;
        });
        set(articleListState, updatedArticleList);
    },
});

export const remove = selector({
    key: "deleteArticleState",
    get: ({ get }) => get(articleListState),
    set: ({ get, set }, item) => {
        const articles = get(articleListState);
        const filteredArticleList = articles.filter((article) => {
            return !(item.author === article.author && item.number === article.number);
        });
        set(articleListState, filteredArticleList);
    },
});
