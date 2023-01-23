module.exports.config = {
    name: "tho",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HĐGN",
    description: "Thơ buồn",
    commandCategory: "Lover",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
    var gai = [" Hoàng hôn\n Buông.\n Mặt Trời đỏ rực\n Mắt em\n Cười.\n Long lanh như suối\n Ừ thì,\n Gặp nhau lần cuối\n Chuyện mình,\n Đến đây thôi.",

"Họ vô tình cho ta chút hi vọng,\nta ngây thơ tưởng đó là tình yêu.",
"Con mèo thầm thương chiếc lá nhưng vẫn thịt con cá và ngủ với cuộn len",

"Sự im lặng sẽ giết chết một mối quan hệ\nBởi vậy, khi quan hệ bạn đừng im lặng!",

"Tất cả nỗi buồn trên đời này đều bắt nguồn từ năm chữ: Thích người không thích mình!",

"Không hợp - \n hai chữ này vốn là vì hết\n yêu mà thành!",

"- Thế nào là hai đường thẳng song song?\n - Là hai đường thẳng không có điểm chung, dù kéo dài bao lâu cũng không có khả năng gặp gỡ.\n - Sai rồi, là anh và em.",

"Em đã nghĩ, mình\n rất rất cô đơn. Nhưng\n hóa ra không phải chỉ là\n nghĩ, đó là sự thật.",

"Chuyện cũng dài\n Kể ra cũng ngại\n Nên thôi dừng lại\n Chúng mình chia hai.",

"Thực ra, bạn yêu người ta\n nhiều như thế nào, một lòng\n một dạ ra sao... tất cả đều\n không quan trọng. Quan trọng\n là trong lòng người ta, bạn\n không là gì cả.",

"Thất tình thực ra chỉ là\n cảm giác bất lực khi không\n thể khiến trái tim mình ngừng\n yêu một ai đó.",

"Khoảng khắc người ta\n mong chờ nhất là khi hoa nở.\ Nhưng hoa nở , người ta\n lại bắt đầu lo sợ nó phai tàn.",

"Sâu đậm gì đâu\n Vài câu chữ\n Là mọi thứ\n Thành quá khứ,\n cả rồi...",

"Hóa ra tụi  gặp\n nhau, là để gieo những\n thương đau vào đời.",

"Đợi một ngày khi em nhìn\n lên, bầu trời không còn mang\n hình bóng anh nữa. Những\n đám mây sẽ thay thế , tô\n vẽ lên cuộc đời em.",

"Giờ đây anh chỉ mong em\n đủ bình yên.",

"Em biết không, em đi rồi.\n Thứ thay thế em trong anh,\n là những giọt men nồng,\n đã từng là ngọt ngào,\n giờ lại hóa đắng cay.",

"Khi lòng anh cũng đã\n nguôi ngoai đôi phần để\n bước về hướng đi phía trước.\n Anh đặt tạm em vào một góc\n trong anh.",

"Trừng phạt lớn nhất\n chính là sự lãng quên của\n một người mình từng coi\n như tất cả.",

"Dẫu biết rằng cố quên là sẽ nhớ\nNên dặn lòng cố nhớ để mà quên.",

"Ở đâu trăng có nhớ người\nỞ đây đang có một người nhớ trăng.",

"Có khi nào trên đường đời tấp nập\nTa vô tình đi lướt qua nhau.",

"Sớm vọng mặt đất thương xanh núi\nChiều lộng chân mây nhớ tím trời.",

"Với tay khơi dậy hương ngày cũ\nMường tượng như mình gặp cố nhân.",

"Trái tim hát lại câu ngư\nBài thơ tôi lại nhớ về người dưng.",

"Dù cho sông cạn đá mòn\nCòn non còn nước còn lời thề xưa",

"Đôi khi lỡ hẹn một giờ\nLần sau muốn gặp phải chờ trăm năm.",

"Bên này trời vẫn đang mưa\nLòng anh vẫn thế, vẫn chưa hết buồn.",

"Người vô tình vẽ hoa, vẽ lá\nTôi đa tình tưởng đấy làmùa xuân.",

"Anh là anh của lưng chừng\nTôi là tôi của đã từng thương anh.",

"Chút nắng vàng sao làm nênmùa hạ\nChút tình xa lạ sao giữ được người ta.",

"Ai tắt đèn cho hạnh phúc tối thui?\nTa đã cố vui mà nỗi buồn vẫn tới.",

"Lá vô tình bỏ rơi cành lá\nNgười vô tình bỏ lỡ tơ duyên.",

"Không buồn vì những thứ mình không có\nChỉ buồn vì những thứ có cũng như không.",

"Tương tư như nắm tro tàn\nNgười đi ngược lối, tình đi ngược chiều.",

"Một bông hoa không tôn thờ hai chủ\nMột con người không ấp ủ hai trái tim.",

"Tuyết tan, mưa tạnh, hoa tàn\nNắng tắt, đêm trôi, lòng người đổi thay.",

"Lúc yêu thương, lúc giả dối\nThôi tôi mở lối cho người bước đi.",

"Trăm năm chết bởi chữ tình\nSinh lòng thù hận cũng vì chữ yêu.",

"Mình còn gì nữa đâu\nVùng tươi đã úa, miền xanh đã tàn.",

"Nắng bỏ đi, nắng không về nữa\nDốc cạn lòng chỉ thấy những cơn mưa.",

"Thương nhau thế nhưng chỉ là *đã từng*\nVài lần hờ hững bỗng thành người dưng.",

"Thế gian cỏ lạ nhiều vô kể\nCớ sao nhớ mãi một nhành hoa?",

"Em đi bỏ lại con đường\nBờ xa cỏ dại vô thường nhớ em.",

"Ta về giữ lại mùi hương\nĐường không xứ sở còn vương bóng hình.",

"Chuyện mười năm biết có thành dĩ vãng\nCũng như ta chưa chắc đã quên người.",

"Ta mang cả tình yêu chân thật nhất\nTrao cho người để đổi một niềm đau.",

"Cô ấy nói rằng đã đến lúc\n để em đi. Nhưng sao lại đi.\n Vì em còn việc phải làm. Tôi\n sẽ để cô ấy , dù biết không\n bao giờ cả hai về gặp lại\n nhau nữa...",

"Cuộc sống khôngtình yêu\nNhư vườn hồng không ánh nắng.",

"Trái tim còn chút lửa hồng\nCũng xin ơn cảm mênh mông tặng người.",

"Tôi đi tìm cái nửa của tôi\nSao tìm mãi đến giờ không thấy.",

"Tìm em tìm hết cuộc đời\nMà sao em cứ để tôi mãi tìm.",

"Thà là độc thân sáng giá\nCòn hơn tin vào những lời dối trá khi yêu.",

"Nắng không về nữa, thế là mưa bay\nTớ không chờ nữa, thế là buông tay.",

"Muốn xin một chút thật tình\nẤy mà đổi lại chỉ toàn lặng thinh.",

"Em thấy gì khi buổi chiều lạc lõng\nĐôi vai gầy không cõng hết cô đơn.",

"Mười ngón tay không ôm nổi muộn phiền\nEm đừng buồn, em đáng được bình yên.",

"Hạnh phúc nào cũng chan hòa mật đắng\nCố tìm quên mà gợi nhớ suốt đời.",

"Hồn em là hoa cỏ may\nMột chiều cả gió bám đầy áo anh.",

"Một mình thẫn thẫn thờ thờ\nMột mình ngẩn ngẩn ngơ ngơ nhớ nàng.",

"Nhẹ nhàng áo mỏng bay theo gió\nPhủ sóng hồn anh nỗi nhớ nhung.",

"Biển cứ cậy mình dài rộng thế\nVắng cánh buồm một chút đã cô đơn.",

"Mượn tiếng cười che giấu những niềm đau\nĐêm gối mộng ai sầu ai nhỏ lệ.",

"Việc dốc cạn tâm can để yêu\n thương một ai đó không yêu\n mình, ngay từ đầu đã là một\n việc làm ngu ngốc.",

"Đừng nghĩ quá nhiều, có những chuyện, những người, những việc, vốn dĩ nó đã phải là như thế.",

"Dù có muốn cũng không thay đổi được.🌿",

"Rồi sau cùng, tình yêu của\n chúng tôi cũng đến ngày hết\n hạn. Giống như đóa hoa hải\n đường, hôm ấy tôi mua...",
`- Anh hút thuốc lại à ?
 
- Một chút.

- Hồi đó anh bỏ thuốc rồi mà ?

- Uh, vì hồi đó có em...`
    ];
    
  
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, event.threadID,event.messageID);
};