const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 9001;
const filePath = path.join(__dirname, 'food.ts');
const OfferfilePath = path.join(__dirname, 'offer.ts');
const assetsFolderPath = path.join(__dirname,'../.staticfoodImage')
app.use(bodyParser.json());

app.use(cors());

app.post('/saveToFile', (req, res) => {
  const newData = req.body;
  try {
    // Read existing data from 'food.json'
    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const startIndex = fileContent.indexOf('[');
        const endIndex = fileContent.lastIndexOf(']');
        if (startIndex !== -1 && endIndex !== -1) {
          const jsonData = fileContent.substring(startIndex, endIndex + 1);
          existingData = JSON.parse(jsonData);
        }
    }

    // Modify the existing data or replace it with the new data
    // For this example, we'll replace it entirely
    // const updatedData = newData;
    const updatedData = newData.map(item => {
      // Get the folder name based on size
      const folderName = getFolderNameBySize(item?.Size);

      // Get a random image Data URL from the specified folder
      const randomImageDataURL = getRandomImageAsDataURL(folderName);

      // Use the randomImageDataURL or fallback to 'alt'
      const imageValue = randomImageDataURL || 'alt';

      // Add the random image Data URL to the item
      return {
        ...item,
        Image: imageValue,
      };
    });


    // Write the updated data back to 'food.json'
    const wrappedData = `

    export const foodItemsJson = ${JSON.stringify(updatedData, null, 4)};`;

    fs.writeFileSync(filePath, wrappedData);

    res.status(200).send('Data saved to file.');
  } catch (error) {
    console.error('Error saving data to file:', error);
    res.status(500).send('Internal Server Error'+error);
  }
});

app.post('/saveOfferToFile', (req, res) => {
  const newData = req.body;
  try {
    // Read existing data from 'food.json'
    const existingData = [];

    if (fs.existsSync(OfferfilePath)) {
      const fileContent = fs.readFileSync(OfferfilePath, 'utf-8');
      const startIndex = fileContent.indexOf('[');
      const endIndex = fileContent.lastIndexOf(']');
      if (startIndex !== -1 && endIndex !== -1) {
        const jsonData = fileContent.substring(startIndex, endIndex + 1);
        existingData = JSON.parse(jsonData);
      }
    }
    const updatedData = newData;

    // Write the updated data back to 'Offer.json'
    const wrappedData = `export const foodOfferJson = ${JSON.stringify(updatedData, null, 4)};`;
    fs.writeFileSync(OfferfilePath, wrappedData);

    res.status(200).send('Data saved to file.');
  } catch (error) {
    console.error('Error saving data to file:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Function to get the folder name based on size
function getFolderNameBySize(size) {
  switch (size) {
    case 1:
      return 'single';
    case 2:
      return 'double';
    case 3:
      return 'full';
    default:
      return 'staters'; // Handle other cases as needed
  }
}

function getRandomImageAsDataURL(folderName) {
  const folderPath = path.join(assetsFolderPath, folderName);

  // Read the files in the specified folder
  const files = fs.readdirSync(folderPath);

  // Filter out only image files
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  // Choose a random image file
  const randomImageFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

  // Read the image file as a Buffer
  if (randomImageFile) {
    const imagePath = path.join(folderPath, randomImageFile);
    const imageBuffer = fs.readFileSync(imagePath);

    // Convert the Buffer to a Base64 string
    const base64Image = imageBuffer.toString('base64');

    // Construct the Data URL
    return `data:image/${path.extname(randomImageFile).slice(1)};base64,${base64Image}`;
  }
}
