import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/atom/container';
import FormGroup from '@/components/molecules/formgroup';

// Imported Images link Below
import FooterLogo from '@/assets/images/icons/aayoni_footerlogo.svg';
import Facebook from '@/assets/images/icons/facebook_icon.svg';
import Instagram from '@/assets/images/icons/instagram_icon.svg';
import Lindkin from '@/assets/images/icons/linkin_icon.svg';
import sendBtn from '@/assets/images/icons/send_icon.svg';



const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className='footer_wrapper'>
            <div className='footer_logo' data-aos="fade-right" data-aos-delay="350" data-aos-offset="50" data-aos-easing="ease-in-sine">
              <Link href={"#"}><Image src={FooterLogo} alt="Aayoni logo" /></Link>
              <div className='social_media'>
                <Link href={'#'}><Image src={Instagram} alt="Instagram Icon" /></Link>
                <Link href={'#'}><Image src={Facebook} alt="Facebook Icon" /></Link>
                <Link href={'#'}><Image src={Lindkin} alt="Lindkin Icon" /></Link>
              </div>
            </div>
            <div className='footer_links' >
              <ul data-aos="fade-right" data-aos-delay="300" data-aos-offset="50" data-aos-easing="ease-in-sine">
                <li><Link href={"#"}>About</Link></li>
                <li><Link href={"#"}>Contact</Link></li>
                <li><Link href={"#"}>FAQ’s</Link></li>
                <li><Link href={"#"}>Blogs</Link></li>
                <li><Link href={"#"}>Testimonials</Link></li>
              </ul>
              <ul data-aos="fade-right" data-aos-delay="200" data-aos-offset="50" data-aos-easing="ease-in-sine">
                <li><Link href={"#"}>Shipping</Link></li>
                <li><Link href={"#"}>Returns</Link></li>
                <li><Link href={"#"}>Terms and Conditions</Link></li>
                <li><Link href={"#"}>Privacy Policy</Link></li>
                <li><Link href={"#"}>Track Order </Link></li>
              </ul>
            </div>
            <div className='footer_email' data-aos="fade-right" data-aos-delay="100" data-aos-offset="50" data-aos-easing="ease-in-sine">
              <h6>Stay in touch</h6>
              <p>Subscribe to our newsletter so we can spam you with our new arrivals!</p>
              <FormGroup
                addClass={"emailWrapper"}
                id={"emailId"}
                type={"text"}
                name={"emailId"}
                inputClass={"footerIpt"}
                placeholder={"Email ID"}
              />
              <button type='button'><Image src={sendBtn}></Image></button>
            </div>
          </div>

          <div className='copy-right'><p>© 2023 <b>Aayoni</b>. All rights reserved. Powered by <b><Link href="https://www.sublimis.tech/">Sublimis - ePorium</Link></b>.</p></div>
        </Container>
      </footer>

      {/* Footer last text  */}
      <div className='container'>
        <div className='top_searches'>
          <h5>Top Searches</h5>
          <h5>Womens</h5>
          <ul className='womens_list'>
            <li><span>Clothing: </span> Kaftans, Tunics, Shirts, Jackets, Pants, Shorts, Skirts, Dresses, Gowns, Knits, Plazos, Loungewear, Sportswear</li>
            <li><span>Bags: </span>Totes, Handbags, Clutches, Mini Leather Goods, Wallets, Cross Body Bags, Card Holder, Bagpacks, Travel Bags, Duffel Bags, Travel Pouches</li>
            <li><span>Accessories: </span> Scarves, Shawls, Belts, Jewellery, Hair Scarfs</li>
          </ul>
          <h5>Mens</h5>
          <ul className='mens_list'>
            <li><span>Clothing: </span>Clothing: Shirts, Sports wear, Kintwear, Outer wear</li>
            <li><span>Bags: </span>Laptop, Bagpacks, Travel bags, Small leather goods, Belt bags</li>
            <li><span>Accessories: </span>Cufflings, Brooch, Pocket Squares, Ties, Hats</li>
          </ul>

          <h5>Home Décor</h5>
          <ul>
            <li>Table Linens, Cushion Covers, Trays & Platters, Bedsheets & Bedcovers, Curtains, Quits & Throws, Carpets & Rugs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;