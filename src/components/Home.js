import InfoCard from "./InfoCard";
import { useState, useEffect, createContext, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from './Navbar';

export default function Home() {
    const navigate = useNavigate();
    const [content, setContent] = useState([
        {
            title: 'Repara',
            img: 'https://img.freepik.com/free-vector/repair-household-appliances-abstract-concept-illustration-warranty-services-household-master-maintenance-tips-guidelines-repair-tools-how-fix-video_335657-912.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis risus, mattis id hendrerit ut, condimentum in lacus.'
        },
        {
            title: 'Transforma',
            img: 'https://img.freepik.com/vector-gratis/composicion-artesanal-personaje-femenino-aislado-escultor-haciendo-escultura-ilustracion-vector-martillo-cincel_1284-66994.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis risus, mattis id hendrerit ut, condimentum in lacus.'
        },
        {
            title: 'Publica e interactua',
            img: 'https://img.freepik.com/vector-gratis/compartir-articulos-ilustracion-concepto_114360-5517.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis risus, mattis id hendrerit ut, condimentum in lacus.'
        }
    ]);


    return (
        <>
            <Navbar home={true} />
            <div>
                <section className="main-banner">
                    <div className="text">
                        <h1>REBORN</h1>
                        <h3>Da una segunda vida a tus productos</h3>
                        <div className="actions">
                            <button className="cta transform" onClick={()=>navigate(`type/transform`)}>Transforma</button>
                            <button className="cta repair" onClick={()=>navigate(`type/repair`)}>Repara</button>
                        </div>
                    </div>
                </section>

                <section className="home-repair-section featured">
                    <InfoCard content={content[0]} />
                </section>

                <section className="home-transform-section featured">
                    <InfoCard content={content[1]} />
                </section>

                <section className="home-engage-section featured">
                    <InfoCard content={content[2]} />
                </section>

                {/* missing section that includes some posts */}
            </div>

        </>
    )
}