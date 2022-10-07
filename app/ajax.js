$(document).ready(function(){
    $.getJSON("data.json", function (data){
        let data_v = '';
        $.each(data, function (key, value){
            data_v += '<div class="nav__bottom_point ">';
            data_v += '<div class="nav_circle '+value.class+'">';
            data_v += '</div>';
            data_v += '<div class="nav__bottom_point_text">'+value.text+'</div>';
            data_v += '</div>';
        });
        $('#nav__bottom_points_wrap').append(data_v);
    });
});
