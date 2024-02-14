// "use server";


// const cookieStore = cookies();
// const lang = cookieStore.get("lang").value;
const lang =  "eng"

export const productTitle = ["Product Catalouge", "பொருட்களின் பட்டியல்", "Hindi Catalogue"]
export const productError = ["No products found", "பொருட்கள் எதுவும் இல்லை", "कोई उत्पाद नहीं मिला"]
export const addProductButton = ["Add Products", "பொருளைச் சேர்க்கவும்", "Hindi Add Button"]
export const captureImage = ["Capture Image", "படம் பிடிக்கவும்", "Hindi Capture"]
export const uploadImage = ["Upload Image", "பதிவேற்றம் செய்", "Hindi Upload"]
export const voiceInput = ["Voice Input", "குரல் உள்ளீடு", "आवाज़ डालना"]
export const productItem = ["In Stock", "கையிருப்பில்", "स्टॉक में"]
export const duplicate = ["Duplicate", "நகல்", "डुप्लिकेट"]
export const deleteContents = {
  trigger : ["Delete","அழி","मिटाना"],
  title : ["Do you want to delete it ?", "இதை நீக்க வேண்டுமா?", "क्या आप इसे हटाना चाहते हैं?"],
  yesButton : ["Yes", "ஆம்", "हाँ"],
  noButton : ["No", "இல்லை","नहीं" ]
}

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

export const categories = {
  fruitsnvegetables: ["Fruits & Vegetables", "பழங்கள் & காய்கறிகள்", "फल और सब्जियाँ"],
  foodgrainsoilnmasala: ["Foodgrains, Oil & Masala", "பழுப்புகள், எண்ணெய் & மசாலா", "अनाज, तेल और मसाला"],
  bakerycakesndairy: ["Bakery, Cakes & Dairy", "பேக்கரி, கேக்ஸ் & டேரி", "बेकरी, केक और डेयरी"],
  beverages: ["Beverages", "பானங்கள்", "पेय"],
  snacksnbrandedfoods: ["Snacks & Branded Foods", "உணவு சுருக்கங்கள் & பிராண்டெட் உணவுகள்", "स्नैक्स और ब्रांडेड खाद्य"],
  beautynhygiene: ["Beauty & Hygiene", "அழகு & சுத்தம்", "सौंदर्य और स्वच्छता"],
  cleaningnhousehold: ["Cleaning & Household", "சுத்தம் & வீட்டு பொருள்கள்", "सफाई और घरेलू"]
};

