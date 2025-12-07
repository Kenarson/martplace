import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const connection = await pool.getConnection();
    
    const [rows] = await connection.query<mysql.RowDataPacket[]>(
  'SELECT * FROM users WHERE email = ? AND password_hash = ?',
  [email, password]
);
    
    connection.release();
    
    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({ user: rows[0] });
  } catch (error) {
    console.error('Login error:', error);
    const errorMessage = error instanceof Error ? 
      error.message.includes('ER_') ? 
        'Database error' : 
        error.message : 
      'Authentication failed';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}