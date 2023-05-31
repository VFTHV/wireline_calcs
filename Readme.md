# Wireline Calculations

This project is a Wireline Calculations Page.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project aims to simplify some basic calculations for wireline engineers. It is built using React, Redux and TypeScript, and it focuses on different wireline cable calculations required for every wireline logging job.

## Features

- Ability to change measurement units between metric and English
- Weak Point Calculation based on provided cable details and depth
- Sinker Bar Weight Calculation based on provided cable details and wellhead pressure
- Cable Stretch Calculation based on provided cable details, depth and tension
- Maximum Tension at Current Depth based on provided weakpoint percent of pullout
- Ability to report a problem using a form

## Installation

1. Clone the repository: `git clone https://github.com/VFTHV/wireline_calcs.git`
2. Navigate to the project directory: `cd wireline_calcs`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Usage

To use this project, follow these steps:

1. Open your web browser and go to [localhost:5173](http://localhost:5173) (or the appropriate URL if configured differently).
2. Current master branch is deployed at https://wireline-calcs.netlify.app/

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a new pull request explaining your changes.

## License

This project is licensed under the [MIT License](LICENSE). You are free to modify and distribute this code as per the terms of the license.
