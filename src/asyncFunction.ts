async function fetchData(): Promise<void> {
    console.log(`Fetching data...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`Data retrieved!`);
}

fetchData();