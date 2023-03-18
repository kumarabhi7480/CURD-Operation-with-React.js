import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {

    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')

    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    },[])

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://63e989d34f3c6aa6e7ce5655.mockapi.io/crud/${id}`,{
            e_name: name,
            e_age:age,
            e_email: email
        }).then(()=>{
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
                            <h1>Update Data</h1>
                        </div>

                    <form onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label htmlFor="">Enter Name :</label>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Age :</label>
                            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}  placeholder='Age' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Email :</label>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email' className='form-control' />
                        </div>
                        <br />
                        <div className="d-grid">
                        <input type="submit" value='update' className='btn btn-primary' />
                        </div>
                    </form>
                  
                </div>
            </div>  
        </>
    );
};

export default Edit;


// last step 
// here 