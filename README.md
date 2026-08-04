# An Tâm GPS Platform v3 — Unified

Source website chính thức được dựng bằng Astro 5 và Tailwind CSS 4.

## Trang đã có

- Homepage responsive, giao diện thương hiệu An Tâm GPS.
- Trang ứng dụng IOPGPS: `/iopgps/`.
- Trang tải ứng dụng thông minh: `/app/`.
- Trung tâm tải xuống: `/tai-xuong/`.
- Trung tâm hướng dẫn và bảo hành: `/huong-dan/`.
- Danh sách sản phẩm: `/san-pham/`.
- Trang chi tiết tự động:
  - `/san-pham/gs12/`
  - `/san-pham/h29p/`
  - `/san-pham/s20/`
  - `/san-pham/ev04/`
- Header, Footer, Contact Dock, Product Card và Product Template dùng chung.
- Ảnh logo, sản phẩm và ứng dụng IOPGPS.
- Nội dung ưu đãi SIM Data 4G + quyền sử dụng IOPGPS tặng kèm 12 tháng.
- Ảnh hiển thị đã chuyển sang WebP; bản tài liệu tải xuống vẫn giữ độ phân giải cao.
- Canonical, Open Graph, Schema Organization, sitemap và robots.txt.

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

## Thông tin dùng chung

Hotline, Zalo và liên kết tải IOPGPS được quản lý tại `src/data/site.ts`.
