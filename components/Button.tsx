'use client'
import React from 'react';
import { useFormStatus } from 'react-dom';

const Button = () => {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} className='border p-3 m-20'>
            {pending ? 'Loading' : 'Sign in With Google'}
        </button>
    );
};

export default Button;