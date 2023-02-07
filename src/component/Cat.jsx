import React from "react";

const styles = {
        
        card: {
        width: "200px",
        height: "230px",
        backgroundColor: "#F0EBCE",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        borderRadius: "10px",
        },
        
        img: {
        width: "170px",
        height: "130px",
        marginBottom: "15px",
        objectFit: "cover",
        borderRadius: "10px",
        }
};

function Cat(props) {
    return (
        <>
            <div style={styles.cat}>
                <div style={styles.card}>
                    <img src={props.img} 
                    style={styles.img} />
                    <span>{props.name}</span>
                </div>
            </div>
        </>
    )
}

export default Cat;