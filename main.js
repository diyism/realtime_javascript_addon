function $$(selector) {
  return document.querySelectorAll(selector);
}

//$$('ytd-rich-section-renderer')[0].style.display = 'none';

let channelNames = ['马大哈动画', '神戳戳的苏神', '游戏解说艾登', '原野郎中', '哇哇哇游戏解说', '哇鸽鸽又来了', '校园小子',
       '在下大沙雕', '暴走三金_', '猫小八动画', '芦苇草的梦想'
      ];
function updateChannelNames() {
  fetch('https://raw.githubusercontent.com/diyism/realtime_javascript_addon/main/filter.json')
    .then(response => {
      // 确保服务器响应成功
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // 假设JSON数据的格式是一个数组
      channelNames = data;
      console.log('Channel names updated:', channelNames);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
// 立即调用一次函数来初始化数组
updateChannelNames();
// 使用setInterval每2分钟调用一次updateChannelNames函数
setInterval(updateChannelNames, 120000);

function removeCertainChannels() {
$$('ytd-channel-name >* >* a').forEach(function(this_a_element) {
  if (channelNames.includes(this_a_element.innerText)) {
    console.log('removed');
    //this_a_element.closest('ytd-rich-item-renderer').style.display = 'none';
    this_a_element.closest('ytd-rich-item-renderer').remove();
  }
});
}
setInterval(removeCertainChannels, 5000);
