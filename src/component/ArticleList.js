import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { articleListState, update, remove } from "../store-recoil/articleList";
import * as SaveInfo from "../store-recoil/saveInfo";
import Modal from "./Modal";

const ArticleList = (props) => {
    const { article, setArticle } = props;
    const [openModal, setOpenModal] = useState(false);

    const articles = useRecoilValue(articleListState);
    const setUpdateArticle = useSetRecoilState(update);
    const setRemoveArticle = useSetRecoilState(remove);

    const { author, date } = useRecoilValue(SaveInfo.saveInfoState);
    const setAuthor = useSetRecoilState(SaveInfo.setAuthorState);
    const setDate = useSetRecoilState(SaveInfo.setDateState);

    useEffect(() => {
        setDate(new Date());
        let timeInterval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(timeInterval);
        };
    }, []);
    const userNameChangeHandler = (e) => {
        setAuthor(e.target.value);
    };
    const createButtonClickHandler = () => {
        setOpenModal(!openModal);
    };
    const updateButtonClickHandler = () => {
        setUpdateArticle(article);
    };
    const deleteButtonClickHandler = () => {
        setRemoveArticle(article);
    };
    const rowClickHandler = (e) => {
        const { number, title, author, date, content } = e.data;
        setArticle({
            number,
            title,
            author,
            date,
            content,
        });
    };
    return (
        <>
            <section className="article-list">
                <div className="article-list__header">
                    <div className="userInfo">
                        <label htmlFor="user">사용자</label>
                        <input id="user" onChange={userNameChangeHandler} value={author} />
                    </div>
                    <div className="time">
                        <label htmlFor="time">현재시간</label>
                        <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
                    </div>
                </div>
                <div className="board">
                    <div className="board__buttons">
                        <button onClick={createButtonClickHandler}>신규</button>
                        <button onClick={updateButtonClickHandler}>수정</button>
                        <button onClick={deleteButtonClickHandler}>삭제</button>
                    </div>
                    <div
                        className="board__list ag-theme-material"
                        style={{
                            height: "100%",
                            minHeight: "200px",
                        }}
                    >
                        <AgGridReact
                            columnDefs={[
                                { field: "number", headerName: "번호" },
                                { field: "title", headerName: "제목" },
                                { field: "author", headerName: "작성자" },
                                { field: "date", headerName: "작성일" },
                            ]}
                            defaultColDef={{
                                flex: 1,
                                resizable: true,
                                sortable: true,
                                filter: true,
                            }}
                            rowData={articles}
                            onRowClicked={rowClickHandler}
                        />
                    </div>
                </div>
            </section>
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </>
    );
};

export default ArticleList;
