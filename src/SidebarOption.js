import React from 'react'
import "./SidebarOption.css"
function SidebarOption({title,Icon}) {
    // console.log(Icon,title)
  return (
    <div className='options'>
        {Icon && <Icon className="icon_options"/>}
        
        {Icon?<h4>{title}</h4>:<p>{title}</p>}
        </div>
  )
}

export default SidebarOption