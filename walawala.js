
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('what your name lah');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎来到苹果殿下的宫殿，' + myName;
  }
}


if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你又回来了啊，' + storedName;
}


myButton.onclick = function() {
  setUserName();
};



let myVariable = document.querySelector('h1');

document.querySelector('body3').addEventListener('click', () => {
  alert('摸我干嘛？色鬼');
});

document.querySelector('body2').addEventListener('click', () => {
  alert('嘻嘻，错误了哦');
});