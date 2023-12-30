import React from "react";
import { ButtonsHome } from './components/ButtonsHome';
import './styles/Home.css'
import { Outlet } from "react-router-dom";

function Home(){
    return (
        <div className="home-principal-div">
            <div className='home-component-div'>
                <ButtonsHome/>
            </div>
        </div>
    );

};

export default Home;