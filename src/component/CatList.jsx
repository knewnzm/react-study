import React from "react";
import Cat from "./Cat";

const style = {
    cat: {
        display: "flex",
        flex: 1,
        flexFlow: "row wrap",
        borderRadius: "10px",
        border: "5px solid #9F8772",
        overflowY: "scroll",
        },

    
    };

const cats = [
    {
        id: 1,
        img: "../img/mak.jpg",
        name: "길막",
    },
    {
        id: 2,
        img: "../img/tong.jpg",
        name: "야통",
    },
    {
        id: 3,
        img: "../img/nim.png",
        name: "연님",
    },
    {
        id: 4,
        img: "../img/jo.jpg",
        name: "조",
    },
    {
        id: 5,
        img: "../img/moo.jpeg",
        name: "무",
    },
    {
        id: 6,
        img: "../img/gi.jpg",
        name: "래기",
    },
];



function CatList() {
    return (
        <div style={style.cat}>
            {cats.map((cat) => {
                return (
                    <Cat name={cat.name} img={cat.img} key={cat.id}/>
                );
            })}
        </div>
    );
}

export default CatList;