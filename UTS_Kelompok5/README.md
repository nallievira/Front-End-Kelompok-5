# Rasa Sejarah Manado

Website kuliner interaktif yang menampilkan kekayaan cita rasa dan sejarah makanan khas Manado. Jelajahi warisan kuliner Minahasa melalui pengalaman web yang modern dan responsif.

## Kontribusi

Website ini dikembangkan oleh **Kelompok 5** dengan kontributor:

- [@nallievira](https://github.com/nallievira) - *Ellen Elvira (535240023)*
- [@Howard014](https://github.com/Howard014) - *Howard Dominikov Oei (535240014)*

## Fitur Utama

### **Desain & UI/UX**
- **Animasi Scroll Progresif** - Teks "Rasa MANADO" muncul bertahap saat pengguna scroll
- **Desain Responsif** - Optimal di desktop, tablet, dan mobile
- **Burger Menu** - Navigasi mobile yang elegan dan fungsional

### **Sistem Pencarian & Filter**
- **Pencarian Cerdas** - Cari makanan dengan saran otomatis
- **Filter Kompak** - Dropdown filter dengan slider rating bintang
- **Filter Multi-Kriteria** - Berdasarkan rating, komentar, dan status

### **Sistem Rating & Review**
- **Rating Bintang Interaktif** - Beri rating 1-5 bintang untuk setiap makanan
- **Sistem Komentar** - Tulis dan baca ulasan dari pengguna lain
- **Vote Like/Dislike** - Voting untuk komentar yang bermanfaat

### **Carousel Makanan**
- **Navigasi Smooth** - Scroll horizontal dengan animasi halus
- **Hover Effects** - Efek visual saat mengarahkan kursor
- **Keyboard Support** - Navigasi dengan arrow keys

### **Modal Detail**
- **Pop-up Informatif** - Detail lengkap setiap makanan
- **Sejarah Lengkap** - Latar belakang sejarah setiap hidangan
- **Komentar Terintegrasi** - Sistem komentar dalam modal

### **Halaman Sejarah**
- **Routing Dinamis** - Navigasi antar halaman tanpa reload
- **Konten Edukatif** - Sejarah mendalam setiap makanan khas
- **Navigasi Mudah** - Tombol kembali yang intuitif

## Preview Website

*[Masukkan screenshot website di sini]*

![Preview Website](./preview-image.png)
*Screenshot halaman utama Rasa Sejarah Manado*

---

## Detail Fitur & Kontributor

### **Frontend Design & Layout**
**Kontributor:** *Ellen, Howard*

#### Halaman Utama (Home) *Ellen*
- **Hero Section:** Animasi teks "Rasa MANADO" dengan scroll trigger
- **Search Bar:** Input pencarian dengan suggestions dropdown
- **Filter System:** Compact dropdown dengan slider dan quick filters
- **Food Carousel:** Horizontal scrolling dengan 21 makanan khas Manado
- **Responsive Layout:** Breakpoint untuk mobile, tablet, dan desktop

#### Komponen UI
- **Top Navigation Bar:** Muncul saat scroll dengan burger menu
- **Filter Toggle Button:** Design gradient hitam ke biru dengan icon
- **Star Rating Component:** Interactive 5-star rating system
- **Modal Popup:** Detail makanan dengan grid layout

---

### **JavaScript Functionality**
**Kontributor:** *Ellen, Howard*

#### Core Functions
- **Progressive Scroll Animation:** jQuery-based scroll triggers
- **Modal Management:** Open/close dengan ESC key support
- **Local Storage:** Persistensi data rating, komentar, dan vote
- **Event Handling:** Click, hover, keyboard navigation

#### Search & Filter System
```javascript
// Contoh implementasi filter
function filterCarousel() {
    const searchTerm = document.getElementById('food-search').value;
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    // Filter logic berdasarkan kriteria multiple
}
```

#### Rating & Comment System
- **Star Rating:** Click handler untuk set rating 1-5
- **Comment CRUD:** Create, read, update, delete komentar
- **Vote System:** Like/dislike dengan status tracking

---

### **Data Management**
**Kontributor:** *[Nama Kontributor]*

#### Food Data Structure
```javascript
const foodData = {
    tinutuan: {
        title: "Tinutuan / Bubur Manado",
        description: "Bubur gurih khas Manado...",
        history: "Sejarah Tinutuan dipercaya..."
    }
    // 20+ makanan lainnya
}
```

#### LocalStorage Management
- **Comments Storage:** `kulinerManadoComments`
- **Votes Storage:** `kulinerManadoUserVotes`  
- **Ratings Storage:** `kulinerManadoRatings`

---

### **CSS Styling & Animation**
**Kontributor:** *[Nama Kontributor]*

#### Responsive Design
- **Mobile First:** Breakpoint 768px untuk tablet/desktop
- **Flexbox & Grid:** Modern layout techniques
- **CSS Variables:** Consistent color scheme

#### Animation Effects
- **Scroll Animations:** CSS transforms dengan jQuery triggers
- **Hover Effects:** Scale, shadow, dan color transitions
- **Modal Transitions:** Smooth fade in/out dengan backdrop blur

#### Component Styling
- **Filter Dropdown:** Gradients, shadows, dan smooth transitions
- **Carousel Cards:** Hover effects dan responsive sizing
- **Star Rating:** Active states dan hover preview

---

### 📱 **Mobile Responsiveness**
**Kontributor:** *[Nama Kontributor]*

#### Mobile Optimizations
- **Burger Menu:** Fullscreen navigation overlay
- **Touch Gestures:** Swipe support untuk carousel
- **Compact Layouts:** Vertical stacking untuk mobile
- **Font Scaling:** Readable typography di berbagai screen size

#### Breakpoint Strategy
```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */
```

---

### **Testing & Quality Assurance**
**Kontributor:** *[Nama Kontributor]*

#### Browser Compatibility
- **Chrome/Chromium:** Full compatibility
- **Firefox:** Tested dan optimized
- **Safari:** WebKit specific fixes
- **Mobile Browsers:** iOS Safari, Chrome Mobile

#### Performance Optimization
- **Image Optimization:** Compressed assets
- **CSS Minification:** Production ready styles
- **JavaScript Optimization:** Efficient DOM manipulation
- **Loading Speed:** Fast initial page load

---

## Teknologi yang Digunakan

- **HTML5** - Struktur semantik
- **CSS3** - Styling modern dengan Flexbox/Grid
- **JavaScript (ES6+)** - Functionality interaktif
- **jQuery** - DOM manipulation dan animasi
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Coolvetica, Ephesis)
- **LocalStorage API** - Data persistence

## Cara Menjalankan Project

1. **Clone repository:**
   ```bash
   git clone [repository-url]
   cd UTS_Kelompok5
   ```

2. **Jalankan local server:**
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Atau menggunakan Node.js
   npx serve
   
   # Atau menggunakan Live Server di VS Code
   ```

3. **Buka browser:**
   ```
   http://localhost:8000
   ```

## 📁 Struktur Project

```
UTS_Kelompok5/
├── assets/                 # Gambar makanan dan asset
│   ├── tinutuan.jpg
│   ├── cakalangfufu.jpg
│   └── ...
├── index.html             # Halaman utama
├── style.css             # Styling lengkap
├── script.js            # JavaScript functionality
└── README.md           # Dokumentasi project
```

## Lisensi

Project dibuat untuk keperluan akademik **UTS Front-End Programming** dan tidak untuk tujuan komersial.

---

⭐ **Jika project ini bermanfaat, berikan star di repository ini!** ⭐

*Dibuat oleh Kelompok 5*