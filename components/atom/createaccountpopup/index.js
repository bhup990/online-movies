import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

// images links
import HidePswdicon from '@/assets/images/icons/psd-hide.svg';
import ShowPswdicon from '@/assets/images/icons/show-psd.svg';
import ModalCloseIcon from '@/assets/images/icons/modal-close.svg'

const Modalcreateaccount = (props) => {
    const [Showpassword, setShowpassword] = useState(HidePswdicon);
    const [ShowCpassword, setShowCpassword] = useState(HidePswdicon);
    const [Pswdtypeshow, setPswdtypeshow] = useState("password");
    const [Cpswdtypeshow, setCpswdtypeshow] = useState("password");

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
        <div className='modal-wrapper'>
            <Modal toggle={props.toggle} isOpen={props.modalOpen}>
                <ModalHeader>
                    <h5> Create an account</h5>
                    <Image src={ModalCloseIcon} alt='Modal Close Icon' onClick={props.toggle} />
                </ModalHeader>
                <ModalBody>
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

                        <button className='submitBtn' type='submit'>Create My Account</button>
                        <p className='term-policy'>By clicking create my account you agree to our <Link href={"#"}>Privacy Policy</Link>. and our <Link href={"#"}>Terms & conditions</Link></p>
                        <div className='login-link'>Already have an account? <Link href={'/login'}>Login</Link></div>
                    </form>
                </ModalBody>
            </Modal>
        </div>

    );
}

export default Modalcreateaccount;