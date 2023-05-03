import React from 'react';
import Layout from '@/layouts/Main';
import Wrapper from '@/components/atom/wrapper';
import Image from 'next/image';

// Import Images links 
import Thankyoubg from '../../assets/images/thankyou-bg.png';
import CongratsIcon from '../../assets/images/thankyouicon.png';
import Link from 'next/link';

const Thankyou = () => {
    return (
        <Layout>
            <Image src={Thankyoubg} alt='Thank you background' className='thankyou-img'/>
            <div className='thankyou'>
                <Wrapper addClass="container">
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li class="active"><a href="/login">Thank you</a></li>
                        </ul>
                    </div>

                    <div className='thankyou-content'>
                        <ul>
                            <li>
                                <Image src={CongratsIcon} alt='Congrats Icon' />
                            </li>
                            <li><p>Thank You For Your Registration With Aayoni.</p></li>
                            <li><Link href='/login'><button type='button'>Login Now</button></Link></li>
                        </ul>
                    </div>
                </Wrapper>
            </div>
        </Layout>
    )
}

export default Thankyou;