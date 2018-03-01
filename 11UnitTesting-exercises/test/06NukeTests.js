let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="target">
<div class="nested target">
    <p>This is some text</p>
</div>
<div class="target">
    <p>Empty div</p>
</div>
<div class="inside">
    <span class="nested">Some more text</span>
    <span class="target">Some more text</span>
</div>
</div>
`;

describe('argamedom unit tests', function () {
    let targetHtml;
    beforeEach(function () {
        document.body.innerHTML = `<div id="target">
        <div class="nested target">
            <p>This is some text</p>
        </div>
        <div class="target">
            <p>Empty div</p>
        </div>
        <div class="inside">
            <span class="nested">Some more text</span>
            <span class="target">Some more text</span>
        </div>
        </div>
        `;
        targetHtml=$('#target');
    });

    it('with valid and with invalid selector',function () {
        let selector1=$('.inside');
        let selector2=2;
        let oldHtml=targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml,'Html has changed');
    });
    it('with two equal selector',function () {
        let selector1=$('.nested');
        let oldHtml=targetHtml.html();
        nuke(selector1,selector1);
        expect(targetHtml.html()).to.be.equal(oldHtml,'Html has changed');
    });
    it('with two valid selectors',function () {
        let selector1=$('.nested');
        let selector2=$('.target');
        let oldHtml=targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.not.equal(oldHtml,'Html did not changed');
    });

    it('with two valid selectors (should not remove anyting)',function () {
        let selector1=$('.nested');
        let selector2=$('.inside');
        let oldHtml=targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml,'Html has changed');
    });
});
