import React, { useState } from 'react'
import { Menu } from './Menu';
import { Cover } from './Cover';
import { Music } from './Music';
import {Game} from './Game'
import { Setting } from './Setting';
import { Default } from './Default';
export const Ipod = () => {
  const[menuVisibility,setMenuVisibility]=useState(true);
  const[Display,setDisplay]=useState();
  const[menuList,setMenuList]=useState([
    {title:"Cover Flow",Display:"COVER"},
    {title:"Music",Display:"MUSIC",
      subMenu:[
        {title:"Album",Display:"ALBUM"},
        {title:"Artists",Display:"ARTIST"},
        {title:"All Songs",Display:"ALL"}
      ]
    },
    {title:"Game",Display:"GAME"},
    {title:"Setting",Display:"SETTING"}
  ]);
  console.log(Display);
  
  return (
    <div className='ipod'>
      <div className="ipod-display">
        {
menuVisibility &&<Menu  menuList={menuList} setDisplay={setDisplay} setMenuVisibility={setMenuVisibility}/>
        }
        {!Display ? <Default/>:Display=="COVER"?<Cover/>
        :Display=="MUSIC"?<Music/>
        :Display=="GAME"?<Game/>
        :Display=="SETTING"?<Setting/>
        :"Nothing to display"}
      </div>
      <div className="ipod-control-container">
        <div className="ipod-control">
        
         <span onClick={()=>setMenuVisibility(!menuVisibility)}>MENU</span> 
        
         <div className='ipod-control-btn-row'>
          <span>PR</span>
          <button className='center-button'>CE</button>
          <span>NX</span>
        </div>
          <span>PL/PU</span>
         </div>
        </div>
      </div>
 
  )
}
