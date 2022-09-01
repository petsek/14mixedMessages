const who = ['The Bee', 'Mr Todd', 'Hedgehog Jr.', 'Dr Owl', 'Nobody']
const what = ['jumped over the fence', 'stole an acorn', 'broke a window', 'eat all the pies', 'did nothing']
const when = ['yesterday', '12/04/2021 at 5:37 pm', 'three days ago', 'on Monday', 'never']
const where = ['over the rainbow', 'on the top of a tree', 'in the den', 'behind a bush', 'nowhere']
const why = ['to show off', 'to kill some time', 'because he is a badass', 'to help out', 'for no reason']

function reportGen() {
  const randNum = Math.floor(Math.random() * who.length);
  document.getElementById('doWho').innerHTML = who[randNum];
}
