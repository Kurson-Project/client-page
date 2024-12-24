import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function LoginPage() {

    useEffect(() => {
        if (localStorage.token) {
            const role = localStorage.getItem('role')
            if (role == 'admin') {
                navigate('/admin')
            }
            else {
                navigate('/dashboard')
            }
        }    
    })

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const loginUser = (e) => {
        e.preventDefault()

        if (!loginEmail || !loginPassword) {
            setError('Mohon isi semua field');
            return;
        }

        Axios.post('http://localhost:3001/login', {
            user_email: loginEmail,
            user_password: loginPassword
        }).then((response) => {
            const role = response.data.data.role
            localStorage.token = response.data.data.token
            localStorage.setItem('role', role)
            if (response.data.status != 200) {
                setError(response.data.message)
            }
            else {
                setLoginEmail('')
                setLoginPassword('')
            }
        }).catch((err) => {
            setError(err.response.data.message)
        })
    }


    const onSubmit = () => {
        setLoginEmail('')
        setLoginPassword('')
    }


    return (
        <>
            <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {error && (
                        <div className="text-red-500 mb-4">
                            {error}
                        </div>
                    )}
                    <form action="" className="space-y-6" method="post" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    onChange={(event) => { setLoginEmail(event.target.value) }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    onChange={(event) => { setLoginPassword(event.target.value) }}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={loginUser}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Don{"'"}t have an account yet?{' '}
                        <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </a>
                    </p>
                </div>
            </section>
        </>
    )
}
