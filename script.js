// Task 1: Select Element by ID
const heading = document.getElementById('main-heading');
console.log('Task 1 Element:', heading);
heading.textContent = 'DOM Element Selected by ID';

// Task 2: Select Elements by Tag Name
const allParagraphs = document.getElementsByTagName('p');
console.log('Task 2 Elements:', allParagraphs);
if (allParagraphs.length > 0) {
  allParagraphs[0].textContent = 'First paragraph updated';
}

// Task 3: Select Elements by Class Name
const buttons = document.getElementsByClassName('btn');
console.log('Task 3 Elements:', buttons);
if (buttons.length > 1) {
  buttons[1].textContent = 'Click Me';
}

// Task 4: Use querySelector
const headingFour = document.querySelector('.sub-heading');
console.log('Task 4 Element:', headingFour);
if (headingFour) {
  headingFour.style.color = 'blue';
}

// Task 5: Use querySelectorAll
const listItems = document.querySelectorAll('ul li');
console.log('Task 5 Elements:', listItems);
listItems.forEach(item => {
  item.style.color = 'green';
});

// Task 6: Change Style Using Selected Element
const styledPara = document.querySelector('.styled-paragraph');
console.log('Task 6 Element:', styledPara);
if (styledPara) {
  styledPara.style.fontSize = '20px';
  styledPara.style.color = 'darkred';
  styledPara.style.backgroundColor = 'lightyellow';
}