import React,{useState,useEffect} from "react"

export default function First (){
   const [name,setName] = useState('Default')
   const [age,setAge] = useState(0)
    useEffect(()=>{

    },[])
        return(
            <div>
               {name}
    
            </div>
        )
    
}
export class Second extends React.Component{
   state={
       name:'eno',
       age: '40',
       height: 150,
       married: true
   }
    componentDidMount(){
        
    }
    componentDidUpdate(){

    }
    render(){
        return(
            <div>

            </div>
        )
    }
}