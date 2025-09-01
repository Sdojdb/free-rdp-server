# ShirtStore - The Best Store for Selling Shirts

A modern, responsive e-commerce store built with React, TypeScript, and Tailwind CSS. This is the best store for selling shirts with a beautiful UI and excellent user experience.

## Features

- 🛍️ **Modern E-commerce Experience**: Clean, professional design with smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- �� **Beautiful UI**: Modern design with Tailwind CSS and smooth animations using Framer Motion
- 🛒 **Shopping Cart**: Full cart functionality with add, remove, and update quantities
- 🔍 **Product Filtering**: Filter by category and sort by price or rating
- ⭐ **Product Ratings**: Display customer ratings and reviews
- 🎯 **Product Details**: Detailed product pages with size and color selection
- 🚀 **Fast Performance**: Optimized for speed and smooth interactions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shirt-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Page components
│   ├── HomePage.tsx    # Main product listing page
│   ├── ProductPage.tsx # Individual product page
│   └── CartPage.tsx    # Shopping cart page
├── data/               # Sample data
│   └── shirts.ts       # Product data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
└── App.tsx             # Main application component
```

## Features in Detail

### Home Page
- Hero section with call-to-action
- Product grid with filtering and sorting
- Category filters (Casual, Formal, Polo, Athletic)
- Sort options (Price, Rating, Featured)
- Add to cart functionality

### Product Page
- Detailed product information
- Size and color selection
- Quantity selector
- Add to cart with validation
- Product images and descriptions

### Shopping Cart
- Cart item management
- Quantity updates
- Remove items
- Order summary with tax calculation
- Responsive cart design

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Customization

### Adding New Products
Edit `src/data/shirts.ts` to add new products:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  price: 29.99,
  description: "Product description",
  image: "image-url",
  sizes: ["S", "M", "L", "XL"],
  colors: ["White", "Black", "Navy"],
  category: "casual",
  inStock: true,
  rating: 4.8,
  reviews: 124
}
```

### Styling
The project uses Tailwind CSS for styling. Customize colors and styles in `tailwind.config.js`.

## Deployment

The app can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, email info@shirtstore.com or create an issue in the repository.
