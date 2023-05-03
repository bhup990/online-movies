import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

// Images Imported 
import HidePswdicon from '@/assets/images/icons/psd-hide.svg';
import ShowPswdicon from '@/assets/images/icons/show-psd.svg';
import BGImage from '@/assets/images/login-bg.png';
import ModalCloseIcon from '@/assets/images/icons/modal-close.svg'

const CreateAccountPage = () => {
  const [Showpassword, setShowpassword] = useState(HidePswdicon);
  const [ShowCpassword, setShowCpassword] = useState(HidePswdicon);
  const [Pswdtypeshow, setPswdtypeshow] = useState("password");
  const [Cpswdtypeshow, setCpswdtypeshow] = useState("password");
  const [termOpenModal, setTermOpenModal] = useState(false);
  const [policyOpenModal, setpolicyOpenModal] = useState(false);

  const handlePolicyModal = () => {
    setpolicyOpenModal(!policyOpenModal);
  }

  const handleTermOpenModal = () => {
    setTermOpenModal(!termOpenModal);
  }
  const Handlepassword = () => {
    if (Showpassword === HidePswdicon) {
      setShowpassword(ShowPswdicon);
      setPswdtypeshow("text");
    } else {
      setShowpassword(HidePswdicon);
      setPswdtypeshow("password");
    }
  }

  const HandleCpassword = () => {
    if (ShowCpassword === HidePswdicon) {
      setShowCpassword(ShowPswdicon);
      setCpswdtypeshow("text");
    } else {
      setShowCpassword(HidePswdicon);
      setCpswdtypeshow("password");
    }
  }
  return (
    <>
      <div className='create-account'>
        <Image src={BGImage} alt='Background Image' className='bg-img' />
        <div className='content-wrapper'>
          <h5> Create an account</h5>
          <p className='fields-imp'>*Mandatory Fields</p>
          <form>
            <div className='details-form'>
              <div className='form-group'>
                <label for='#'>First Name*</label>
                <input type="text" />
              </div>
              <div className='form-group'>
                <label for='#'>Last Name*</label>
                <input type="text" />
              </div>
              <div className='form-group'>
                <label for='#'>Email Id*</label>
                <input type="text" />
              </div>
              <div className='form-group'>
                <label for='#'>Mobile*</label>
                <div className='mobile'>
                  <select>
                    <option>+91</option>
                    <option>+91</option>
                  </select>
                  <input type="number" />
                </div>
              </div>
              <div className='form-group pswd'>
                <label for='#'>Password*</label>
                <input type={Pswdtypeshow} />
                <Image src={Showpassword} alt='Hide icon' onClick={Handlepassword} />
              </div>
              <div className='form-group pswd'>
                <label for='#'>Confirm Password*</label>
                <input type={Cpswdtypeshow} />
                <Image src={ShowCpassword} alt='Hide icon' onClick={HandleCpassword} />
              </div>
              <div className='pswd-secure'>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <span className='secure-msg'>Weak</span>
                </ul>
              </div>
            </div>

            <h6>Shop Information</h6>
            <div className='shop-info'>
              <div className='form-group'>
                <label for=''>Shop Type*</label>
                <select>
                  <option>Shop type 1</option>
                  <option>Shop type 2</option>
                  <option>Shop type 3</option>
                  <option>Shop type 4</option>
                </select>
              </div>

              <div className='form-group'>
                <label for='#'>Shop Name*</label>
                <input type="text" />
              </div>

              <div className='form-group'>
                <label for='#'>VAT</label>
                <input type="text" />
              </div>
            </div>

            <Link href={'/thankyou'}><button className='submitBtn' type='submit'>Create My Account</button></Link>
            <p className='term-policy'>By clicking create my account you agree to our <Link href={"#"} onClick={handlePolicyModal}>Privacy Policy</Link>. and our <Link href={"#"} onClick={handleTermOpenModal}>Terms & conditions</Link></p>
            <div className='login-link'>Already have an account? <Link href={'/login'}>Login</Link></div>
          </form>
        </div>
        <div className='login-footer'>
          <p>© 2023 Aayoni. All rights reserved. Powered by <Link href={"#"}><b>Sublimis - ePorium</b></Link>.</p>
        </div>


        {/* policy and privacy  */}
        <Modal className='policyandterms' toggle={handlePolicyModal} isOpen={policyOpenModal}>
          <ModalHeader>
            <h4>Privacy Policy</h4>
            <Image src={ModalCloseIcon} alt='Modal Close Icon' onClick={handlePolicyModal} />
          </ModalHeader>
          <ModalBody>
            <div className='contents'>
              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              </ul>

              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              </ul>
            </div>
          </ModalBody>
        </Modal>

        {/* Terms & conditions popup  */}
        <Modal className='policyandterms' toggle={handleTermOpenModal} isOpen={termOpenModal}>
          <ModalHeader>
            <h4>Terms and Conditions</h4>
            <Image src={ModalCloseIcon} alt='Modal Close Icon' onClick={handleTermOpenModal} />
          </ModalHeader>
          <ModalBody>
            <div className='contents'>
              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              </ul>

              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <h5>Lorem Ipsum Is Simply Dummy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              </ul>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  )
}

export default CreateAccountPage;