import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../Components/CustomInput';
import Row from 'react-bootstrap/Row'
import { toast } from 'react-toastify';
import { auth } from '../Firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/firebase-config'
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const navigate = useNavigate();
    const [fromData, setFromData] = useState({});
    const [error, setError] = useState('')


    const handelOnChange = e => {
        const { name, value } = e.target;

        if (name === 'password') {
            setError('')
            value.length < 6 && setError('Password is to short');

            !/[0-9]/.test(value) && setError('Password  must include number');
            !/[A-Z]/.test(value) && setError('Password  must include Uppercase');
            !/[a-z]/.test(value) && setError('Password  must include Lowercase');
        }

        setFromData(
            {
                ...fromData,
                [name]: value
            });
        // console.log(fromData)
    }

    const handelOnsubmit = async (e) => {
        try {
            e.preventDefault();
            const { confirmPassword, password, email } = fromData;
            if (confirmPassword !== password) {
                toast.error('Passwor do not match')

            }
            const pendingState = createUserWithEmailAndPassword(auth, email, password);

            toast.promise(pendingState,
                {
                    pending: ' Please wait'
                }
            )
            const { user } = await pendingState;
            if (user?.uid) {
                toast.success('User has been registered you can login now')
                //user is registered now lets add them in our database fot the future post
                const userObj = {
                    fName: fromData.fName,
                    lName: fromData.lName,
                    email,
                }

                await setDoc(doc(db, 'users', user.uid), userObj)

                //send user to the dashboard
                // navigate('/dashboard')


                // setDoc
            }
        } catch (error) {
            toast.error(error.message)

        }
    };





    const inputField = [
        {
            label: 'First Name',
            name: 'fName',
            placeholder: 'John',
            required: true
        },
        {
            label: 'Last Name',
            name: 'lName',
            placeholder: 'Doe',
            required: true
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'johndoe@email.com',
            required: true
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '******',
            required: true
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: '******',
            required: true
        },

    ]
    return (
        <Row>
            <div className='form-container'>
                <Form onSubmit={handelOnsubmit} className='border p-5 rounded shadow-lg mt-4'>
                    <h3>Join our Applcicaiton</h3>
                    {
                        inputField.map((item, i) => (
                            <CustomInput {...item} key={i} onChange={handelOnChange} />)

                        )}
                    <div className='p-3 mb-4'>
                        <Form.Text>
                            Password should be longer than 6 character and contain atlease 1 capital letter and small letter
                            {
                                error &&
                                <ul>
                                    <li className='text-danger'>{error}</li>
                                </ul>
                            }
                        </Form.Text>
                    </div>


                    <Button variant="primary" type="submit" disabled={error}>
                        Submit
                    </Button>
                </Form>
            </div>
        </Row>


    )
}
