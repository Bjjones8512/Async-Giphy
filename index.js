require("dotenv").config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

const endpoint =
  "https://api.giphy.com/v1/gifs/search?api_key=uk5GEpqnpQCO2LtVRyw67eoB3cjqTMWC&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getImage(query) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const random = Math.floor(Math.random() * 25);
    const imgUrl = data.data[random].images.original.url;

    console.log(imgUrl);
    console.log(random);

    return imgUrl;
  } catch (err) {
    console.error(err);
  }
}
getImage();
