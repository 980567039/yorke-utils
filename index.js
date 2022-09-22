const getCookieName = (cookie_name) => {
    const allcookies = document.cookie;
    // 索引长度，开始索引的位置
    let cookiePos = allcookies.indexOf(cookie_name);
    let value = {};
  
    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookiePos !== -1) {
      // 把cookie_pos放在值的开始，只要给值加1即可
      // 计算取cookie值得开始索引，加的1为“=”
      cookiePos = cookiePos + cookie_name.length + 1;
      // 计算取cookie值得结束索引
      let cookieEnd = allcookies.indexOf(";", cookiePos);
  
      if (cookieEnd === -1) {
        cookieEnd = allcookies.length;
      }
      // 得到想要的cookie的值
      value = unescape(allcookies.substring(cookiePos, cookieEnd));
    }
    return value;
  };
  
  export default getCookieName;
  