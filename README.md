# Perfume Shop - Full Stack Application

A modern, responsive full-stack e-commerce application for selling luxury perfumes. Built with **React**, **Node.js**, **MongoDB**, and **Tailwind CSS**

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

## 🛠️ Installation

### 1. Clone the Repository
```bash
cd Preselect
```

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create .env file in server directory
cat > .env << EOF
MONGO_URI=mongodb://localhost:27017/perfume-shop
PORT=5000
EOF

# Seed sample data
npm run seed

# Start the server
npm run dev
# or
npm start
```

**Backend runs on:** `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../client

# Install dependencies
npm install

# Create .env file in client directory
cat > .env << EOF
VITE_API_URL=http://localhost:5000/api
EOF

# Start development server
npm run dev
```

**Frontend runs on:** `http://localhost:3000`

## 📦 Project Structure

```
Preselect/
├── client/                    # React frontend with Vite
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── Navbar.jsx   # Navigation bar
│   │   │   ├── Banner.jsx   # Hero banner
│   │   │   └── ProductCard.jsx  # Product card component
│   │   ├── pages/           # Page components
│   │   │   ├── HomePage.jsx # Home page with product listing
│   │   │   └── ProductPage.jsx  # Product details page
│   │   ├── services/        # API services
│   │   │   └── api.js      # Axios API calls
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global Tailwind styles
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── .env                # Environment variables
│
├── server/                  # Node.js backend
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/        # Request handlers
│   │   ├── product.controller.js  # Product logic
│   │   └── review.controller.js   # Review logic
│   ├── models/            # Database schemas
│   │   ├── product.js     # Product schema
│   │   └── review.js      # Review schema
│   ├── routes/            # API routes
│   │   └── productRoutes.js      # Product and review routes
│   ├── scripts/           # Utility scripts
│   │   └── seedData.js    # Database seeding script
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables
│
└── README.md              # This file
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Reviews
- `GET /api/products/:productId/reviews` - Get reviews for a product
- `POST /api/products/review/create` - Create new review
- `GET /api/products/review/:id` - Get review by ID
- `DELETE /api/products/review/:id` - Delete review

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management


## 🚀 Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
npm start        # Start server
npm run dev      # Start with nodemon (auto-restart on changes)
npm run seed     # Seed sample data to MongoDB
```

## 🗄️ Sample Data

The seeding script includes 6 sample perfumes with:
- Multiple product images (3 images per product)
- Different categories (Evening, Day, Floral, Unisex, Warm, Herbal)
- Various sizes (30ml, 50ml, 100ml, 150ml, 200ml)
- Detailed descriptions
- Brand information

To seed the database:
```bash
cd server
npm run seed
```

## 🎨 Styling

### Tailwind CSS Setup
- Configuration file: `tailwind.config.js`
- Global styles: `index.css`
- Custom components defined in `@layer components`
- Color scheme: Purple and Pink gradients

### Custom CSS Classes
- `.btn` - Base button styles
- `.btn-primary` - Purple primary button
- `.btn-outline` - Outlined button
- `.card-hover` - Card hover effects
- `.section-title` - Section headings
- `.container-custom` - Max-width container

## 🔒 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/perfume-shop
PORT=5000
```

## 💡 Usage Tips

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Seed the database** with sample data
   ```bash
   npm run seed
   ```

3. **Start the backend**
   ```bash
   npm run dev
   ```

4. **Start the frontend** (in a new terminal)
   ```bash
   npm run dev
   ```

5. **Access the application** at `http://localhost:3000`


## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy Coding!** 🎉
