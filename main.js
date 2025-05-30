document.getElementById("dodaj").addEventListener("click", function () {
    var name = document.getElementById("item-name").value.trim();
    var amount = document.getElementById("item-amount").value;
    var unit = document.getElementById("item-unit").value;

   
    if (name === "" || amount === "" || amount <= 0) {
        alert("Uzupełnij poprawnie wszystkie pola.");
        return;
    }

    
    var li = document.createElement("li");
    li.textContent = `${name}, ${amount} ${unit}`;

    
    const removeButton = document.createElement("button");
    removeButton.textContent = "usuń";
    removeButton.style.marginLeft = "10px";

   
    removeButton.addEventListener("click", function () {
        li.remove();
    });

    
    li.appendChild(removeButton);
    document.getElementById("shopping-list").appendChild(li);

});
