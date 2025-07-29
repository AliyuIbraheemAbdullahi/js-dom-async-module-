function fetchDataWithCallback(callback)
{
setTimeout(function () {
    const error = Math.random() <
    0.5; // Randomly simulate error (50% chance)
    try {
        if (error) {
            throw new Error ("Fetch failed");
} else {
    callback("Data fetched");
} 
} catch (err) {
    console.error("Error:", err.message);
}
}, 2000);
}
// call the function
fetchDataWithCallback(function (result)
{
    console.log(result);
});