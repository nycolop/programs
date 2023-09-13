function groceries(arr) {
  let nArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr.length >= 3 && i !== arr.length - 2 && i !== arr.length - 1) {
      nArr.push(arr[i].item + ',')
    } else {
      nArr.push(arr[i].item)
    }
  
    if (arr.length >= 2) {
      if (i === arr.length - 2) {
        nArr.push('and');
      }
    }
    
  }
  
  return nArr.join(' ');
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])