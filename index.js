require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=uk5GEpqnpQCO2LtVRyw67eoB3cjqTMWC&q=Week5&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"