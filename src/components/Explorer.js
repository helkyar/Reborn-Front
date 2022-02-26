import * as React from "react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import Navbar from './Navbar';
import Post from './Post';

const url = `http://localhost:3003/api/`;
const mockedData = {
    title: 'vendo mueble',
    description: 'ya no se que hacer con él ayudaaaaaaaaaaaaaaaaaa',
    image: ['https://medias.conforama.pt/media/650by551/1e7e2763c70d2ffe8f17bff6095fe738d48270c6_BROOKLYN__1__405820.webp']
}

export default function Explorer() {
    const {repair} = useParams();
    const [posts, setPosts ] = useState([]);
    
        async function getDatabase() {
    
        const response = {};
        console.log(repair);
        if(repair == "transform"){
http://localhost:3003/api/            response = await axios.get(`${url}type/transform`)
            console.log(response);
        } else if(repair == "repair") {
            response = await axios.get(`${url}type/repair`)
            console.log(response);
        }
            setPosts(response);
            console.log(response);
        }

    useEffect(() => {
        getDatabase()
      }, [posts]);

    return(
        <>   
        <Navbar home={false}></Navbar>
        {posts && <><h1>{posts.title}</h1>
         {posts.map((post)=>{
             if(post.toRepair) return <h3>Estas en la ventana de Reparaciones </h3>
             else return <h3>Estas en la ventana de Transformaciones</h3>})}</> }
             
        </>
        
       
    )
}