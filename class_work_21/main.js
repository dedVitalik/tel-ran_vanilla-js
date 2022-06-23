const userAddFormElem = document.querySelector('#user_add_form');
const addFormClearBtnElem = userAddFormElem.querySelector('button + button');
console.log(addFormClearBtnElem);



const users = [];

userAddFormElem.addEventListener('submit', evt => {
    evt.preventDefault();
    const {firstname, lastname, avatar} = evt.target;
    users.push({firstname: firstname.value, lastname: lastname.value, avatar: avatar.value});
    console.log(users);
})

console.log(users);
