
// JavaScript code to generate random images
function generateImage() {
  
  const category = document.getElementById('category').value;
  
    const num = Math.floor(Math.random() * 10) + 1; // Generate a random number from 1 to 10
  
    const imageUrl = `https://source.unsplash.com/500x500/?${category}&sig=${num}`;
  
    document.getElementById('image').src = imageUrl;
  
    document.getElementById('image-url').value = imageUrl;
  
  }

  // JavaScript code to copy image URL
  function copyImageUrl() {
    
    const imageUrl = document.getElementById('image-url').value;

    navigator.clipboard.writeText(imageUrl);

    alert('Image URL copied to clipboard!');
  }
  