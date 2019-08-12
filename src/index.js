// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById('root'));


// LET
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   console.log(i);
// }
// sayHello();

// CONST
// const x =1;
// x = 2;

// OBJECT
const person = {
  nama: 'Dimas',
  // tinggi: function() {} //penulisan function bisa diringkas:
  tinggi() {},
  berat() {}
};

person.tinggi();
person.nama = '';

const targetMember = 'nama';
person[targetMember.value] = 'Joni';

const siswa = {
  name: 'Dani',
  nis() {
    console.log(this);
  }
};
siswa.nis();

const nis = siswa.nis;
nis();