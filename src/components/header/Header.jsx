import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDay, faCar, faPerson, faPlane,faHotel } from "@fortawesome/free-solid-svg-icons"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {format} from "date-fns"
import "./header.css"
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'
export const Header = ({type}) => {
    console.log("options".setOptions);
    const [destination,setDestination]=useState("")
    const [openOptions,setOpenOptions]=useState(false)
    const [options, setOptions] = useState(
        {
        adult:1,
        children:0,
        
        }
      );
    const [openDate,setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const navigate =useNavigate()
      const handelOption=(name,operation)=>{setOptions( prev=>{ return {...prev, [name]:operation === "i" ? options [name]+1 :options[name]-1,}})}
      const handleSearch=()=>{navigate("/flights",{state:{destination,date,options}});};
  return (
    <div className='header'>
       
        <div className={type === "flights" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faPlane }/>
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCoffee }/>
                
                <span>Cafe</span>
            </div>
            <div className="headerListItem">
               
                <FontAwesomeIcon icon={faHotel} />
                <span>Hotel</span>
            </div>
            
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar }/>
                <span>Care rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed}/>
                <span>Stays</span>
            </div>
        </div>
        {type !== "flight" &&
        <>
        <h1 className="headerTitle">A Lifetime  of discounts? It's Genius.</h1>
      <p className="headerDesc">
        get rewardes for travels unlock instant savings of 10% or more with a free Airlinebooking.com account
      </p>
    
      <button className="headerBtn">Sign in / Register</button>
      
      <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPlane } className="headersearchIcon"/>
                <input type="text" placeholder="where are you going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)} ></input>
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="headersearchIcon"/>
                <span 
                onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].startDate,`MM/dd/yyyy`)}`}</span>
               { openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson } className="headersearchIcon"/>
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult & ${options.children} children`} </span>
                 { openOptions &&
                 <div className='options'> 
                  <div className="optionItem">
                        <span className="optionText">
                          Adult
                        </span>
                        <div className="optionCounter">
                        <button 
                           disabled={ options.adult <= 1}className='optionCounterButton' onClick={()=>handelOption("adult","d")}> -</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className='optionCounterButton'onClick={()=>handelOption("adult","i")}> +</button>
                        
                        </div>
                    </div> 
                    <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button 
                    disabled={ options.children <= 1}
                    className='optionCounterButton'onClick={()=>handelOption("children","d")}> -</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className='optionCounterButton' onClick={()=>handelOption("children","i")}> +</button>
                        </div>
                    </div> 
                    </div>
                }
             </div>
              <div className="headerSearchItem">
               <button className='headersearchbuton' onClick={handleSearch}>Search</button>
             </div>
      </div> </>}
        </div>
        
        </div>
  )
}
