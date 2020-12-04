import React, { useState } from 'react';
import api from '../../services/api';

function initialState() {
  return {
    peopleName: '',
    peopleSurname: '',
    peopleBond: '',
    peopleCPF: '',
    peopleStatus: '',
  };
}

const People = () => {
  const [values, setValues] = useState(initialState);
  function preventDefault(event) {
    event.preventDefault();
    api.post('/people', values);
  }

  function saveData(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }
  function save(event) {
    // console.log(event);
  }

  return (
    <div id="infos" className="divColumn scroll colorDivTheme colorFonts">
      <p>Cadastrar Usuário</p>
      <form active="" className="formInputsLoan" onSubmit={preventDefault}>
        <h4>Cpf</h4>
        <input
          required
          name="peopleCPF"
          placeholder="Informe o Cpf"
          type="number"
          className="inputLogin inputTheme colorFontTheme"
          inputmode="numeric"
          onChange={saveData}
          value={values.peopleCPF}
          maxLength="11"
          minLength="11"
        />
        <h4>Nome</h4>
        <input
          name="peopleName"
          placeholder="Nome"
          required
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.peopleName}
          maxLength="20"
        />
        <h4>Sobrenome</h4>
        <input
          name="peopleSurname"
          placeholder="Sobrenome"
          required
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.peopleSurname}
          maxLength="20"
        />
        <h4>Vínculo institucional</h4>
        <select
          name="peopleBond"
          placeholder="Vínculo com a instituição"
          required
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.peopleBond}
        >
          <option value="Professor">Professo</option>
          <option value="Aluno">Aluno</option>
          <option value="Funcionario T.I">Funcionario T.I</option>
          <option value="Funcionario">Funcionario</option>
          <option value="Outro">utro</option>
        </select>
        <select
          name="peopleStatus"
          placeholder="Status"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.peopleStatus}
        >
          <option value="Com Pendências">Com Pendências</option>
          <option value="Alerta">Alerta</option>
          <option value="Sem Pendências">Sem Pendências</option>
        </select>

        <button
          id="bttEnviar"
          type="submit"
          className="buttonTheme bttEnviar colorFontTheme"
          onChange={save}
        >
          REALIZAR CADASTRO
        </button>
      </form>
    </div>
  );
};

export default People;
