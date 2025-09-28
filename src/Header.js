import { use, useEffect, useState }  from "react";
import {auth} from './firebase.js';


function Header(props) {

    useEffect(() => {
        
    }, []);
    
    function criarConta(e) {
        e.preventDefault();
        const email = e.target[0].value;
        const username = e.target[1].value;
        const password = e.target[2].value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Conta criada com sucesso
                const user = userCredential.user;
                user.updateProfile({
                    displayName: username
                });
                props.setUser(username);
                fecharModalCriarConta();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    function abrirModalCriarConta(e) {
        e.preventDefault();
        const modalCriarConta = document.querySelector('.modal__criarConta');
        modalCriarConta.style.display = 'flex';
    }

    function fecharModalCriarConta() {
        const modalCriarConta = document.querySelector('.modal__criarConta');
        modalCriarConta.style.display = 'none';
    }

    function logar(e) {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;

        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                props.setUser(user.displayName);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Usuário ou senha inválidos.");
            });
    }

    return (
    <header className="header">
        <div className="modal__criarConta">
            <div className="formCriarConta">
                <div onClick={() => fecharModalCriarConta()} className="close-modal-criar">X</div>
                <h2>Criar conta</h2>
                <form onSubmit={(e) => criarConta(e)}>
                    <input type="text" placeholder="Seu e-mail" />
                    <input type="text" placeholder="Seu Username" />
                    <input type="password" placeholder="Sua senha" />
                    <input type="submit" value="Criar conta" />
                </form>
            </div>
        </div>
        <div className="center">
          <div className="header__logo">
            <a href="/" className="app__headerImage">
              <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
            </a>
          </div>
          {
            (props.user) ?
            <div className="header__logadoInfo">
              <span>Seja bem-vindo, <strong>{props.user}</strong></span>
              <a href="/">Postar</a>
            </div>
          :
            <div className="header__loginForm">
              <form onSubmit={(e)=>logar(e)}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log In</button>
              </form>
                <div className="btn__criarConta">
                    <a onClick={(e)=>abrirModalCriarConta(e)} href="/">Criar conta</a>
                </div>
                <div className="btn__esqueciMinhaSenha">
                    <a href="/">Esqueci minha senha</a>
                </div>
            </div>
          }
        </div>
    </header>
    )
}

export default Header;