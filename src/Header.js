import { use, useEffect, useState }  from "react";


function Header(props) {

    useEffect(() => {
        // Simulate fetching user data
        const fetchUser = async () => {
            const userData = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve("João Silva");
                }, 1000);
            });
            props.setUser(userData);
        };
        fetchUser();
    }, []);
    
    return (
    <header className="header">
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
              <form action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log In</button>
              </form>
              <a href="/">Criar conta</a>
              <a href="/">Esqueci minha senha</a>
            </div>
          }
        </div>
    </header>
    )
}

export default Header;