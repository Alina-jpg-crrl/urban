const userName=document.getElementById('username');
const saveName=document.getElementById('savename');
const savedNames=document.getElementById('savedname');

function loadname() {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        savedNames.textContent=savedName;
    }
}

function save() {
    const user=userName.value.trim();
    if (user) {
       localStorage.setItem('name', user);
       savedNames.textContent=user;
       userName.value=''; 
    }
}

saveName.addEventListener('click', save);
loadname();