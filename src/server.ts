import express from 'express';
import cors from 'cors';
import { initializeDatabase, seedDatabase } from './database/database';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import contactRoutes from './routes/contactRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the PetShop API' });
});

async function startServer() {
  try {
    await initializeDatabase();
    
    await seedDatabase();
    
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
