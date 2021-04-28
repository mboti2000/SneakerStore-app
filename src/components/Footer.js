import React from 'react';
import '../styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer__body">
                <div className="footer__column">
                    <h3>Follow Us</h3>
                    <div className="footer__icon"><FacebookIcon /></div>
                    <div className="footer__icon"><InstagramIcon /></div>
                    <div className="footer__icon"><TwitterIcon /></div> 
                </div>
                
                <div className="footer__column">
                    <h3>Contacts</h3>
                    <div className="footer__contact">
                        <MailOutlineIcon/>
                        <p>sneaker.store@gmail.com</p>
                    </div>
                    <div className="footer__contact">
                        <HomeIcon/>
                        <p>123 Baker Street, LA</p>
                    </div>
                    <div className="footer__contact">
                        <PhoneIcon/>
                        <p>06/20/111/1111</p>
                    </div>
                    
                </div>

                <div className="footer__column">
                    <h3>Information</h3>
                    <p className="footer__link">PRIVACY POLICY</p>
                    <p className="footer__link">FAQ</p>
                    <p className="footer__link">PAYMENT</p>
                    <p className="footer__link">SHIPPING</p>
                </div>

           
            </div>
           

            <div className="footer__copy">
                &copy; Maczkó Botond, 2021
            </div>
        </div>
    );
};

export default Footer;