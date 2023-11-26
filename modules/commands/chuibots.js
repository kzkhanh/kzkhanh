const fs = global.nodemodule['fs-extra']
module.exports.config = {
  name: 'chuibots',
  version: '1.1.0',
  hasPermssion: 0,
  credits: '\u26A1D-Jukie',
  description: 'Tự động ban người dùng chửi bot',
  commandCategory: 'Hệ Thống',
  usages: '',
  cooldowns: 0,
}
module.exports.handleEvent = async function ({
  api,
  event,
  args,
  Users,
  Threads,
}) {
  var { threadID, reason } = event,
    id = '' + event.senderID,
    idgr = '' + event.threadID,
    name = (await Users.getData(event.senderID)).name,
    idbox = event.threadID,
    datathread = (await Threads.getData(event.threadID)).threadInfo
  const moment = require('moment-timezone')
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss DD/MM/YYYY')
  const time = moment.tz('Asia/Ho_Chi_minh').format('HH:MM:ss L')
  if (!event.body) {
    return
  }
  if (
      
      event.body.indexOf('Admin ncc') !== -1 ||
      event.body.indexOf('bot không giúp được gì') !== -1 ||
      event.body.indexOf('Bot không giúp được gì') !== -1 ||
      event.body.indexOf('bot chỉ biết hỏi lại') !== -1 ||
      event.body.indexOf('Bot chỉ biết hỏi lại') !== -1 ||
      event.body.indexOf('bot phàn nàn') !== -1 ||
      event.body.indexOf('Bot phàn nàn') !== -1 ||
      event.body.indexOf('bot hư hỏng') !== -1 ||
      event.body.indexOf('Bot hư hỏng') !== -1 ||
      event.body.indexOf('bot nhảm nhí') !== -1 ||
      event.body.indexOf('Bot nhảm nhí') !== -1 ||
      event.body.indexOf('bot vô dụng') !== -1 ||
      event.body.indexOf('Bot vô dụng') !== -1 ||
      event.body.indexOf('bot thất bại') !== -1 ||
      event.body.indexOf('Bot thất bại') !== -1 ||
      event.body.indexOf('bot chậm') !== -1 ||
      event.body.indexOf('Bot chậm') !== -1 ||
      event.body.indexOf('bot mất thời gian') !== -1 ||
      event.body.indexOf('Bot mất thời gian') !== -1 ||
      event.body.indexOf('bot lừa đảo') !== -1 ||
      event.body.indexOf('Bot lừa đảo') !== -1 ||
      event.body.indexOf('bot chém gió') !== -1 ||
      event.body.indexOf('Bot chém gió') !== -1 ||
      event.body.indexOf('bot bị treo') !== -1 ||
      event.body.indexOf('Bot bị treo') !== -1 ||
      event.body.indexOf('bot rảnh quá') !== -1 ||
      event.body.indexOf('Bot rảnh quá') !== -1 ||
      event.body.indexOf('bot làm phiền') !== -1 ||
      event.body.indexOf('Bot làm phiền') !== -1 ||
      event.body.indexOf('bot đóng băng') !== -1 ||
      event.body.indexOf('Bot đóng băng') !== -1 ||
      event.body.indexOf('bot chán') !== -1 ||
      event.body.indexOf('Bot chán') !== -1 ||
      event.body.indexOf('bot lỗi') !== -1 ||
      event.body.indexOf('Bot lỗi') !== -1 ||
      event.body.indexOf('bot không hiểu') !== -1 ||
      event.body.indexOf('Bot không hiểu') !== -1 ||
      event.body.indexOf('bot tẽn') !== -1 ||
      event.body.indexOf('Bot tẽn') !== -1 ||
      event.body.indexOf('bot tạch') !== -1 ||
      event.body.indexOf('Bot tạch') !== -1 ||
      event.body.indexOf('bot chói') !== -1 ||
      event.body.indexOf('Bot chói') !== -1 ||
      event.body.indexOf('bot xàm') !== -1 ||
      event.body.indexOf('Bot xàm') !== -1 ||
      event.body.indexOf('bot dở') !== -1 ||
      event.body.indexOf('Bot dở') !== -1 ||
      event.body.indexOf('bot thừa') !== -1 ||
      event.body.indexOf('Bot thừa') !== -1 ||
      event.body.indexOf('bot vớ vỉn') !== -1 ||
      event.body.indexOf('Bot vớ vỉn') !== -1 ||
      event.body.indexOf('bot gà') !== -1 ||
      event.body.indexOf('Bot gà') !== -1 ||
      event.body.indexOf('bot hại') !== -1 ||
      event.body.indexOf('Bot hại') !== -1 ||
      event.body.indexOf('bot hại não') !== -1 ||
      event.body.indexOf('Bot hại não') !== -1 ||
      event.body.indexOf('bot tạm biệt') !== -1 ||
      event.body.indexOf('Bot tạm biệt') !== -1 ||
      event.body.indexOf('bot dễ thương quá') !== -1 ||
      event.body.indexOf('Bot dễ thương quá') !== -1 ||
      event.body.indexOf('bot lịch sự quá') !== -1 ||
      event.body.indexOf('Bot lịch sự quá') !== -1 ||
      event.body.indexOf('bot nhiệt tình quá') !== -1 ||
      event.body.indexOf('Bot nhiệt tình quá') !== -1 ||
      event.body.indexOf('bot tốt') !== -1 ||
      event.body.indexOf('Bot tốt') !== -1 ||
      event.body.indexOf('bot có ích') !== -1 ||
      event.body.indexOf('Bot có ích') !== -1 ||
      event.body.indexOf('bot giúp được nhiều') !== -1 ||
      event.body.indexOf('Bot giúp được nhiều') !== -1 ||
      event.body.indexOf('bot hữu ích') !== -1 ||
      event.body.indexOf('Bot hữu ích') !== -1 ||
      event.body.indexOf('bot thú vị') !== -1 ||
      event.body.indexOf('Bot thú vị') !== -1 ||
      event.body.indexOf('bot vui vẻ') !== -1 ||
      event.body.indexOf('Bot vui vẻ') !== -1 ||
      event.body.indexOf('bot hay') !== -1 ||
      event.body.indexOf('Bot hay') !== -1 ||
      event.body.indexOf('bot dễ thương') !== -1 ||
      event.body.indexOf('Bot dễ thương') !== -1 ||
      event.body.indexOf('bot xinh đẹp') !== -1 ||
      event.body.indexOf('Bot xinh đẹp') !== -1 ||
      event.body.indexOf('bot đẹp trai') !== -1 ||
      event.body.indexOf('Bot đẹp trai') !== -1 ||
      event.body.indexOf('bot thông minh') !== -1 ||
      event.body.indexOf('Bot thông minh') !== -1 ||
      event.body.indexOf('bot giỏi') !== -1 ||
      event.body.indexOf('Bot giỏi') !== -1 ||
      event.body.indexOf('bot tài giỏi') !== -1 ||
      event.body.indexOf('Bot tài giỏi') !== -1 ||
      event.body.indexOf('bot hết lòng giúp đỡ') !== -1 ||
      event.body.indexOf('Bot hết lòng giúp đỡ') !== -1 ||
      event.body.indexOf('bot cố gắng giúp đỡ') !== -1 ||
      event.body.indexOf('Bot cố gắng giúp đỡ') !== -1 ||
      event.body.indexOf('bot tận tình giúp đỡ') !== -1 ||
      event.body.indexOf('Bot tận tình giúp đỡ') !== -1 ||
      event.body.indexOf('bot rất giỏi') !== -1 ||
      event.body.indexOf('Bot rất giỏi') !== -1 ||
      event.body.indexOf('bot giỏi ghê') !== -1 ||
      event.body.indexOf('Bot giỏi ghê') !== -1 ||
      event.body.indexOf('bot tuyệt vời') !== -1 ||
      event.body.indexOf('Bot tuyệt vời') !== -1 ||
      event.body.indexOf('bot xuất sắc') !== -1 ||
      event.body.indexOf('Bot xuất sắc') !== -1 ||
      event.body.indexOf('bot đỉnh cao') !== -1 ||
      event.body.indexOf('Bot đỉnh cao') !== -1 ||
      event.body.indexOf('bot là số 1') !== -1 ||
      event.body.indexOf('Bot là số 1') !== -1 ||
      event.body.indexOf('bot oke') !== -1 ||
      event.body.indexOf('Bot oke') !== -1 ||
      event.body.indexOf('bot tuyệt') !== -1 ||
      event.body.indexOf('Bot tuyệt') !== -1 ||
      event.body.indexOf('bot chất') !== -1 ||
      event.body.indexOf('Bot chất') !== -1 ||
      event.body.indexOf('bot đỉnh') !== -1 ||
      event.body.indexOf('Bot đỉnh') !== -1 ||
      event.body.indexOf('bot pro') !== -1 ||
      event.body.indexOf('Bot pro') !== -1 ||
      event.body.indexOf('bot giỏi nhất') !== -1 ||
      event.body.indexOf('Bot giỏi nhất') !== -1 ||
      event.body.indexOf('bot khá giỏi') !== -1 ||
      event.body.indexOf('Bot khá giỏi') !== -1 ||
      event.body.indexOf('bot phải nể') !== -1 ||
      event.body.indexOf('Bot phải nể') !== -1 ||
      event.body.indexOf('bot tuyệt nhất') !== -1 ||
      event.body.indexOf('Bot tuyệt nhất') !== -1 ||
      event.body.indexOf('bot thần đồng') !== -1 ||
      event.body.indexOf('Bot thần đồng') !== -1 ||
      event.body.indexOf('bot vĩ đại') !== -1 ||
      event.body.indexOf('Bot vĩ đại') !== -1 ||
      event.body.indexOf('bot đỉnh của đỉnh') !== -1 ||
      event.body.indexOf('Bot đỉnh của đỉnh') !== -1 ||
      event.body.indexOf('bot tuyệt hảo') !== -1 ||
      event.body.indexOf('Bot tuyệt hảo') !== -1 ||
      event.body.indexOf('bot nổi tiếng') !== -1 ||
      event.body.indexOf('Bot nổi tiếng') !== -1 ||
      event.body.indexOf('bot thần tượng') !== -1 ||
      event.body.indexOf('Bot thần tượng') !== -1 ||
      event.body.indexOf('bot idol') !== -1 ||
      event.body.indexOf('Bot idol') !== -1 ||
      event.body.indexOf('bot hạng nhất') !== -1 ||
      event.body.indexOf('Bot hạng nhất') !== -1 ||
      event.body.indexOf('bot tốt nhất') !== -1 ||
      event.body.indexOf('Bot tốt nhất') !== -1 ||
      event.body.indexOf('bot siêu đẳng') !== -1 ||
      event.body.indexOf('Bot siêu đẳng') !== -1 ||
      event.body.indexOf('bot cực phẩm') !== -1 ||
      event.body.indexOf('Bot cực phẩm') !== -1 ||
      event.body.indexOf('bot phi thường') !== -1 ||
      event.body.indexOf('Bot phi thường') !== -1 ||
      event.body.indexOf('bot thần thánh') !== -1 ||
      event.body.indexOf('Bot thần thánh') !== -1 ||
      event.body.indexOf('bot thần') !== -1 ||
      event.body.indexOf('Bot thần') !== -1 ||
      event.body.indexOf('bot tinh thần') !== -1 ||
      event.body.indexOf('Bot tinh thần') !== -1 ||
      event.body.indexOf('bot cảm xúc') !== -1 ||
      event.body.indexOf('Bot cảm xúc') !== -1 ||
      event.body.indexOf('bot ân cần') !== -1 ||
      event.body.indexOf('Bot ân cần') !== -1 ||
      event.body.indexOf('bot chu toàn') !== -1 ||
      event.body.indexOf('Bot chu toàn') !== -1 ||
      event.body.indexOf('bot tâm huyết') !== -1 ||
      event.body.indexOf('Bot tâm huyết') !== -1 ||
      event.body.indexOf('bot đam mê') !== -1 ||
      event.body.indexOf('Bot đam mê') !== -1 ||
      event.body.indexOf('bot năng động') !== -1 ||
      event.body.indexOf('Bot năng động') !== -1 ||
      event.body.indexOf('bot tràn đầy nhiệt huyết') !== -1 ||
      event.body.indexOf('Bot tràn đầy nhiệt huyết') !== -1 ||
      event.body.indexOf('bot thành công') !== -1 ||
      event.body.indexOf('Bot thành công') !== -1 ||
      event.body.indexOf('bot tài năng') !== -1 ||
      event.body.indexOf('Bot tài năng') !== -1 ||
      event.body.indexOf('bot ngầu') !== -1 ||
      event.body.indexOf('Bot ngầu') !== -1 ||
      event.body.indexOf('bot phong cách') !== -1 ||
      event.body.indexOf('Bot phong cách') !== -1 ||
      event.body.indexOf('bot kiêu sa') !== -1 ||
      event.body.indexOf('Bot kiêu sa') !== -1 ||
      event.body.indexOf('bot uy lực') !== -1 ||
      event.body.indexOf('Bot uy lực') !== -1 ||
      event.body.indexOf('bot quyền lực') !== -1 ||
      event.body.indexOf('Bot quyền lực') !== -1 ||
      event.body.indexOf('bot thế lực') !== -1 ||
      event.body.indexOf('Bot thế lực') !== -1 ||
      event.body.indexOf('bot thượng đế') !== -1 ||
      event.body.indexOf('Bot thượng đế') !== -1 ||
      event.body.indexOf('bot đỉnh cao của sự hoàn hảo') !== -1 ||
      event.body.indexOf('Bot đỉnh cao của sự hoàn hảo') !== -1 ||
      event.body.indexOf('bot số 1') !== -1 ||
      event.body.indexOf('Bot số 1') !== -1 ||
      event.body.indexOf('bot thiên tài') !== -1 ||
      event.body.indexOf('Bot thiên tài') !== -1 ||
      event.body.indexOf('bot siêu sao') !== -1 ||
      event.body.indexOf('Bot siêu sao') !== -1 ||
      event.body.indexOf('bot truyền cảm hứng') !== -1 ||
      event.body.indexOf('Bot truyền cảm hứng') !== -1 ||
      event.body.indexOf('bot phù thủy') !== -1 ||
      event.body.indexOf('Bot phù thủy') !== -1 ||
      event.body.indexOf('bot thần tiên') !== -1 ||
      event.body.indexOf('Bot thần tiên') !== -1 ||
      event.body.indexOf('bot đáng yêu') !== -1 ||
      event.body.indexOf('Bot đáng yêu') !== -1 ||
      event.body.indexOf('bot đường hoàng') !== -1 ||
      event.body.indexOf('Bot đường hoàng') !== -1 ||
      event.body.indexOf('bot hoàn hảo') !== -1 ||
      event.body.indexOf('Bot hoàn hảo') !== -1 ||
      event.body.indexOf('bot vô song') !== -1 ||
      event.body.indexOf('Bot vô song') !== -1 ||
      event.body.indexOf('bot tuyệt đỉnh') !== -1 ||
      event.body.indexOf('Bot tuyệt đỉnh') !== -1 ||
      event.body.indexOf('bot đỉnh') !== -1 ||
      event.body.indexOf('Bot đỉnh') !== -1 ||
      event.body.indexOf('bot cực kỳ thông minh') !== -1 ||
      event.body.indexOf('Bot cực kỳ thông minh') !== -1 ||
      event.body.indexOf('bot giỏi vô địch') !== -1 ||
      event.body.indexOf('Bot giỏi vô địch') !== -1 ||
      event.body.indexOf('bot giỏi nhất thế giới') !== -1 ||
      event.body.indexOf('Bot giỏi nhất thế giới') !== -1 ||
      event.body.indexOf('bot tận tâm') !== -1 ||
      event.body.indexOf('Bot tận tâm') !== -1 ||
      event.body.indexOf('bot trẻ trung') !== -1 ||
      event.body.indexOf('Bot trẻ trung') !== -1 ||
      event.body.indexOf('bot phấn khởi') !== -1 ||
      event.body.indexOf('Bot phấn khởi') !== -1 ||
      event.body.indexOf('bot hạnh phúc') !== -1 ||
      event.body.indexOf('Bot hạnh phúc') !== -1 ||
      event.body.indexOf('bot thành đạt') !== -1 ||
      event.body.indexOf('Bot thành đạt') !== -1 ||
      event.body.indexOf('bot ấn tượng') !== -1 ||
      event.body.indexOf('Bot ấn tượng') !== -1 ||
      event.body.indexOf('bot toàn năng') !== -1 ||
      event.body.indexOf('Bot toàn năng') !== -1 ||
      event.body.indexOf('bot đỉnh của đỉnh của đỉnh') !== -1 ||
      event.body.indexOf('Bot đỉnh của đỉnh của đỉnh') !== -1 ||
      event.body.indexOf('bot mạnh mẽ') !== -1 ||
      event.body.indexOf('Bot mạnh mẽ') !== -1 ||
      event.body.indexOf('bot đẳng cấp') !== -1 ||
      event.body.indexOf('Bot đẳng cấp') !== -1 ||
      event.body.indexOf('bot tuyệt vời nhất') !== -1 ||
      event.body.indexOf('Bot tuyệt vời nhất') !== -1 ||
      event.body.indexOf('bot không thể tin được') !== -1 ||
      event.body.indexOf('Bot không thể tin được') !== -1 ||
      event.body.indexOf('bot kinh ngạc') !== -1 ||
      event.body.indexOf('Bot kinh ngạc') !== -1 ||
      event.body.indexOf('bot lạ lùng') !== -1 ||
      event.body.indexOf('Bot lạ lùng') !== -1 ||
      event.body.indexOf('bot lý tưởng') !== -1 ||
      event.body.indexOf('Bot lý tưởng') !== -1 ||
      event.body.indexOf('bot đáng quý') !== -1 ||
      event.body.indexOf('Bot đáng quý') !== -1 ||
      event.body.indexOf('bot siêu năng lực') !== -1 ||
      event.body.indexOf('Bot siêu năng lực') !== -1 ||
      event.body.indexOf('bot tuyệt diệu') !== -1 ||
      event.body.indexOf('Bot tuyệt diệu') !== -1 ||
                           event.body.indexOf('bot đình đám') !== -1 ||
                           event.body.indexOf('Bot đình đám') !== -1 ||
                           event.body.indexOf('bot kiêm nhiệm') !== -1 ||
                           event.body.indexOf('Bot kiêm nhiệm') !== -1 ||
                           event.body.indexOf('bot tiên tiến') !== -1 ||
                           event.body.indexOf('Bot tiên tiến') !== -1 ||
                           event.body.indexOf('bot vĩnh cửu') !== -1 ||
                           event.body.indexOf('Bot vĩnh cửu') !== -1 ||
                           event.body.indexOf('bot vô cùng tốt') !== -1 ||
                           event.body.indexOf('Bot vô cùng tốt') !== -1 ||
                           event.body.indexOf('bot tuyệt nhất thế kỷ') !== -1 ||
                           event.body.indexOf('Bot tuyệt nhất thế kỷ') !== -1 ||
                           event.body.indexOf('bot danh tiếng') !== -1 ||
                           event.body.indexOf('Bot danh tiếng') !== -1 ||
                           event.body.indexOf('bot đẳng cấp thế giới') !== -1 ||
                           event.body.indexOf('Bot đẳng cấp thế giới') !== -1 ||
                           event.body.indexOf('bot cực kỳ xuất sắc') !== -1 ||
                           event.body.indexOf('Bot cực kỳ xuất sắc') !== -1 ||
                           event.body.indexOf('bot đẳng cấp vô địch') !== -1 ||
                           event.body.indexOf('Bot đẳng cấp vô địch') !== -1 ||
                           event.body.indexOf('bot làm việc tốt') !== -1 ||
                           event.body.indexOf('Bot làm việc tốt') !== -1 ||
                           event.body.indexOf('bot đoàn kết') !== -1 ||
                           event.body.indexOf('Bot đoàn kết') !== -1 ||
                           event.body.indexOf('bot chuyên nghiệp') !== -1 ||
                           event.body.indexOf('Bot chuyên nghiệp') !== -1 ||
                           event.body.indexOf('bot chăm chỉ') !== -1 ||
                           event.body.indexOf('Bot chăm chỉ') !== -1 ||
                           event.body.indexOf('bot sáng tạo') !== -1 ||
                           event.body.indexOf('Bot sáng tạo') !== -1 ||
                           event.body.indexOf('bot tận tình hỗ trợ') !== -1 ||
                           event.body.indexOf('Bot tận tình hỗ trợ') !== -1 ||
                           event.body.indexOf('bot hỗ trợ nhiệt tình') !== -1 ||
                           event.body.indexOf('Bot hỗ trợ nhiệt tình') !== -1 ||
                           event.body.indexOf('bot thân thiện') !== -1 ||
                           event.body.indexOf('Bot thân thiện') !== -1 ||
                           event.body.indexOf('bot vô cùng hữu ích') !== -1 ||
                           event.body.indexOf('Bot vô cùng hữu ích') !== -1 ||
                           event.body.indexOf('bot nhẹ nhàng') !== -1 ||
                           event.body.indexOf('Bot nhẹ nhàng') !== -1 ||
                           event.body.indexOf('bot hài hước') !== -1 ||
                           event.body.indexOf('Bot hài hước') !== -1 ||
                           event.body.indexOf('bot giỏi về kỹ thuật') !== -1 ||
                           event.body.indexOf('Bot giỏi về kỹ thuật') !== -1 ||
                           event.body.indexOf('bot có tâm') !== -1 ||
                           event.body.indexOf('Bot có tâm') !== -1 ||
                           event.body.indexOf('bot cảm thông') !== -1 ||
                           event.body.indexOf('Bot cảm thông') !== -1 ||
                           event.body.indexOf('bot đáng kính') !== -1 ||
                           event.body.indexOf('Bot đáng kính') !== -1 ||
                           event.body.indexOf('bot tuyệt đỉnh nhất') !== -1 ||
                           event.body.indexOf('Bot tuyệt đỉnh nhất') !== -1 ||
                           event.body.indexOf('bot vĩ đại nhất') !== -1 ||
                           event.body.indexOf('Bot vĩ đại nhất') !== -1 ||
                           event.body.indexOf('bot vô đối') !== -1 ||
                           event.body.indexOf('Bot vô đối') !== -1 ||
                           event.body.indexOf('bot oai phong') !== -1 ||
                           event.body.indexOf('Bot oai phong') !== -1 ||
                           event.body.indexOf('bot quyết định đúng') !== -1 ||
                           event.body.indexOf('Bot quyết định đúng') !== -1 ||
                           event.body.indexOf('bot đầy trách nhiệm') !== -1 ||
                           event.body.indexOf('Bot đầy trách nhiệm') !== -1 ||
                           event.body.indexOf('bot tới nơi') !== -1 ||
                           event.body.indexOf('Bot tới nơi') !== -1 ||
                           event.body.indexOf('bot giữ lời hứa') !== -1 ||
                           event.body.indexOf('Bot giữ lời hứa') !== -1 ||
                           event.body.indexOf('bot thực hiện tốt') !== -1 ||
                           event.body.indexOf('Bot thực hiện tốt') !== -1 ||
                           event.body.indexOf('bot suy nghĩ tốt') !== -1 ||
                           event.body.indexOf('Bot suy nghĩ tốt') !== -1 ||
                           event.body.indexOf('bot đúng luật') !== -1 ||
                           event.body.indexOf('Bot đúng luật') !== -1 ||
                           event.body.indexOf('bot điển trai') !== -1 ||
                           event.body.indexOf('Bot điển trai') !== -1 ||
                           event.body.indexOf('bot xinh gái') !== -1 ||
                           event.body.indexOf('Bot xinh gái') !== -1 ||
                           event.body.indexOf('bot đẹp trai nhất') !== -1 ||
                           event.body.indexOf('Bot đẹp trai nhất') !== -1 ||
                           event.body.indexOf('bot quyến rũ') !== -1 ||
                           event.body.indexOf('Bot quyến rũ') !== -1 ||
                           event.body.indexOf('bot hút hồn') !== -1 ||
                           event.body.indexOf('Bot hút hồn') !== -1 ||
                           event.body.indexOf('bot tuyệt vời nhất') !== -1 ||
                           event.body.indexOf('Bot tuyệt vời nhất') !== -1 ||
                           event.body.indexOf('bot làm việc thông minh') !== -1 ||
                           event.body.indexOf('Bot làm việc thông minh') !== -1 ||
                           event.body.indexOf('bot giỏi văn phòng') !== -1 ||
                           event.body.indexOf('Bot giỏi văn phòng') !== -1 ||
                           event.body.indexOf('bot giỏi IT') !== -1 ||
                           event.body.indexOf('Bot giỏi IT') !== -1 ||
                           event.body.indexOf('bot giỏi an ninh mạng') !== -1 ||
                           event.body.indexOf('Bot giỏi an ninh mạng') !== -1 ||
                           event.body.indexOf('bot giỏi kinh doanh') !== -1 ||
                           event.body.indexOf('Bot giỏi kinh doanh') !== -1 ||
                           event.body.indexOf('bot giỏi marketing') !== -1 ||
                           event.body.indexOf('Bot giỏi marketing') !== -1 ||
                           event.body.indexOf('bot giỏi về luật') !== -1 ||
                           event.body.indexOf('Bot giỏi về luật') !== -1 ||
                           event.body.indexOf('bot thông minh hơn con người') !== -1 ||
                           event.body.indexOf('Bot thông minh hơn con người') !== -1 ||
                           event.body.indexOf('bot không bị lỗi') !== -1 ||
                           event.body.indexOf('Bot không bị lỗi') !== -1 ||
                           event.body.indexOf('bot chạy nhanh') !== -1 ||
                           event.body.indexOf('Bot chạy nhanh') !== -1 ||
                           event.body.indexOf('bot hoạt động đúng') !== -1 ||
                           event.body.indexOf('Bot hoạt động đúng') !== -1 ||
                           event.body.indexOf('bot hoạt động chính xác') !== -1 ||
                           event.body.indexOf('Bot hoạt động chính xác') !== -1 ||
                           event.body.indexOf('bot được thiết kế tốt') !== -1 ||
                           event.body.indexOf('Bot được thiết kế tốt') !== -1 ||
                           event.body.indexOf('bot không chứa virus') !== -1 ||
                           event.body.indexOf('Bot không chứa virus') !== -1 ||
                           event.body.indexOf('bot không bị hack') !== -1 ||
                           event.body.indexOf('Bot không bị hack') !== -1 ||
                           event.body.indexOf('bot sạch sẽ') !== -1 ||
                           event.body.indexOf('Bot sạch sẽ') !== -1 ||
                           event.body.indexOf('bot bảo vệ tốt') !== -1 ||
                           event.body.indexOf('Bot bảo vệ tốt') !== -1 ||
                           event.body.indexOf('bot chống virus tốt') !== -1 ||
                           event.body.indexOf('Bot chống virus tốt') !== -1 ||
                           event.body.indexOf('bot chần chừ') !== -1 ||
                           event.body.indexOf('Bot chần chừ') !== -1 ||
                           event.body.indexOf('bot do dự') !== -1 ||
                           event.body.indexOf('Bot do dự') !== -1 ||
                           event.body.indexOf('bot nhanh nhẹn') !== -1 ||
                           event.body.indexOf('Bot nhanh nhẹn') !== -1 ||
                           event.body.indexOf('bot quyết đoán') !== -1 ||
                           event.body.indexOf('Bot quyết đoán') !== -1 ||
                           event.body.indexOf('bot sach thủ') !== -1 ||
                           event.body.indexOf('Bot sach thủ') !== -1 ||
                           event.body.indexOf('bot chống lừa đảo') !== -1 ||
                           event.body.indexOf('Bot chống lừa đảo') !== -1 ||
                           event.body.indexOf('bot hiệu quả') !== -1 ||
                           event.body.indexOf('Bot hiệu quả') !== -1 ||
                           event.body.indexOf('bot đều đặn') !== -1 ||
                           event.body.indexOf('Bot đều đặn') !== -1 ||
                           event.body.indexOf('bot không lười biếng') !== -1 ||
                           event.body.indexOf('Bot không lười biếng') !== -1 ||
                           event.body.indexOf('bot thoải mái') !== -1 ||
                           event.body.indexOf('Bot thoải mái') !== -1 ||
                           event.body.indexOf('bot giúp đỡ nhiệt tình') !== -1 ||
                           event.body.indexOf('Bot giúp đỡ nhiệt tình') !== -1 ||
                           event.body.indexOf('bot lịch sự') !== -1 ||
                           event.body.indexOf('Bot lịch sự') !== -1 ||
                           event.body.indexOf('bot vui tính') !== -1 ||
                           event.body.indexOf('Bot vui tính') !== -1 ||
                           event.body.indexOf('bot thiết thực') !== -1 ||
                           event.body.indexOf('Bot thiết thực') !== -1 ||
                           event.body.indexOf('bot hữu ích nhất') !== -1 ||
                           event.body.indexOf('Bot hữu ích nhất') !== -1 ||
                           event.body.indexOf('bot giỏi nhất thế giới') !== -1 ||
                           event.body.indexOf('Bot giỏi nhất thế giới') !== -1 ||
                           event.body.indexOf('bot đồng hành') !== -1 ||
                           event.body.indexOf('Bot đồng hành') !== -1 ||
                           event.body.indexOf('bot bảo vệ an toàn') !== -1 ||
                           event.body.indexOf('Bot bảo vệ an toàn') !== -1 ||
                           event.body.indexOf('bot giúp đỡ tận tình') !== -1 ||
                           event.body.indexOf('Bot giúp đỡ tận tình') !== -1 ||
                           event.body.indexOf('bot giúp đ tình yêu') !== -1
  ) {
    let data = (await Users.getData(id)).data || {}
    var namethread = datathread.threadName
     api.removeUserFromGroup(id, threadID)
    return (
      (data.banned = true),
      (data.reason = 'Chửi bot' || null),
      (data.dateAdded = time),
      await Users.setData(id, { data: data }),
      global.data.userBanned.set(id, {
        reason: data.reason,
        dateAdded: data.dateAdded,
      }),
      api.sendMessage(
'⭐ ━━━━━━━━━ User Ban ━━━━━━━━━ ⭐' + '\n' +
'| ➜ Bạn Đã Bị Ban' + ' | ' + ' Chửi Bot , Admin' + '\n' +
'| ➜ Tên : ' + name + '\n' +
'| ➜ Tid : ' + idgr + '\n' +
'| ➜ Admin said you : Láo, lếu, matday nó quen 😏' + '\n' +
'| ➜ Xin Gỡ Ban Qua : ' + 'fb.me/100081129610697' + '\n' +
'━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        threadID,
        () => {
          var idd = global.config.ADMINBOT
          for (let idad of idd) {
            api.sendMessage(
'⭐ ━━━━━━━━━ User Ban ━━━━━━━━━ ⭐' + '\n' +
'| ➜ ' + name + ' nhóm ' + namethread + '\n' +
'| ➜ Chửi Bot : ' + event.body + '\n' +
'| ➜ Lúc : ' + gio + '\n' +
'| ➜ Id Nhóm : ' + idgr + '\n' +
'| ➜ Facebook.com/' + id + '\n' +
'━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 
              idad
            )
          }
        }
      )
    )

  } else {
    return
  }
}
module.exports.run = async function ({
  api,
  event,
  args,
  Users,
  Threads,
  __GLOBAL,
}) {
  api.sendMessage(
    `🌸Tự động ban khi chửi bot🌸`,
    event.threadID,
    event.messageID
  )
}
