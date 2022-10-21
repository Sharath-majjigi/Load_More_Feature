let data = [{
    title: 'Iphone-1',
  },
  {
    title: 'Iphone-2',
  },
  {
    title: 'Iphone-3',
  },
  {
    title: 'Iphone-12',
  }
];


function loadInfiniteData() {
  let template = document.getElementById('template');
  data.forEach(function(item) {

    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = template.innerHTML.replace('{{title}}', item.title);

    document.getElementById('items').appendChild(div);
  });
}
