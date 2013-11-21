module("CoinChanger");

test("makeChange When Given 0 Returns Expected Coins", function() {
    var coinChanger = new CoinChanger();
    var result = coinChanger.makeChange(0);

    deepEqual(result, []);
});

test("makeChange When given 1 Returns Expected Coins", function() {
    var coinChanger = new CoinChanger();
    var result = coinChanger.makeChange(1);
    deepEqual(result, [1]);
});

test("makeChange When given 4 Returns expected coins", function() {
    var coinChanger = new CoinChanger();
    var result = coinChanger.makeChange(4);
    deepEqual(result, [1, 1, 1, 1]);
});

var testCase = function(amount, expectedResult) {
    test("makeChange " + amount + " returns expected coins", function() {
        var coinChanger = new CoinChanger();
        var result = coinChanger.makeChange(amount);
        deepEqual(result, expectedResult);
    });
};

testCase(1, [1]);
testCase(2, [1, 1]);
testCase(3, [1, 1, 1]);
testCase(4, [1, 1, 1, 7]);