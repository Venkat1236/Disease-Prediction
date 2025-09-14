import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App Component', () => {
    it('renders correctly', () => {
        expect(App).toBeDefined();
    });

    it('has the correct title', () => {
        const title = App.title; // Assuming App has a title property
        expect(title).toBe('Expected Title');
    });
});