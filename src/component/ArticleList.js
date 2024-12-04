import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { articleListState, update, remove } from "../store-recoil/articleList";
import { authorState } from "../store-recoil/saveInfo";
import Modal from "./Modal";
import Time from "./Time";

const ArticleList = (props) => {
    const { article, setArticle } = props;
    const [openModal, setOpenModal] = useState(false);

    const articles = useRecoilValue(articleListState);
    const setUpdateArticle = useSetRecoilState(update);
    const setRemoveArticle = useSetRecoilState(remove);

    const [author, setAuthor] = useRecoilState(authorState);

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
                        <label htmlFor="user">
                            <FontAwesomeIcon icon={faUser} className="ic-gray" /> 사용자
                        </label>
                        <input id="user" onChange={userNameChangeHandler} value={author} />
                    </div>
                    <Time />
                </div>
                <div className="board">
                    <div className="board__buttons">
                        <button onClick={createButtonClickHandler}>
                            <FontAwesomeIcon icon={faPlus} /> 신규
                        </button>
                        <button onClick={updateButtonClickHandler}>
                            <FontAwesomeIcon icon={faPenToSquare} /> 수정
                        </button>
                        <button onClick={deleteButtonClickHandler}>
                            <FontAwesomeIcon icon={faTrashCan} /> 삭제
                        </button>
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
