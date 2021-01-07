// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Descriptions Dictionary
var descriptions = {
  'Preferences': "AI is commonly used in recommendation systems to suggest items to users based on their interests, previous activity, and similar activity. Two of the professionals in our series work at companies that use such systems. Haiping Zhao works at ByteDance, the company that made TikTok. TikTok uses AI to show videos that would be most interesting to you on your 'For You' page. Pedrito Maynard-Zhang works at Amazon. Amazon uses AI, for one, to recommend users new products for different users.",
  '':''
};

// Additional Info Dictionary
var additional = {
  'Preferences': ["TikTok Recommender", "https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you",
    "Play Monster Match", "https://monstermatch.hiddenswitch.com/",
    "Amazon AI", "https://aws.amazon.com/machine-learning/what-is-ai/",
    "Reimaging the YouTube Recommendation Algorithm", "https://aieducation.mit.edu/daily/redesignYoutube.html",
    "Crash Course", "https://www.youtube.com/watch?v=iaIW3CO4rcY",
    "Netflix Recommendations", "https://www.youtube.com/watch?v=f8OK1HBEgn0",
    "How Recommender Systems Work", "https://www.youtube.com/watch?v=n3RKsY2H-NE"]
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
    console.log('opening');
    document.getElementById("myModal").style.display = "block";
    
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("myModal").style.display = "none";
  }
}