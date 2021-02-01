// Get the <span> element that closes the modal
console.log('herer');
var span = document.getElementsByClassName("close")[0];
console.log('herer');
// Descriptions Dictionary
var descriptions = {
  'Recommendations': "AI is commonly used in recommendation systems to suggest items to users based on their interests, previous activity, and similar activity. Two of the professionals in our series work at companies that use such systems. Haiping Zhao works at ByteDance, the company that made TikTok. TikTok uses AI to show videos that would be most interesting to you on your 'For You' page. Pedrito Maynard-Zhang works at Amazon. Amazon uses AI, for one, to recommend users new products for different users.",
  'Autonomous Vehicles': 'Alexandra Klotz is a designer at Optimus Ride, a company which build autonomous vehicles. AI is used for computer vision so that vehicles can see what is on the road and also for making driving decisions.',
  'Games': 'Goksu Ugur is a gameplay programmer at Sony Santa Monica Studios. AI can be used to build assets for games, train bots for the users to compete against, and make the overall gameplay experience more immersive and realistic.',
  'Robotics': 'Chad Jenkins is a robotics professor whose lab builds robots that can learn action from humans using AI and repeat them in the physical world.',
  'Behavior': 'Taniya Mishra is a speech scientist that has helped study voice modulation to build technology that can better understand human emotion and behavior.',
  'Language Processing': 'Natural language processing is a branch of AI that focuses on computers understanding, interpreting, and communicating in the human language. Siggi Orn has worked on the Google voice assistant. Elmarie Sanchez-Gonzales works as an annotation analyst. And Claudio Pinhanez is the head of conversational AI at IBM Brazil.',
  'Space Technology': 'Professor Danielle Wood explores how AI can be applied to space technology such as data collected by satellites. AI can help track trends in weather, climate change, and more.',
  'Miscellaneous': "There are many other ways to get involved in AI. Dr. Kate Darling researches the intersection of law and AI. Christina Gardner-McCune is a CS and AI educator. Aman Dalmia is a research fellow taking on multiple projects that use AI to solve social and health problems." 
};

// Additional Info Dictionary
var additional = {
  'Recommendations': ["TikTok Recommender", "https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you",
    "Play Monster Match", "https://monstermatch.hiddenswitch.com/",
    "Amazon AI", "https://aws.amazon.com/machine-learning/what-is-ai/",
    "Reimaging the YouTube Recommendation Algorithm", "https://aieducation.mit.edu/daily/redesignYoutube.html",
    "Crash Course (Level: <span class='adv'>Advanced</span>)", "https://www.youtube.com/watch?v=iaIW3CO4rcY",
    "Netflix Recommendations", "https://www.youtube.com/watch?v=f8OK1HBEgn0",
    "How Recommender Systems Work", "https://www.youtube.com/watch?v=n3RKsY2H-NE"],
  'Autonomous Vehicles': ["Optimus Ride", "https://www.optimusride.com/",
    "Draper", "https://www.draper.com/",
    "Self-Driving Cars Overview", "https://www.youtube.com/watch?v=HgF7E5q9sU4", 
    "How Self-Driving Cars See", "https://miro.medium.com/proxy/1*q1uVc-MU-tC-WwFp2yXJow.gif",
    "Self-Driving Car Kit", "https://www.robolink.com/h/"],
  'Games': ["&#128100; Sony Santa Monica Studios", "https://sms.playstation.com/careers/programming/gameplay-programmer", 
    "&#127909; AI Playing Games", "https://www.youtube.com/watch?v=nw7zmdBLQ6U",  
    "&#128240; How Artificial Intelligence Will Revolutionize the Way Video Games are Developed and Played", "https://www.theverge.com/2019/3/6/18222203/video-game-ai-future-procedural-generation-deep-learning",  
    "&#128240; Self-Learning Bots in Games to Compete Against", "https://www.theverge.com/2018/8/28/17787610/openai-dota-2-bots-ai-lost-international-reinforcement-learning", 
    "&#127918; Games Designed by AI", "https://gamesbyangelina.itch.io/", 
    "&#128240; AI in NBA Video Game", "https://www.cnbc.com/2020/02/11/nba-using-artificial-intelligence-for-highlight-clips-this-all-star-game.html"],
  'Robotics': [],
  'Behavior': ["Affectiva Demos", "https://www.affectiva.com/experience-it/", 
    "The Guardians Self-Care App", "https://medium.com/mit-media-lab/the-guardians-c63728a626b2"],
  'Language Processing': ["About Twitter Sentiment Analysis (Level: <span class='adv'>Advanced</span>)", "https://www.linkedin.com/pulse/why-twitter-sentiment-analysis-amah-paschal-chukwuemeka/"],
  'Space Technology': ["Sustainable Development Goals", "https://sdgs.un.org/goals",
    "Phases of the Moon", "https://www.nasa.gov/stem-ed-resources/phases-of-the-moon.html", 
    "Here are 10 ways AI could help fight climate change", "https://www.technologyreview.com/2019/06/20/134864/ai-climate-change-machine-learning/"],
  'Miscellaneous': ["Aman Dalmia Projects", "https://www.amandalmia.com/projects.html", 
    "Wadhwani AI", "https://www.wadhwaniai.org/",
    "AI4K12", "https://github.com/touretzkyds/ai4k12/wiki", 
    "Kate Darling TED Talk", "https://www.youtube.com/watch?v=Uq6XgrYBugo",
    "Calypso for Cozmo Led By Gardner-McCune", "https://calypso.software/",
    "Kate Darling Talks", "https://www.media.mit.edu/people/kdarling/updates/"]
};

