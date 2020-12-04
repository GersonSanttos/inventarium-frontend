import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../Store/Context';
// import UIButton from '../../Button/Button';

// import '../../../pages/css/reset.css';
// import '../../../pages/css/style.css';
// import '../../../pages/Login/Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserRegister = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  const date = Date();
  console.log(date);
  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/home');
    }

    setError(error);
    setValues(initialState);
  }

  // function register(event) {
  //   console.log(event);
  //   return history.push('/register');
  // }

  return (
    <div id="divInputs">
      <form id="formInputs" onSubmit={onSubmit}>
        {/* seçaõ 1 */}
        <h4>Nome</h4>
        <input
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          name="fistName"
          placeholder="Nome"
          onChange={onChange}
          value={values.fistName}
          required
        />
        <h4>Sobrenome</h4>
        <input
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          name="lastName"
          placeholder="Sobrenome"
          onChange={onChange}
          value={values.lastName}
          required
        />
        <h4>Aniversários</h4>

        <input
          type="date"
          className="inputLogin inputTheme colorFontTheme"
          name="user"
          data-mask="00/00/0000"
          placeholder="Nascimento"
          onChange={onChange}
          // value={values.birthday}
          // value="2010-01-01"
          max="2010-12-31"
          min="1920-01-01"
          required
        />
        <h4>Gênero</h4>
        <select className="inputLogin inputTheme colorFontTheme">
          <option value="male">Masculino</option>
          <option value="fame">feminino</option>
        </select>
        {/* seção 2 */}
        <h4>Telefone</h4>
        <input
          type="tel"
          className="inputLogin inputTheme colorFontTheme"
          name="telephone"
          placeholder="Numero de telefone (00)00000-0000"
          maxLength="11"
          required
        />
        <h4>Email</h4>
        <input
          type="email"
          className="inputLogin inputTheme colorFontTheme"
          name="Informe o email"
          placeholder="Email"
          onChange={onChange}
          required
        />
        <h4>Confirmação do email</h4>
        <input
          type="email"
          className="inputLogin inputTheme colorFontTheme"
          name="telephone"
          placeholder="Reinsira a email"
          onChange={onChange}
          required
        />
        {/* seção 3 */}
        <h4>Função</h4>
        <select className="inputLogin inputTheme colorFontTheme">
          <option value="chefe">Chefe de t.i</option>
          <option value="Funcionário">Funcionário</option>
        </select>
        <h4>Chave de acesso</h4>
        <input
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          name="keyAdmin"
          placeholder="Chave de acesso (Solicitar ao administrador do sistema)"
          onChange={onChange}
          required
        />

        {/* seção 4 */}
        <h4>Cpf</h4>
        <input
          className="inputTheme inputLogin colorFontTheme"
          type="text"
          name="cpf"
          placeholder="Insira o Cpf"
          onChange={onChange}
          value={values.cpf}
        />
        <h4>Senha</h4>
        <input
          // id="password"
          className="inputTheme inputLogin colorFontTheme"
          type="password"
          name="password"
          placeholder="Crie uma senha"
          onChange={onChange}
          value={values.password}
        />
        <h4>Confirmação de senha</h4>
        <input
          // id="password"
          className="inputTheme inputLogin colorFontTheme"
          type="password"
          name="password2"
          placeholder="Reinsira a senha"
          onChange={onChange}
          value={values.password2}
          autoComplete
          required
        />
        <button
          id="bttEnviar"
          type="submit"
          className="buttonTheme bttEnviar colorFontTheme"
          // className="user-login__submit-button"
          // rounded
        >
          ENVIAR
        </button>
        {error && (
          <div id="divBtt" className="user-login__error divRow">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default UserRegister;
