To handle asynchronous operations in TypeScript, async/await simplifies the process compared to using callbacks or promises. Here’s how to use it:

 Using Callbacks:
typescript
Copy code
function fetchData(callback: (data: string) => void) {
    setTimeout(() => callback("Data loaded"), 1000);
}

fetchData(data => console.log(data));
Using Promises:
typescript
Copy code
function fetchData(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Data loaded"), 1000));
}

fetchData().then(data => console.log(data));
Using async/await:
typescript
Copy code
async function fetchData(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Data loaded"), 1000));
}

async function main() {
    const data = await fetchData();
    console.log(data);
}

main();