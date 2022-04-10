const categorys = document.querySelectorAll(".category");
const titles = document.querySelectorAll(".title");
const one = titles[0].offsetTop-200;
const two = titles[1].offsetTop-150;
const three = titles[2].offsetTop-150;
const four = titles[3].offsetTop-150;

categorys[0].onclick = function(){
  window.scroll({top:one, behavior: 'smooth'})
}
categorys[1].onclick = function(){
  window.scroll({top:two, behavior: 'smooth'})
}
categorys[2].onclick = function(){
  window.scroll({top:three, behavior: 'smooth'})
}
categorys[3].onclick = function(){
  window.scroll({top:four, behavior: 'smooth'})
}





