import React, { useState, UseContext, Component } from 'react';
import api from '../../services/api';
import Inventory from './inventory';

const InventoryList = () => {
  let values = [''];
  const importData = () => {
    api.get('/equipment').then((res) => {
      const values = res.data;
      console.log(values);
      console.log(values.table);
    });
  };

  importData();
  console.log(importData);
  return (
    <div id="infos" className="scroll divColumm colorDivTheme colorFonts">
      <div id="divSearch" className="divRow">
        <form id="divSearch" action="">
          <input
            type="search"
            placeholder="Buscar"
            className=" inputLogin inputTheme colorFontTheme inputSearch"
          />
          <button
            type="submit"
            className="  buttonTheme bttEnviar colorFontTheme buttonSearch"
          >
            BUSCAR
          </button>
        </form>
      </div>

      <div className="divColumm colorDivTheme colorFonts">
        <table className="tables">
          <tr>
            <th>Chave</th>
            <th>Valor</th>
          </tr>

          <tr>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
