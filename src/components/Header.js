import React from 'react'
import '../scss/Header.scss';
//import Menu from './Menu'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux';
import { SignOutButton } from './SignOutButton';



function Header() {
    const basket =useSelector(state =>state);
    
    return (
        <nav className='header'>
        <Link to="/">
           <img 
            className="header_logo"
            src="https://st3.depositphotos.com/4035913/19517/v/1600/depositphotos_195173362-stock-illustration-rs-r-s-grunge-letter.jpg"
             alt=""
             />

        </Link>

    
         <div className="header_search">
         <input type="text" className="header_searchInput"/>
         <SearchIcon className="header_searchIcon"  />
         </div>
        
        <div className="header_nav">
            <Link to="/login" className="header_link">
                <div className="header_option">
                   <SignOutButton/>
                </div>
            </Link>
         
            
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns </span>
                    <span className="header_optionLineTwo">Orders</span>
                </div>
            </Link>
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    < ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket ?.length}</span>
                </div>
            </Link>
        
        </div>
        
       </nav>
    )
}

export default Header