var instructions = {
  'Recommendations': [],
  'Autonomous Vehicles': [],
  'Games': ["GANs can be used to develop 3D models, sprites, audio, and text for games. See one example how GANs can be used for style transfer <a href='https://mitmedialab.github.io/GAN-play/'>here</a>. Also, check out <a href='http://gandissect.res.ibm.com/ganpaint.html?project=churchoutdoor&layer=layer4'>GANpaint</a> which has brushes trained to draw various scenes/objects.", "https://i.pinimg.com/originals/5a/d3/7f/5ad37f0b696c77dbe85bfb3b329de46f.jpg",
            "From machinelearningforkids.co.uk, follow along with these worksheets to teach your computer how to play <a href='https://github.com/IBM/taxinomitis-docs/raw/master/project-worksheets/pdf/worksheet-pacman.pdf'>Pacman</a> or <a href='https://github.com/IBM/taxinomitis-docs/raw/master/project-worksheets/pdf/worksheet-zombieescape.pdf'>Zombie Escape</a>.", "https://cdn.cnn.com/cnnnext/dam/assets/200518114838-05-pac-man-40.jpg"],
  'Robotics': [],
  'Behavior': [],
  'Language Processing': [],
  'Space Technology': [],
  'Miscellaneous': []
}

// When the user clicks on the shop, open the modal
function openModal(shopName) {
    document.getElementById("shop-name").innerHTML = shopName;
    document.getElementById("desc-text").innerHTML = descriptions[shopName];

    var links = "";
    for(i = 0; i < additional[shopName].length; i+=2) {
      links += "<li> <a href='" + additional[shopName][i+1] + "'> " + additional[shopName][i] + "</a> </li>";
    }
    document.getElementById("add-links").innerHTML = links;

    var activities = "";
    for(i = 0; i < instructions[shopName].length; i+=2) {
      activities += "<div class='row'>";
      if(i % 4 == 0) {
        activities += "<div style='width: 50%'>" + instructions[shopName][i] + "</div>";
        activities += "<div style='width: 50%'><img src='" + instructions[shopName][i+1] + "'/></div>";
      }
      else {
        activities += "<div style='width: 50%'><img src='" + instructions[shopName][i+1] + "'/></div>";
        activities += "<div style='width: 50%'>" + instructions[shopName][i] + "</div>";
      }
      activities += "</div>";
    }
    document.getElementById("add-activities").innerHTML = activities;

    console.log('opening');
    document.getElementById("myModal").style.display = "block";   
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     document.getElementById("myModal").style.display = "none";
//   }
// }
