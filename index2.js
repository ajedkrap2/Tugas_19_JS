function tugas19(){
  var asterisk = "*"
  var x = 0;
  for (var j = 0; j <= 3; j++) {
    process.stdout.write(asterisk.repeat(5 +(j*20)+ x));
    console.log("");
    if (j > 1){
      x = -5;
    }
  }
  process.stdout.write(asterisk.repeat(5 + (x * (-18)) + x));
  console.log("");
  for (var i = 3; i >= 0; i--) {
    process.stdout.write(asterisk.repeat(5 + (i*20)+ x));
    console.log("");
    if (i < 4) {
      x = 0;
    }
  }
}

tugas19();
