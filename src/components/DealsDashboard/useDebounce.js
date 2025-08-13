import { useEffect, useState } from "react"

export const useDebounce = (query, delay) => {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const debounceHandler = setTimeout(() => setDebouncedValue(query), delay);

        return () => clearTimeout(debounceHandler);
    }, [query]);

    return debouncedValue;
}