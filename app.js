const { DateTime } = require('luxon');

// Helper function to get the current date and time in IST format
function getISTDateTime() {
  try {
    // Get the current date and time in the Indian Standard Time (UTC+05:30)
    const now = DateTime.now().setZone('Asia/Kolkata');

    
    const formattedDateTime = now.toFormat('dd-MM-yyyy HH:mm:ss');

   
    if (!formattedDateTime) {
      throw new Error('Failed to format date and time.');
    }

    return formattedDateTime;
  } catch (error) {
    
    console.error('Error occurred while fetching IST date and time:', error.message);
    return 'Error fetching date and time'; // Returning a message in case of error
  }
}


console.log(getISTDateTime());
