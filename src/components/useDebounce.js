import { useState, useEffect } from "react"

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeoutHandler);
    }, [value, delay])

    return debouncedValue;
}