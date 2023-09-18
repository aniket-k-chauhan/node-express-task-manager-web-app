const displayUserName = document.querySelector("#displayUserName");

// Add form current users
const addForm = document.querySelector("#addForm");
const addTask = document.querySelector("#task");
const addDescription = document.querySelector("#description");
const addStatus = document.querySelector("#status");
const addAssignee = document.querySelector("#assignee");
const modalSubmitBtn = document.querySelector("#modalSubmitBtn");

// Edit Form elements
const editForm = document.querySelector("#editForm");
const taskId = document.querySelector("#taskId");
const task = document.querySelector("#editTask");
const description = document.querySelector("#editDescription");
const status = document.querySelector("#editStatus");
const assignee = document.querySelector("#editAssignee");
const editTaskBtn = document.querySelector("#editTaskBtn");

const currentUser = document.querySelector("#currentUser");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentUser = window.localStorage.getItem("currentUser") || "";

  const data = {
    currentUser,
    task: addTask.value,
    description: addDescription.value,
    status: addStatus.value,
    assignee: addAssignee.value,
  };

  fetch("/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          alert(data.message);
        } else {
          alert(data.message);
        }
        window.location.reload();
      })
    )
    .catch((error) => alert("Task not added successfully!"));
});

function saveUser() {
  window.localStorage.setItem("currentUser", currentUser.value.trim());
  window.location.reload();
}

function handleEditTask(task_id) {
  var foundRows = Array.from(document.querySelectorAll("#taskTable tr")).filter(
    function (row) {
      // Get the value from the first cell (assuming it's the unique value)
      var cellValue = row.cells[0].textContent || row.cells[0].innerText;
      return parseInt(cellValue) === task_id;
    }
  );

  // Extract values using map
  var rowData = Array.from(foundRows[0].cells).map(function (cell) {
    return cell.textContent || cell.innerText;
  });

  taskId.value = task_id;
  task.value = rowData[1];
  description.value = rowData[2];
  status.value = rowData[3];
  assignee.value = rowData[4];

  editTaskBtn.click();
}

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentUser = window.localStorage.getItem("currentUser") || "";
  const id = taskId.value;

  fetch(`/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUser }),
  })
    .then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          alert(data.message);
        } else {
          alert(data.message);
        }
        window.location.reload();
      })
    )
    .catch((error) => alert("Task not edited successfully!"));
});

function deleteTask(task_id) {
  const baseurl = window.location.origin;
  const url = `${baseurl}/tasks/${task_id}`;
  const currentUser = window.localStorage.getItem("currentUser") || "";

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUser }),
  })
    .then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          alert(data.message);
        } else {
          alert(data.message);
        }
        window.location.reload();
      })
    )
    .catch((error) => alert("Task not deleted successfully!"));
}

displayUserName.textContent =
  window.localStorage.getItem("currentUser").toLocaleUpperCase() || "";
