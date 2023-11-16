export function convertToCurrencyFormat(amount) {
    // Sử dụng hàm toLocaleString() để chuyển đổi số thành định dạng tiền tệ
    // Ví dụ: 1862000 -> "1.862.000"
    const currencyFormat = amount.toLocaleString("vi-VN");
  
    // Thêm ký tự đồng (₫) vào cuối chuỗi
    const formattedAmount = currencyFormat + "₫";
  
    return formattedAmount;
}