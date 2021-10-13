// get elements
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');

// add eventlistener in button 
btn.addEventListener('click', () => {
   if (input.value == '') {
      alert('input text'); // alert for empty input field
   } else {
      let localItem = JSON.parse(localStorage.getItem('listItem'));
      if (localItem === null) {
         item = [];
      } else {
         item = localItem;
      }
      item.push(input.value);

      localStorage.setItem('listItem', JSON.stringify(item));
   }
   input.value = '';
   showItem();
});


// show list item on browser
function showItem() {
   let localItem = JSON.parse(localStorage.getItem('listItem'))
   if (localItem === null) {
      item = []

   } else {
      item = localItem;
   }
   let html = '';
   item.forEach((data, index) => {
      html += `
      <div class="item">
    <li>${data}</li>
    <button onclick="deleteItem(${index})" > delete </button>
    </div>
    ` // create new element
   })
   ul.innerHTML = html;
}
showItem()



function deleteItem(index) {

   let localItem = JSON.parse(localStorage.getItem('listItem'))

   item.splice(index, 1)
   localStorage.setItem('listItem', JSON.stringify(item));
   showItem()
}