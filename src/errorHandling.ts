function riskyOperation(): void {
    throw new Error(`SOMETHING WENT WRONG!!!`);
}

try {
    riskyOperation();
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(`Error:`, error.message);
    } else {
        console.error(`unexpeced error:`, error);
    }
}