import React from 'react';
import shapeTwo from '../../asserts/shape-2.png';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import './pricing.css';


const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
        <h2 className="section__title text-cs">Pricing</h2>
        <p className="section__subtitle">
            My <span>Price Board</span>
        </p>
        <div className='pricing__container container grid'>
            <div className="pricing__item card card-one">
                <span className='pricing__subtitle text-cs'>Hourly Basis</span>
                <h3 className="pricing__price">
                    39 <span>$</span> <em>Hour</em>
                </h3>
                <p className="pricing__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper diam urna, sed sodales felis facilisis ut. Duis libero dolor, pretium vel sapien sed, tempus interdum mi
                </p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Brand Design</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>
                    <li className="list__item">
                        <span>Advertising</span>
                    </li>
                    <li className="list__item">
                        <span>Photography</span>
                    </li>
                </ul>
                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
                </a>
                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
            <div className="pricing__item-wrapper">
                <span className='pricing__label text-cs'>Popular</span>
                <div className="pricing__item card card-one">
                    <span className='pricing__subtitle text-cs'>Hourly Basis</span>
                    <h3 className="pricing__price">
                        39 <span>$</span> <em>Hour</em>
                    </h3>
                    <p className="pricing__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper diam urna, sed sodales felis facilisis ut. Duis libero dolor, pretium vel sapien sed, tempus interdum mi
                    </p>
                    <ul className="pricing__list">
                        <li className="list__item">
                            <FaCheck className='list__icon'></FaCheck>
                            <span>Brand Design</span>
                        </li>
                        <li className="list__item">
                            <FaCheck className='list__icon'></FaCheck>
                            <span>Web Development</span>
                        </li>
                        <li className="list__item">
                            <span>Advertising</span>
                        </li>
                        <li className="list__item">
                            <span>Photography</span>
                        </li>
                    </ul>
                    <a href="" className="btn pricing__btn text-cs">
                        Start Project
                        <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
                    </a>
                    <img src={shapeTwo} alt="" className="shape c__shape" />
                </div>
            </div>
            <div className="pricing__item card card-one">
                <span className='pricing__subtitle text-cs'>Hourly Basis</span>
                <h3 className="pricing__price">
                    39 <span>$</span> <em>Hour</em>
                </h3>
                <p className="pricing__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper diam urna, sed sodales felis facilisis ut. Duis libero dolor, pretium vel sapien sed, tempus interdum mi
                </p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Brand Design</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>
                    <li className="list__item">
                        <span>Advertising</span>
                    </li>
                    <li className="list__item">
                        <span>Photography</span>
                    </li>
                </ul>
                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
                </a>
                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
        </div>
    </section>
  );
}

export default Pricing;
