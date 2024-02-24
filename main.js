function $$(selector) {
  return document.querySelectorAll(selector);
}

//$$('ytd-rich-section-renderer')[0].style.display = 'none';

function hideCertainChannels() {
$$('ytd-channel-name >* >* a').forEach(function(this_a_element) {
  if (['马大哈动画', '神戳戳的苏神', '游戏解说艾登', '原野郎中', '哇哇哇游戏解说', '哇鸽鸽又来了', '校园小子',
       '在下大沙雕', '暴走三金_', '猫小八动画', '芦苇草的梦想'
      ].includes(this_a_element.innerText)) {
    console.log('removed');
    //this_a_element.closest('ytd-rich-item-renderer').style.display = 'none';
    this_a_element.closest('ytd-rich-item-renderer').remove();
  }
});
}

setInterval(hideCertainChannels, 5000);
