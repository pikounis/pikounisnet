import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Paper, Box, Container, Typography } from '@mui/material';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import './ContactForm.css';

function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
    });

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = async (data) => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        const recaptchaToken = await executeRecaptcha('contact_form');

        // Include the reCAPTCHA token in your form data
        const formData = {
            ...data,
            recaptchaToken,
        };

        console.log(formData);

        try {
            const response = await fetch('https://pikounisnet-express-backend.vercel.app/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
            }

            const contentType = response.headers.get('Content-Type');
            let responseData;
            if (contentType && contentType.indexOf('application/json') !== -1) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }

            console.log('Response data:', responseData);
            alert('Email sent successfully!');
            reset();
        } catch (error) {
            console.error('Fetch error:', error.message);
            alert(`Failed to send email. Please try again. Error: ${error.message}`);
        }
    };

    const validateEmail = (email) => {
        return email.includes('@') && email.includes('.');
    };

    const validateMessageLength = (message) => {
        return message.length > 100;
    };

    return (
        <div className="div-style">
            <Typography variant="h2" className="contact-title">Contact</Typography>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                    <Paper className="paper-style">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <TextField
                                label="Name"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register('name', { required: 'Name is required' })}
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ''}
                            />

                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register('email', {
                                    required: 'Email is required',
                                    validate: validateEmail,
                                })}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message || 'Email must contain @ and .' : ''}
                            />

                            <TextField
                                label="Subject"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register('subject', { required: 'Subject is required' })}
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
                                {...register('message', {
                                    required: 'Message is required',
                                    validate: validateMessageLength,
                                })}
                                error={!!errors.message}
                                helperText={errors.message ? errors.message.message || 'Message must be over 100 characters' : ''}
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

// Wrap your ContactForm component with GoogleReCaptchaProvider
export default function WrappedContactForm() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY}>
            <ContactForm />
        </GoogleReCaptchaProvider>
    );
}
