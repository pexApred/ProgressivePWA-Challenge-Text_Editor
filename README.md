# ProgressivePWA-Challenge-Text_Editor

## Description

This is a text editor application that runs in the browser as a progressive web application (PWA). It allows users to create notes or code snippets with or without an internet connection, providing reliable data persistence for later use. The application features offline functionality and employs various data persistence techniques for redundancy. The application is designed to meet PWA criteria and employs various modern web development techniques.

Throughout the project, learned how to implement offline functionality, use IndexedDB for data storage, bundle JavaScript files using Webpack, generate HTML, service worker, and manifest files, and deploy the application to Heroku.

User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install the Text Editor project, follow these steps:

1. Clone the repository.
2. Navigate to the project's root directory.
3. Run npm install to install the required dependencies.
4. Start the application by running npm run start.
5. Access the application in your browser at the specified address.

## Usage

To use the Text Editor application, follow these instructions:

1. Open the application in your browser.
2. Enter the desired content in the text editor.
3. Click off the DOM window to save the content.
4. The content will be stored in the IndexedDB database.
5. If you close and reopen the text editor, the content will be retrieved from IndexedDB.

Here is a screenshot of the Text Editor application:

![Just Another Text Editor](./assets/Screenshot%202023-07-06%20at%2010.39.33%20AM.png)

Here is the link to the deployed application:
```md
https://progressive-pwa-38c931beffdd.herokuapp.com/
``````

## Credits

Completed individually using starter code by: Emmanuel Lakis (https://github.com/pexApred)

## License

This project is covered under the [MIT License](./LICENSE). For more details, please click the license icon below under 'Badges'.

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)