import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/UI/Container/Container';
import Modal from '../../components/UI/Modal/Modal';
import { fetchData, getId, hideModal, showModal } from '../../store/actions/contactsActions';
import ContactItem from './ContactItem/ContactItem';
import './ContactsList.css';
import axios from '../../axiosContacts';

const ContactsList = props => {


    const contacts = useSelector(state => state.contacts.contacts);
    const modalInfo = useSelector(state => state.contacts.modalInfo);
    const modal = useSelector(state => state.contacts.modal);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [contacts, dispatch]);

    const hideModalHandler = () => {
        dispatch(hideModal());
    };

    const showModalHandler = key => {
        dispatch(showModal(contacts[key]));
    };


    const deleteContact = async id => {
        await axios.delete('/contacts/' + id + '.json');
    };

    const edit = key => {
        dispatch(getId(key));
        props.history.replace('/edit');
    };

    return (
        <div className='contacts-list-box'>
            <Container>
                <div className='contacts-list'>
                    {contacts.length !== 0 ?
                        Object.keys(contacts).map(key => {

                            return <ContactItem
                                key={key}
                                img={contacts[key].image}
                                name={contacts[key].name}
                                phone={contacts[key].phone}
                                email={contacts[key].email}
                                moreInfo={() => showModalHandler(key)}
                                edit={() => edit(key)}
                                delete={() => deleteContact(key)} />
                        })
                        : null}

                </div>
                <Modal closed={hideModalHandler} show={modal}>
                    <div className='modal-info-box'>
                        <img className='modal-info-image' alt={modalInfo.name} src={modalInfo.image} />
                        <h1 className='modal-info-name'>{modalInfo.name}</h1>
                        <a className='modal-info-phone' href={'tel:' + modalInfo.phone}>{modalInfo.phone}</a>
                        <a className='modal-info-email' href={'mailto:' + modalInfo.email}>{modalInfo.email}</a>
                    </div>

                </Modal>
            </Container>
        </div>
    );
};

export default ContactsList;