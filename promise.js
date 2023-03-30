
const posts = [
    { title: "Post One", body: "This is Post One"},
    { title: "Post Two", body: "This is Post Two"},
  ];
  
  let lastUserActivityTime = new Date();
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const date = new Date();
        lastUserActivityTime = date;
        resolve();
      }, 1000);
    });
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Error: something went wrong");
        }
      }, 1000);
    });
  }
  
  function deleteLastPost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.pop();
        resolve();
      }, 3000);
    });
  }
  
  async function createPostAndLog() {
    try {
        console.log(`before creating post ${posts.length+1}... , User Activity Time:`, lastUserActivityTime);
      console.log(posts);  
      await Promise.all([createPost({ title: "Post Three", body: "This is a third post." }), updateLastUserActivityTime()]);
      console.log(`After creating post ${posts.length} >>>>>>>>`);
      console.log(posts);
      console.log("Last user activity time: ", lastUserActivityTime);
      await deleteLastPost();
      console.log("Posts after deletion: ", posts);
    } catch (error) {
      console.error(error);
    }
  }
  
  createPostAndLog();
  