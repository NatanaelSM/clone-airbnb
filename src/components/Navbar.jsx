import './css/navbar.css'
import logo from "../assets/airbnb.svg";

export const Navbar = () => {
    return (
        <div className='nav-top'>
            <div className="container-airbnb">
                <div className="col-sm-6 d-flex align-items-center">
                    <img src={logo} alt="logo-airnbn" className="logo" />
                </div>
                <div className="col-sm-6 d-flex align-items-center justify-content-end">
                    <a href='#' className='link-anfitriao'>Seja um anfitrião</a>
                    <a href='#' className='icon-nav mx-2'>
                        <i className='mdi mdi-web'></i>n
                    </a>
                    <div className="dropdown">
                        <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-menu fs-5 ps-2 me-1"></i>
                            <i className="mdi mdi-account-circle fs-2 pe-2 position-relative">
                                <span className="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                            </i>
                        </a>
                        <ul style={{borderRadius:'15px'}} className="dropdown-menu border-0 shadow py-3 mt-2">
                            <li><a className="dropdown-item p-2 px-3 fw-bold" href="#">Cadastre-se</a></li>
                            <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
                            <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua experiência</a></li>
                            <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}