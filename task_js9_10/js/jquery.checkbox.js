$(function() {
    $(".newCheck").each(function() {
        changeCheckboxes($(this));
    });
});

function changeCheck(element){
    var input = element.find("input").eq(0);

    if (element.attr("class").indexOf("newCheckDisabled") == -1) {
        if(!input.attr("checked")) {
            element.addClass("newChecked");
            input.attr("checked", true);
        } else {
            element.removeClass("newChecked");
            input.attr("checked", false).focus();
        }
    }

    return true;
}

function changeDisplayCheck(input){
    var wrapInput = input.parent();

    if(input.attr("checked")) {
        wrapInput.addClass("newChecked");
    } else {
        wrapInput.removeClass("newChecked");
    }
}

function changeCheckboxes(element){
    try {
        var checkName = element.attr("name");
        var checkId = element.attr("id");
        var checkChecked = element.attr("checked");
        var checkDisabled = element.attr("disabled");
        var checkValue = element.attr("value")
        var checkTab = element.attr("tabindex");
        var rulesClass = '';
        var rulesChange = '';

        if (checkChecked) {
            rulesClass = "newChecked";
            rulesChange = "checked='" + checkChecked + "'";
        }

        element.after(
            "<span class='newCheck " + rulesClass + "'>" +
            "<input type='checkbox'" +
            "name='" + checkName+"'" +
            "id='" + checkId + "'" + rulesChange +
            "value='" + checkValue + "'" +
            "tabindex='" + checkTab + "' /></span>");

        if(checkDisabled) {
            element.next().addClass("newCheckDisabled");
            element.next().find("input").eq(0).attr("disabled","disabled");
        }

        element.next().bind("mousedown", function(e) {
            changeCheck($(this))
        });

        element.next().find("input").eq(0).bind("change", function(e) {
            changeDisplayCheck($(this))
        });

        if($.browser.msie) {
            element.next().find("input").eq(0).bind("click", function(e) {
                changeDisplayCheck($(this))
            });
        }

        element.remove();

    } catch(e) {}

    return true;
}

