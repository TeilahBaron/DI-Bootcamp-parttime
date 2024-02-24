// Define the Video class
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    // Method to watch the video
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Instantiate a new Video instance
  const video1 = new Video("Introduction to JavaScript", "JohnDoe", 120);
  video1.watch();
  
  // Instantiate a second Video instance with different values
  const video2 = new Video("Advanced React Techniques", "JaneSmith", 300);
  video2.watch();
  
  // Bonus: Using an array to store data for five Video instances
  const videosData = [
    { title: "JavaScript Basics", uploader: "Alice", time: 180 },
    { title: "CSS Masterclass", uploader: "Bob", time: 240 },
    { title: "Node.js Fundamentals", uploader: "Charlie", time: 200 },
    { title: "Python Crash Course", uploader: "David", time: 280 },
    { title: "Machine Learning Essentials", uploader: "Eve", time: 400 }
  ];
  
  // Loop through the array to instantiate those instances
  const videos = videosData.map(data => new Video(data.title, data.uploader, data.time));
  
  // Example usage: Watch all videos
  videos.forEach(video => video.watch());

//   output: 
// JohnDoe watched all 120 seconds of Introduction to JavaScript!
// JaneSmith watched all 300 seconds of Advanced React Techniques!
//  Alice watched all 180 seconds of JavaScript Basics!
//  Bob watched all 240 seconds of CSS Masterclass!
//  Charlie watched all 200 seconds of Node.js Fundamentals!
//  David watched all 280 seconds of Python Crash Course!
//  Eve watched all 400 seconds of Machine Learning Essentials!