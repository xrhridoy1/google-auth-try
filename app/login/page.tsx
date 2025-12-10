import Button from '@/components/Button';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = () => {

    const googleSignIn = async () => {
        'use server'
        const supabase = await createClient();
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${process.env.SITE_URL}auth/callback`,
            },
        })
        if (data.url) {
            redirect(data.url) // use the redirect API for your server framework
        }
        if (error) {
            console.log(error);
        }

    }

    return (
        <form action={googleSignIn}>
            <Button />
        </form>
    );
};

export default LoginPage;

