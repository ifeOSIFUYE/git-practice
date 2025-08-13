import { useState, useEffect } from "react";

export const useFetchContacts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allContacts, setAllContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            setIsLoading(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await fetch('/contacts.json');
                const json = await response.json();

                setAllContacts(json);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchContacts();
    }, []);

    return { isLoading, allContacts };
}