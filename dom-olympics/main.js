const h1 = document.createElement("h1");
h1.textContent = "JS made this";
h1.classList.add("header");
document.body.appendChild(h1);
h1.innerHTML += "<span class='subtext'> by Sean</span>"