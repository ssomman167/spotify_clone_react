import React from 'react'
import './Header.css'
// import {SearchIcon} from "@mui/icons-material"
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

import {useStateValue} from "./StateProvider"

function Header() {

    const [{user},dispatch]=useStateValue()
  console.log("user",user.display_name)
  return (
    <div className='h'>
        <div className='hl'>
<SearchIcon/>
<input placeholder='Search for Artists and songs' type="text"/>
        </div>
        <div className='hr'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>Neel</h4>
        </div>
    </div>
  )
}

export default Header