document.addEventListener('DOMContentLoaded', function() {
  // Facebook Page ID and Access Token (replace with your own)
  const pageId = 'your_page_id';
  const accessToken = 'your_access_token';

  // Fetch opening hours using Facebook Graph API
  fetch(`https://graph.facebook.com/v13.0/${pageId}?fields=hours&access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => {
      if (data.hours) {
        const openingHours = data.hours;
        const openingHoursList = document.getElementById('opening-hours-list');

        // Display each day's opening hours
        for (const day in openingHours) {
          if (openingHours.hasOwnProperty(day)) {
            const hours = openingHours[day];
            const listItem = document.createElement('li');
            listItem.classList.add('opening-hours-item');
            listItem.innerHTML = `<span>${day}</span><span>${hours}</span>`;
            openingHoursList.appendChild(listItem);
          }
        }
      } else {
        console.error('Unable to fetch opening hours');
      }
    })
    .catch(error => {
      console.error('Error fetching opening hours:', error);
    });
});