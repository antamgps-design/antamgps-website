# Cập nhật logo An Tâm Smart Solutions v3.1

## Nội dung đã cập nhật

- Logo màu mới ở Header desktop và menu mobile.
- Logo màu compact trên Header điện thoại.
- Logo trắng mới ở Footer.
- Favicon, ảnh chia sẻ mạng xã hội và logo Organization Schema.
- Dùng tên file phiên bản mới để tránh cache ảnh cũ trên trình duyệt và Cloudflare.

## Cách cập nhật

1. Giải nén gói source.
2. Sao chép toàn bộ nội dung và ghi đè vào thư mục Git hiện tại.
3. Chạy các lệnh:

```powershell
npm install
npm run build
git status
git add .
git commit -m "Cap nhat logo An Tam Smart Solutions v3.1"
git push origin main
```

4. Đợi Cloudflare Pages triển khai thành công rồi mở `https://antamgps.vn`.
5. Nếu tab cũ vẫn còn ảnh trước đó, nhấn `Ctrl + F5` một lần. Logo mới dùng đường dẫn mới nên không cần xóa toàn bộ cache Cloudflare.

## Các file nhận diện mới

- `public/assets/logo/logo-antam-smart-v31.png`
- `public/assets/logo/logo-antam-smart-white-v31.png`
