const animalSpotted = document.getElementById("spotted-animals-list");

document.querySelectorAll('.big-five-list li').forEach((item) => {
    item.onclick = (item) => {
        const newListItem = document.createElement("li");
        newListItem.classList.add("spotted-animals-list-item");
        newListItem.innerHTML = item.srcElement.innerText;
        animalSpotted.appendChild(newListItem);
    }
})

document.querySelector("#remove-first-item-button").onclick = () => {
    animalSpotted.removeChild(animalSpotted.firstChild);
}

document.querySelector("#remove-all-button").onclick = () => {
    animalSpotted.querySelectorAll('*').forEach(n => n.remove());
}


