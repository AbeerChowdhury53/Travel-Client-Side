import { getAuth, GoogleAuthProvider, signInWithPopup , createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../Firebase/firebase.init';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
// import useAuth from '../Hooks/useAuth';

import ('./Login.css')


initializeAuthentication();
const Login = () => {
const {singInUsingGoogle, setUser, setIsloding}= useFirebase()
const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [pass, setPass]=useState('')
const [Error, setError]=useState('')
const [isChecked, setIsChecked]=useState('')
// console.log(isChecked)

const location= useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home'
// console.log('came from', location.state?.from)
const auth = getAuth();


const handalGoogleLogin=()=>{
    setIsloding(true)  
    singInUsingGoogle()    
    .then(result => {
        console.log(result.user);
        setUser(result.user);
        history.push(redirect_uri)
        // setError('success')
    })
    .catch(error =>{
        setError(error.message)
    })
    .finally(()=> setIsloding(false))    
}




const hadndalEventChangeName = (e) =>{
    setName(e.target.value)
    // console.log(e.target.value)
}

const hadndalEventChange = (e) =>{
    setEmail(e.target.value)
}

const hadndalEventChangePass = (e) =>{
    setPass(e.target.value)
}


const hadndalEventChecked = (e) =>{
    setIsChecked(e.target.checked)
}

const hadndalregester = (e) =>{
    // console.log(email, pass);
   isChecked ? handleSingin(email, pass) : handleNewUser(email, pass);
     
    e.preventDefault();
}







const handleNewUser = (email, pass)=>{
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result => {    
      const user = result.user;
      setError('')
      setUser(user)
      setUserProfile()
    })
    .catch(error =>{
      setError(error.message)
  })

 
 
}

const setUserProfile = () =>{
    updateProfile(auth.currentUser,{displayName: name}) 
    .then(result => { } )
    }


const handleSingin = (email, pass)=>{
    signInWithEmailAndPassword(auth, email, pass)
    .then(result => {    
      const user = result.user;
      setError('')
      setUser(user)
    })
    .catch(error =>{
      setError(error.message)
  })
}


    return (
        <div className='login-form'>
            <div >
                <img className="login-image" src="https://i.ibb.co/253pMDc/5792795.jpg" alt=""></img>
            </div>
            <div className='from-div'>
                <Form> 
                         { !isChecked &&
                               <Form.Group as={Col} controlId="formGridName">
                               <Form.Label>Name</Form.Label>
                               <Form.Control onBlur={hadndalEventChangeName} type="name" required placeholder="Enter Name" />
                             </Form.Group>
                         }
                  
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onBlur={hadndalEventChange} type="email" required placeholder="Enter email" />
                        </Form.Group>
                        <br></br>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={hadndalEventChangePass} type="password" required placeholder="Password" />
                        </Form.Group>
                    

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check onChange={hadndalEventChecked} type="checkbox" label="Already Regestered?" />
                    </Form.Group>
                       <p>{Error}</p>
                    <Button id='btn-cls' variant="primary" type="submit"  onClick={hadndalregester}>
                    {isChecked ? 'Sing In':'Regester'}
                    </Button>
<h3>Please Singin wirh google,Sometime Email Singin is not working</h3>
                    <Button id='btn-cls-ggl' variant="primary"  onClick={()=>handalGoogleLogin()} >
                        Google Singing
                    </Button>

                    
                </Form>
            </div>
        </div>
    );
};

export default Login;