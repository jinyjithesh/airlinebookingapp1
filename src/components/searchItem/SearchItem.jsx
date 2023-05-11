import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Users } from '../../users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "./searchItem.css"
export const SearchItem = () => {
   
    
  const location = useLocation();
  console.log(location,"loction");
  const[destination,setDestination]=useState(location.state.destination);
  const[query,setQuery]=useState("")
  console.log("v",query)
  console.log("qq",Users.filter(user=>user.destination.toLowerCase().includes("dub")))
  return (
    <div className="SearchItem">
        <div  className='serInputContiner'>
        <input className='serInput'  placeholder='Search for destination' onChange={e=>setQuery(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        
        
        
        {Users.filter(user=>user.destination.toLocaleLowerCase().includes(query)).map(user=>(
       <div className="Searchdesc"  key={user.id}>
        <div>
        <div className='depContainer'>
        
       
           
        


                <div className='SearchDeparchItem' >
                 <h1 className="SearchDeparchtime" >
                    {user.checkintime}
                 </h1>
                 <span className="SearchDepDateplace">{user.startplace}.{user.date}</span>
                 <p>{user.flightname}</p>
                </div>
                
                
        

           
        
     
    
    <div>
       <span>14h 10m</span>
       <hr/>
       <span>Direct</span>
    </div>
    <div>
        <h1 className="SearchArraveltime">{user.checkouttime}</h1>
        <p className="SearchArravelDateplace">{user.destination}.jun 18</p>
        
       
    </div>
    <div>
    <h1>{user.amount}</h1>
    <p>HappyFares</p>
    <button>View details</button>
    </div>
</div>
        </div>
       </div>
    //    {/* <div className="SearchDetails">
    //    </div> */}
       ))}
    </div>
  )
}
