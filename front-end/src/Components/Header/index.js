//função que retornará o cabeçalho de quase todas as paginas
import React from 'react'

//imagem da logo em branco
import Logo from '../../assets/logo_white.png'

//icons usados
import{RiLogoutBoxRLine} from 'react-icons/ri'
import{FaCog} from 'react-icons/fa'
import{AiOutlineSearch} from 'react-icons/ai'

import './style.css'

//rotorno do HTML do cabeçalho
function Header() {
    return (
        
        <div className='container-header'>
            <div className="content-logo">
                <img className='logo' src={Logo} alt='logo'/>
                <h1 className='metas'>Metas</h1>
            </div>
            <div className="content-actions">
                <div className='pesquisar'>
                    <form action="/search?">
                        <input type="text" name="search" className="input-search" />
                        <button type="submit" className="btn-search">
                            <AiOutlineSearch className='loopa'size='30'/>
                        </button>
                    </form>
                </div>  
                <a className="btn-config">
                    <FaCog className='btn-config'size='30'/>
                </a> 
                <a className="btn-login-out">
                    <RiLogoutBoxRLine className='btn-logout' size='30'/>
                </a>             
            </div>
        </div>


    )
}

//exportando o cabeçalho
export default Header;