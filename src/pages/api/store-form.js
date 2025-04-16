// pages/api/store-form.js

import { google } from 'googleapis';

export default async function handler(req, res) {


  if (req.method === 'GET') {
    res.status(200).json({ message: 'API endpoint is working' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { fullName, phone, city } = req.body;

  // Basic input validation
  if (!fullName || !phone || !city) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Initialize Google Auth client with credentials from environment variables
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();

    // Create Sheets API client
    const sheets = google.sheets({ version: 'v4', auth: client });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    // Append the row to your Google Sheet (adjust the range if needed)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D', // Assuming you want to append data to columns A-D in "Sheet1"
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [fullName, phone, city, new Date().toLocaleString()]
        ],
      },
    });

    res.status(200).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error('Error appending data: ', error);
    res.status(500).json({ message: 'Error storing data', error: error.message });
  }
}
