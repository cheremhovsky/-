$( document ).ready(function() {
    //Кнопки для "Номера"
    $('.arrowUp').click(function () {
        $('.arrowDown').css("border-top", "#ed9915 solid 7px")
        let value = $('#room').val();
        value++;
        if($('#room').attr("max") >= value)
        {
            $('#room').val(value)
        }
        $('#room').attr("max") > value ? $('.arrowUp').css("border-bottom", "#ed9915 solid 7px") : $('.arrowUp').css("border-bottom", "grey solid 7px");
    })

    $('.arrowDown').click(function () {
        $('.arrowUp').css("border-bottom", "#ed9915 solid 7px")
        let value = $('#room').val();
        value--;
        if($('#room').attr("min") <= value)
        {
            $('#room').val(value)
        }
        $('#room').attr("min") < value ? $('.arrowDown').css("border-top", "#ed9915 solid 7px") : $('.arrowDown').css("border-top", "grey solid 7px");
    })
    // Кнопки для "Взрослые"
    $('.arrowUpAdults').click(function () {
        $('.arrowDownAdults').css("border-top", "#ed9915 solid 7px")
        let value = $('#adults').val();
        value++;
        if($('#adults').attr("max") >= value)
        {
            $('#adults').val(value)
        }
        $('#adults').attr("max") > value ? $('.arrowUpAdults').css("border-bottom", "#ed9915 solid 7px") : $('.arrowUpAdults').css("border-bottom", "grey solid 7px");
    })

    $('.arrowDownAdults').click(function () {
        $('.arrowUpAdults').css("border-bottom", "#ed9915 solid 7px")
        let value = $('#adults').val();
        value--;
        if($('#adults').attr("min") <= value)
        {
            $('#adults').val(value)
        }
        $('#adults').attr("min") < value ? $('.arrowDownAdults').css("border-top", "#ed9915 solid 7px") : $('.arrowDownAdults').css("border-top", "grey solid 7px");
    })
    // Кнопки для "Дети"
    $('.arrowUpChildren').click(function () {
        $('.arrowDownChildren').css("border-top", "#ed9915 solid 7px")
        let value = $('#children').val();
        value++;
        if($('#children').attr("max") >= value)
        {
            $('#children').val(value)
        }
        $('#children').attr("max") > value ? $('.arrowUpChildren').css("border-bottom", "#ed9915 solid 7px") : $('.arrowUpChildren').css("border-bottom", "grey solid 7px");
    })

    $('.arrowDownChildren').click(function () {
        $('.arrowUpChildren').css("border-bottom", "#ed9915 solid 7px")
        let value = $('#children').val();
        value--;
        if($('#children').attr("min") <= value)
        {
            $('#children').val(value)
        }
        $('#children').attr("min") < value ? $('.arrowDownChildren').css("border-top", "#ed9915 solid 7px") : $('.arrowDownChildren').css("border-top", "grey solid 7px");
    })
});

