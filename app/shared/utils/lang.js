// "use server";


// const cookieStore = cookies();
// const lang = cookieStore.get("lang").value;
const lang =  "eng"

export const productTitle = ["Product Catalouge", "பொருட்களின் பட்டியல்", "Hindi Catalogue"]
export const productError = ["No products found", "பொருட்கள் எதுவும் இல்லை", "कोई उत्पाद नहीं मिला"]
export const addProductButton = ["Add Products", "பொருளைச் சேர்க்கவும்", "Hindi Add Button"]
export const captureImage = ["Capture Image", "படம் பிடிக்கவும்", "Hindi Capture"]
export const uploadImage = ["Upload Image", "பதிவேற்றம் செய்", "Hindi Upload"]
export const productItem = ["In Stock", "கையிருப்பில்", "स्टॉक में"]
export const duplicate = ["Duplicate", "நகல்", "डुप्लिकेट"]
export const loginPage = {
  title : ["Login", "உள்நுழைய", "Hindi Login"],
  name_field : ["Name", "பெயர்", "Hindi Name"],
  pass_field: ["Password", "கடவுச்சொல்", "Hindi Pass"],
  button : ["Submit", "சமர்ப்பிக்கவும்", "Hindi Submit"],
  isNew: ["New?", "புதியது?"],
  register: ["register", "பதிவு செய்யுங்கள்"]
};

export const registerPage = {
  title : ["Register", "பதிவு செய்", "Hindi Login"],
  name_field : ["Name", "பெயர்", "Hindi Name"],
  pass_field: ["Password", "கடவுச்சொல்", "Hindi Pass"],
  button : ["Submit", "சமர்ப்பிக்கவும்", "Hindi Submit"],
  isNew: ["Already Registered?", "ஏற்கனவே பதிவு செய்யப்பட்டது?"],
  login: ["login", "உள்நுழைய"]
}

export const loadingMessages = {
  network: ["Network", "நெட்வொர்க்", "नेटवर्क"],
  message:[[
    "ONDC Network: Empowering small businesses, one digital step at a time.",
    "Unlocking opportunities: ONDC Network bridges the gap between buyers and sellers effortlessly.",
    "Joining hands for progress: ONDC Network fosters inclusive growth in India's digital marketplace",
    "Simplicity meets innovation: ONDC Network revolutionizes e-commerce for all.",
  ],
  [
    "ONDC நெட்வொர்க்: ஒரு இலக்கியத் தடவையை அதிகரிக்கும் சிறு வணிகங்கள்.",
    "வாய்ப்புகளை திறக்கும்: ONDC நெட்வொர்க் வாங்குபவர்களுக்கும் விற்பவர்களுக்கும் கலப்படுகின்றது.",
    "முன்னேற்றத்திற்கான கைக்கூட்டம்: ONDC நெட்வொர்க் இந்தியாவின் இணைய சந்தையில் உள்ள மொத்த வளர்ச்சியை ஊக்குவிக்கின்றது.",
    "எளியத்துடன் புதுமை சந்தித்தது: ONDC நெட்வொர்க் அனைத்தும் தனிப்பட்ட முறையில் மின்-வாணியத்தை முறியடிக்கின்றது.",
  ],
  [
    "ONDC Network: Empowering small businesses, one digital step at a time.",
    "Unlocking opportunities: ONDC Network bridges the gap between buyers and sellers effortlessly.",
    "Joining hands for progress: ONDC Network fosters inclusive growth in India's digital marketplace",
    "Simplicity meets innovation: ONDC Network revolutionizes e-commerce for all.",
  ]

]
};

export const formPage = {
  title : ["Add Item", "பொருளைச் சேர்க்கவும்", "Add Item"],
  item_name : ["Item Name", "பொருளின் பெயர்", "Hindi Add Item"], 
  sku_id : ["SKU id", "SKU ஐடி", "Hindi Sku id"],
  description : ["Description", "விளக்கம்", "Hindi Description"],
  quantity : ["Quanitity", "அளவு", "Hindi Quantity"],
  price  : ["Price", "விலை", "Hindi Price"],
  discount_price : ["Discount Price", "தள்ளுபடி விலை", "Hindi Discount"],
  category : ["Category", "வகை", "Hindi Category"],
  sub_category : ["Sub Category", "துணை வகை", "Hindi Sub Category"],
  variants : ["Variant", "மாறுபாடுகள்", "Hindi Variant"],
  button : ["Submit", "சமர்ப்பிக்கவும்", "Hindi Submit"]
}
