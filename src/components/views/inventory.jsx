import React, { useState } from 'react';
import api from '../../services/api';

function initialState() {
  return {
    equipmentTipping: '',
    equipmentTippingDate: '',
    equipmentBrand: '',
    equipmentName: '',
    equipmentModel: '',
    equipmentType: '',
    equipmentStatus: '',
  };
}

const Inventory = () => {
  const [values, setValues] = useState(initialState);
  function preventDefault(event) {
    // event.preventDefault();
    api.post('/equipment', values);
  }

  function saveData(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  // const save = (event) => {
  //   console.log(event);
  // };

  function save(event) {
    // console.log(event);
    // console.log(values);
    // console.log(JSON.stringify(values));
    // // api.post('/equipment', JSON.stringify(values));
  }

  return (
    <div id="infos" className="divColumn scroll colorDivTheme colorFonts">
      <form action="" className="formInputsLoan" onSubmit={preventDefault}>
        <h4>Tombamento</h4>
        <input
          required
          name="equipmentTipping"
          placeholder="Informe o tombamento"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentTipping}
          maxLength="20"
        />
        <h4>Data do tombamento</h4>
        <input
          required
          name="equipmentTippingDate"
          placeholder="Informe a data do tombamento"
          type="date"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentTippingDate}
        />
        <h4>Nome do equipamento</h4>
        <input
          required
          name="equipmentName"
          placeholder="Informe o nome do equipamento"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentName}
          maxLength="30"
        />
        <h4>Marca</h4>
        <input
          required
          name="equipmentBrand"
          placeholder="Insira a Marca"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentBrand}
          maxLength="20"
        />
        <h4>Modelo</h4>
        <input
          maxLength="20"
          required
          name="equipmentModel"
          placeholder="Insira o Modelo"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentModel}
        />
        <h4>Tipo</h4>
        <input
          required
          maxLength="20"
          name="equipmentType"
          placeholder="Informe o tipo"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentType}
        />
        <h4>Status</h4>
        <select
          required
          name="equipmentStatus"
          placeholder="Status"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          onChange={saveData}
          value={values.equipmentStatus}
        >
          <option value="Disponivél">Disponivél</option>
          <option value="indisponivél">indisponivél</option>
        </select>
        <button
          id="bttEnviar"
          type="submit"
          className="buttonTheme bttEnviar colorFontTheme"
          onChange={save}
        >
          ADICIONAR EQUIPAMENTO
        </button>
      </form>
    </div>
  );
};
export default Inventory;
