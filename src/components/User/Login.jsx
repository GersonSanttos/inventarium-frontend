import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../Store/Context';

// import Forward, { theWay } from '../Routes/history';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function forward(event) {
    console.log(event);
    return history.push('/register');
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

  return (
    <div id="divInputs">
      <form id="formInputs" onSubmit={onSubmit}>
        <input
          // id="user"
          type="text"
          className="inputLogin inputTheme colorFontTheme"
          name="user"
          placeholder="Usuário"
          onChange={onChange}
          value={values.user}
        />
        <input
          // id="password"
          className="inputTheme inputLogin colorFontTheme"
          type="password"
          name="password"
          placeholder="Senha"
          onChange={onChange}
          value={values.password}
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
          <div id="divBtt" className="divRow">
            {error}
          </div>
        )}
      </form>
      <div id="divBtt" className="divRow">
        <button
          className="buttonTheme btts colorFontTheme"
          onChange={onChange}
          id="bttForgot"
        >
          Esqueceu a senha?
        </button>
        <button
          className="buttonTheme btts colorFontTheme colorDivTheme"
          onClick={forward}
          id="bttRegister"
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
