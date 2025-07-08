// LoginPage.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like toBeInTheDocument
import { vi } from 'vitest'; // Explicitly import vi for mocking utilities

// Import the App component
import App from '../App'; // Assuming App is in App.jsx and exports default App

// Mock window.matchMedia for theme detection, as it's used in App
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({ // Use vi.fn() instead of jest.fn()
        matches: false, // Default to light theme for tests
        media: query,
        onchange: null,
        addEventListener: vi.fn(), // Use vi.fn()
        removeEventListener: vi.fn(), // Use vi.fn()
        dispatchEvent: vi.fn(), // Use vi.fn()
    })),
});

// Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: vi.fn(key => store[key] || null), // Use vi.fn()
        setItem: vi.fn((key, value) => { store[key] = value.toString(); }), // Use vi.fn()
        clear: vi.fn(() => { store = {}; }), // Use vi.fn()
        removeItem: vi.fn(key => { delete store[key]; }), // Use vi.fn()
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });


describe('LoginPage functionality', () => {
    // Clear mocks before each test to ensure isolation
    beforeEach(() => {
        localStorageMock.clear();
        vi.clearAllMocks(); // Use vi.clearAllMocks() instead of jest.clearAllMocks()
    });

    test('renders login form and allows typing passkey', () => {
        render(<App />); // Render the App, which initially shows LoginPage
        const passkeyInput = screen.getByPlaceholderText(/Enter your passkey/i);
        expect(passkeyInput).toBeInTheDocument();

        fireEvent.change(passkeyInput, { target: { value: '123' } });
        expect(passkeyInput).toHaveValue('123');
    });
});
