import { useEffect, useState } from "react"

export const useFetchTableData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allDeals, setAllDeals] = useState([]);
    const [sortAsc, setSortAsc] = useState(true);
   
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                const response = await fetch('/deals.json');
                const jsonData = await response.json();
                setAllDeals(jsonData);
            } catch (err) {
                console.log("Fetch returns this error: " + err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    const sortDealsByDate = () => {
        const sortedDeals = [...allDeals].sort((a, b) => {
            return sortAsc ? new Date(a.lastUpdated) - new Date(b.lastUpdated) : new Date(b.lastUpdated) - new Date(a.lastUpdated);
        });
        setAllDeals(sortedDeals);
        setSortAsc(!sortAsc);
    }

    return { isLoading, allDeals, sortDealsByDate, sortAsc };
}