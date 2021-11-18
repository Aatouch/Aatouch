const LIFF_ID = "1656628995-LYlOBmzB";

(async () => {
  await liff.init({ liffId: LIFF_ID }).catch((err) => {
    throw err;
  });
  if (!liff.isLoggedIn()) {
    liff.login();
  }
})();

// share to friends

// 

const data = {
  text: "ทำไรอยู่", //ข้อความตอนแชร์
  content: [
    // Card 1
    {
      image:
        "https://www.img.in.th/images/e6c293f1bbece5d123becbacb1cec556.jpg", //ลิงก์รูปปก
      title: "สมัครใหม่วันนี้ แจกฟรี150!", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน ไม่ต้องฝากก่อน", //ข้อความ
    },
    // Card 2
    {
      image:
        "https://www.img.in.th/images/2b56d3083e7f4e2d20be0ac63da90c0d.jpg", //ลิงก์รูปปก
      title: "ฝาก 100 รับ 100 ได้ทุกค่าย", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน การเงินมั่นคง", //ข้อความ
    },
    // Card 3
    {
      image:
        "https://www.img.in.th/images/3b9ebc1b10ede9d31d160e26ce51fda4.jpg", //ลิงก์รูปปก
      title: "แนะนำเพื่อนมาสมัครรับไปเลย 20%!!", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน ระบบคุณภาพ", //ข้อความ
    },
    // Card 4
    {
      image:
        "https://www.img.in.th/images/f6507ed36964f7b9264228303473c6a1.jpg", //ลิงก์รูปปก
      title: "ฝากแรกของวัน รับฟรีโบนัส10% !", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน ระบบคุณภาพ", //ข้อความ
	},
],
	
  link: {
    register: "https://betflix99th.mewallet.cc/register", //ลิงก์ปุ่มสมัคร
    shared: `https://liff.line.me/${LIFF_ID}?LINE=true`, //ลิงก์ปุ่มแชร์
    image: "https://lin.ee/Y1hB1cc", //ลิงก์รูปภาพ
  },
  settings: {
    color: {
      title: "#FDF9F8", //สีหัวข้อ
      message: "#ffb70a", //สีข้อความ
      background: "#a12fce", //พื้นหลัง
      button: "#ed9f09", //สีปุ่ม
    },
    size: 'giga' //มีขนาด giga, mega, kilo, micro, nano
  },
};
