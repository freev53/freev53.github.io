let link = {
  'Naver': 'https://www.naver.com/',
  'pro1': 'pro1',
  'pro2': 'pro2',
  'pro3': 'pro3',
  'pro4': 'pro4',
  'pro5': 'pro5',
  'pro6': 'pro6',
  'pro7': 'pro7',
  'pro8': 'pro8',
  'pro9': 'pro9',
}


function linkList() {
  let linkEl = document.getElementById('linkEl');
  for(let [k, v] of Object.entries(link)) {
    let newDiv = document.createElement('a');
    newDiv.href = v;
    console.log(newDiv);
    // newDiv.text = document.createTextNode(k)
    newDiv.text = k;
    linkEl.appendChild(newDiv);
    linkEl.appendChild(document.createElement('br'));
  }
  
  // return link
}

linkList();