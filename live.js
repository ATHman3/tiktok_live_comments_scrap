const { WebcastPushConnection } = require("tiktok-live-connector");
const fs = require("fs");

// Tiktok live username
const tiktokUsername = "TIKTOK_USERNAME";

// Columns to include in the CSV file
const columns = ["nickname", "uniqueId", "comment"];

// Generate CSV file name
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString("fr-FR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}).replace(/[ /:]/g, "_");
const fileName = `./chat/${tiktokUsername}_${formattedDate}.csv`;

// Initialize TikTok Live connection
const tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Connect to TikTok Live and create CSV file
tiktokLiveConnection.connect()
  .then(() => {
    const header = columns.join(";") + "\n";
    fs.writeFileSync(fileName, header);
  })
  .catch((err) => {
    console.error("Failed to connect to TikTok Live", err);
  });

// Listen for "chat" events and append data to the CSV file
tiktokLiveConnection.on("chat", (data) => {
  const rowData = columns.map((key) => data[key]).join(";");
  fs.appendFile(fileName, rowData + "\n", (err) => {
    if (err) {
      console.error("Error appending data to CSV file", err);
    }
  });
});



