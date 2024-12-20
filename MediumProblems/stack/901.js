// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]

var StockSpanner = function () {
    this.arr = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    span = 1;
    let p = [];
    p.push(price);
    while (this.arr.length > 0 && this.arr[this.arr.length - 1][0] <= price) {
        span += this.arr.pop()[1];
    }
    p.push(span);
    this.arr.push(p);
    return span;

};