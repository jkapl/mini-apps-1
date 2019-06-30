// import $ from ('jquery');

const verticalCheck = () => {
  let allSquares = document.getElementsByClassName('square');
  columns = {0:[],1:[],2:[],3:[],4:[],5:[]};
  for (var i = 0; i < allSquares.length; i++) {
    columns[allSquares[i].attributes['1'].nodeValue].push;
  }
}

export default verticalCheck