/* Загрузка аватара */
    const addAvatar = document.getElementById('add_avatar');
    const userAvatar = document.getElementById('user_avatar_add');
    const avatar = userAvatar.querySelector('.avatar');

    addAvatar.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                avatar.setAttribute("src", this.result);
            });
            reader.readAsDataURL(file);
        } else {
            avatar.setAttribute("src", "");
        }
    });

    $('.back_call').click(function () {
        $('.call__form').addClass('call__form_open');
        $('.call__form_bg').addClass('call__form_open');
        $('body').addClass('hidd');
    });
    $('.form__close, .btn__form').click(function () {
        $('.call__form').removeClass('call__form_open');
        $('.call__form_bg').removeClass('call__form_open');
        $('body').removeClass('hidd');
    });


/* Скрипт блоков формы */

    $(document).ready(function () {
        document.getElementById('block2').style.display = 'none';
        $('#link1').click(function () {
            document.getElementById('block2').style.display = 'none';
            document.getElementById('block1').style.display = 'block';
            $('#link1').addClass('form__link_active');
            $('#link2').removeClass('form__link_active');
        });
        $('#link2').click(function () {
            document.getElementById('block1').style.display = 'none';
            document.getElementById('block2').style.display = 'block';
            $('#link1').removeClass('form__link_active');
            $('#link2').addClass('form__link_active');
        });
    });


/* Настройки слайдера */

    $('.main__block_slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


/* Скрипт бурегера */
    
    $('.burger__menu').click(function () {
        $('.header__block-right').toggleClass("show");
        $('.burger__menu').toggleClass('open_menu');
        $('body').toggleClass('hidd');
    });