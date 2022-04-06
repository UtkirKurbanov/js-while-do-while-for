let foo = 55;
do {
  console.log(foo);
  foo--;
} while (foo > 49);

for (let i = 1; i < 8; i++) {
  console.log(i);
}

for (let foo = 1; foo < 8; foo++) {
  if (foo == 6) {
    break;
  }
  console.log(foo);
}

for (let foo = 1; foo < 8; foo++) {
  if (foo == 6) {
    continue;
  }
  console.log(foo);
}
