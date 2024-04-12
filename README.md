## Scraping TikTok Live Comments to CSV

This project allows you to scrape all comments from a TikTok live stream and save them to a CSV file in the `chat` folder.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [Git](https://git-scm.com) - Version control system

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/ATHman3/tiktok_live_comments_scrap.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tiktok_live_comments_scrap
   ```

3. Install the project dependencies by running the following command:

   ```bash
   npm install
   ```

## Usage

1. Open the `live.js` file located in the project directory.
2. Locate the variable `TIKTOK_USERNAME` and replace it with the username of someone who is currently live on TikTok.
3. Save the file.

## Running the Project

To run the project and scrape TikTok live comments to a CSV file, use the following command:

```bash
node live.js
```

## file 

```bash
tiktok_live_comments_scrap/
├── chat/
│ ├── TIKTOK_USERNAME_date1.csv
│ ├── TIKTOK_USERNAME_date2.csv
│ └*
└*
