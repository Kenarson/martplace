import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const connection = await pool.getConnection();
    
    const [result] = await connection.query(
  'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
  [name, email, password]
);
    
    connection.release();
    
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Registration error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Registration failed';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}