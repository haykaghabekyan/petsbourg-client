import React from 'react';

export const EnvelopeIcon = ({ color = '#27AE60', width = 18 }) => {
    return (
        <svg width={ width } fill={ color } viewBox="0 0 18 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M16.8404 9.7638H1.1625C0.519231 9.7638 0 9.27151 0 8.66161V2.08661e-08L9.0375 6.63227L18 2.08661e-08V8.66435C18 9.27151 17.4808 9.7638 16.8404 9.7638Z" transform="translate(0 1.23633)" />
            <path d="M18 0H0L9.0375 6.63227L18 0Z"  />
        </svg>
    );
};
