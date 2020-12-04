const Devolution = () => {
  return (
    <div id="infos" className="divColumn scroll colorDivTheme colorFonts">
      <p>Devolução de Equipamentos</p>
      <form active="" className="formInputsLoan">
        <p>Devolução</p>
        <h4>Id Empréstimo</h4>
        <input
          name="idEmprestimo"
          required
          placeholder="Id do empréstimo"
          type="data"
          className="inputLogin inputTheme colorFontTheme"
        />
        <h4>Status do empréstimo</h4>
        <input
          required
          disabled
          placeholder="Status do empréstimo"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
        />
        <p>Equipamento</p>
        <h4>Tombamento</h4>
        <input
          required
          placeholder="Informe o tombamento do equipamento"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
        />
        <h4>Marca (auto)</h4>
        <input
          placeholder="Marca"
          disabled
          type="text"
          className="inputLogin inputTheme colorFontTheme"
        />
        <h4>Modelo (auto)</h4>
        <input
          placeholder="Modelo"
          disabled
          type="text"
          className="inputLogin inputTheme colorFontTheme"
        />
        <p>Usuário</p>
        <h4>Cpf</h4>
        <input
          required
          placeholder="Informe o Cpf"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          inputmode="numeric"
        />
        <h4>Nome (auto)</h4>
        <input
          placeholder="Nome"
          disabled
          type="text"
          className="inputLogin inputTheme colorFontTheme"
        />
        <h4>Vínculo institucional (auto)</h4>
        <input
          placeholder="Vínculo com a instituição"
          disabled
          type="text"
          className="inputLogin inputTheme colorFontTheme"
        />

        <button className="buttonTheme bttEnviar colorFontTheme">
          Realizar devolução
        </button>
      </form>
    </div>
  );
};

export default Devolution;
