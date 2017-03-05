TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/sort-white.svg',
    text: 'My Button',
    callback: function(t){
      // do something when the button is clicked
      alert('test');
    }}];
  }
});