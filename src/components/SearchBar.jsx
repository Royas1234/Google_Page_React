import React from 'react';
import "../styles/SearchSection.css"
import SearchIcon from "../Images/Search.svg"
import microphone from "../Images/microphone.svg"
import camera from "../Images/camera.svg";
import { useState } from 'react';

const SearchBar = () => {
const [inputValue, setInputeValue] = useState("");
    

  return (
                <div className='Search-Box'>
                        <div className="inputSearch">
                        <img src={SearchIcon}alt="a clear icon" className="seach"  style={{ width:"20px" ,height:"20px"}}/>
                            <form> 
                                 <input type="text"  value="hello"/>
                            </form>
                          
                        </div>
                       
                        <div className="mic-Cam-Icons">
                            <div className="subTextMicClass">
                                <img src={microphone} alt="a microphone icon" className="microphone"
                               />
                                <div className="subTextMic">Search by voice</div>
                            </div>

                            <div className="subTextMicClass">
                                <img src={camera} alt="a camerav icon" className="icon-max"  />
                                <div className="subTextMic">Search by Images</div>
                            </div>
                          
                        </div>
                    
                </div>
  )
}

export default SearchBar