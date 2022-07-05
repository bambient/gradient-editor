export const today = new Date().toLocaleString('en', 
    { 
    day: "numeric", 
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
}
);