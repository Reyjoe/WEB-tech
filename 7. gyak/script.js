function searchUser() {
    const query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Kérlek adj meg egy keresési kifejezést!");
        return;
    }

    fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => {
            console.error("Hiba:", error);
        });
}

function displayResults(users) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className = "user";

        userDiv.innerHTML = `
            <img src="${user.avatar_url}" alt="avatar">
            <a href="${user.html_url}" target="_blank">${user.login}</a>
        `;

        resultsDiv.appendChild(userDiv);
    });
}