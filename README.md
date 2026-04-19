# Perfume Shop - Full Stack Application

A modern, responsive full-stack e-commerce application for selling luxury perfumes. Built with **React**, **Node.js**, **MongoDB**, and **Tailwind CSS**.

## 🚀 Features

### Frontend
- ✨ Responsive design with Tailwind CSS
- 🎨 Interactive hover effects and smooth transitions
- 🏠 Dynamic homepage with product filtering
- 🖼️ Image gallery with zoom functionality
- ⭐ Star rating system and reviews
- 📱 Mobile-optimized responsive layout
- 🔄 Real-time data fetching from backend
- 💬 Add, view, and delete reviews
- 🌐 Social media sharing buttons (Twitter, Facebook, LinkedIn)

### Backend
- 🗄️ MongoDB database with Mongoose ODM
- 🛣️ RESTful API routes
- ✅ Input validation and error handling
- 📊 Product rating calculation
- 🔍 Product filtering and search
- ⚡ Efficient database queries

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

## 🎯 Key Features Explained

### 1. **Product Display**
- Products fetched from MongoDB
- Images stored as URLs
- Responsive grid layout (1-4 columns based on screen size)
- Category-based filtering

### 2. **Product Details Page**
- Image gallery with thumbnail selection
- Detailed product information
- Size selection
- Average rating calculation
- Add to cart functionality

### 3. **Reviews System**
- View all reviews for a product
- Star rating system (1-5)
- Add new reviews with validation
- Delete reviews
- Real-time rating updates
- Review count and average rating display

### 4. **Social Sharing**
- Share on Twitter
- Share on Facebook
- Share on LinkedIn
- Dynamic sharing with product details

### 5. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Smooth animations and transitions

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

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check `MONGO_URI` in `.env` file
- Verify MongoDB is accessible

### API Connection Issues
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`
- Check browser console for CORS errors

### Frontend Not Loading
- Clear browser cache
- Check if Vite dev server is running
- Verify port 3000 is available

## 📝 Code Quality

- ✅ Clean, organized component structure
- ✅ Proper error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ Reusable components
- ✅ Consistent naming conventions
- ✅ Comments for complex logic

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express.js Documentation](https://expressjs.com)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy Coding!** 🎉
