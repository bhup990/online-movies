import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

// Imported images links 
import BgImage from '../../assets/images/login-bg.png';
import Aayonilogo from '../../assets/images/icons/aayonilogo.svg';


const LoginPages = () => {
    return (
        <>
            <div className='login-wrapper'>
                <Image src={BgImage} alt='BgImage' className='bg-image' />

                <div className='content-wrapper'>
                    <Link href='/'><Image src={Aayonilogo} alt='aayonilogo' className='aayoni-logo' /></Link>
                    <hr />
                    <h5>Login</h5>
                    <form>
                        <ul>
                            <li>
                                <label>Email Id</label> <br />
                                <input type='email' name='email' />
                            </li>
                            <li>
                                <label>Password</label>
                                <input type='password' name='password' />
                            </li>
                            <li>
                                <button type='submit'>SIGN IN</button>
                            </li>
                            <li>
                                <Link href={"#"} className='forget-pswd'>Forget Password?</Link>
                            </li>
                            <li>
                                <p>New User? <Link href={'/createaccountpage'}>Create an account</Link></p>
                            </li>
                        </ul>
                    </form>
                </div>

                <div className='login-footer'>
                    <p>© 2023 Aayoni. All rights reserved. Powered by <Link href={"#"}><b>Sublimis - ePorium</b></Link>.</p>
                </div>
            </div>
        </>
    )
}



export default LoginPages;