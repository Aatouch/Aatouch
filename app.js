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
  text: "สำหรับพี่นะคะ", //ข้อความตอนแชร์
  content: [
    // Card 1
    {
      image:
        "https://www.img.in.th/images/c8bd2eb408798bd6cfcffab45add2379.jpg", //ลิงก์รูปปก
      title: "สมัครใหม่วันนี้ แจกฟรี 50-500!", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน ไม่ต้องฝากก่อน", //ข้อความ
    },
    // Card 2
    {
      image:
        "https://www.img.in.th/images/534e2f16d1e10c406efd35be98f60634.jpg", //ลิงก์รูปปก
      title: "ฝาก 100 รับฟรี 100 ได้ทุกค่าย", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน ปลอดภัย มั่นคง", //ข้อความ
    },
    // Card 3
    {
      image:
        "https://www.img.in.th/images/8b78d0d822fc1dc767b33ccb4f85ad01.jpg", //ลิงก์รูปปก
      title: "สมัครใหม่รับไปเลย 50%!!", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน ระบบออโต้", //ข้อความ
    },
    // Card 4
    {
      image:
        "https://www.img.in.th/images/d8d1264740796b429088956c45300ec0.jpg", //ลิงก์รูปปก
      title: "พิเศษวันนี้ฝาก 39รับ100!", //หัวข้อใหญ่
      message: "สล็อตทุกค่าย & คาสิโน การเงินมั่นคง", //ข้อความ
	},
],
	
  link: {
    register: "https://bit.ly/autowallet123", //ลิงก์ปุ่มสมัคร
    shared: `https://liff.line.me/${LIFF_ID}?LINE=true`, //ลิงก์ปุ่มแชร์
    image: "https://lin.ee/3hPPTwc", //ลิงก์รูปภาพ
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
