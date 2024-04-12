## Scraping TikTok Live Comments to CSV

This project allows you to scrape all comments from a TikTok live stream and save them to a CSV file in the `chat` folder.

This project is built on top of the [TikTok-Live-Connector](https://github.com/zerodytrash/TikTok-Live-Connector) library by zerodytrash. Make sure to check out their repository for more information and to show your support.

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

To run the project and scrape TikTok live comments to a CSV file, use the following command:

```bash
node live.js <TIKTOK_USERNAME>
```

## Files tree

```bash
tiktok_live_comments_scrap/
├── chat/
│ ├── TIKTOK_USERNAME_date1.csv
│ ├── TIKTOK_USERNAME_date2.csv
│ └*
└*
