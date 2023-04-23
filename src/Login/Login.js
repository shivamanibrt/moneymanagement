import React from 'react'
import Row from 'react-bootstrap/Row'
import { CustomInput } from '../Components/CustomInput';
import { Form, Button } from 'react-bootstrap';



export const Login = () => {
    const loginForm = [{
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
    }]
    return (
        <Row >
            <div className='form-container'>
                <Form className='border p-5 rounded shadow-lg mt-4'>
                    <h3>Welcome back!</h3>
                    {
                        loginForm.map((item, i) => (
                            <CustomInput {...item} key={i} />)

                        )}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Row>
    )
}
