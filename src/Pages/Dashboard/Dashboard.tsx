import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h2" whiteSpace={'nowrap'}>
                Welcome to the dashboard
            </Typography>
            <Button onClick={() => navigate('/products')}>
                <Typography variant="subtitle1" whiteSpace={'nowrap'}>
                    Go To Products
                </Typography>
            </Button>
        </Box>
    );
};

export default Dashboard;
