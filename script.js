document.addEventListener('DOMContentLoaded', function(){
    // 공통으로 햄버거 아이콘 로드 
    document.querySelector(".hamburger").addEventListener('click', () => hamburger());
    
    // about 페이지인 경우 
    if (document.querySelector('.about')){
        showDesc(3);
        document.querySelector("#text1").addEventListener('click', () => showDesc(1));
        document.querySelector("#text2").addEventListener('click', () => showDesc(2));
        document.querySelector("#text3").addEventListener('click', () => showDesc(3));
        document.querySelector(".random-btn").addEventListener('click', () => randomTMI());
    }

    // work 페이지인 경우 
    if (document.querySelector('.works')){
        const card = document.querySelector('.work');
        let cardIndex = Number(card.id.slice(-1));
        document.querySelector('.fa-angle-left').addEventListener('click', () => carousel('left'));
        document.querySelector('.fa-angle-right').addEventListener('click', () => carousel('right'));
    }
})

function hamburger(){
    // 햄버거 메뉴 열고 닫기 토글
    const navbar = document.querySelector('.navbar');
    const navitemList = document.getElementsByClassName('navitem');
    
    navbar.classList.toggle('ham-open');
    Array.from(navitemList).forEach(function(element){
        element.classList.toggle('hamitem');
    })
}

function showDesc(id){
    // about 화면 상세 문구 열기
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

    //  1, 2, 3번 모두 리셋 (open 클래스 없게)
    numberDiv1.className = 'number';
    numberDiv2.className = 'number';
    numberDiv3.className = 'number';
    
    if (id === 1){
        const desc = `2019년까지 그림을 그리고 글을 썼습니다.<br/>
        나에게, 그리고 우리에게 중요한 문제가 무엇인지에 대해 고민했습니다.
        `
        desc1.insertAdjacentHTML("beforeend",desc);
        desc1.hidden = false;
        // 1번만 open 클래스 붙임
        numberDiv1.classList.toggle('open');
    }

    if (id === 2){
        const desc = `2019년부터 2022년까지 약 3년간 유아교육 앱을 만드는 스타트업에서 근무하며<br/>
        문제를 해결하는 방식에 대해 고민했습니다.`
        desc2.insertAdjacentHTML("beforeend",desc);
        desc2.hidden = false;
        // 2번만 open 클래스 붙임
        numberDiv2.classList.toggle('open');
    }

    if (id ===3){
        const desc = `여러가지 일을 해보니 구체적인 문제를 해결할 수 있을 때
        가장 재미있었습니다.<br/> 
        앞으로 개발을 통해 더 많은 문제를 재미있게 해결해보고 싶습니다.`
        desc3.insertAdjacentHTML("beforeend",desc);
        desc3.hidden = false;
        // 3번만 open 클래스 붙임
        numberDiv3.classList.toggle('open');
    }
}

function randomTMI(){
    // about 화면 random tmi 생성기
    const contents = document.querySelector('.random-contents');
    contents.innerHTML = '';

    let tmi;
    const randomNum = Math.floor(Math.random() * 5);
    switch (randomNum){
        case 0:
            tmi= '산책하다 새를 발견하는 것을 좋아한다.'
            break;
        case 1:
            tmi = '주짓수 도장에 다니고 있다.'
            break;
        case 2:
            tmi = '빵을 아주 아주 좋아한다.'
            break;
        case 3:
            tmi = '어린이 연극에 오이로 출연한 적이 있다.'
            break;
        case 4:
            tmi = '선릉에서 너구리를 본 적 있다.'
            break;
        case 5:
            tmi ='미드 브루클린 나인나인을 지나치게 많이 본다.'
            break;
    }

    contents.innerHTML = tmi;
}

function carousel(arrow){
// works 페이지 화살표 클릭 하는 경우
    const card = document.querySelector('.work');
    let cardIndex = Number(card.id.slice(-1));
    card.hidden = true;
    const cardsLength = 3;

    const left = document.querySelector('.fa-angle-left');
    const right = document.querySelector('.fa-angle-right');

    if (arrow === 'right'){
        if (cardIndex === cardsLength){
            right.classList.add('gray');
        } else {
            left.classList.remove('gray');
            document.querySelector(`#work${cardIndex + 1}`).hidden = false;
        }
    }
    if (arrow == 'left'){
        if (cardIndex === 1){
            left.classList.add('gray');
        } else {
            right.classList.remove('gray');
            document.querySelector(`#work${cardIndex - 1}`).hidden = false;
        }
    }
}