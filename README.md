# OWN Magazine Website

Welcome to the GitHub repository for our Magazine Website! This project is a fully-featured online magazine platform designed to deliver engaging content to our readers.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## About

Our Magazine Website provides readers with a seamless experience to explore and enjoy articles across various categories, including news, entertainment, lifestyle, technology, and more.

## Features

- User-friendly interface
- Responsive design for mobile and desktop
- Categories and tags for content organization
- Search functionality
- User authentication and profile management
- Commenting system
- Admin panel for managing articles and users

## Technologies

- **Frontend:**
  - HTML, CSS, JavaScript
  - React
  - NEXTjs
- **Backend:**
  - Node.js
  - Express
  - MongoDB
- **Other Tools:**
  - Parcel (for bundling)
  - Sass (for styling)
  - JWT (for authentication)
  - Mongoose (for MongoDB interactions)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB instance running

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/magazine-website.git
   cd magazine-website
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

Navigate to `http://localhost:3000` to view the website. Sign up to create an account, browse articles, and explore the features of the site. Admin users can log in to access the admin panel to manage content and users.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact us:

- **Email:** contact@obsessedwithnostalgia.art
- **Twitter:** [@ownmag](https://twitter.com/ownmag)
