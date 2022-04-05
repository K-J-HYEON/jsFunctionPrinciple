const resultss = await Promise.all([p1, p2, p3])

results.map(async() => {
    await result조작(); // 동시라는건 없지만 bg에서 동시에 일어나는 것처럼을 생각하고
    // p1, p2, p3 조작 동시에
}, []);

for (let result of results) {
    await result조작(); // p1 끝난 후 p2 끝난 후 p3
}

let array = [];
for (let result of results) {
    array.push(result조작());
}
await Promise.all(array); // 동시

function delayP(ms) {

    // 동기
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};


// 쉣
async function a() {
    await delayP(3000); // 3초
    await delayP(6000); // 6초
    await delayP(9000); // 9초 // 합 18초
}

async function b() {
    // 동기 부분
    const p1 = delayP(3000); // 3초
    const p2 = delayP(3000); // 6초
    await Promise.all([p1, p2]); // 6초
    await delayP(9000); // 9초
} // 토탈 15초

new Promise((resolve, reject) => {
    const p1 = delayP(3000); // 3초
    const p2 = delayP(6000); // 6초
    return Promise.all([p1, p2]);
})

    .then(() => {
        return delayP(9000);
    })
    .then(() => {

    });




async function c() {
    const a = await 1;
    const b = await 2;
    return a + b;
}


(function() {
    let a;
    let b;
    Promise.resolve(1)
        .then((result) => {
            a = result;
            return 2;
        })
        .then((b) => {
            b = result;
            return a + b; // 시적 허용
        });
})();


// async function createPost() {
//     const post = await db.getPost(); // 게시물 조회
//     if (post) {
//         res.status(403).send('이미 게시글이 존재합니다.');
//     } else {
//         await db.createPost(); // 게시글 작성
//         const p1 = db.userIncrementPostCount(); // 사용자의 게시글 카운트 1 올림
//         const p2 = db.createNoti(); // 새로운 게시글 알림 등록
//         await Promise.allSettled([p1, p2]);
//     }
// }

// axios.get().then(() => {
//
// });


// 한번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// Promise란, 실행은 바로 하되, 결괏값을 나중에 원할 때 쓸 수 있는 것
// 실행은 바로 ---> 결괏값이 나올 때는 나중 -> 결괏값을 사용할 때는 더 나중
// 실행은 바로 ---> 결괏값도 거의 바로 쓰고싶은데 ---> 그 다음에 결괏값이 나오면 ---> then, await, Promise.all 이런게 결괏값을 기다린 후에 실행된다.
// promise, process.nextTick -> micro, 나머지는 매크로에 들어감