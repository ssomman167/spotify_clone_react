import React, { useState } from 'react'
import './SideBar.css'
import SidebarOption from './SidebarOption'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useStateValue } from './StateProvider';
function SideBar() {
    const [{playlists},dispatch]=useStateValue()
    console.log("playlist-",playlists)
  return (
    <div className='sidebar'>
   <img className='logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
   <SidebarOption title={"Home"} Icon={HomeRoundedIcon}/>
   <SidebarOption title={"Search"} Icon={SearchRoundedIcon}/>
   <SidebarOption title={"Your Library"} Icon={LibraryAddIcon}/>
   <br/>
   <strong className='sidebar_title'>
       PLAYLISTS
   </strong>
   <hr></hr>

   {playlists?.items?.map(playlist=>(<SidebarOption title={playlist.name}/>))}

   {/* <SidebarOption title={"BTS"}/>
   <SidebarOption title={"KPOP"}/>
   <SidebarOption title={"Hiphop"}/>
   <SidebarOption title={"Rock"}/>
   <SidebarOption title={"RnB"}/> */}

   
    </div>
  )
}

export default SideBar