import React, { setState, useContext, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
// import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import history from 'history';

import NewLoan from '../../components/views/newLoan';
import LoanHistory from '../../components/views/loanHistory';
import People from '../../components/views/people';
import Inventory from '../../components/views/inventory';
import InventoryList from '../../components/views/inventoryList';
import Devolution from '../../components/views/devolution';

import iconLogo from '../../style/img/logo.svg';
import imgUser from '../../style/img/user.png';
import iconExit from '../../style/img/icon/exit.svg';
import iconStorage from '../../style/img/icon/iconStorage.svg';
import iconPeople from '../../style/img/icon/iconPeople.svg';
import iconLoan from '../../style/img/icon/iconLoan.svg';
import iconLend from '../../style/img/icon/iconLend.svg';

import './Home.css';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  let history = useHistory();

  function HandleClick(event) {
    const { name } = event.target;
    console.log(name);
    switch (name) {
      case 'Loan':
        history.push('/');
        window.location.reload();
        break;
      case 'Devolution':
        history.push('/devolution');
        window.location.reload();
        break;
      case 'ToManager':
        history.push('/inventorylist');
        window.location.reload();
        break;
      case 'Storage':
        history.push('/inventory');
        window.location.reload();
        break;
      case 'People':
        history.push('/people');
        window.location.reload();
        break;
      case 'Client':
        history.push('/peoplelist');
        window.location.reload();
        break;
      case 'Lend':
        history.push('/history');
        window.location.reload();
        break;
      case 'Concluded':
        history.push('/history');
        window.location.reload();
        break;
      case 'InProgress':
        history.push('/history');
        window.location.reload();
        break;

      default:
        console.log('Eita');
        break;
    }
  }

  return (
    <div id="divFatherHome" className="divRow colorFontTheme">
      <div id="navSide" className="divColumn scroll colorDivTheme colorFonts">
        {/* <!-- Logo --> */}
        <div
          id="navLogo"
          className="hoverActive inNavbar divRow"
          onClick={HandleClick}
        >
          <img id="imgLogo" src={iconLogo} alt="Logomarca Inventarium" />
          Inventarium
        </div>

        {/* <!-- opções --> */}
        <div id="navOptions" className="divColumn scroll colorFontTheme">
          {/* <!-- butons de opções --> */}
          <button
            name="Loan"
            id="optionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            <img name="Loan" id="optionImg" src={iconLoan} alt="" />
            Empréstimo
          </button>

          <button
            name="Devolution"
            id="subOptionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
            // onClickCapture={HandleClick}
          >
            Devolução
          </button>

          {/* <!-- butons de opções --> */}
          <button
            name="People"
            id="optionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            <img
              name="People"
              id="optionImg"
              name="People"
              src={iconPeople}
              alt=""
            />
            Usuários
          </button>
          <button
            name="Client"
            id="subOptionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
            // onClickCapture={HandleClick}
          >
            Lista de Usuários
          </button>
          {/* <div id="subOptionBtt" className="hoverActive optionbtt divRow">
            Funcionários
            <button id="status" className="status"></button>
          </div> */}

          {/* <!-- butons de opções --> */}
          <button
            name="Storage"
            id="optionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            <img name="Storage" id="optionImg" src={iconStorage} alt="" />
            Inventário
          </button>
          <button
            name="ToManager"
            id="subOptionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            Gerenciar
          </button>
          {/* <div id="subOptionBtt" className="hoverActive optionbtt divRow">
            Itens em uso
            <button id="status" className="status"></button>
          </div> */}

          {/* <!-- butons de opções --> */}
          <button
            name="Lend"
            id="optionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            <img name="Lend" id="optionImg" src={iconLend} alt="" />
            Histórico
          </button>

          {/* <button
            name="Concluded"
            id="subOptionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            Concluídos
          </button> */}

          {/* <button
            name="InProgress"
            id="subOptionBtt"
            className="hoverActive optionbtt divRow colorFontTheme"
            onClick={HandleClick}
          >
            Em andamento
          </button> */}
        </div>

        {/* <!-- Área do usuário --> */}
        <div id="navUser" className="hoverActive divRow colorFonts">
          <img id="imgUser" src={imgUser} alt="Perfil" />
          Nome do Usuário
          <img
            className="exitLogo"
            src={iconExit}
            alt="Sair"
            onClick={() => setToken(null)}
          />
        </div>
      </div>
      {/* area de dados  */}

      <div id="dataArea" className="scroll divRow">
        {/* <Devolution />
        <NewLoan />
        <LoanHistory />
         */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={NewLoan} />
            <Route path="/devolution" exact={true} component={Devolution} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/inventorylist" component={InventoryList} />
            <Route path="/people" component={People} />
            <Route path="/peoplelist" component={People} />
            <Route path="/history" component={LoanHistory} />
          </Switch>
        </BrowserRouter>
      </div>

      {/* <div id="dataArea" className="divRow scroll"></div> */}

      {/* // <!-- Footer portrait--> */}
      <footer id="footer" className="divRow colorDivTheme">
        {/* <!-- Logo --> */}
        <div
          name="home"
          id="footerUser"
          className="hoverActive divRow colorFonts"
          onClick={HandleClick}
        >
          <img
            name="home"
            id="footerImgLogo"
            src={iconLogo}
            alt="Logomarca Inventarium"
          />
        </div>
        {/* <!-- opções --> */}
        <div id="footerOptions" className="divRow colorFontTheme">
          {/* <!-- butons de opções --> */}
          <button
            name="Loan"
            id="footerOptionBtt"
            className="hoverActive optionbtt divColumn"
            onClick={HandleClick}
          >
            <img name="Loan" id="footerOptionImg" src={iconLoan} alt="" />
          </button>
          <button
            name="People"
            id="footerOptionBtt"
            className="hoverActive optionbtt divColumn"
            onClick={HandleClick}
          >
            <img name="People" id="footerOptionImg" src={iconPeople} alt="" />
          </button>
          <button
            name="Storage"
            id="footerOptionBtt"
            className="hoverActive optionbtt divColumn"
            onClick={HandleClick}
          >
            <img name="Storage" id="footerOptionImg" src={iconStorage} alt="" />
          </button>
          <button
            name="Lend"
            id="footerOptionBtt"
            className="hoverActive optionbtt divColumn"
            onClick={HandleClick}
          >
            <img name="Lend" id="footerOptionImg" src={iconLend} alt="" />
          </button>
        </div>

        {/* <!-- Área do usuário --> */}

        <div id="footerUser" className=" hoverActive divRow colorFonts">
          <div class="dropDown divRow">
            <img
              id="exitLogoPortrait"
              src={iconExit}
              alt="Sair"
              onClick={() => setToken(null)}
            />
          </div>
          <img id="footerimgUser" src={imgUser} alt="Perfil" />
        </div>
      </footer>
    </div>
    // <div classNameName="pages-home">
    //   Parabéns, você conseguiu
    //   <br />

    // </div>
  );
};

export default PagesHome;
// {/* <button type="button" onClick={() => setToken(null)}>
//         Sair
//       </button> */}
