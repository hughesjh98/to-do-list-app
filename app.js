
// function newItem() {
//     let li = document.createElement('li');
//     let inputValue = document.getElementById('input').value;
//     let text = document.createTextNode(inputValue);
//     li.appendChild(text);

//     if(inputValue === ''){
//         alert('you gotta put something!!')
//     } else {
//         let list = document.querySelector('#list');
//         list.appendChild(li);
//     }

//     function crossOut() {
//         li.classList.toggle('strike');
//     }

//     li.addEventListener('dblclick', crossOut);

//     let crossOutButton =
//     document.createElement('crossOutButton');
//     crossOutButton.appendChild(document.createTextNode('X'));
//     li.appendChild(crossOutButton)

//     crossOutButton.addEventListener('click', deleteListItem);

//     function deleteListItem() {
//         li.classList.add('delete')
//     }

//     $('#list').sortable();

// }


function newItem () {

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if(inputValue === '') {
    alert('insert message to add to the list');
} else {
    $('#list').append(li);

}

li.on('dblclick', function crossOut(){
    li.toggleClass('strike');
});

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
function deleteListItem() {
    li.addClass('delete');
}

$('#list').sortable();

}
