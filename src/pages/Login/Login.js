
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();

    // State
    const [inputs, setInputs] = useState({
    
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // Form handle
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Your submit logic here
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                sx ={{Color:'secondary.main'}}
                    maxWidth={450}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    margin="auto"
                    marginTop={5}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    borderRadius={5}
                >
                    <Typography variant="h4" sx={{ textTransform: "uppercase" }} padding={3} textAlign="center">
                       Login
                    </Typography>
                
                    <TextField
                        placeholder="Email"
                        value={inputs.email}
                        onChange={handleChange}
                        name="email"
                        margin="normal"
                        type="email"
                        required
                    />
                    <TextField
                        placeholder="Password"
                        value={inputs.password}
                        onChange={handleChange}
                        name="password"
                        margin="normal"
                        type="password"
                        required
                        sx ={{Color:'secondary.main'}}
                    />
                    <Button type="submit" sx={{ borderRadius: 3, marginTop: 3}} variant="contained" color="primary">
                        Submit
                      
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default Login;

