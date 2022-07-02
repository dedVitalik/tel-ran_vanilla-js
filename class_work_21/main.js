const userAddFormElem = document.querySelector('#user_add_form');
const formClearBtnElem = userAddFormElem.querySelector('button + button');
const usersContainer = document.querySelector('.user-container');

const users = [];

const clearElement = (elemToClear) => {
    elemToClear.innerHTML = '';
}

const renderUserCard = (firstname, lastname, avatar) => {
    const userElem = document.createElement('div');
    const userPic = document.createElement('img');
    const userFirstName = document.createElement('p');
    const userLastName = document.createElement('p');

    userElem.classList.add('card');

    userPic.setAttribute('src', avatar);
    userFirstName.innerText = firstname;
    userLastName.innerText = lastname;

    userElem.append(userPic, userFirstName, userLastName);

    userElem.addEventListener('dblclick', evt => {

    })



    return userElem;
}

const renderUsers = () => {
    clearElement(usersContainer);
    usersContainer.append(...users.map(({firstname, lastname, avatar}) => renderUserCard(firstname, lastname, avatar)));
}

userAddFormElem.addEventListener('submit', evt => {
    evt.preventDefault();
    const {firstname, lastname, avatar} = evt.target;
    users.push({firstname: firstname.value, lastname: lastname.value, avatar: avatar.value});
    renderUsers();
})

// not ready
formClearBtnElem.addEventListener('click', evt => {
    evt.preventDefault();
    console.log(userAddFormElem.firstname.value)
})