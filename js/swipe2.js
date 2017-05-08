


var p = 1,
    b = 1;
$(document).one('pagebeforecreate', function () {
    $.mobile.pageContainer.find("[data-role=page]").each(function () {
        var panel = '<div data-role="panel" id="ming_jing_panel' + p + '" data-position="right" data-display="push"><h1>Panel</h1><p>stuff</p></div>';
        $(this).prepend(panel);
        p++;
    });
    $.mobile.pageContainer.find("[data-role=header]").each(function () {
        var panelBtn = '<a href="#ming_jing_panel' + b + '" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-grid ui-corner-all"></a>'
        $(this).append(panelBtn);
        b++;
    });
})
