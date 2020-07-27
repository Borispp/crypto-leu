/**
 * @file A point for all requests
 */

import axios from 'axios';
const api = require('./api.json');

const headers = { headers: { 'Content-Type': 'application/json' } };

/**
 * Get sample
 */
export const getSummary = account_address => axios.get(api.summary, {...headers, params: { account_address }});
