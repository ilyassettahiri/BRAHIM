// pages/api/store-form.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  // Handle GET requests (optional, for testing endpoint)
  if (req.method === 'GET') {
    res.status(200).json({ message: 'API endpoint is working. Use POST to submit data.' });
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']); // Inform the client which methods are allowed
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    return;
  }

  // --- MODIFICATION START ---
  // Extract all fields from the request body
  const {
    fullName,
    phone,
    city,
    quantity,
    productId,
    productName,
    productCategory, // Make sure this is sent from the frontend if needed
    size,
    color,
  } = req.body;

  // Basic input validation - include checks for new required fields like size and color
  // Adjust validation based on your actual requirements
  if (!fullName || !phone || !city || !size || !color || !quantity || !productId || !productName) {
     // Construct a more specific error message if possible
     const missingFields = [
        !fullName && 'fullName',
        !phone && 'phone',
        !city && 'city',
        !size && 'size',
        !color && 'color',
        !quantity && 'quantity',
        !productId && 'productId',
        !productName && 'productName',
     ].filter(Boolean).join(', '); // Filter out falsy values and join

     return res.status(400).json({ message: `Missing required fields: ${missingFields || 'Check input'}` });
  }
  // --- MODIFICATION END ---


  try {
    // Initialize Google Auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // Ensure private key newlines are correctly handled
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Get authenticated client
    const client = await auth.getClient();

    // Create Sheets API client
    const sheets = google.sheets({ version: 'v4', auth: client });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    // --- MODIFICATION START ---
    // Define the order of columns in your Google Sheet
    const rowData = [
      fullName,          // Column A
      phone,             // Column B
      city,              // Column C
      quantity,          // Column D
      productId,         // Column E
      productName,       // Column F
      productCategory || '', // Column G (use empty string if category might be missing)
      size,              // Column H
      color,             // Column I
      new Date().toLocaleString('fr-MA', { timeZone: 'Africa/Casablanca' }), // Column J - Timestamp (Morocco timezone)
      // Add more fields here if needed, and adjust the range below
    ];

    // Append the row to your Google Sheet
    // Adjust the range (e.g., 'Sheet1!A:J') to match the number of columns in rowData
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:J', // Updated range for 10 columns (A to J)
      valueInputOption: 'USER_ENTERED', // How the input data should be interpreted
      requestBody: {
        values: [rowData], // Pass the structured row data
      },
    });
    // --- MODIFICATION END ---

    // Send success response
    res.status(200).json({ message: 'Data stored successfully' });

  } catch (error) {
    // Log the detailed error on the server
    console.error('Error appending data to Google Sheet: ', error);

    // Send a generic error response to the client
    // Avoid sending detailed internal error messages to the client for security
    res.status(500).json({ message: 'Internal Server Error storing data.' });
  }
}
