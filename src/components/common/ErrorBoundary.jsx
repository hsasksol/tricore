import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // In production, send to error tracking service (e.g., Sentry)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            Something went wrong
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 600 }}>
            We encountered an unexpected error. You can try reloading the page or going back to the dashboard.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              onClick={this.handleReset}
              sx={{
                bgcolor: 'primary.main',
                color: '#000',
                '&:hover': { bgcolor: '#000', color: 'primary.main' },
              }}
            >
              Try Again
            </Button>
            <Button
              variant="outlined"
              onClick={() => (window.location.href = '/')}
              sx={{ borderColor: '#000', color: '#000' }}
            >
              Go to Dashboard
            </Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
