import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Form({ setRepo, setOwner, setIsShow, isShow, consultApi }) {
  const schema = yup.object().shape({
    owner: yup.string().required("Campo Obrigatório"),
    repo: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const showInfo = (e) => {
    console.log(e);
    // setOwner(e.owner);
    // setRepo(e.repo);
    consultApi(e.owner, e.repo);
  };
  return (
    <>
      <h3>Buscador de Repositórios</h3>
      <form onSubmit={handleSubmit(showInfo)}>
        <input placeholder="Usuário" {...register("owner")} />
        {errors.owner?.message && <span>{errors.owner.message}</span>}
        <br />
        <input placeholder="Repositório" {...register("repo")} />
        {errors.repo?.message && <span>{errors.repo.message}</span>}
        <br />
        <button type="submit">Pesquisar</button>
      </form>
    </>
  );
}

export default Form;
