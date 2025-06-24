# POTLOCK Playground Frontend

Welcome to the **POTLOCK Playground Frontend**, an interactive environment designed to test and explore the features of the POTLOCK Cross Chain Donation Widget. This frontend allows developers and users to experiment with widget configurations, visualize donation flows, and simulate cross-chain transactions.

## Features

- **Interactive Widget Testing**: Adjust and test widget settings in real-time.
- **Cross-Chain Simulation**: Simulate donations across networks like NEAR, Solana, Ethereum, and more.
- **Live Preview**: See immediate changes to themes, colors, and configurations.
- **Responsive Design**: Optimized for desktop and mobile views.


## Installation

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn
- A code editor (e.g., VS Code)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/PotLock/cross-chain-widget-playground
   cd cross-chain-widget-playground
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your NEAR Intents API key:
     ```
     VITE_NEAR_INTENTS_API_KEY=your-api-key-here
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

## Usage

- **Launch Playground**: Open `http://localhost:5173` (or the port specified in your terminal) after starting the server.
- **Configure Widget**: Use the form to set `Address`, `donationTarget`, `buttonColor`, and `Asset` values.
- **Test Donation Flow**: Click the "Simulate Donation" button to see the QR code and confirmation process.
- **Copy Code**: Generate HTML or React code snippets via the "Export Code" button.



## Development

### Building

To build the playground for production:
```bash
npm run build
```
or
```bash
yarn build
```
The output will be in the `dist` folder.

### Running Tests

Run unit tests with:
```bash
npm test
```
or
```bash
yarn test
```

### Deployment

Deploy to a static hosting service (e.g., Vercel, Netlify) by pushing the `dist` folder or configuring a build pipeline.

## Contributing

We welcome contributions! Fork the repository, create a feature branch, and submit a pull request. Follow the project's coding standards and include tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues or questions, open an issue on [GitHub](https://github.com/yourusername/potlock-playground/issues) or contact support@potlock.org.

## Acknowledgments

- Built with React, Vite, and Tailwind CSS.
- Thanks to the NEAR community for inspiration and support.

---

### Badges

![Build Status](https://img.shields.io/badge/build-passing-green)  
![Version](https://img.shields.io/badge/version-1.0.0-blue)

### Last Updated

*This README was last updated at 12:19 PM CDT on Tuesday, June 24, 2025.*
