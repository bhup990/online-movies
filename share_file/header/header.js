import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import Menudata from './menudata';
import Modalcreateaccount from '@/components/atom/createaccountpopup';


// Images import 
import Aayonilogo from '../../assets/images/icons/aayonilogo.svg';
import Searchicon from '../../assets/images/icons/search_icon.svg';
import UserIcon from '../../assets/images/icons/user_icon.svg';
import HeartIcon from '../../assets/images/icons/heart_icon.svg';
import ShoppingIcon from '../../assets/images/icons/shopping_icon.svg';

const Header = ({ handleAddtoCart, addCartActive, handledummyheader }) => {
  const [searchbar, setsearchbar] = useState();
  const [showSub, setShowSub] = useState(false);
  const [subMenu, setSubmenu] = useState([]);
  const [HideTopHeader, sethideTopHeader] = useState(false);
  const { submenu, imagespath } = subMenu;

  const handlesearchbar = () => {
    setsearchbar(true);
  }

  const closeserchbox = () => {
    setsearchbar(false);
  }

  const handleMouseOver = (value) => {
    setShowSub(true);
    setSubmenu(value);
  }

  const handleMouseOversub = () => {
    setShowSub(true);
  }

  const handleMouseLeave = () => {
    setShowSub(false);
  }

  const hideTopHeader = () => {
    sethideTopHeader(true);
    handledummyheader();
  }

  return (
    <>
      <nav>
        <div className={`search-overlay ${searchbar ? 'displayblk' : 'displaynone'}`} onClick={closeserchbox}></div>
        <div className={`offer_adv ${HideTopHeader ? ' displaynone' : 'displayflx'}`}><p>Use Code: <span>“FIRST10” & Get 10% OFF</span> on you first purchase.</p>
          <button type='button' onClick={hideTopHeader}><RxCross2></RxCross2></button></div>
        <div className='container'>
          <div className='nav_header'>
            <div className='logo_search'>
              <Link href="/"><Image src={Aayonilogo}></Image></Link>
              <ul>
                <li><Link href={'#'}><input type="text" className={`searchbox ${searchbar ? 'displayblk' : 'displaynone'}`} placeholder='Search here' /><Image src={Searchicon} alt={"search icon"} className="search-icon" onClick={handlesearchbar}></Image></Link></li>
                <li><Link href={'/createaccountpage'}><Image src={UserIcon}></Image></Link></li>
                <li><Link href={'/about'}><span className='addcartnumbers'>1</span><Image src={HeartIcon}></Image></Link></li>
                <li><Link href={'#'} onClick={handleAddtoCart}><span className='addcartnumbers'>1</span><Image src={ShoppingIcon}></Image></Link></li>
                <li><Link href={'#'}>$ USD</Link></li>
              </ul>
            </div>

            <div className='navbar'>
              <ul className='navbar-nav'>
                <li className='sale-offer'><Link href={"#"}>sale</Link></li>
                {
                  Menudata.map((item, index) => {
                    return <><li className='navbar-item' key={index} onMouseOver={() => handleMouseOver(item)} onMouseLeave={handleMouseLeave}><Link href={"#"} className="">{item.linkname}</Link></li></>
                  })
                }
              </ul>
            </div>

          </div>
        </div>

        <div className={`mega-menu ${showSub ? "show-sub-menu" : "hide-sub-menu"}`} onMouseOver={handleMouseOversub} onMouseLeave={handleMouseLeave}>
          <div className='container'>
            <div className='mega-menu-content'>
              <div className='links'>
                <ul className='collections'>
                  {
                    Array.isArray(submenu) && submenu.map((colldt, dt) => {
                      return <>
                        <div key={dt}>
                          <h5>{colldt.title}</h5>
                          <li><Link href={"#"}>{colldt.link1}</Link></li>
                          <li><Link href={"#"}>{colldt.link2}</Link></li>
                          <li><Link href={"#"}>{colldt.link3}</Link></li>
                          <li><Link href={"#"}>{colldt.link4}</Link></li>
                          <li><Link href={"#"}>{colldt.link5}</Link></li>
                          <li><Link href={"#"}>{colldt.link6}</Link></li>
                          <li><Link href={"#"}>{colldt.link7}</Link></li>
                          <li><Link href={"#"}>{colldt.link8}</Link></li>
                          <li><Link href={"#"}>{colldt.link9}</Link></li>
                          <li><Link href={"#"}>{colldt.link10}</Link></li>
                        </div>
                      </>
                    })
                  }
                </ul>
              </div>

              <div className='mega-menu-image'>
                {imagespath ? <Image src={imagespath} alt={"bestselling image"} /> : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}




export default Header;
