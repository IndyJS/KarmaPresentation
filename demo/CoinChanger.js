var CoinChanger = function() {
    this.makeChange = function(amount) {
        var change = [];
        
        while (amount > 0) {
            change.push(1);
            amount--;
        }
        
        return change;
    };
};
