const usernameInput = document.querySelector("#user-name");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");

// Function to load existing submissions or initialize an empty array
function loadSubmissions() {
  const submissions = localStorage.getItem("blogSubmissions");
  return submissions ? JSON.parse(submissions) : [];
}

function saveBlogSubmission(event) {
  event.preventDefault();

  const blogSubmission = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  // Validate form inputs
  if (
    !blogSubmission.username ||
    !blogSubmission.title ||
    !blogSubmission.content
  ) {
    alert("Please fill out the form.");
    return;
  }

  // Load existing submissions
  const submissions = loadSubmissions();
  submissions.push(blogSubmission);
  localStorage.setItem("blogSubmissions", JSON.stringify(submissions));

  // Redirect to the blog page
  window.location.href = "blog.html";
}

submitButton.addEventListener("click", saveBlogSubmission);
