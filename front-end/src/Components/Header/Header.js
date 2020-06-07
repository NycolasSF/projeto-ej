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
        
        <div className='fundo'>
            <img className='logo' src={Logo} alt='logo'/>
            <h1 className='metas'>Metas</h1>

        
            <div className='pesquisar'>
                <AiOutlineSearch className='loopa'size='25'/>
            </div>                
            
            <FaCog className='config'size='30'/>

            <RiLogoutBoxRLine className='logout' size='30'/>
            
        </div>


    )
}

//exportando o cabeçalho
export default Header;