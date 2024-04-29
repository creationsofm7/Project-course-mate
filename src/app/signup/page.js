'use client';

import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signup button clicked');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Signup Page</h1>
            <Input
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-1/3"
            />
            <Input
                label="OTP"
                type="password"
                value={password}
               
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 w-1/3"
            />
            <Button
                onClick={handleSignup}
                className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
                Signup
            </Button>
        </div>
    );
}