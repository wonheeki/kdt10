$(window).ready(function () {
    let userId = localStorage.getItem('userName');
    if (localStorage.getItem('loggedIn') == 'true') {
        $('.user-name').append(`<span onclick="toggleBtn();">${userId}님 <span class="change-toggle-btn">▾</span></span>`);
        $('.nav-user-name').append(`<span onclick="navToggleBtn();">${userId}님 <span class="nav-change-toggle-btn">▾</span></span>`);
    }
    checkLoggedIn();
    // checkScreenWidth();
    
    // 창 크기 변경 이벤트에 대한 리스너 추가
    $(window).resize(function () {
        // checkScreenWidth(); // 창 크기 변경 시 호출
        checkLoggedIn();
    });

    $(".menuBtn").click(function () {
    $(".cha-nav").toggleClass("nav-expanded");
});
})


const checkLoggedIn =() =>{
    if (localStorage.getItem('loggedIn') == 'true') {
        if(window.innerWidth <= 1023){
            $('.loginBtn').css('display', 'none');
            $('.user-profile').css('display', 'none');
            $('.nav-loginBtn').css('display','none');
            $('.nav-user-profile').css('display','inline');
            $('.logoutBtn').css('display', 'none');
        }else{
            $('.loginBtn').css('display', 'none');
            $('.user-profile').css('display', 'block');
            $('.nav-loginBtn').css('display','none');
            $('.nav-user-profile').css('display','none');
            $('.nav-logoutBtn').css('display', 'none');
        }
    } else {
        if(window.innerWidth <= 1023){
            $('.loginBtn').css('display', 'none');
            $('.user-profile').css('display', 'none');
            $('.nav-loginBtn').css('display','block');
            $('.nav-user-profile').css('display','none');
        }else{
            $('.nav-logoutBtn').css('display', 'none');
            $('.loginBtn').css('display', 'block');
            $('.nav-loginBtn').css('display','none');
            $('.user-profile').css('display', 'none');
            $('.nav-user-profile').css('display','none');
        }

    }
}

const logout = () => {
    // localStorage.removeItem('키') : 해당 기값을 가지고 있는 데이터를 로컬 스토리지에서 삭제
    if(window.innerWidth <= 1023){
        localStorage.removeItem('loggedIn')
        $('.nav-user-name-span').removeClass('nav-span-profile');
        $('.nav-user-profile').css('display', 'none');
        $('.nav-logoutBtn').css('display', 'none');
        $('.nav-loginBtn').css('display', 'block');
        alert('로그아웃 되었습니다.')

    }else{
        localStorage.removeItem('loggedIn')
        $('.user-name-span').removeClass('span-profile');
        $('.user-profile').css('display', 'none');
        $('.logoutBtn').css('display', 'none');
        $('.loginBtn').css('display', 'block');
        alert('로그아웃 되었습니다.')
        
    }
}

function toggleBtn() {
    let btn = $('.change-toggle-btn').text();
    if (btn == '▾') {
        $('.change-toggle-btn').text('▴');
        $('.user-name-span').addClass('span-profile');
        $('.logoutBtn').css('display', 'block');
        // <div class="user-name-span"><div class="logoutBtn">로그아웃</div></div>
        // span 태그 밑으로 박스 생기게 할거야

    } else {
        $('.change-toggle-btn').text('▾');
        $('.user-name-span').removeClass('span-profile');
        $('.logoutBtn').css('display', 'none');
    }
    console.log(btn);
}
function navToggleBtn() {
    let btn = $('.nav-change-toggle-btn').text();
    if (btn == '▾') {
        $('.nav-change-toggle-btn').text('▴');
        $('.nav-user-name-span').addClass('nav-span-profile');
        $('.nav-logoutBtn').css('display', 'block');
        // <div class="user-name-span"><div class="logoutBtn">로그아웃</div></div>
        // span 태그 밑으로 박스 생기게 할거야

    } else {
        $('.nav-change-toggle-btn').text('▾');
        $('.nav-user-name-span').removeClass('nav-span-profile');
        $('.nav-logoutBtn').css('display', 'none');
    }
    console.log(btn);
}
