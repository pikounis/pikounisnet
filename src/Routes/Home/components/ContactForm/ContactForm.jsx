import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Paper, Box, Container, Typography, CircularProgress } from '@mui/material';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { green } from '@mui/material/colors';
import './ContactForm.css';
import { useTranslation } from "react-i18next";

function ContactForm() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
    });
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        setLoading(true); // Set loading to true

        const recaptchaToken = await executeRecaptcha('contact_form');

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
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    const validateEmail = (email) => {
        return email.includes('@') && email.includes('.');
    };

    const validateMessageLength = (message) => {
        return message.length > 30;
    };

    return (
        <div className="div-style">
            <Typography variant="h4" className="contact-title">{t('contact')}</Typography>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                    <Paper className="paper-style">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <TextField
                                label={t('name')}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register('name', { required: 'Name is required' })}
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ''}
                            />

                            <TextField
                                label={t('email')}
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
                                label={t('subject')}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                {...register('subject', { required: 'Subject is required' })}
                                error={!!errors.subject}
                                helperText={errors.subject ? errors.subject.message : ''}
                            />

                            <TextField
                                label={t('message')}
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
                                helperText={errors.message ? errors.message.message || 'Message must be over 30 characters' : ''}
                            />

                            <Box sx={{ position: 'relative' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={loading}
                                    fullWidth
                                >
                                    {t('send')}
                                </Button>
                                {loading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            color: green[500],
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                )}
                            </Box>

                            {/*<p>This site is protected by reCAPTCHA and the Google*/}
                            {/*    <a href="https://policies.google.com/privacy">Privacy Policy</a> and*/}
                            {/*    <a href="https://policies.google.com/terms">Terms of Service</a> apply.*/}
                            {/*</p>*/}
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
