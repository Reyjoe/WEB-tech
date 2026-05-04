const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // kattintásra áthúzás
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  list.appendChild(li);

  input.value = "";
}

// Enter lenyomására is hozzáad
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});