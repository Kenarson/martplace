# Database JSON untuk Products

## Deskripsi
Saya telah membuat sistem database JSON sementara untuk marketplace Anda. Berikut penjelasan lengkapnya:

## File yang Dibuat

### 1. `public/data/products.json`
File JSON ini berisi data produk yang akan di-fetch oleh aplikasi. Data mencakup:
- **id**: Unique identifier untuk setiap produk
- **title**: Nama produk
- **price**: Harga produk
- **rating**: Rating produk (0-5)
- **reviewCount**: Jumlah review
- **image**: Path ke gambar produk
- **seller**: Nama penjual
- **description**: Deskripsi produk

Saat ini berisi 8 produk contoh yang bisa Anda tambah/edit sesuai kebutuhan.

## File yang Dimodifikasi

### 2. `app/products/page.tsx`
File halaman produk telah diupdate dengan fitur berikut:

#### Perubahan Utama:
1. **Client Component**: Menggunakan `'use client'` directive untuk mengaktifkan client-side rendering
2. **State Management**: Menambahkan states untuk:
   - `products`: Array data produk
   - `loading`: Status loading
   - `error`: Handling error

3. **Fetch Data**: 
   - Menggunakan `useEffect` hook untuk fetch data dari `/data/products.json`
   - Data di-fetch saat component di-mount

4. **Error Handling**:
   - Loading state saat data sedang di-fetch
   - Error message jika fetch gagal

5. **TypeScript Interface**: 
   - Menambahkan `Product` interface untuk type safety

## Cara Menggunakan

### 1. Menambah Data Produk
Edit file `public/data/products.json` dan tambahkan objek produk baru dengan struktur yang sama:

```json
{
  "id": "9",
  "title": "Nama Produk",
  "price": 99.99,
  "rating": 4.5,
  "reviewCount": 50,
  "image": "/image.jpg",
  "seller": "Nama Penjual",
  "description": "Deskripsi produk"
}
```

### 2. Mengedit Data Produk
Cukup ubah nilai property di file JSON sesuai kebutuhan.

### 3. Menghapus Produk
Hapus seluruh object produk dari array JSON.

## Menjalankan Aplikasi

Pastikan server Next.js sudah berjalan:
```bash
npm run dev
```

Kemudian akses halaman produk di:
```
http://localhost:3000/products
```

## Struktur Folder
```
public/
├── data/
│   └── products.json          ← Database JSON
├── (file lainnya)
```

## Keuntungan Menggunakan JSON Sementara:
✅ Mudah di-setup tanpa database
✅ Format sederhana dan mudah diedit
✅ Cocok untuk development awal
✅ Bisa di-convert ke database real nanti

## Langkah Selanjutnya (Opsional):
- Jika ingin lebih advanced, bisa migrasi ke database seperti MongoDB atau PostgreSQL
- Bisa membuat API route di Next.js untuk handle CRUD operations
- Bisa menambahkan pagination atau filter data

---
**Dibuat pada**: 2025-11-29
