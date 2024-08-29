const clickBtn = document.getElementById("btn")

clickBtn.addEventListener("click",() =>{
  const textChange = document.getElementById("text");
  textChange.textContent = "ボタンをクリックしました";
});