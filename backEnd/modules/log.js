module.exports = {
    debgug: (message, ...args) => {
        console.log("+", message, args);
    },
    error: (message, ...args) => {
        console.log("[!]", message, args);
    } 
};