// 1. 출력값과 출력되는 값의 이유를 설명해주세요
var name = "yuno";

function myName() {
    var name = "yuno2";
    function a() {
        console.log(name);
    }
    return a();
}

myName();
//yuno2가 출력됩니다.
// 호출된 시점이 myName()함수 안에서 이므로,
// 먼저 자신이 속한 스코프의 name을 참조하게 됩니다.

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
    var x = 1;

    if (true) {
        var x = 2;
    }

    console.log(x);
}

test();
//2가 출력됩니다.
// test함수 내부에서 먼저 x가 1로 할당됩니다.
// if(true)이므로 항상 x = 2로 재할당됩니다.
// 그리고 x를 출력하는데 이때 재할당 된 값을 출력하게 됩니다.

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj = {
    name: "yuno",
    method: function () {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    },
};

nameObj.method();
//화살표함수: yuno , 일반함수 : undefined가 출력됩니다.
// 일반적으로 객체의 메소드에서 화살표함수로, 일반함수로 선언되었을 때는
// 각각 this를 global(window), this를 메소드를 담고있는 객체로 바인딩되지만,
// 메소드의 함수에서 다시 화살표와 일반함수로 선언할 때에는 반대로 바인딩 됩니다.
// 따라서 화살표함수인 arrow는 this를 nameObj로 바인딩하고,
// 일반함수인 normal은 this를 전역객체로 바인딩합니다.
