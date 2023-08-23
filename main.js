let message=document.querySelector('#text');
let add_1=document.querySelector('.client_1_send')
let add_2=document.querySelector('.client_2_send')
let list=document.querySelector('.chat');
let itemContent=document.querySelectorAll('ul.chat>p.text');

let data = JSON.parse(localStorage.getItem('textData')) ? JSON.parse(localStorage.getItem('textData')) : []
document.addEventListener('keydown', () => {
    message.focus()
  })

  function addData() {
    localStorage.setItem('textData', JSON.stringify(data))
  }
  let index=0;

  function showData(){
    message.value='';
    list.innerHTML='';
    data.forEach((item,id)=>{
      const li = document.createElement('li'); // Create a new <li> element
        li.innerHTML+=
        `<li>
        <p class="text">${item}</p>
        <div class="btns">
            <a href="#" class="edit" onclick="editData(${id})"><i class="fa-solid fa-pencil"></i></a>
            <hr>
            <a href="#" class="delete" onclick="deleteData(${id})"><i class="fa-solid fa-trash-can"></i></a>
        </div>
    </li>`
    list.appendChild(li); // Append the <li> element to the <ul>
    itemContent=document.querySelectorAll('ul.chat>p.text');
    });
  }


  function add(id){
    if(message.value!=''){
      // const liElements = document.querySelectorAll('ul.chat>li');
      // const li = liElements[id];
      // li.classList.add('client_2');
      data.push(message.value);
      addData();
      showData();
  }
  }
  add_1.addEventListener('click',add)
  add_2.addEventListener('click',add)


  function editData(id){
    index=id;
    message.value=data[id];
    let update_btn=document.querySelector('.update');
    update_btn.classList.add('active')
    add_1.disabled=true;
    add_2.disabled=true;
  }
  function update(id){
    data[index]=message.value;
    addData()
    showData()
    add_1.disabled=false;
    add_2.disabled=false;
  }

  function deleteData(id) {
    data.splice(id, 1)
    addData()
    showData()
  }
  
  showData()
  

  function toggleMode(){
    let chat=document.querySelector('.chat');
    chat.classList.toggle('light');
    let inputArea=document.querySelector('.textarea');
    inputArea.classList.toggle('light');
    let input=document.querySelector('input');
    input.classList.add('light')
  }
