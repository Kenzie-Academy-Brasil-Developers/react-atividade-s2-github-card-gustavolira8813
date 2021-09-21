import "./styles.css";
function RepoCard({ addRepo, repoInfo, repoInfo: { owner } }) {
  return (
    <>
      <div className="card">
        <img className="card_img" src={owner.avatar_url} alt="avatar" />
        <div className="card_info">
          <p>id: {repoInfo.id}</p>
          <p>User: {owner.login}</p>
          <p className="pName">Name: {repoInfo.name}</p>
        </div>
        <a className="card_link" href={repoInfo.html_url} target="_blank">
          Acess Now
        </a>
        <button onClick={() => addRepo(repoInfo)} className="card_add">
          +
        </button>
      </div>
    </>
  );
}
export default RepoCard;
