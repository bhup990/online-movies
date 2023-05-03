import Image from 'next/image';
import Layout from '@/layouts/Main';
import Container from '@/components/atom/container';
import ShopForSection from '@/components/atom/homepages/sectionshopfor';
import Homedecor from '@/components/atom/homepages/sectionhomedecor';
import Bestselling from '@/components/atom/homepages/bestselling';
import Shellysummer from '@/components/atom/homepages/shellysummer';
import Customersays from '@/components/atom/homepages/customersays';
import Videoplayer from '@/components/atom/homepages/videoplayer';
import BrandsOn from '@/components/atom/homepages/brandson';
import Featuredproduct from '@/components/atom/homepages/featuredproducts';
import Newarrival from '@/components/atom/homepages/newarrival';

//Only Images links Import below
import BannerImg from '@/assets/images/green_bg.png';
import three_ladies_stand from '@/assets/images/three_ladies_stand.png';
import handcraft from '@/assets/images/icons/handcraft_icon.svg';
import b2b_icon from '@/assets/images/icons/b2b_icon.svg';
import pricetag_icon from '@/assets/images/icons/pricetag_icon.svg';
import zero_icon from '@/assets/images/icons/zero_icon.svg';
import shopping_icon from '@/assets/images/icons/shopping_icon.svg';
import quality_icon from '@/assets/images/icons/quality_icon.svg';
import Loginform from '@/components/atom/createaccountpopup';
import Pagination from '@/components/molecules/pagination';

export default function Home() {
  return (
    <>
      <div className='home_page'>
        <Layout title='Home Page'>
          {/* <div className='banner_sec'>
        <Image src={BannerImg} alt="Banner Image" className='banner_img' />
        </div> */}

          <section className='ayoni_b2b'>
            <Container>
              <h1 data-aos="fade-down">Aayoni</h1>
              <h2 data-aos="fade-down">A <b>B2B</b> Wholesale platform to the brands and artisans of <b>India</b> to present their <b>art</b> and <b>craft</b> to the <b>international</b> market.</h2>
              <div className='b2b_main' >
                <Image src={three_ladies_stand} alt={"Three Ladies Stand"} className="three_ladies" data-aos="fade-right"></Image>
                <ul data-aos="fade-left">
                  <li>
                    <Image src={b2b_icon} alt="B2B Icon" />
                    <p>B2B Wholesale Concept Store</p>
                  </li>
                  <li>
                    <Image src={handcraft} alt="handcraft" />
                    <p>100% Handcrafted Products</p>
                  </li>
                  <li>
                    <Image src={shopping_icon} alt="shopping_icon" />
                    <p>No Minimum Order Quantity</p>
                  </li>
                  <li>
                    <Image src={pricetag_icon} alt="Pricetag Icon" />
                    <p>Brand Mix at Wholesale Price</p>
                  </li>
                  <li>
                    <Image src={zero_icon} alt="Zero icon" />
                    <p>Zero Inventory Business Model</p>
                  </li>
                  <li>
                    <Image src={quality_icon} alt="Quality Icon" />
                    <p>Quality Buying and Not Quantity</p>
                  </li>

                </ul>
              </div>
              <button type='button' className='material-bubble'>More about Aayoni</button>
            </Container>
          </section>

          <ShopForSection />

          <Featuredproduct />

          <Newarrival />

          <Homedecor />

          <Bestselling />

          <Shellysummer />

          <Customersays />

          <Videoplayer />

          <BrandsOn />

          <Loginform />

        </Layout>
      </div>
    </>
  )
}


