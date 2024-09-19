import { google } from 'googleapis';

import { readFileSync } from 'fs';
const key = JSON.parse(readFileSync(new URL('../secrets.json', import.meta.url)));
// import key from '../secrets.json' assert { type: 'json' };

export const SHEET_ID = "1ywnZ9XvSojslLtMC1YSD-m6A5FISDMdVZVNYqeVPAdk";

const client = new google.auth.JWT(key.client_email, null, key.private_key, ["https://www.googleapis.com/auth/spreadsheets"]);

const sheets = google.sheets({ version: "v4", auth: client })

export default sheets;