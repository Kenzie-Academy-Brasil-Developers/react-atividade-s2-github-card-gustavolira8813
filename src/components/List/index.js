import "./styles.css";
import MiniCard from "../MiniCard";
function List({ repoList, removeRepo }) {
  return (
    <div className="container">
      <h3>Repositórios Salvos</h3>
      <ul className="list">
        {repoList.map((e) => (
          <li>
            <MiniCard removeRepo={removeRepo} repo={e} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
