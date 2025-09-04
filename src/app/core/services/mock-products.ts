import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../features/products/models/product.model';

@Injectable({ providedIn: 'root' })
export class MockProductsService {
  private mockProducts: Product[] = [
    // Electronics
    {
      id: '1',
      title: 'Laptop Pro',
      price: 1299,
      image:
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop',
      description: 'A high-performance laptop with latest processor and long battery life',
      category: 'Electronics',
      rating: 4.7,
      stock: 25,
    },
    {
      id: '2',
      title: 'Smartphone X',
      price: 799,
      image:
        'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&auto=format&fit=crop',
      description: 'A powerful smartphone with advanced camera system',
      category: 'Electronics',
      rating: 4.5,
      stock: 50,
    },
    {
      id: '3',
      title: 'Wireless Headphones',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop',
      description: 'Wireless headphones with noise cancellation',
      category: 'Electronics',
      rating: 4.3,
      stock: 30,
    },
    {
      id: '4',
      title: '4K Smart TV',
      price: 899,
      image:
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop',
      description: '55-inch 4K Ultra HD Smart TV with HDR',
      category: 'Electronics',
      rating: 4.6,
      stock: 15,
    },
    {
      id: '5',
      title: 'Smart Watch Pro',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop',
      description: 'Advanced smartwatch with health monitoring',
      category: 'Electronics',
      rating: 4.4,
      stock: 40,
    },

    // Home & Kitchen
    {
      id: '6',
      title: 'Air Fryer',
      price: 129,
      image:
        'https://images.unsplash.com/photo-1615297928064-24977384d0da?w=800&auto=format&fit=crop',
      description: 'Digital air fryer with multiple cooking functions',
      category: 'Home & Kitchen',
      rating: 4.5,
      stock: 35,
    },
    {
      id: '7',
      title: 'Blender Pro',
      price: 89,
      image:
        'https://images.unsplash.com/photo-1570585426362-979d1dff0edc?w=800&auto=format&fit=crop',
      description: 'High-speed blender for smoothies and food processing',
      category: 'Home & Kitchen',
      rating: 4.2,
      stock: 28,
    },

    // Fashion
    {
      id: '8',
      title: "Men's Running Shoes",
      price: 89,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop',
      description: 'Lightweight running shoes with cushioning',
      category: 'Fashion',
      rating: 4.3,
      stock: 45,
    },
    {
      id: '9',
      title: "Women's Handbag",
      price: 59,
      image:
        'https://images.unsplash.com/photo-1591561954555-607968c989ab?w=800&auto=format&fit=crop',
      description: 'Stylish leather handbag with multiple compartments',
      category: 'Fashion',
      rating: 4.1,
      stock: 30,
    },

    // Books
    {
      id: '10',
      title: 'The Creative Habit',
      price: 15,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop',
      description: 'Learn and use the power of creativity',
      category: 'Books',
      rating: 4.6,
      stock: 60,
    },
    {
      id: '11',
      title: 'Atomic Habits',
      price: 12,
      image:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&auto=format&fit=crop',
      description: 'An easy way to build good habits',
      category: 'Books',
      rating: 4.8,
      stock: 75,
    },

    // Sports & Outdoors
    {
      id: '12',
      title: 'Yoga Mat',
      price: 29,
      image:
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop',
      description: 'Eco-friendly non-slip yoga mat',
      category: 'Sports & Outdoors',
      rating: 4.4,
      stock: 50,
    },
    {
      id: '13',
      title: 'Dumbbell Set',
      price: 79,
      image:
        'https://images.unsplash.com/photo-1576678924414-52e87533d5f4?w=800&auto=format&fit=crop',
      description: 'Adjustable dumbbell set for home workouts',
      category: 'Sports & Outdoors',
      rating: 4.3,
      stock: 20,
    },

    // Beauty & Personal Care
    {
      id: '14',
      title: 'Skincare Set',
      price: 45,
      image:
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop',
      description: 'Complete daily skincare routine set',
      category: 'Beauty',
      rating: 4.5,
      stock: 40,
    },
    {
      id: '15',
      title: 'Electric Toothbrush',
      price: 65,
      image:
        'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&auto=format&fit=crop',
      description: 'Sonic electric toothbrush with multiple modes',
      category: 'Beauty',
      rating: 4.6,
      stock: 35,
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  getProductById(id: string): Observable<Product | undefined> {
    const product = this.mockProducts.find((p) => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const products = this.mockProducts.filter((p) => p.category === category);
    return of(products);
  }
}
