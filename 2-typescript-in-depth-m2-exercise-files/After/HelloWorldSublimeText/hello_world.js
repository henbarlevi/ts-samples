var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
})();
var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
console.log('Hello Sublime');
