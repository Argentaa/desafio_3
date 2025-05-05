import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import path from 'path';
import fs from 'fs';

const dbDir = path.resolve(__dirname, '../../db');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.resolve(dbDir, 'petshop.db');

export async function initializeDatabase(): Promise<Database> {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  await db.exec('PRAGMA foreign_keys = ON');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      image_url TEXT
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      stock INTEGER NOT NULL DEFAULT 0,
      category_id INTEGER,
      main_image_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );

    CREATE TABLE IF NOT EXISTS product_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      image_url TEXT NOT NULL,
      is_main BOOLEAN DEFAULT 0,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      product_id INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `);

  return db;
}

let dbInstance: Database | null = null;

export async function getDatabase(): Promise<Database> {
  if (!dbInstance) {
    dbInstance = await initializeDatabase();
  }
  return dbInstance;
}

export async function seedDatabase(): Promise<void> {
  const db = await getDatabase();
  
  const categoriesCount = await db.get('SELECT COUNT(*) as count FROM categories');
  if (categoriesCount.count > 0) {
    console.log('Database already seeded');
    return;
  }

  const categories = [
    { 
      name: 'Dogs', 
      description: 'Products for dogs', 
      image_url: '/images/categories/dogs.jpg' 
    },
    { 
      name: 'Cats', 
      description: 'Products for cats', 
      image_url: '/images/categories/cats.jpg' 
    },
    { 
      name: 'Birds', 
      description: 'Products for birds', 
      image_url: '/images/categories/birds.jpg' 
    },
    { 
      name: 'Fish', 
      description: 'Products for fish', 
      image_url: '/images/categories/fish.jpg' 
    }
  ];

  for (const category of categories) {
    await db.run(
      'INSERT INTO categories (name, description, image_url) VALUES (?, ?, ?)',
      [category.name, category.description, category.image_url]
    );
  }

  const dogCategory = await db.get('SELECT id FROM categories WHERE name = ?', ['Dogs']);
  const catCategory = await db.get('SELECT id FROM categories WHERE name = ?', ['Cats']);
  const birdCategory = await db.get('SELECT id FROM categories WHERE name = ?', ['Birds']);
  const fishCategory = await db.get('SELECT id FROM categories WHERE name = ?', ['Fish']);

  const products = [
    {
      name: 'Premium Dog Food',
      description: 'High-quality dog food made with real meat and vegetables. Perfect for all dog breeds and ages.',
      price: 29.99,
      stock: 100,
      category_id: dogCategory.id,
      main_image_url: '/images/products/dog-food.jpg'
    },
    {
      name: 'Dog Collar',
      description: 'Comfortable and durable collar for dogs of all sizes.',
      price: 14.99,
      stock: 50,
      category_id: dogCategory.id,
      main_image_url: '/images/products/dog-collar.jpg'
    },
    {
      name: 'Cat Food',
      description: 'Nutritious cat food with balanced ingredients for a healthy diet.',
      price: 24.99,
      stock: 80,
      category_id: catCategory.id,
      main_image_url: '/images/products/cat-food.jpg'
    },
    {
      name: 'Cat Toy Set',
      description: 'Set of interactive toys to keep your cat entertained and active.',
      price: 19.99,
      stock: 30,
      category_id: catCategory.id,
      main_image_url: '/images/products/cat-toys.jpg'
    },
    {
      name: 'Bird Cage',
      description: 'Spacious and secure cage for small to medium-sized birds.',
      price: 49.99,
      stock: 20,
      category_id: birdCategory.id,
      main_image_url: '/images/products/bird-cage.jpg'
    },
    {
      name: 'Bird Food',
      description: 'Nutritious seed mix for all types of pet birds.',
      price: 9.99,
      stock: 60,
      category_id: birdCategory.id,
      main_image_url: '/images/products/bird-food.jpg'
    },
    {
      name: 'Fish Tank',
      description: '10-gallon aquarium with filter and lighting system.',
      price: 79.99,
      stock: 15,
      category_id: fishCategory.id,
      main_image_url: '/images/products/fish-tank.jpg'
    },
    {
      name: 'Fish Food',
      description: 'Premium fish flakes suitable for all tropical fish.',
      price: 7.99,
      stock: 70,
      category_id: fishCategory.id,
      main_image_url: '/images/products/fish-food.jpg'
    }
  ];

  for (const product of products) {
    const result = await db.run(
      'INSERT INTO products (name, description, price, stock, category_id, main_image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [product.name, product.description, product.price, product.stock, product.category_id, product.main_image_url]
    );
    

    const productId = result.lastID;
    await db.run(
      'INSERT INTO product_images (product_id, image_url, is_main) VALUES (?, ?, 1)',
      [productId, product.main_image_url]
    );
    

    await db.run(
      'INSERT INTO product_images (product_id, image_url, is_main) VALUES (?, ?, 0)',
      [productId, `/images/products/additional/${product.name.toLowerCase().replace(' ', '-')}-1.jpg`]
    );
    
    await db.run(
      'INSERT INTO product_images (product_id, image_url, is_main) VALUES (?, ?, 0)',
      [productId, `/images/products/additional/${product.name.toLowerCase().replace(' ', '-')}-2.jpg`]
    );
  }

  console.log('Database seeded successfully');
}
