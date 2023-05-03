import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '@/share_file/footer/footer';
import { motion, AnimatePresence } from 'framer-motion';
import AddtoCart from '@/components/molecules/addtocart';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Images Imported 
import aayonilogo from '@/assets/images/icons/aayonilogo.svg';
import UserIcon from '@/assets/images/icons/user_icon.svg';
import Link from 'next/link';


export default ({ children, title }) => {
  const [addCartActive, setAddCartActive] = useState(true);
  const [dropdown, setdropdown] = useState(false);
  const [closedown, setclosedown] = useState(true);


  const handleAddtoCart = () => {
    setAddCartActive(!addCartActive);
    // setCartAnimation(!cartAnimation);
  }

  const Handledropdown = () => {
    setdropdown(!dropdown);
  }

  const handleClose = () => {
    setdropdown(false);
  }
  return (
    <>
      <Head>{title}</Head>
      {/* <Header handleAddtoCart={handleAddtoCart} addCartActive={addCartActive} /> */}
      <div className='after-login'>
        <nav>
          <span></span>
          <Link href={"/"}><Image src={aayonilogo} alt='Aayoni Logo' /></Link>

          <div className='user-login'>
            <Image src={UserIcon} alt='User Icon' />
            <div className='user-name'>
              <div className='dropdown' onClick={Handledropdown}>
                Kaushal <MdKeyboardArrowDown />
              </div>
              <div className={`dropdown-list ${dropdown ? "displayblk" : ""}`}>
                <Link href={"#"} onClick={handleClose}><span>My Account</span></Link>
                <Link href={"#"} onClick={handleClose}><span>Logout</span></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='dummy-header' style={{height : "114px"}}></div>

      <AnimatePresence>
        <motion.div
          className='main-wrapper'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.50 }}
        >
          <main>
            <div className='main-content'>
              {children}
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
      <AddtoCart handleAddtoCart={handleAddtoCart} addCartActive={addCartActive} />
      <Footer />
    </>



  )
}
