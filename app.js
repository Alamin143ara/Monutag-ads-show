// Function to show ads when the button is clicked
function showAds() {
  // Show the ad container
  document.getElementById('monitag-ad-container').style.display = 'block';

  // Initialize the Monitag ad
  Monitag.init({
    adUnitId: '8512224', // Replace with your Monitag ad unit ID
    containerId: 'monitag-ad-container',
  });
}

// Add event listener to the "Show Ads" button
document.getElementById('show-ads-button').addEventListener('click', showAds);
