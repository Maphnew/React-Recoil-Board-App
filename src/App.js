import { useState } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import ArticleList from "./component/ArticleList";
import Content from "./component/Content";

function App() {
    const [article, setArticle] = useState({ number: "", title: "", author: "", date: "", content: "" });
    return (
        <RecoilRoot>
            <h2>Board App 📋</h2>
            <div className="App">
                <ArticleList article={article} setArticle={setArticle} />
                <Content article={article} setArticle={setArticle} />
            </div>
        </RecoilRoot>
    );
}

export default App;
