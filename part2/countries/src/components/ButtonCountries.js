import React,{useState} from 'react'

export default function ButtonCountries({country}) {
    
    const [show, setShow] = useState(false)
    const showFlag = () =>{
        console.log(show)
       setShow(!show)
    }
    return ( 
        <>
          <button onClick={showFlag}>show</button>  
          {show && <img src = {country.flag} alt={country.nativeName} width="30px"></img>}
        </>
    )
}
