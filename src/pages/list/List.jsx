import React from 'react'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import "./list.css"
import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import {format} from "date-fns"
import { DateRange } from 'react-date-range'
import { SearchItem } from '../../components/searchItem/SearchItem'
import { Users } from '../../users'


export const List = () => {
  const location = useLocation();
  console.log(location,"loction");
  const[destination,setDestination]=useState(location.state.destination)
  const[date,setDate]=useState(location.state.date)
  const[options,setOptions]=useState(location.state.options)
  const[openDate,setOpenDate]=useState(false)
  // const[destination,setDestination]=useState(location.state.destination)
  const[query,setQuery]=useState("")
  console.log("v",query)
  console.log("qq",Users.filter(user=>user.destination.toLowerCase().includes("dub")))
  return (
    <div><Navbar/>
    
    <Header type="flight"/>  
    <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
                <h1 className="listTitle">Search Details</h1>
                <div className="listItem">
                  <label>Destination</label>
                  <input  placeholder={destination} onChange={e=>setQuery(e.target.value)}></input>
                </div>
                <div className="listItem">
                  <label>Check-in Date</label>
                  <span onClick={()=>setOpenDate(!openDate)}>
                  {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].startDate,`MM/dd/yyyy`)}`}
                  
                  </span>
                 {openDate && <DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()}ranges={date}/>}
                </div>
                <div className="listItem">
                  <label>Option</label>
                <div className="listOptions">
               
                 
                  <div className="listOptionItem">
                    <span className='listOptionText'>
                      Adult
                    </span>
                    <input type="number" min={1} className="listOptionInput" placeholder={options.adult} />
                  </div>
                  <div className="listOptionItem">
                    <span className='listOptionText'>
                   Children
                   </span>
                    <input type="number" min={0} className="listOptionInput" placeholder={options.children}  />
                  </div>
                </div>
                </div>
        {/* <button  onChange={e=>setQuery(e.target.value)}>Search</button> */}
            </div>
            <div className="listResult">
            <SearchItem  />
           
            </div>
           
        </div>
    </div>
     </div>

  )
}
