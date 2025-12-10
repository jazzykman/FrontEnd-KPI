document.getElementById("loadBtn").addEventListener("click", loadUser);

function loadUser() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            document.getElementById("userImg").src = user.picture.large;
            document.getElementById("city").textContent = user.location.city;
            document.getElementById("cell").textContent = user.cell;
            document.getElementById("country").textContent = user.location.country;
            document.getElementById("email").textContent = user.email;

            document.getElementById("userCard").classList.remove("hidden");
        })
        .catch(error => console.error("Помилка:", error));
}
