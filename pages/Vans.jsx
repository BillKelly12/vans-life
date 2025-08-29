import React from "react";

export default function Vans(){
    React.useEffect(()=>{
        const data = fetch("/api/vans").then(response => response.json()).then(data => console.log(data))
        console.log(data)
    }, [])
    return(
        <h1>Vans page goes here 🚐</h1>
    )
}