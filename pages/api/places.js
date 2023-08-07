import axios from 'axios';
import config from  '@/utils/config'; 

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { input } = req.query;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
        {
          params: {
            input,
            key: config.GOOGLE_PLACES_API_KEY,
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data from Google Places API' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
