import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        msg: '',
    })
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    }
    const submitForm = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}.Phone number: ${data.number} Email id : ${data.email}. Your message: ${data.msg}`);
    }
    return (
        <>
            <div className='container-fluid'>
                <h1 className='text-center mt-5'>Contact Me</h1><hr className='col-md-5 mx-auto' />
                <div className='row my-5'>
                    <div className='col-md-6 mx-auto'>
                        <form onSubmit={submitForm}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" name='name' value={data.name} onChange={inputEvent} class="form-control" id="name" placeholder="Enter your name..." />
                            </div>
                            <div class="mb-3">
                                <label for="number" class="form-label">Phone Number</label>
                                <input type="number" name='number' value={data.number} onChange={inputEvent} class="form-control" id="number" placeholder="Enter your phone number..." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" name='email' value={data.email} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" name='msg' value={data.msg} onChange={inputEvent} id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-primary float-end'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact;