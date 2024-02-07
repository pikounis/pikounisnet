import React from "react";
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import './ContactForm.css';

function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur"
    });


    const onSubmit = data => {
        console.log(data);

        fetch('http://192.168.1.64:3001/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    // If the response is not ok, throw an error with the status text
                    throw new Error(`HTTP error: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                console.log("Response data:", data);
                alert('Email sent successfully!');
                reset(); // Reset the form fields
            })
            .catch(error => {
                console.error('Fetch error:', error.message);
                alert('Failed to send email. Please try again.');
            });
    };




    // Email validation
    const validateEmail = email => {
        return email.includes('@') && email.includes('.');
    };

    // Message validation
    const validateMessageLength = message => {
        return message.length > 100;
    };

    return (
        <div className="div-style">
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                    <Paper className="paper-style">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <TextField
                                label="Name"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register("name", { required: "Name is required" })}
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ''}
                            />

                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register("email", {
                                    required: "Email is required",
                                    validate: validateEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email ? (errors.email.message || 'Email must contain @ and .') : ''}
                            />

                            <TextField
                                label="Subject"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register("subject", { required: "Subject is required" })}
                                error={!!errors.subject}
                                helperText={errors.subject ? errors.subject.message : ''}
                            />

                            <TextField
                                label="Message"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                multiline
                                rows={4}
                                {...register("message", {
                                    required: "Message is required",
                                    validate: validateMessageLength
                                })}
                                error={!!errors.message}
                                helperText={errors.message ? (errors.message.message || 'Message must be over 100 characters') : ''}
                            />

                            <Button type="submit" variant="contained" color="primary">
                                Send
                            </Button>
                        </form>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}

export default ContactForm;
