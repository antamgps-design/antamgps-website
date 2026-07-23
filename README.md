# An Tâm GPS Platform v2

Source website chính thức được dựng bằng Astro 5 và Tailwind CSS 4.

## Trang đã có

- Homepage responsive, giao diện thương hiệu An Tâm GPS.
- Danh sách sản phẩm: `/san-pham/`.
- Trang chi tiết tự động:
  - `/san-pham/gs12/`
  - `/san-pham/h29p/`
  - `/san-pham/s20/`
  - `/san-pham/ev04/`
- Header, Footer, Product Card và Product Template dùng chung.
- Ảnh logo, sản phẩm và ứng dụng GPS-ANTAM.
- Nội dung ưu đãi SIM + ứng dụng miễn phí 12 tháng.

## Chạy trên máy

Yêu cầu Node.js 20 hoặc 22.

```bash
npm install
npm run dev
```

Mở `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 hoặc 22

## Dữ liệu sản phẩm

Chỉnh tại `src/data/products.ts`. Mỗi sản phẩm dùng chung Product Detail Template nên khi thêm sản phẩm mới chỉ cần bổ sung dữ liệu và ảnh.
