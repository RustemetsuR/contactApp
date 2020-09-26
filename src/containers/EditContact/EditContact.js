import React from 'react';
import axios from '../../axiosContacts';
import { useDispatch, useSelector } from 'react-redux';
import { changeContactData, clearContactData } from '../../store/actions/addContactActions';
import Container from '../../components/UI/Container/Container';

const EditContact = props => {

    const dispatch = useDispatch();
    const name = useSelector(state => state.addContact.name);
    const phone = useSelector(state => state.addContact.phone);
    const email = useSelector(state => state.addContact.email);
    const image = useSelector(state => state.addContact.image);

    const id = useSelector(state => state.contacts.id);

    const changedData = event => {
        const nameTarget = event.target.name;
        const valueTarget = event.target.value;
        dispatch(changeContactData(nameTarget, valueTarget));
    };

    const fetchEditPost = async event =>{
        event.preventDefault();
        const data = {
            name: name,
            phone: phone,
            email: email,
            image: image,
        };

        await axios.put('/contacts/' + id + '.json', data);
        dispatch(clearContactData());
        props.history.replace('/');
    };

    return (
        <div className='addContactBox'>
            <Container>
                <form className='addContactForm' onSubmit={fetchEditPost}>
                    <div className='input-box'>
                        <label htmlFor='name'>Name </label>
                        <input onChange={changedData} required typeof='text' id='name' name='name' value={name} />
                    </div>
                    <div className='input-box'>
                        <label htmlFor='phone'>Phone</label>
                        <input onChange={changedData} required typeof="tel" id='phone' name='phone' value={phone} />
                    </div>

                    <div className='input-box'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={changedData} required typeof='email' id='email' name='email' value={email} />
                    </div>
                    <div className='input-box'>
                        <label htmlFor='image'>Image</label>
                        <input onChange={changedData} required typeof='text' id='image' name='image' value={image} />
                    </div>

                    <div className='input-box'>

                        {image !== '' ? <>
                            <label htmlFor='preview'>Preview</label>
                            <img alt={name} className='preview-img' src={image} />
                        </>
                            : null}
                    </div>

                    <button type='submit'>Edit</button>
                </form>
            </Container>
        </div>
    );
};

export default EditContact;