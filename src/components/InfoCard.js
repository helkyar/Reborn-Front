import { useState, useEffect, createContext, useContext } from "react";

export default function InfoCard(props) {
    const [content, setContent] = useState({ ...props.content });
    return (
        <>
            <div className="card-header">
                <img src={content.img}></img>
                <h2 className="home-title">{content.title}</h2>
            </div>
            <div className="card-description">
                <p>{content.description}</p>
            </div>
        </>
    )
}