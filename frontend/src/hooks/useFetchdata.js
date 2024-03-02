import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchdata(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, error, data };
}

export default useFetchdata;