import React from 'react';
import { FaTelegram, FaVk } from 'react-icons/fa';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className='footer__socials'>
                <a href='https://t.me/nikit34' className='home__social-link'>
                    <FaTelegram />
                </a>
                <a href='https://vk.com/id406247919' className='home__social-link'>
                    <FaVk />
                </a>
            </div>
            <p className="footer__copyright text-cs">
                &copy; 2023 <span>Leshy</span>. All Rights Reserved
            </p>
            <p className="footer__copyright text-cs">
                Developed by <span>Nikita Permyakov</span>
            </p>
        </div>
    </footer>
  );
};

export default Footer;
