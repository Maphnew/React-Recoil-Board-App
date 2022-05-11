import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { create } from "../store-recoil/articleList";
import { saveInfoState } from "../store-recoil/saveInfo";

const Content = (props) => {
    const { article, setArticle, setOpenModal, modal } = props;
    const createArticle = useSetRecoilState(create);
    const saveInfo = useRecoilValue(saveInfoState);

    useEffect(() => {
        if (!modal) return;
        setArticle({
            ...article,
            author: saveInfo.author,
        });
    }, [saveInfo.author]);
    const submitHandler = (e) => {
        article.date = saveInfo.date.toLocaleDateString();
        e.preventDefault();
        createArticle(article);
        setOpenModal(false);
    };
    const contentChangeHandler = (e) => {
        const tempArticle = Object.assign({}, article);
        tempArticle[e.target.id] = e.target.value;
        setArticle({ ...tempArticle });
    };
    return (
        <section className="content">
            <form id="form-content" onSubmit={submitHandler}>
                <h3>Contents</h3>
                <label>
                    제목
                    <input
                        id="title"
                        className="content__title"
                        value={article.title}
                        onChange={contentChangeHandler}
                    />
                </label>
                <div className="content__info">
                    <label>
                        작성자
                        <input
                            id="author"
                            className="content__info__user-input"
                            value={article.author}
                            onChange={contentChangeHandler}
                            readOnly
                        />
                    </label>
                    {!modal && (
                        <label>
                            작성일
                            <input id="date" className="content__info__create-date" value={article.date} readOnly />
                        </label>
                    )}
                </div>
                <div className="content__text">
                    <textarea
                        id="content"
                        className="content__text__textarea"
                        rows={10}
                        value={article.content}
                        onChange={contentChangeHandler}
                    />
                </div>
            </form>
        </section>
    );
};

export default Content;
