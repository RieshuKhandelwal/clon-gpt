import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../store/authSlice';
import './AuthError.css';

const AuthError = () => {
    const { error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if (!error) return null;

    return (
        <div className="auth-error">
            <span className="error-message">{error}</span>
            <button 
                className="error-close" 
                onClick={() => dispatch(clearError())}
                aria-label="Close error"
            >
                ×
            </button>
        </div>
    );
};

export default AuthError;
