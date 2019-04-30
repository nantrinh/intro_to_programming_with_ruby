var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizeEachWord(string) {
  return string.split(' ').map(word => capitalize(word)).join(' ');
}

function removeDots(string) {
  return string.replace(/\./g, '');
}

function processBands(bandsArray) {
  return bandsArray.map(function(band) {
    return {
      name: capitalizeEachWord(removeDots(band['name'])),
      country: 'Canada',
      active: band.active,
    };
  });
}

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
