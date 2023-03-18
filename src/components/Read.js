import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [apiData , setApiData] = useState([])

    function getData(){
        axios.get('https://63e989d34f3c6aa6e7ce5655.mockapi.io/crud')
        .then((response)=>{
            setApiData(response.data);
        }).catch((error)=>{
            console.log(error);
    })
    }

    useEffect(()=>{
        getData();
    },[])
   
    function handleDelete(id){
        axios.delete(`https://63e989d34f3c6aa6e7ce5655.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        }).catch((error)=>{
            console.log(error);
    })
    }
    // edit krne ke liye mujhe localstorage me set krna pra 
    function setDataToStorage(id,name,age,email){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
    }
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                        <div className='my-2'>
                            <Link to='/create' >
                            <button className='btn btn-primary' >Create New Data</button>
                            </Link>
                        </div>

                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>EDIT</th>
                                <th>DELETE</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item)=>{
                                    return(
                                        <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name} </td>
                                            <td>{item.e_age} </td>
                                            <td>{item.e_email} </td>
                                            <td>
                                                <Link to='/edit' >
                                                <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)} >EDIT</button>
                                                </Link>
                                            </td>
                                            <td>
                                            <button className='btn btn-danger' onClick={()=> {if(window.confirm('AreYou Sure to delete date ??')) {handleDelete(item.id)}}  } >DELETE</button>
                                            </td>
                                        </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Read;

// Second step 

// read data
// delete data
// then go to edit.js