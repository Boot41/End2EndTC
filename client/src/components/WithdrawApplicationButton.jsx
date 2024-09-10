import React, { useState } from 'react';

const WithdrawApplicationButton = ({ applicationId }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleWithdraw = async () => {
        try {
            await fetch(`/api/applications/${applicationId}`, { method: 'DELETE' });
            window.location.href = '/application-tracking'; // Redirect after withdrawal
        } catch (error) {
            console.error('Error withdrawing application:', error);
            // Optionally show an error notification
        }
    };

    return (
        <>
            <button 
                onClick={() => setDialogOpen(true)} 
                aria-label="Withdraw Application" 
                style={{
                    backgroundColor: '#1e1236',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
            >
                Withdraw Application
            </button>

            {isDialogOpen && (
                <div 
                    role="dialog" 
                    aria-modal="true" 
                    style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        borderRadius: '8px',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1000
                    }}
                >
                    <p>Are you sure you want to withdraw your application?</p>
                    <button 
                        onClick={handleWithdraw} 
                        style={{
                            marginRight: '10px',
                            padding: '10px 15px',
                            backgroundColor: '#1e1236',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Confirm
                    </button>
                    <button 
                        onClick={() => setDialogOpen(false)} 
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#e0e0e0',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Cancel
                    </button>
                </div>
            )}

            <div 
                onClick={() => setDialogOpen(false)} 
                style={{
                    display: isDialogOpen ? 'block' : 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999,
                }}
            />
        </>
    );
};

export default WithdrawApplicationButton;