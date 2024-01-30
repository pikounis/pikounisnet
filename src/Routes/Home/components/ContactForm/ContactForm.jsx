import React from "react";
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import './ContactForm.css';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur" // Validation will trigger on the blur event
    });

    const onSubmit = data => {
        console.log(data);
        // Additional logic to send data to the server
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
        <div>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                    <Paper style={{ padding: '20px', width: '100%', maxWidth: '55%' }}>
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
