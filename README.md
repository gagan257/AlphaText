# AlphaText - Text Manipulator App

## Description

AlphaText is a JavaScript + React web application that empowers users to manipulate text in various formats. The front end is built with React, providing an interactive user interface, while the logical end, powered by JavaScript, handles the text manipulations. Explore the different text formatting options seamlessly with this easy-to-use application.

## Table of Contents

- Installation
- Usage
- JavaScript Logics
- Frontend
- Contributing

## Installation

**To install and run AlphaText, follow these steps:**

- Clone the repository:

        git clone https://github.com/gagan257/AlphaText.git

- Navigate to the project directory:

        cd AlphaText

- Install dependencies for the frontend:

        npm install

- Run the frontend server:

        npm run start

## Usage

- Open the 'index.html' file in your preferred web browser.
- Enter your text in the input field.
- Choose the desired text manipulation option from the menu.
- Click the button to see the formatted text.

## Supported Text Manipulations with JS Logics :

- Lowercase

        setText(text.toLowerCase());

- UpperCase

        setText(text.toUpperCase());

- Camel case

        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "));

- Snake Case

        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].toLowerCase();
        }
        setText(newText.join("_"));

- Kebab-Case

        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].toLowerCase();
        }
        setText(newText.join("-"));

- Remove Extra Spaces

        let newText = text.split(/[ ]+/);
            setText(newText.join(" "));

## Frontend

The frontend of AlphaText is built with React, a popular JavaScript library for building user interfaces. Below, you'll find an overview of the frontend structure and some key components:

        |-- AlphaText/
        |   |-- public/
        |   |-- src/
        |   |   |-- components/
        |   |   |   |-- Developer.js
        |   |   |   |-- Footer.js
        |   |   |   |-- Navbar.js
        |   |   |   |-- TextForm.js
        |   |   |-- App.css
        |   |   |-- App.js
        |   |   |-- App.test.js
        |   |   |-- index.js
        |   |   |--
        |   |-- package.json
        |   |-- ...

## Technologies Used

**React:** The frontend is built using React, allowing for a modular and efficient UI development.

**Bootstrap:** Bootstrap components are utilized for a clean and responsive design, ensuring a user-friendly experience.

**React Router DOM** Allows to make single page Applications.

## Contributions

-**Feel free to contribute to the development of AlphaText by submitting bug reports, feature requests, or code contributions.**

<!-- CONTRIBUTORS_START -->

## Our Contributors :

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://gagan257.tech/"><img src="https://avatars.githubusercontent.com/u/93324279?v=4" width="100px;" alt="Gagan-image" border="8px" /><br /><sub><b>Gagan Arora</b></sub></a><br />Admin</td>
      <td align="center" valign="top" width="14.28%"><a href="https://codebykrisna.netlify.app/"><img src="https://avatars.githubusercontent.com/u/112065383?s=40&v=4" width="100px;" alt="Krishna-image" border="8px"/><br /><sub><b>Krishna Rajput</b></sub></a><br />Documentation & Manager</td>
      <td align="center" valign="top" width="14.28%"><a href="https://gagan257.tech/"><img src="https://avatars.githubusercontent.com/u/129546652?v=4" width="100px;" alt="Noval-image" border="8px"/><br /><sub><b>NovalGreat</b></sub></a><br />Tester</td>
    </tr>
   </tbody>
</table>

<!-- CONTRIBUTORS_END -->
