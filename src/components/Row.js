import React from 'react'
import './Row.css'
export default function Row(props){
    return(
        <ul className={props.hover?"row-hover":''} style={{listStyle:'none',backgroundColor: props.backgroundColor,border:props.border,cursor:'pointer' ,display:'flex',flexDirection:'row',alignItems:'center',height:'53px',width:'1300px',color:"#000",fontSize:'20px',fontWeight:"bold",marginBottom:'10px'}}>
            <li style={{textAlign:'center',width:'20%'}}>
                {props.country}
            </li>
            <li style={{textAlign:'center',width:'20%'}}>
                {props.active}
            </li>
            <li style={{textAlign:'center',width:'20%'}}>
                {props.recoveries}
            </li>
            <li style={{textAlign:'center',width:'20%'}}>
                {props.deaths}
            </li>
            <li style={{textAlign:'center',width:'20%'}}>
                {props.cases}
            </li>
        </ul>
    )
}