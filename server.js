const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = 3000; // Backend server running on port 3000
const BOT_TOKEN = '7298652792:AAHkVbT9IvCU2hg-k26kX6ZH9rGVO7Vx-Ac'; // Replace with your bot token

app.use(bodyParser.json());

app.post('/api/auth/telegram', (req, res) => {
  try {
    const authData = req.body;

    console.log('Received auth data:', authData); // Log received data

    if (!authData.hash || !authData.auth_date) {
      console.error('Invalid auth data:', authData);
      return res.status(400).json({ success: false, message: 'Invalid auth data.' });
    }

    const secretKey = crypto.createHash('sha256').update(BOT_TOKEN).digest();
    const dataCheckString = Object.keys(authData)
      .filter(key => key !== 'hash')
      .sort()
      .map(key => `${key}=${authData[key]}`)
      .join('\n');

    const hash = crypto.createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');

    console.log('Generated hash:', hash); // Log generated hash
    console.log('Received hash:', authData.hash); // Log received hash

    if (hash !== authData.hash) {
      console.log('Invalid data: hash mismatch'); // Log hash mismatch
      return res.status(400).json({ success: false, message: 'Invalid data.' });
    }

    if (new Date() / 1000 - authData.auth_date > 86400) {
      console.log('Invalid data: data outdated'); // Log outdated data
      return res.status(400).json({ success: false, message: 'Data is outdated.' });
    }

    res.json({ success: true, user: authData });
  } catch (error) {
    console.error('Error processing request:', error); // Log error with stack trace
    res.status(500).json({ success: false, message: 'Internal server error.', error: error.message });
  }
});

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Endpoint not found.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
