import RepoCard from "../RepoCard";
import "./styles.css";
function RepoList({ repoInfo, addRepo }) {
  return (
    <div className="boxList_item">
      <h3>Repositório encontrado</h3>
      {repoInfo.id ? (
        <RepoCard addRepo={addRepo} repoInfo={repoInfo} />
      ) : (
        <p>Resultado da busca não encontrado</p>
      )}
    </div>
  );
}
export default RepoList;
