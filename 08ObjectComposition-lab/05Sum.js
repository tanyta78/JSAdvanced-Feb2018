function getModel(params) {
    let num1, num2, result;

    function init(num1Sel, num2Sel, resultSel) {
        num1 = $(num1Sel);
        num2 = $(num2Sel);
        result = $(resultSel);
    }

    function add() {
        result.val(Number(num1.val()) + Number(num2.val()));
    }

    function subtract() {
        result.val(Number(num1.val()) - Number(num2.val()));
    }


    return {
        init,
        add,
        subtract
    }
}