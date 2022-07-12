import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Dsmeta" />
                <h1>Dsmeta</h1>
                <p>Desenvolvido por 
                    <a href="https://github.com/Linhazero">Victor Rodrigues</a>
                </p>
            
            </div>
        </header>

    )

}

export default Header