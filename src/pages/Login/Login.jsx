import React from 'react';
import UserLogin from '../../components/User/Login';
import logoInventarium from '../../style/img/logo.svg';
import './Login.css';

const PagesLogin = () => {
  return (
    <div id="bg" className="divRow scroll">
      <div id="divLogo" className="divColumn colorFontTheme">
        <img
          className="imgLogo"
          src={logoInventarium}
          alt="Logomarca Inventarium"
        />
        <p>Projeto Inventarium</p>
      </div>
      <div
        id="divLogin"
        className="divColumn colorDivTheme colorFontTheme scroll"
      >
        <p id="infoLogin">Entre ou cadastre-se</p>
        <UserLogin />
      </div>
    </div>
  );
};
export default PagesLogin;
