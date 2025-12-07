import pool from '@/lib/db'

export async function GET() {
  try {
    const sql = `
      SELECT
        p.id,
        p.name AS title,
        p.price,
        COALESCE(AVG(r.rating), 0) AS rating,
        COUNT(r.id) AS reviewCount,
        MAX(CASE WHEN pi.is_primary = 1 THEN pi.image_url END) AS image,
        u.username AS seller
      FROM products p
      LEFT JOIN reviews r ON r.product_id = p.id
      LEFT JOIN product_images pi ON pi.product_id = p.id
      LEFT JOIN users u ON u.id = p.seller_id
      GROUP BY p.id, u.username, p.name, p.price
      ORDER BY p.created_at DESC
      LIMIT 100
    `

    const [rows] = await pool.query(sql)
    const products = (rows as any[]).map(r => ({
      id: r.id,
      title: r.title,
      price: typeof r.price === 'string' ? parseFloat(r.price) : r.price,
      rating: typeof r.rating === 'string' ? parseFloat(r.rating) : r.rating,
      reviewCount: typeof r.reviewCount === 'string' ? Number(r.reviewCount) : r.reviewCount,
      image: r.image,
      seller: r.seller
    }))
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
