# Hướng dẫn chỉnh nhanh giao diện An Tâm GPS

Các thiết lập thường dùng nằm ở đầu file:

`src/styles/global.css`

## 1. Chỉnh kích thước logo Header

```css
--header-logo-width: 285px;
--header-logo-height: 70px;
```

## 2. Chỉnh cỡ tiêu đề Hero

```css
--hero-title-size: clamp(2rem, 4.55vw, 4.55rem);
```

- Số đầu: cỡ nhỏ nhất.
- Số giữa: co giãn theo màn hình.
- Số cuối: cỡ lớn nhất.

## 3. Chỉnh kích thước ảnh Hero

```css
--hero-image-width: 670px;
--hero-image-height: 500px;
```

## 4. Dịch ảnh Hero sang trái, phải, lên hoặc xuống

```css
--hero-image-offset-x: 0px;
--hero-image-offset-y: 0px;
```

Ví dụ:

```css
--hero-image-offset-x: 20px;  /* sang phải */
--hero-image-offset-y: -10px; /* lên trên */
```

## 5. Thay ảnh Hero

Thay file:

`public/assets/app/hero-phone-h29p.png`

Giữ nguyên tên file để không cần sửa code. Nên dùng PNG đã xóa nền.

## 6. Thay logo

Thay file:

`public/assets/logo/logo-ngang.png`

Giữ nguyên tên file để Header và Footer tự cập nhật.

## 7. Chỉnh khoảng cách Hero

```css
--hero-padding-top: 54px;
--hero-padding-bottom: 42px;
--hero-min-height: 520px;
```

## Lưu ý

CSS Header, Hero và Footer đã được gom thành từng khu vực duy nhất. Không thêm các đoạn `.hero`, `.brand-logo` hoặc `.site-header` mới ở cuối file vì sẽ tạo ghi đè khó kiểm soát.
