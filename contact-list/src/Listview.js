import React, { useState } from 'react';
import phonebook from './contacts.json'
import { Link } from 'react-router-dom'
import './App.css';

function ListView() {
    const [contacts] = useState(phonebook)
    return ( 
        <div>
            <div class="view">List View</div>
            <div class="title">My Peeps</div>
            {contacts.map(item => {
            return <div className="name">
                <img className="thumbnail" src={item.picture.thumbnail} alt="contactPicture"></img>
                <div className="nameLink">
                    <Link to={`/contacts/${item.id}`}>{item.name.first} {item.name.last}</Link>
                </div>    
                </div>  
          })} 
        </div>
    )
       
}

export default ListView 