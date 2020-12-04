import React from 'react';
import UserRegister from '../../components/User/Register';
import logoInventarium from '../../style/img/logo.svg';
// import history from
import './Register.css';

// function register(event) {
//   console.log(event);
//   return history.push('/register');
// }

const PagesRegister = () => {
  return (
    <div id="bg" className="divRow scroll">
      <div
        id="divLogoRegister"
        className="divColumn colorFontTheme"
        // onClick={register}
      >
        <img
          className="imgLogo"
          src={logoInventarium}
          alt="Logomarca Inventarium"
        />
        <p>Projeto Inventarium</p>
      </div>
      <div
        id="divRegister"
        className="divColumn colorDivTheme colorFontTheme scroll"
      >
        <p id="infoLogin">Registre-se</p>

        <UserRegister />
      </div>
    </div>
  );
};
export default PagesRegister;
