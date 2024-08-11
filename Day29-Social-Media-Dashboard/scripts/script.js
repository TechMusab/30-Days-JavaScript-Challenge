let post = document.querySelector(".posts-container");
let postbutton = document.querySelector(".post-btn");
let postcontent = document.querySelector(".content-input");
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function displayPosts() {
  let newhtml = "";
  posts.forEach((post) => {
    
    if (post.username === localStorage.getItem("currentUser")) {
      newhtml += `<div class="post myposts">
        <div class="post-header">
            <img src="1.jpg" alt="User Avatar" class="avatar">
            <div class="user-info">
                <h3 class="username">${post.username}</h3>
                <p class="timestamp">${post.mydate}</p>
            </div>
        </div>
        <div class="post-content">
            <p>${post.content}</p>
        </div>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <p>${post.Likes}</p>
            <button class="comment-btn">Comment</button>
            <p>${post.Comments}</p>
            <button class="share-btn">Share</button>
            <p>${post.Share}</p>
        </div>
        <input class="comment" type="text" placeholder="Write the comment">
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
            <p>${post.content}</p>
        </div>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <p>${post.Likes}</p>
            <button class="comment-btn">Comment</button>
            <p>${post.Comments}</p>
            <button class="share-btn">Share</button>
            <p>${post.Share}</p>
        </div>
        <input class="comment" type="text" placeholder="Write the comment">
      </div>`;
    }
  });
  post.innerHTML = newhtml;
  attachEventListenersToButtons();
}

postbutton.addEventListener("click", (e) => {
  e.preventDefault();
  let username = localStorage.getItem("currentUser");
  let content = postcontent.value;

  if (username && content) {
    let newPost = {
      username: username,
      mydate: new Date(Date.now()).toLocaleString(),
      content: content,
      Likes: 0,
      Comments: 0,
      Share: 0,
      LikedBy: [],
      commentstext: [],
    };
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts();
    postcontent.value = "";
  } else {
    alert("Please log in and enter content for the post.");
  }
});

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

function updateComments(timestamp, input) {
  posts.forEach((post) => {
    if (post.mydate === timestamp) {
      post.Comments += 1;
      post.commentstext.push(input);
    }
  });
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

function attachEventListenersToButtons() {
  document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement;
      const timestamp = parent.querySelector(".timestamp").textContent;
      updateLikes(timestamp);
    });
  });
  
  document.querySelectorAll(".comment-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement;
      const timestamp = parent.querySelector(".timestamp").textContent;
      const input = parent.querySelector(".comment").value;
      updateComments(timestamp, input);
    });
  });
}

displayPosts();
