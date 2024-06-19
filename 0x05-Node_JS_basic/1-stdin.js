process.stdin.setEncoding('utf8');

function readInput() {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}\n`);
  }
}

function writeOut() {
  process.stdout.write('This important software is now closing');
}

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', readInput);
process.stdin.on('end', writeOut);
