// "use server";


// const cookieStore = cookies();
// const lang = cookieStore.get("lang").value;
const lang =  "eng"

export const productTitle = ["Product Catalouge", "பொருட்களின் பட்டியல்", "Hindi Catalogue"]
export const addProductButton = ["Add Products", "பொருளைச் சேர்க்கவும்", "Hindi Add Button"]

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

export const loadingMessages = () => ({
  network:
    (lang === "eng" && "Network") ||
    (lang === "hin" && "नेटवर्क") ||
    (lang === "tam" && "நெட்வொர்க்"),
  message:
    (lang === "eng" && [
      "ONDC Network: Empowering small businesses, one digital step at a time.",
      "Unlocking opportunities: ONDC Network bridges the gap between buyers and sellers effortlessly.",
      "Joining hands for progress: ONDC Network fosters inclusive growth in India's digital marketplace",
      "Simplicity meets innovation: ONDC Network revolutionizes e-commerce for all.",
    ]) ||
    (lang === "tam" && [
      "ONDC நெட்வொர்க்: ஒரு இலக்கியத் தடவையை அதிகரிக்கும் சிறு வணிகங்கள்.",
      "வாய்ப்புகளை திறக்கும்: ONDC நெட்வொர்க் வாங்குபவர்களுக்கும் விற்பவர்களுக்கும் கலப்படுகின்றது.",
      "முன்னேற்றத்திற்கான கைக்கூட்டம்: ONDC நெட்வொர்க் இந்தியாவின் இணைய சந்தையில் உள்ள மொத்த வளர்ச்சியை ஊக்குவிக்கின்றது.",
      "எளியத்துடன் புதுமை சந்தித்தது: ONDC நெட்வொர்க் அனைத்தும் தனிப்பட்ட முறையில் மின்-வாணியத்தை முறியடிக்கின்றது.",
    ]),
});

export const formPage = () => ({
    title :   (lang === "eng" && "Add Item") ||
    (lang === "tam" && "பொருளைச் சேர்க்கவும்"),
    item_name : (lang === "eng" && "Item Name") ||
    (lang === "tam" && "பொருளின் பெயர்"),
    sku_id : (lang === "eng" && "SKU id") ||
    (lang === "tam" && "SKU ஐடி"),
    description : (lang === "eng" && "description") ||
    (lang === "tam" && "விளக்கம்"),
    quantity : (lang === "eng" && "Quantity") ||
    (lang === "tam" && "அளவு"),
    price : (lang === "eng" && "price") ||
    (lang === "tam" && "விலை"),
    discount_price : (lang === "eng" && "Discount Price") ||
    (lang === "tam" && "தள்ளுபடி விலை"),
    category : (lang === "eng" && "Category") ||
    (lang === "tam" && "வகை"),
    sub_category : (lang === "eng" && "Sub Category") ||
    (lang === "tam" && "துணை வகை"),
    variants : (lang === "eng" && "Variants") ||
    (lang === "tam" && "மாறுபாடுகள்"),
})
