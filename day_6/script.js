function hero() {
    console.log("I am hero function");
}
function main(a) {
    console.log("This is main function.");
    
    console.log(a());
    a()
}
main(hero)