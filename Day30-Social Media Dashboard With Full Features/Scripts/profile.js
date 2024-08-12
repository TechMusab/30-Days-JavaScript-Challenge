let profile = document.querySelector(".profile");
let content = document.querySelector(".main-content");
let home = document.querySelector(".home");
let myposts = document.querySelector(".posts");
let notifications = document.querySelector(".notifications");
let posts = JSON.parse(localStorage.getItem("posts")) || [];
function addpostbtneventlistener() {
  document.querySelector(".post-btn").addEventListener("click", (e) => {
    let postcontent = document.querySelector(".content-input");
    e.preventDefault();
    let name = localStorage.getItem("currentUser");
    let feedcontent = postcontent.value;
    console.log(feedcontent);
    if (feedcontent) {
      let newPost = {
        username: name,
        mydate: new Date(Date.now()).toLocaleString(),
        feedcontent: feedcontent,
        Likes: 0,
        Comments: 0,
        Share: 0,
        LikedBy: [],
      };
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      displayPosts();
    } else {
      alert("Please enter content for the post.");
    }
  });
}
function updateLikes(postTimestamp) {
  let user = localStorage.getItem("currentUser");
  posts.forEach((post) => {
    if (post.mydate === postTimestamp) {
      if (post.LikedBy.includes(user)) {
        post.Likes -= 1;
        post.LikedBy = post.LikedBy.filter((u) => u !== user);
      } else {
        post.Likes += 1;
        post.LikedBy.push(user);
      }
    }
  });
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

function updateComments(timestamp) {
  posts.forEach((post) => {
    if (post.mydate === timestamp) {
      post.Comments += 1;
    }
  });
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}
function generaleventlistners() {
  myposts.addEventListener("click", () => {
    displayPosts();
  });
  notifications.addEventListener("click", () => {
    content.innerHTML = `
          <h1 class="heading">Notifications</h1>
          <div class="notification-card">
              <div class="notification-content">
                  <p>You liked a post.</p>
                  <span class="notification-time">5 minutes ago</span>
              </div>
          </div>
          <div class="notification-card">
              <div class="notification-content">
                  <p>You commented on a post.</p>
                  <span class="notification-time">10 minutes ago</span>
              </div>
          </div>
          <div class="notification-card">
              <div class="notification-content">
                  <p>You shared a post.</p>
                  <span class="notification-time">15 minutes ago</span>
              </div>
          </div>
          `;
  });
  profile.addEventListener("click", () => {
    let name = localStorage.getItem("currentUser");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    content.innerHTML = `
          <div class="user-card">
          <h2>User Information</h2>
          <div class="user-info">
              <div class="info-item">
                  <span class="label">Name:</span>
                  <span class="value" id="user-name">${name}</span>
              </div>
              <div class="info-item">
                  <span class="label">Email:</span>
                  <span class="value" id="user-email">${email}</span>
              </div>
              <div class="info-item">
                  <span class="label">Password:</span>
                  <span class="value" id="user-password">${password}</span>
              </div>
          </div>
          </div>
          `;
  });
  home.addEventListener("click", () => {
    content.innerHTML = `  <div class="create-post">
          <h2>Create a Post</h2>
          <form id="postForm">
              <textarea class="content-input" id="postContent" placeholder="What's on your mind?"
                  rows="4"></textarea>
              <button class="post-btn" type="submit">Post</button>
          </form>
      </div>`;
    addpostbtneventlistener();
  });
  // Also adding to general event listenrs because when page reloads it is homepage that will be show up
  addpostbtneventlistener();
}

function displayPosts() {
  posts = JSON.parse(localStorage.getItem("posts"));
  let newhtml = "";
  posts.forEach((post) => {
    if (post.username === localStorage.getItem("currentUser")) {
      newhtml += `<div class="post myposts">
          <div class="post-header">
              <img src="../images/dp.jpg" alt="User Avatar" class="avatar">
              <div class="user-info">
                  <h3 class="username">${post.username}</h3>
                  <p class="timestamp">${post.mydate}</p>
              </div>
          </div>
          <div class="post-content">
              <p>${post.feedcontent}</p>
          </div>
          <div class="post-actions">
              <button class="like-button">Like</button>
              <p>${post.Likes}</p>
              <button class="comment-button">Comments</button>
              <p>${post.Comments}</p>
              <button class="share-button">Share</button>
              <p>${post.Share}</p>
          </div>
          <div class="comment-section">
          <textarea class="comment-input" placeholder="Write a comment..."></textarea>
          <button class="comment-btn">Post Comment</button>
      </div>
        </div>`;
    } else {
      newhtml += `<div class="post">
          <div class="post-header">
              <img src="1.jpg" alt="User Avatar" class="avatar">
              <div class="user-info">
                  <h3 class="username">${post.username}</h3>
                  <p class="timestamp">${post.mydate}</p>
              </div>
          </div>
          <div class="post-content">
              <p>${post.feedcontent}</p>
          </div>
          <div class="post-actions">
              <button class="like-button">Like</button>
              <p>${post.Likes}</p>
              <button class="comment-button">Comment</button>
              <p>${post.Comments}</p>
              <button class="share-btn">Share</button>
              <p>${post.Share}</p>
          </div>
          <div class="comment-section">
        <textarea class="comment-input" placeholder="Write a comment..."></textarea>
        <button class="comment-btn">Post Comment</button>
    </div>
        </div>`;
    }
  });
  content.innerHTML = newhtml;
  postseventlistener();
}
function postseventlistener() {
  document.querySelectorAll(".like-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement;
      const timestamp = parent.querySelector(".timestamp").textContent;
      updateLikes(timestamp);
    });
  });

  document.querySelectorAll(".comment-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("HAH");
      const parent = e.target.parentElement.parentElement;
      const timestamp = parent.querySelector(".timestamp").textContent;
      const input = parent.querySelector(".comment-input").value;
      updateComments(timestamp, input);
    });
  });
}

generaleventlistners();
