import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import RepoCard from "./components/RepoCard";
import RepoList from "./components/RepoList";
import List from "./components/List";

function App() {
  const [repoInfo, setRepoInfo] = useState([]);
  // const [owner, setOwner] = useState("");
  // const [repo, setRepo] = useState("");
  // const [isShow, setIsShow] = useState(false);
  const [repoList, setRepoList] = useState([]);

  const consultApi = (owner, repo) => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => response.json())
      .then((response) => setRepoInfo(response))
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   fetch(`https://api.github.com/repos/${owner}/${repo}`)
  //     .then((response) => response.json())
  //     .then((response) => setRepoInfo(response))
  //     .catch((err) => console.log(err));
  // }, [repo]);

  const addRepo = (repositorio) => {
    setRepoList([...repoList, repositorio]);
  };
  const removeRepo = (item) => {
    setRepoList([...repoList.filter((e) => e !== item)]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form consultApi={consultApi} />
        <div className="boxList">
          <RepoList
            className="boxList_item"
            addRepo={addRepo}
            repoInfo={repoInfo}
          />
          <List
            className="boxList_item"
            removeRepo={removeRepo}
            repoList={repoList}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
