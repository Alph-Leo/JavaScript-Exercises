

function changeQuote() {
    console.log("New quote");
    fetch("https://api.kanye.rest/")
    .then((res) => {return res.json()})
    .then((Response) => {
    console.log(Response.quote);
   }); 
}document.getElementById("next").onclick = changeQuote;
document.getElementById("prev").onclick = changeQuote;




