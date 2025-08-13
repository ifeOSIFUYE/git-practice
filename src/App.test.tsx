import dataSet from './contacts.json';
import { render, test, expect } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Main app component", () => {
    test("It renders all contacts (imported json)", () => {
        render(<App />);
        dataSet.contacts.forEach(contact => expect(screen.getByText(contact)).toBeInTheDocument());
    });
});