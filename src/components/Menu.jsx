import React from 'react'

export const Menu = ({menuList,setDisplay,setMenuVisibility}) => {
  return (
    <div className='menu'>
        <h3>Vedant ipod</h3>
        <div className='ipod-menu'>
        {
        menuList.map((list,idx)=>
            <p className='ipod-menu-list' key={idx} onClick={()=>{setDisplay(list.Display)
              setMenuVisibility(false)

            }}>{list.title}</p>
  
  )}</div>
    </div>
  )
}
