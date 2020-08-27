function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let index = abc.indexOf(str[i]);
      if (index > -1) {
        let newIndex = (index + abc.indexOf(key[i % key.length])) % abc.length;
        result += abc[newIndex];
      } else result += str[i];
    }
    return result;
  };
  this.decode = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let index = abc.indexOf(str[i]);
      if (index > -1) {
        let newIndex = index - abc.indexOf(key[i % key.length]);
        if (newIndex < 0) newIndex += abc.length;
        result += abc[newIndex];
      } else result += str[i];
    }
    return result;
  };
}

var abc, key;
abc = 'abcdefghijklmnopqrstuvwxyz';
key = 'password';
c = new VigenèreCipher(key, abc);

Test.assertEquals(c.encode('codewars'), 'rovwsoiv');
Test.assertEquals(c.decode('rovwsoiv'), 'codewars');

Test.assertEquals(c.encode('waffles'), 'laxxhsj');
Test.assertEquals(c.decode('laxxhsj'), 'waffles');

Test.assertEquals(c.encode('CODEWARS'), 'CODEWARS');
Test.assertEquals(c.decode('CODEWARS'), 'CODEWARS');
