import React from 'react';
import './ContactItem.css';

const ContactItem = props => {

    return (
        <div className='contact-item-box'>
            <img alt={props.name} src={props.img} />
            <h3>{props.name}</h3>
            <div className="btn-box">
                <button onClick={props.moreInfo} className='contact-item-button contact-item-show'>More Info</button>
                <button onClick={props.edit} className='contact-item-button contact-item-edit'>Edit</button>
                <button onClick={props.delete} className='contact-item-button contact-item-delete'>Delete</button>
            </div>
        </div>
    );
};

export default ContactItem;