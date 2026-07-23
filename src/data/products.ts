export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  gallery: string[];
  badge: string;
  description: string;
  highlights: string[];
  features: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: 'gs12', name: 'GS12', subtitle: 'Thiết bị định vị GPS 4G thông minh', category: 'GPS có dây', image: '/assets/products/gs12.png', gallery: ['/assets/products/gs12-features.png'], badge: 'GPS 4G • IP67',
    description: 'Theo dõi phương tiện chính xác, phát hiện ACC, cảnh báo rung và hỗ trợ ngắt nhiên liệu hoặc nguồn điện từ xa.',
    highlights: ['GPS/BDS chính xác ≤ 5 m','Điện áp rộng 9–90V','Chống nước IP67','Pin dự phòng 250mAh'],
    features: [
      {title:'Theo dõi thời gian thực',description:'Cập nhật vị trí và trạng thái phương tiện trực tiếp trên ứng dụng.'},
      {title:'Ngắt nguồn từ xa',description:'Hỗ trợ ngắt nhiên liệu hoặc điện khi cần tăng cường chống trộm.'},
      {title:'Phát hiện ACC',description:'Nhận biết trạng thái bật hoặc tắt khóa điện của phương tiện.'},
      {title:'Cảnh báo thông minh',description:'Cảnh báo rung, tháo rời, vượt tốc và các trạng thái bất thường.'},
      {title:'Hỗ trợ eSIM',description:'Kết nối dữ liệu ổn định, hạn chế thao tác thay SIM vật lý.'},
      {title:'Chống nước IP67',description:'Phù hợp môi trường nhiều bụi, ẩm và điều kiện lắp đặt thực tế.'}
    ],
    specs:[{label:'Kích thước',value:'84 × 38 × 19 mm'},{label:'Trọng lượng',value:'51 g'},{label:'Mạng',value:'LTE 4G / 2G'},{label:'Điện áp',value:'9–90V DC'},{label:'Pin dự phòng',value:'250mAh'},{label:'Nhiệt độ',value:'-20°C đến 75°C'}],
    applications:['Ô tô cá nhân','Taxi','Xe tải','Xe cho thuê','Doanh nghiệp vận tải','Công ty bảo hiểm']
  },
  {
    slug: 'h29p', name: 'H29P', subtitle: 'Thiết bị định vị GPS 4G siêu nhỏ', category: 'GPS có dây', image: '/assets/products/h29p-clean.png', gallery: ['/assets/products/h29p-overview.png','/assets/products/h29p-specs.png'], badge: 'Sản phẩm chủ lực',
    description: 'Thiết kế nhỏ gọn, dễ giấu kín, định vị nhanh và phù hợp cho xe máy, xe điện lẫn ô tô.',
    highlights: ['Kết nối 4G ổn định','Điện áp 9–90V','Phát hiện ACC','Hỗ trợ OTA'],
    features:[
      {title:'Định vị trực tuyến',description:'Theo dõi vị trí phương tiện theo thời gian thực.'},
      {title:'Xem lại lịch sử',description:'Kiểm tra quãng đường, thời gian và tốc độ đã di chuyển.'},
      {title:'Cảnh báo cắt dây',description:'Thông báo khi thiết bị bị mất nguồn hoặc dây điện bị can thiệp.'},
      {title:'Ngắt máy từ xa',description:'Hỗ trợ điều khiển ngắt điện hoặc nhiên liệu tùy cấu hình lắp đặt.'},
      {title:'Pin dự phòng',description:'Duy trì cảnh báo trong thời gian ngắn khi nguồn chính bị ngắt.'},
      {title:'Quản lý nhiều xe',description:'Theo dõi nhiều phương tiện trên cùng một tài khoản.'}
    ],
    specs:[{label:'Chip GPS',value:'UBLOX / AT6558'},{label:'Điện áp',value:'9–90V DC'},{label:'Định vị nóng',value:'≤ 2 giây'},{label:'Định vị nguội',value:'≤ 35 giây'},{label:'Cập nhật dữ liệu',value:'Khoảng 10 giây/lần'},{label:'Nền tảng',value:'Web / App'}],
    applications:['Xe máy','Xe điện','Ô tô','Gara ô tô','Đại lý xe','Gia đình và doanh nghiệp']
  },
  {
    slug:'s20', name:'S20', subtitle:'Thiết bị định vị GPS 4G không dây', category:'GPS không dây', image:'/assets/products/s20-clean.png', gallery:['/assets/products/s20-overview.png'], badge:'Pin 6000mAh',
    description:'Không cần đấu điện, lắp đặt nhanh bằng nam châm và phù hợp theo dõi phương tiện hoặc tài sản linh hoạt.',
    highlights:['Pin lớn 6000mAh','Nam châm siêu mạnh','Cảnh báo tháo gỡ','Sạc lại qua USB'],
    features:[
      {title:'Không cần đấu điện',description:'Đặt thiết bị vào vị trí kín đáo và bắt đầu sử dụng nhanh chóng.'},
      {title:'Pin dung lượng lớn',description:'Dung lượng 6000mAh cho thời gian sử dụng dài tùy chế độ cập nhật.'},
      {title:'Nam châm tích hợp',description:'Gắn chắc lên bề mặt kim loại, thuận tiện tháo lắp và di chuyển.'},
      {title:'Cảnh báo tháo gỡ',description:'Cảm biến hỗ trợ phát hiện khi thiết bị bị tác động hoặc tháo khỏi vị trí.'},
      {title:'Theo dõi thời gian thực',description:'Cập nhật vị trí định kỳ trực tiếp trên ứng dụng GPS-ANTAM.'},
      {title:'Sạc USB',description:'Nạp lại pin dễ dàng bằng cáp sạc đi kèm.'}
    ],
    specs:[{label:'Loại thiết bị',value:'GPS 4G không dây'},{label:'Dung lượng pin',value:'6000mAh'},{label:'Lắp đặt',value:'Nam châm tích hợp'},{label:'Sạc',value:'Cổng USB'},{label:'Kết nối',value:'4G / GPS'},{label:'Bảo hành',value:'12 tháng'}],
    applications:['Xe máy','Ô tô','Xe tải','Taxi','Hàng hóa','Tài sản cần theo dõi']
  },
  {
    slug:'ev04', name:'EV04', subtitle:'Thiết bị định vị GPS 4G thế hệ mới', category:'GPS có dây', image:'/assets/products/ev04clean.png', gallery:['/assets/products/ev04-overview.png'], badge:'Nhỏ gọn • Chính xác',
    description:'Thiết bị phổ thông nhỏ gọn, kết nối 4G ổn định và hoạt động với dải điện áp rộng cho nhiều loại phương tiện.',
    highlights:['Độ chính xác ≤ 5 m','Điện áp 9–90V','Pin dự phòng 55mAh','Hỗ trợ OTA'],
    features:[
      {title:'Theo dõi thời gian thực',description:'Giám sát vị trí và chuyển động của phương tiện trên ứng dụng.'},
      {title:'Cắt nguồn động cơ',description:'Hỗ trợ điều khiển từ xa theo cấu hình lắp đặt.'},
      {title:'Cảnh báo pin yếu',description:'Thông báo khi nguồn hoặc pin dự phòng xuống thấp.'},
      {title:'Cảnh báo cắt dây',description:'Phát hiện khi nguồn chính bị ngắt bất thường.'},
      {title:'Phát hiện ACC',description:'Nhận biết trạng thái khóa điện của xe.'},
      {title:'Kết nối 4G',description:'Truyền dữ liệu nhanh và ổn định trên mạng di động.'}
    ],
    specs:[{label:'Kích thước',value:'72 × 31 × 12 mm'},{label:'Trọng lượng',value:'30 g'},{label:'Pin dự phòng',value:'55mAh'},{label:'Điện áp',value:'9–90V DC'},{label:'Nhiệt độ',value:'-20°C đến 70°C'},{label:'Chip GPS',value:'RDA8850DM'}],
    applications:['Ô tô','Xe máy','Xe máy điện','Đại lý xe','Tiệm sửa xe','Khách hàng cá nhân']
  }
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
