import { doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword} from '../auth';
import app from '../firebase';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuth } from '../auth';

export const auth = getAuth(app); const Login = () => { const signupUser = () => { doCreateUserWithEmailAndPassword( auth, username, password ).then((value) => console.log(value));
    };

    const [signupVisible, setsignupVisible] = useState(true);
    // Remove the unused declaration of 'userLoggedIn'
    useAuth();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);

    // Remove the unused declaration and assignment of 'onSubmit' function
    const onSubmit = async (e) => {
        e.preventDefault();
        if (isSigningIn){
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(username, password)
        }
    }


    // const onGoogleSignIn =  (e) => {
    //     e.preventDefault();
    //     if (isSigningIn){
    //         setIsSigningIn(true);
    //         doSignInWithGoogle().catch(err => {
    //             setIsSigningIn(false);
    //         })
    //     }
    // }


    return (
        <div>

            {
                signupVisible
                    ? <div className='flex flex-col items-center'>

                        <h2 className='text-3xl text-center font-bold mt-3'>Sign Up</h2>
                        <form>


                            <input
                                className='block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-10'
                                type="text"
                                value={username}
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                className='block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3'
                                type="text"
                                value={name}
                                placeholder='Name'
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                className='block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3'
                                type="email"
                                value={username}
                                placeholder='Email address'
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                className='block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3'
                                type="password"
                                value={password}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button className='cursor-pointer bg-indigo-700 text-white min-w-80 py-2 rounded-lg mt-5 font-medium' type="button" onClick={signupUser}>
                                Sign Up
                            </button>
                        </form>

                        <p className='text-gray-500 text-sm mt-5'>Already have an account?<span className='cursor-pointer text-indigo-700 font-medium' onClick={() => setsignupVisible(false)} > Login</span></p>

                    </div>
                    : <div className='flex flex-col items-center'>


                        <h2 className='text-3xl text-center font-bold mt-3'>Login</h2>
                        <form>


                            <input
                                className='block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-10'
                                type="text"
                                value={username}
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                className='block bg-gray-100 px-4 py-2 rounded-lg min-w-80 border border-gray-200 mt-3'
                                type="password"
                                value={password}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button className='cursor-pointer bg-indigo-700 text-white min-w-80 py-2 rounded-lg mt-5 font-medium' type="button" onClick={onSubmit}>
                                Login
                            </button>
                        </form>

                        <p className='text-gray-500 text-sm mt-5'>Don't have an account?<span className='cursor-pointer text-indigo-700 font-medium' onClick={() => setsignupVisible(true)} > Create One</span></p>
                    </div>

            }
        </div>
    );
};
export default Login;