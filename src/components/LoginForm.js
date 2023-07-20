"use client";

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";



export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(e)

      // const response = await axios.post('/api/login', { email, password });
      // Handle successful login, e.g., store the token in local storage or cookies
      if (setEmail == 'ardy@gmail.com' & setPassword== '12345678'){
        return true
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error, e.g., display an error message to the user
    }
  }
    return (
      <Card color="white" shadow={false} className="p-5">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" size="lg" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
          <Button type="submit" className="mt-6" fullWidth>
            Sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Register
            </a>
          </Typography>
        </form>
      </Card>
    );
}