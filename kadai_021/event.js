const clickBtn = document.getElementById("btn");

clickBtn.addEventListener("click",()=>{
  setTimeout(() =>{
  const textChange = document.getElementById("text");
  textChange.textContent = "ボタンをクリックしました。";
  },2000);
});



