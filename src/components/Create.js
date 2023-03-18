import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [age,setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate= useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://63e989d34f3c6aa6e7ce5655.mockapi.io/crud',{
            e_name:name,
            e_age: age,
            e_email: email
        }).then(()=> {
            navigate('/');
        }).catch((error)=>{
            console.log(error);
    })
    }
    return (
        <>
          <div className="row">
                <div className="col-md-4">
                        <div className='my-2'>
                            <Link to='/' >
                            <button className='btn btn-primary' >Read Data</button>
                            </Link>
                        </div>

                        <div className='bg-primary p-4 '>
                            <h1>Create Data</h1>
                        </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Enter Name :</label>
                            <input type="text" placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Age :</label>
                            <input type="number" placeholder='Age' className='form-control'  onChange={(e)=>setAge(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Email :</label>
                            <input type="email" placeholder='Email' className='form-control'  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <br />
                        <div className="d-grid">
                        <input type="submit" value='submit' className='btn btn-primary' />
                        </div>
                    </form>
                  
                </div>
            </div>  
        </>
    );
};

export default Create;

// First Step Create 
// we have to cteate form for input data  in create.js
// after click on submit send read.js file
//after create go on Read.js file