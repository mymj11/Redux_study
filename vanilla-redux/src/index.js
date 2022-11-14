//redux에서 create store를 import하자.
//store은 유저의 data를 넣는 곳. 유저의 state
//state는 유저의 applicaton에서 바뀌는 data
//리덕스에는 createStore이라는 function이 있다.
//리덕스는 유저의 data를 관리하는데 도와주는 역할을 하기 위해 만들어졌다.
import {legacy_createStore} from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//카운터 만들기
//data가 바뀌는 곳. count가 유일하게 바뀌는 코드. 우리가 가지고 있는 유일한 data
let count = 0;

//innerText는 한 번만 일어난다.
number.innerText = count;

//handleAdd 혹은 minus를 클릭할 때마다 함수를 만들어야 한다.
//html에게 count를 업데이트 하라고 알려주기.
const updateText = () => {
  number.innerText = count;
};

//count를 modify하기 위한 코드들.
//changing count //단, 값이 업데이트되진 않는다.
//updateText() 함수를 가져와서 현재 카운터와 함께 text를 repaint하자.
const handleAdd = () => {
  count = count + 1;
  updateText();
  //html에게 뭔가가 바뀌었다고 알려주기 위해 함수를 쓰는 것.
};
const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);