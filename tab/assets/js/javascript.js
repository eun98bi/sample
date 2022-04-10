const info = document.getElementById("info");
const infobox = document.getElementById("infobox");
const portfolio = document.getElementById("portfolio");
const portfoliobox = document.getElementById("portfoliobox");
const form = document.getElementById("form");
const formbox = document.getElementById("formbox");
const contact = document.getElementById("contact");
const contactbox = document.getElementById("contactbox");


info.onclick = function(){
    infobox.style.display = "block";
    portfoliobox.style.display = "none";
    formbox.style.display = "none";
    contactbox.style.display = "none";
    
    info.style.color = "white";
    info.style.background = "#FF6577";
    portfolio.style.color = "#FF6577";
    portfolio.style.background = "none";
    form.style.color = "#FF6577";
    form.style.background = "none";
    contact.style.color = "#FF6577";
    contact.style.background = "none";
}

portfolio.onclick = function(){
    infobox.style.display = "none";
    portfoliobox.style.display = "block";
    formbox.style.display = "none";
    contactbox.style.display = "none";
    
    info.style.color = "#FF6577";
    info.style.background = "none";
    portfolio.style.color = "white";
    portfolio.style.background = "#FF6577";
    form.style.color = "#FF6577";
    form.style.background = "none";
    contact.style.color = "#FF6577";
    contact.style.background = "none";
}

form.onclick = function(){
    infobox.style.display = "none";
    portfoliobox.style.display = "none";
    formbox.style.display = "block";
    contactbox.style.display = "none";
    
    info.style.color = "#FF6577";
    info.style.background = "none";
    portfolio.style.color = "#FF6577";
    portfolio.style.background = "none";
    form.style.color = "white";
    form.style.background = "#FF6577";
    contact.style.color = "#FF6577";
    contact.style.background = "none";
}

contact.onclick = function(){
    infobox.style.display = "none";
    portfoliobox.style.display = "none";
    formbox.style.display = "none";
    contactbox.style.display = "block";
    
    info.style.color = "#FF6577";
    info.style.background = "none";
    portfolio.style.color = "#FF6577";
    portfolio.style.background = "none";
    form.style.color = "#FF6577";
    form.style.background = "none";
    contact.style.color = "white";
    contact.style.background = "#FF6577";
}




