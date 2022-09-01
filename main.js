const who = ['The Bee', 'Mr Todd', 'Hedgehog Jr.', 'Dr Owl', 'Somebody']
const what = ['jumped over the fence', 'stole an acorn', 'broke a window', 'eat all the pies', 'did nothing']
const when = ['yesterday', '12/04/2021 at 5:37 pm', 'three days ago', 'on Monday', '5 times a day']
const where = ['at the rainbow', 'on the top of a tree', 'in the den', 'behind a bush', 'nowhere']
const why = ['to show off', 'to kill some time', 'because he is a badass', 'to help out', 'for no reason']

function reportGen() {
  const randNum1 = Math.floor(Math.random() * who.length);
  const randNum2 = Math.floor(Math.random() * who.length);
  const randNum3 = Math.floor(Math.random() * who.length);
  const randNum4 = Math.floor(Math.random() * who.length);
  const randNum5 = Math.floor(Math.random() * who.length);

  document.getElementById('doWho').innerHTML = who[randNum1];
  document.getElementById('doWhat').innerHTML = what[randNum2];
  document.getElementById('doWhen').innerHTML = when[randNum3];
  document.getElementById('doWhere').innerHTML = where[randNum4];
  document.getElementById('doWhy').innerHTML = why[randNum5];
  document.getElementById('doSummary').innerHTML = `${who[randNum1]} ${what[randNum2]} ${when[randNum3]} ${where[randNum4]} ${why[randNum5]}`;
}
