const counterLoop = (t) => {
  setInterval(()=>{
      t = t-1
      if(t > 0){
        chrome.browserAction.setBadgeText({ text: ''+t+'' }); 
      }
  },1000)
}
(myFunction = () => {
  let pages = [
    'https://www.fiverr.com/devroma?up_rollout=true', 
    'https://www.fiverr.com/users/devroma/requests'
    'https://www.fiverr.com/users/devroma/seller_dashboard', 
    'https://www.fiverr.com/users/devroma/manage_gigs', 
    'https://www.fiverr.com/users/devroma/requests'
  ]
  let min = 150,
    max = 260,
    minPage=0,
    maxPage=4;
  let time = Math.floor(Math.random() * (max - min + 1) + min);
  let page = Math.floor(Math.random() * (maxPage - minPage + 1) + minPage);
  chrome.tabs.update({url:pages[page]});
  counterLoop(time)
  setTimeout(myFunction, time * 1000);
}
)()
