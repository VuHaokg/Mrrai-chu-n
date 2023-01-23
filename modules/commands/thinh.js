module.exports.config = {
    name: "thinh",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HĐGN",
    description: "Thơ buồn",
    commandCategory: "Lover",
    usages: "trai/gai",
    cooldowns: 5
};

module.exports.run = async({api,event,args}) => {
if (args.join() == "") { api.sendMessage(`Sử dụng ${global.config.PREFIX}thinh trai để gửi thính dành cho trai thả\nSử dụng ${global.config.PREFIX}thinh gai để gửi thính dành cho gái thả`,event.threadID, event.messageID) }
  if (args[0] == "gai") {
var gai = ["Làm thơ phải biết gieo vần \nLàm gì mới được, ở gần bên anh",
    
"Thật lòng yêu anh,\n anh lại từ chối\n Ngỏ lời chăn gối anh\nLại ok?",

    "Nếu wise là khôn \nThì em muốn ise anh",
    
    "Đừng hỏi, em đã yêu anh hết bao nhiêu \nNếu em có tới hai mạng, thì anh đã double kill",
    
    "Không có ba vòng căng đét \nNhậu hết 3 két được không anh",
    
    "Tình yêu thì em không thiếu \nThích nhiêu thì em cũng chiều",
    
    "Em thật thú vị rồi sẽ là của chị",
    
    "Chị vốn yêu bản thân mình \nBây giờ lại lỡ ngoại tình với em",
    
    "Không chê em quá thường \nVì chị thương em quá trời",
    
    "Rõ là em biết bơi \nNhưng vẫn chết chìm trong ánh mắt anh",


"Yêu em đừng để em buồn,\nEm buồn em bắt cởi chuồng cả đêm",

    "Tiền nhà a có bao nhiêu \nCó bao nhiêu thì a cứ đem ra \nA không phải sợ nghe mắng vì thay vào đó là tiếng e la",

    "Dạo này ăn gì cũng thấy đắng \nChắc là đang thiếu vắng môi anh"
    ];
api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, event.threadID,event.messageID);
}
else if (args[0] =="trai" ){
var trai =[ "Trong núi có rừng, rừng có cây \nLòng anh có nàng, nàng có hay?",
    
"Tôi là người không bao giờ mê tín \nTôi mê em",

"Một lòng yêu nước \nMấy lòng yêu em",

    "Khen cậu một từ thôi không đủ \nVì thích cậu ngàn thu không đổi",
    
    "Em giống hoàng hôn, cứ phải chiều mới có \nTôi như bình minh, cứ qua đêm là cho",
    
    "Nhìn em anh lo quá \nNhưng mà là Lo ve",
    
    "Yêu em không nằm trong dự tính \nMà là anh tự tính",
    
    "Thỉnh thoảng nhớ em, \nThường xuyên thỉnh thoảng",
    
    "Je t'aime",
    
    "Gọi em là Sweetie \nCòn anh sẽ là Sugar Daddy",
    
    "Tình yêu của họ khiến đầu gối em tím và thâm \nCòn tình yêu của anh thì thấm vào tim",
    
    "Anh từng là kẻ mạnh nhất \nDen khi gap em moi biet yeu la gi",
    
    "Milo thì ngọt \nCòn chị thì ngon",
    
    "Anh thích đcm và đm \nVì anh thích đi cạnh em và được mãi bên em",

    "Em có muốn con mình sau này có ADN của anh không 🤓",

"Gặp em vào buổi chiều tà \nTrà thì không thích nhưng mà thích em",

"Sáng trà sữa, trưa cà lem, chiều để bụng, tối ăn em",

"Có 1 con mèo béo. Cuộn 1 cuộn tròn xoe \nNày cái cậu cute, làm người yêu tớ nhé!",

"Điếu thuốc anh cầm ngon thì hút\nGái nhắn anh seen, xinh thì rep.",

    "Anh dắt em đi ăn cỏ \nVi em la bo cua anh",
    
"Anh muốn \n*ví anh nó dày* \nĐể biết\n*Váy em có gì*",

"Hồi nhỏ anh là \nchúa nghịch\nLớn lên anh là\nchúa chịch",

"Yêu em ở cái *Tâm hồn* \nTrắng hồng, căng mịn,\nto tròn, xinh ngon",

"Hà nội đẹp nhất về đêm\ncòn em đẹp nhất khi\n...rên trên giường",

"Nếu cuộc đời em\nkhông hạnh phúc\nLên giường cởi cúc\nanh chỉ cho"
];
api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`, event.threadID,event.messageID);
}
};