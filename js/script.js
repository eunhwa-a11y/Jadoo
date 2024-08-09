let pagers = document.querySelectorAll('.testimonials .pager a');
let testimonialsLists = document.querySelectorAll('.testimonials_list li')
let paginationUp = document.querySelector('pagination .up');
let paginationDoun = document.querySelector('pagination .down');


/*
pagers를 클릭하면 할일
  모든 a에서 active를 제거하고, 클릭한 그 요소에 active 추가
*/

pagers.forEach((item, idx) => {
  item.addEventListener('click', (e) =>{
    e.preventDefault();

    for(let pager of pagers){
      pager.classList.remove('active');
    };
    item.classList.add('active');
  });
});