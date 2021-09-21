import "./styles.css";
function MiniCard({ repo, removeRepo, repo: { owner } }) {
  return (
    <div className="divCard">
      <img src={owner.avatar_url} />
      <div>
        <p>id: {repo.id}</p>
        <a href={repo.html_url} target="_blank">
          Acess
        </a>
      </div>
      <button className="divCard_button" onClick={() => removeRepo(repo)}>
        -
      </button>
    </div>
  );
}
export default MiniCard;
