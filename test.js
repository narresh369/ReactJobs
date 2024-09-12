const fetchData = async () => {
    try {
        const response = await fetch('https://reactjobs.onrender.com/jobs?_limit=3');
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            console.log(data);
        } else {
            const text = await response.text();
            console.error('Expected JSON, but received:', text);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
