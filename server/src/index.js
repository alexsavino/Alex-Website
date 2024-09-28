import express from 'express';
import { z, ZodError } from 'zod';
import sheets, { SHEET_ID } from './sheetClient.js';
import cors from 'cors';
import postgresRoutes from './postgresRoutes.js';

const app = express();
const TIMEOUT_MS = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', postgresRoutes); // Mounting the postgres routes

// Zod schema for validation
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Your name is required." }),
  email: z.string().email(),
  message: z.string().min(1, { message: "A message is required." }),
});

// Function to append data to Google Sheets
const appendToSheet = (sheets, rows) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => reject(new Error('Request timed out')), TIMEOUT_MS);

    sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Data!A2:C2",
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rows],
      },
    }).then(resolve).catch(reject).finally(() => clearTimeout(timeoutId));
  });
};

// POST route to submit data to Google Sheets
app.post('/send-message', async (req, res) => {
  try {
    const body = contactFormSchema.parse(req.body);
    const rows = Object.values(body);

    await appendToSheet(sheets, rows);
    res.status(200).json({ message: 'Data appended successfully!' });
  } catch (error) {
    console.error('Error details:', error);

    if (error.message.includes('Request timed out')) {
      res.status(504).json({ error: 'Request timed out' });
    } else if (error instanceof ZodError) {
      const formattedErrors = error.errors.map(err => ({
        field: err.path[0],
        message: err.message,
      }));
      res.status(400).json({ errors: formattedErrors });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(5001, () => console.log("App running on http://localhost:5001"));