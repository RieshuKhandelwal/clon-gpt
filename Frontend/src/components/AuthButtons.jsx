import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../store/authSlice';
import './AuthButtons.css';

const AuthButtons = ({ variant }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector(state => state.auth);

    const handleLogout = async () => {
        try {
            // Clear the cookie by making a logout request to the backend
            await axios.post('http://localhost:3000/api/auth/logout', {}, {
                withCredentials: true
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear local state regardless of backend response
            dispatch(logout());
            navigate('/login');
        }
    };

    const isCompact = variant === 'compact';

    if (isAuthenticated && user) {
        return (
            <div className={"auth-buttons authenticated" + (isCompact ? " compact" : "") }>
                {!isCompact && (
                    <div className="user-info">
                        <span className="user-name">
                            {user.fullName?.firstName} {user.fullName?.lastName}
                        </span>
                        <span className="user-email">{user.email}</span>
                    </div>
                )}
                <button
                    className="auth-btn logout-btn"
                    onClick={handleLogout}
                    title="Logout"
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="auth-buttons">
            <button 
                className="auth-btn login-btn" 
                onClick={() => navigate('/login')}
            >
                Login
            </button>
            <button 
                className="auth-btn register-btn" 
                onClick={() => navigate('/register')}
            >
                Register
            </button>
        </div>
    );
};

export default AuthButtons;
