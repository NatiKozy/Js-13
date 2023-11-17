const button = document.querySelector('#button');

const checkName = (str) => {
    const noName = document.querySelector('#no');
    if(noName.checked) {
        rightName = 'username';
        return rightName;
    } else {
        const rightName = ((str[0]).toUpperCase() + (str.slice(1)).toLowerCase()).replace(/\s/g, "");
        return rightName;}
}

const checkSpam = (str) => {
    const rightComment = str.replace(/viagra|xxx/ig, "***");
    return rightComment;
}

const chatDiv = document.querySelector('#chat');

const showName = (name) => {
    const p = document.createElement('p');
    p.textContent = name;
    chatDiv.append(p);
}

const showAvatar = (avatar) => {
    const img = document.createElement('img');
    img.src = setAvatar(avatar);
    chatDiv.append(img);
}

const showText = (comment) => {
    const text = document.createElement('p');
    text.textContent = comment;
    chatDiv.append(text);
}

const showDate = () => {
    const date = document.createElement('p');
    date.textContent = new Date();
    chatDiv.append(date);
}

const setAvatar = (avatar) => {
    const defaultAvatar = [
    "./assets/images/ava1.jpg",
    "./assets/images/ava2.jpg",
    "./assets/images/ava3.jpg",
    "./assets/images/ava4.jpg",
    "./assets/images/ava5.jpg",
    "./assets/images/ava6.png",
    "./assets/images/ava7.jpg",
    "./assets/images/ava8.jpg",
    "./assets/images/ava9.png",
    "./assets/images/ava10.jpg"
];
    if (avatar === ""){
       return defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
    } else {
        return avatar;
    }
}

button.addEventListener('click', () => {
    const rightName = checkName(document.querySelector('#name').value);
    document.querySelector('#name').value = ' ';

    const avatarValue = document.querySelector('#avatar').value;

    const rightComment = checkSpam(document.querySelector('#comment').value);
    document.querySelector('#comment').value = ' ';

    showName(rightName);
    showAvatar(avatarValue);
    showText(rightComment);
    showDate();
});
