// 1. <빈칸>을 작성해주세요
const obj1 = {
    value: 20,
    getValue() {
        console.log(this.value);
    },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 = {
    method: function () {
        console.log("첫번째 this : ", this);

        const innerMethod = () => {
            setTimeout(function () {
                console.log("두번째 this : ", this);
            });
        };
        innerMethod();
    },
};

obj2.method();

//첫번째 this는 메소드의 일반함수에서의 this이므로, obj2를 this로 바인딩하지만
//두번째 this는 메소드의 일반함수에서 선언한 화살표함수 내부의 setTimeout의 콜백함수에서의 this입니다.
// 일반적으로 setTimeout에서의 this는 전역객체를 가리키지만, setTimeout의 콜백함수에서의 this는 setTimeout을 바인딩합니다.
// 따라서 timeout을 출력합니다.
