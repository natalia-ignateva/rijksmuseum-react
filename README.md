# Rijksmuseum React App

Typescript/react app that uses [Rijksmuseum API](https://data.rijksmuseum.nl/object-metadata/api/#collection-api) and allows to search thougth their collection.

## Built With

-   Typescript
-   React
-   Axios

## Getting Started

To set development environment locally get a local copy of this repository and follow next steps

### Prerequisites

-   npm

`npm install npm@latest -g`

### Installation

1. Clone repo
   `https://github.com/natalia-ignateva/rijksmuseum-react.git`
2. Install NPM packages
   `npm install`
3. Create .env file to store API key
   `REACT_APP_RIJKSMUSEUM_API_KEY=[ENTER YOUR KEY]`

## Usage

This application is MVP for searching images and information through the rich Rijksmuseum's collection

## Roadmap

-   [x] Create index page with search implementation - describe App UI structure
-   implement search form
-   handle search
-   perform API request using Axios

-   [x] Add components to display collection returned from API
-   describe components UI structure

-   [x] Create modal component which shows in-depth information about the selected piece of art
-   describe component UI structure
-   perform API request on modal poping up
-   handle modal component

## License

Distributed under the MIT License. See LICENSE.txt for more information.