export const sub_categories = {
  freshvegetables: ["Fresh Vegetables", "புதிய காய்கறிகள்", "ताज़ी सब्जियां"],
  herbsandseasonings: ["Herbs & Seasonings", "மூலிகைகள் & சீசனிங்", "जड़ी-बूटियाँ & मसाले"],
  slicedpeeledveggies: ["Sliced & Peeled Veggies", "சிலியானுள்ள மற்றும் தோட்டப்பட்ட காய்கறிகள்", "वर्किंग & छिलका हुआ सब्जी"],
  freshsaladssprouts: ["Fresh Salads & Sprouts", "புதிய சலாட் & முளைக்காய்கள்", "ताज़ा सलाद और स्प्राउट्स"],
  attaflourssooji: ["Atta, Flours & Sooji", "அட்டா, மாவுகள் & சூஜி", "आटा, आटा & सूजी"],
  dalspulses: ["Dals & Pulses", "பருப்புகள் & பல்ஸ்ஸு", "दाल और पल्स"],
  dryfruits: ["Dry Fruits", "உலர்ந்த பழங்கள்", "सूखे फल"],
  edibleoilsnghee: ["Edible Oils & Ghee", "உணவு எண்ணெய்கள் & நெய்", "खाद्य तेल और घी"],
  masalasspices: ["Masalas & Spices", "மசாலா & மசலா", "मसाले और मसाले"],
  organicstaples: ["Organic Staples", "ஆர்கானிக் பொருள்கள்", "जैविक स्टेपल्स"],
  ricericeproducts: ["Rice & Rice Products", "அரிசி & அரிசி தயாரிப்புகள்", "चावल और चावल के उत्पाद"],
  saltsugarjaggery: ["Salt, Sugar & Jaggery", "உப்பு, சர்க்கரை & வெல்லம்", "नमक, चीनी और गुड़"],
  bakerysnacks: ["Bakery Snacks", "பேக்கரி உணவுகள்", "बेकरी स्नैक्स"],
  breadsbuns: ["Breads & Buns", "ரொட்டிகள் & புன்ஸ்", "रोटियां और बन्स"],
  cakespastries: ["Cakes & Pastries", "கேக்குகள் & பாஸ்ட்டியாக்கள்", "केक और पेस्ट्रीज़"],
  cookiesruskkhari: ["Cookies, Rusk & Khari", "குக்கிகள், ரஸ்க் & கரி", "कुकीज़, रस्क और खारी"],
  dairy: ["Dairy", "பால் பொருள்கள்", "डेयरी"],
  coffee: ["Coffee", "காபி", "कॉफ़ी"],
  energysoftdrinks: ["Energy & Soft Drinks", "ஆற்றல் & மெதுவான பானங்கள்", "ऊर्जा और सॉफ्ट ड्रिंक्स"],
  fruitjuicesndrinks: ["Fruit Juices & Drinks", "பழங்கள் சீராக்கள் & பானங்கள்", "फलों के रस और पेय"],
  healthdrinksupplement: ["Health Drink, Supplement", "ஆரோக்கிய பானம், சேர்க்கை", "स्वास्थ्य पेय, सप्लीमेंट"],
  tea: ["Tea", "தேநீர்", "चाय"],
  water: ["Water", "நீர்", "पानी"],
  icecreamsndesserts: ["Ice Creams & Desserts", "ஐஸ்கிரீம் & டெசர்ட்கள்", "आइसक्रीम और मिठाई"],
  nondairy: ["Non Dairy", "டேரி இல்லாத", "नॉन-डेयरी"],
  biscuitscookies: ["Biscuits & Cookies", "பிஸ்கட்கள் & குக்கிகள்", "बिस्किट और कुकीज़"],
  breakfastcereals: ["Breakfast Cereals", "காலை உணவு சிறிய பயிற்சிகள்", "नाश्ता सीरियल्स"],
  chocolatescandies: ["Chocolates & Candies", "சாக்லேட்கள் & மிட்ஸ்", "चॉकलेट्स और मिठाई"],
  frozenveggiessnacks: ["Frozen Veggies & Snacks", "உறைந்த காய்கறிகள் & உணவுகள்", "फ्रोजन सब्जी और स्नैक्स"],
  indianmithai: ["Indian Mithai", "இந்திய மிதை", "भारतीय मिठाई"],
  noodlepastavermicelli: ["Noodle, Pasta, Vermicelli", "நூடுல், பாஸ்தா, வெர்மிசெல்லி", "नूडल, पास्ता, वर्मिसेली"],
  pickleschutney: ["Pickles & Chutney", "உருக்கடலைகள் & சட்னி", "अचार और चटनी"],
  readytocookeat: ["Ready To Cook & Eat", "சாப்பிடலாம் & உண்ணும் உடன்", "तैयार पकाने और खाने के लिए"],
  snacksnnamkeen: ["Snacks & Namkeen", "உணவு மகளிர் மற்றும் நம்கீன்", "स्नैक्स और नमकीन"],
  spreadssaucesketchup: ["Spreads, Sauces, Ketchup", "பரப்புகள், சாவ்ஸ், கெசப்பு", "स्प्रेड, सॉस, कैचअप"],
  vegsnacks: ["Veg Snacks", "காய்கறி உணவுகள்", "वेज स्नैक्स"],
  bathhandwash: ["Bath & Hand Wash", "குளியல் & கை கழுவுதல்", "नहाने और हाथ धोने का सामान"],
  femininehygiene: ["Feminine Hygiene", "பெண்கள் சுத்தம்", "स्त्री स्वच्छता"],
  haircare: ["Hair Care", "முடி பராமரிப்பு", "बाल स्वास्थ्य"],
  healthmedicine: ["Health & Medicine", "சுகாதாரம் & மருத்துவம்", "स्वास्थ्य और दवा"],
  makeup: ["Makeup", "மேக்கப்", "मेकअप"],
  mensgrooming: ["Men's Grooming", "ஆண்கள் அழகு கூட்டம்", "पुरुषों का सौंदर्य"],
  oralcare: ["Oral Care", "வாயுப் பராமரிப்பு", "मौखिक देखभाल"],
  skincare: ["Skin Care", "செயர்கேர்", "त्वचा की देखभाल"],
  allpurposecleaners: ["All Purpose Cleaners", "அனைத்து போலவே சுத்தம் செய்யும் பொருட்கள்", "सभी उद्देश्य क्लीनर्स"],
  binsbathroomware: ["Bins & Bathroom Ware", "தூக்கங்கள் & குளிர்கரை பொருட்கள்", "बिन और बाथरूम वियर"],
  carshoecare: ["Car & Shoe Care", "கார் & ஷூ பராமரிப்பு", "कार और जूते की देखभाल"],
  detergentsdishwash: ["Detergents & Dishwash", "கழுத்துப் பொருள்கள் & டிஷ்வாஷ்", "डिटर्जेंट और डिशवॉश"],
  disposablesgarbagebag: ["Disposables, Garbage Bag", "நீக்கமுடிக்கப்பட்டது, குப்பை பொருள்கள்", "डिस्पोजेबल, कचरा बैग"],
  freshenersrepellents: ["Fresheners & Repellents", "புதிய சுவாசனைகள் & விருந்துகள்", "फ्रेशनर्स और दुर्भाग्य निवारक"],
  mopsbrushesscrubs: ["Mops, Brushes & Scrubs", "மொப்ஸ், பிரஷ்சர்கள் & முளைக்குதல்", "मॉप्स, ब्रश और स्क्रब"],
  partyfestiveneeds: ["Party & Festive Needs", "கூட்டு & காலாண்டு தேவைகள்", "पार्टी और त्योहारी आवश्यकताएँ"],
  poojaneeds: ["Pooja Needs", "பூஜை தேவைகள்", "पूजा की आवश्यकताएं"],
  stationery: ["Stationery", "அலங்காரப்பொருட்கள்", "स्टेशनरी"]
};
