import React, { useState, useEffect } from 'react'
import Phonebook from './contacts.json'
import './App.css';


export default function Singleview(props) {
    const [contact, setContact] = useState({ name: {}, location: {}, picture: {} })
    useEffect(() => {
        const id = Number(props.match.params.id)
        const user = Phonebook.find(item => id === item.id)
        setContact(user)
    }, [props.match.params.id])

    function goBack(e) {
      e.preventDefault()
      props.history.push("/")
    }

    return (
        <div>
            <div>
                <div className="view">Single View</div>
                <div className="title2">
                  <button onClick={goBack}>&#x2190;</button>
                  <img className="largeImage" src={contact.picture.large} alt="contactPicture"></img>
                </div>
                <div className="name2"><span className="username">👤</span>
                  <div className="info">{contact.name.first} {contact.name.last}</div>
                </div>
                <div className="email"><span className="mail">📧</span>
                  <div className="info">{contact.email}</div>
                </div>
                <div className="email"><span className="phone">📱</span>
                  <div className="info">{contact.phone}</div>
                </div>
                <div className="location"><span className="globe">🌍</span>
                  <div className="info">{contact.location.city}, {contact.location.state}</div>
                </div>  
            </div>
        </div>
    )
}