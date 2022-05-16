document.addEventListener('DOMContentLoaded', function(){
    showDesc(1);
    document.querySelector("#text1").addEventListener('click', () => showDesc(1));
    document.querySelector("#text2").addEventListener('click', () => showDesc(2));
    document.querySelector("#text3").addEventListener('click', () => showDesc(3));
})

function showDesc(id){
    const desc1 = document.querySelector("#desc1");
    const desc2 = document.querySelector("#desc2");
    const desc3 = document.querySelector("#desc3");

    desc1.innerHTML='';
    desc2.innerHTML = '';
    desc3.innerHTML = '';

    desc1.hidden=true;
    desc2.hidden=true;
    desc3.hidden=true;

    const numberDiv1 = document.querySelector(`#number1`);
    const numberDiv2 = document.querySelector(`#number2`);
    const numberDiv3 = document.querySelector(`#number3`);

    numberDiv1.className = 'number';
    numberDiv2.className = 'number';
    numberDiv3.className = 'number';

    if (id === 1){
        const desc = `2019년까지 그림을 그리고 글을 썼습니다.<br/>
        나에게, 그리고 우리에게 중요한 문제가 무엇인지에 대해 고민했습니다.
        `
        desc1.insertAdjacentHTML("beforeend",desc);
        desc1.hidden = false;
        numberDiv1.classList.add('open');
    }

    if (id === 2){
        const desc = `2019년부터 2022년까지 약 3년간 유아교육 앱을 만드는 스타트업에서 근무하며<br/>
        문제를 해결하는 방식에 대해 고민했습니다.`
        desc2.insertAdjacentHTML("beforeend",desc);
        desc2.hidden = false;
        numberDiv2.classList.add('open');
    }

    if (id ===3){
        const desc = `그림을 그리고 디자인을 하며 저는 문제를 해결할 때
        가장 보람을 느낀다는 것을 알게 되었습니다.<br/> 
        앞으로 개발을 통해 더 많은 문제를 재미있게 해결해보고 싶습니다.`
        desc3.insertAdjacentHTML("beforeend",desc);
        desc3.hidden = false;
        numberDiv3.classList.add('open');
    }
}