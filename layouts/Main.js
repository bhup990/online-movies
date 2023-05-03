import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from '@/share_file/header/header';
import Footer from '@/share_file/footer/footer';
import { motion, AnimatePresence } from 'framer-motion';
import AddtoCart from '@/components/molecules/addtocart';
import Modalcreateaccount from '@/components/atom/createaccountpopup';

export default ({ children, title, show }) => {
  const [addCartActive, setAddCartActive] = useState(true);
  const [dummyheader, setDummyheader] = useState(false);
  

  // const handleOpenModal = () => {
  //   setModalCreateAcc(!modalCreateAcc);
  // }
  // useEffect(() => {
  //   setModalCreateAcc(true)
  // }, [modalCreateAcc])

  const handleAddtoCart = () => {
    setAddCartActive(!addCartActive);
  }

  const handledummyheader = () => {
    setDummyheader(true);
  }
  return (
    <>
      <Head>{title}</Head>
      <Header handleAddtoCart={handleAddtoCart} addCartActive={addCartActive} handledummyheader={handledummyheader}/>
      <div className={`dummy-header ${dummyheader ? "default-height" : ""}`}></div>

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
