import { React, useEffect, useState } from 'react';
import { links } from '../../Data';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './header.css';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  return (
    <header className="header">
        <nav className="nav">
            <a href="" className="nav__logo text cs">
                OMIK
            </a>
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <div className="nav__data">
                    <ul className="nav__list">
                        {links.map(({name, path}, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <a href="" className="nav__link text-cs">
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='header__socials'>
                        <a href='https://t.me/nikit34' className='header__social-link'>
                            <FaTelegram />
                        </a>
                        <a href='https://github.com/nikit34' className='header__social-link'>
                            <FaGithub />
                        </a>
                        <a href='https://www.linkedin.com/in/nikitapermikov/' className='header__social-link'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="nav__btns">
                <div className="theme__toggler">
                    <BsSun />
                </div>
                <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={
                    () => setShowMenu(!showMenu)}
                 >
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Header;
