const x = 'x';

function c() {
    const y = 'y';
    console.log('c');
}

function a() {
    const x = 'x';
    consolelog('a');
    function b() {
        const z = 'z';
        console.log('b');
        c();
    }

    b();
}

a();
c();