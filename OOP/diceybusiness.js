document.addEventListener("DOMContentLoaded", function () {
  let container = $("#container");
  let visibleDice = [];
  let newDice = 0;

  const addDice = () => {
    let xVal = 25;
    let yVal = 25;
    let newRandomValue = randomValue(7, 1);
    let newDieDiv = new Die(newRandomValue, xVal, yVal);
    visibleDice.push(newDieDiv);
    newDice += 1;
    console.log(visibleDice);
  };

  function sumDice() {
    let sum = 0;
    $(".new-die").each(function () {
      sum += parseFloat($(this).text());
    });
    $("#total").text(sum);
  }

  class Die {
    constructor(value, x, y) {
      this.value = value;
      this.id = newDice;
      this.div = $("<div class='new-die'></div>");
      // this.div.classList.add("new-die");
      this.div.css("left", `${x}px`);
      this.div.css("top", `${y}px`);
      this.div.css("border", "2px solid black");
      this.roll()
      container.append(this.div);
      this.div.click(() => this.roll());
      btn2.click(() => this.roll());
      this.div.dblclick(() => {
        this.removeDie();
      });
    }
    roll() {
      let rollValue = Math.floor(Math.random() * (7 - 1) + 1);
      this.value = rollValue;
      this.div.text(rollValue);
    }

    removeDie() {
      this.div.remove();
    }
  }

  let btn = $("#die-button");
  let btn2 = $("#roll-button");
  let btn3 = $("#sum-button");

  btn.click(function () {
    addDice();
  });
  btn3.click(function () {
    sumDice();
  });

  const randomValue = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
});

//     class Square {
//         constructor(x, y, size) {
//             this.div = document.createElement('div');
//             this.div.classList.add('square');
//             this.div.style.width = `${size}px`;
//             this.div.style.height = `${size}px`;
//             this.div.addEventListener('click', () => { //arrow function keeps .this constant
//                 console.log(this);
//                 this.updateColor();
//                 this.updateLocation();
//             }); //.bind(this) binds the object that's created, in this case the square
//             this.updateColor();
//             container.appendChild(this.div);
//         }

// });
