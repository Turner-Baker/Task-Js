const camalCaseFunc = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
};
let a = "a";
let c = true;
let result = null;
function valueСheck(a) {
  let b = /\D/g;
  let result = a.match(b);
  if (result == null) {
    return true;
  } else return false;
}
const snakeCaseFunc = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
let str, str1, str2, i;
let divBlock = document.getElementById("task");
let task = prompt("Введіть номер завдання: ");
switch (+task) {
  case 1:
    {
      let undertask = prompt("Введіть номер підзавдання: ");
      switch (+undertask) {
        case 1:
          {
            str1 = prompt("введіть рядок 1:");
            str2 = prompt("введіть рядок 2:");
            let result = length_func(str1, str2);
            function length_func(str1, str2) {
              if (str1.length > str2.length) {
                return 1;
              }
              if (str2.length > str1.length) {
                return -1;
              }
              if (str1.length === str2.length) {
                return 0;
              }
            }
            alert(`${result}`);
          }
          break;
        case 2:
          {
            str = prompt("введіть рядок:");
            str2 = firstLettertoUpperCase(str);
            function firstLettertoUpperCase(str) {
              str2 = "";
              for (i = 1; i < str.length; i++) {
                str2 = str2 + str[i];
              }
              str = str[0].toUpperCase() + str2;
              return str;
            }

            alert(`${str2}`);
          }
          break;
        case 3:
          {
            str = prompt("введіть рядок:");
            str2 = vowels_check(str);
            function vowels_check(str) {
              str2 = "";
              let mas = [
                "а",
                "у",
                "о",
                "є",
                "ї",
                "я",
                "ю",
                "і",
                "и",
                "е",
                "a",
                "e",
                "i",
                "o",
                "u",
                "y",
                "ы",
                "ё",
                "э",
                "А",
                "У",
                "О",
                "Є",
                "Ї",
                "Я",
                "Ю",
                "І",
                "И",
                "Е",
                "A",
                "E",
                "I",
                "O",
                "U",
                "Y",
                "Ы",
                "Ё",
                "Э",
              ];
              for (i = 0; i < str.length; i++) {
                for (let j = 0; j < mas.length; j++) {
                  if (str[i] == mas[j]) {
                    str2 = str2 + str[i] + ", ";
                  }
                }
              }
              return str2;
            }
            alert(str2);
          }
          break;
        case 4:
          {
            str = prompt("введіть рядок:");
            str1 = spam_check(str);
            function spam_check(str) {
              let spam = [
                "100%безкоштовно",
                "збільшення продажів",
                "тільки сьогодні",
                "не видаляйте",
                "xxx",
              ];
              for (i = 0; i < spam.length; i++) {
                str2 = str.indexOf(spam[i], 0) + "";
                console.log(str2);
                if (str2 != "-1") {
                  return true;
                }
              }
              return false;
            }
            alert(str1);
          }
          break;
        case 5:
          {
            str = prompt("введіть рядок:");
            do {
              max = prompt("введіть максимальну довжину рядку:");
              c = valueСheck(max);
            } while (c == false);
            str1 = line_shortening(str, max);
            function line_shortening(str, max) {
              str1 = "";
              if (max < str.length)
                for (i = 0; i < max - 3; i++) {
                  str1 += str[i];
                }
              else return str;
              str = str1 + "...";
              return str;
            }
            alert(str1);
          }
          break;
        case 6:
          {
            let symbol;
            str = prompt("введіть рядок:");
            do {
              symbol = prompt("Введіть символ:");
            } while (symbol.length !== 1);
            str1 = indexof(str, symbol);
            let regexp = /\d/g;
            function indexof(str, symbol) {
              str1 = "";
              let counter = 0;
              str2 = str.indexOf(symbol, 0);
              str1 += str2 + ", ";
              console.log(str2);
              while (true) {
                str2 = str.indexOf(symbol, str2 + 1);
                counter += 1;
                if (str2 == -1) break;
                console.log(str2);
                str1 += str2 + ", ";
              }
              str = "";
              for (i = 0; i < str1.length - 2; i++) str += str1[i];
              console.log(str);
              return str;
            }
            str = str1.split(",");
            alert(`index(es): ${str1} length:${str.length}`);
          }
          break;
        default:
          {
            alert("Помилка!");
          }
          break;
      }
    }
    break;
  case 2:
    {
      let time = {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      };
      let timeSpan = document.getElementById("time");
      let Show = document.getElementById("timeShow");

      timeshow(time.hour, time.minutes, time.seconds);
      function timeshow(hour, minutes, seconds) {
        if (hour * 1 < 10) hour = "0" + hour;
        if (minutes * 1 < 10) minutes = "0" + minutes;
        if (seconds * 1 < 10) seconds = "0" + seconds;
        alert(`${hour}:${minutes}:${seconds}`);
      }
      time = secondChange(time.seconds, time.minutes, time.hour);
      timeshow(time.hour, time.minutes, time.seconds);
      function secondChange(seconds, minutes, hour) {
        let input = prompt("Введіть кількість секунд:");
        seconds += input * 1;
        if (seconds >= 60) {
          do {
            seconds = seconds - 60;
            minutes += 1;
          } while (seconds >= 60);
          if (minutes >= 60) {
            do {
              minutes = minutes - 60;
              hour += 1;
            } while (minutes >= 60);
          }
          if (hour >= 24) {
            do {
              hour = hour - 24;
            } while (hour >= 24);
          }
        }
        time = { hour: hour, minutes: minutes, seconds: seconds };
        return time;
      }
      time = minutesChange(time.seconds, time.minutes, time.hour);
      timeshow(time.hour, time.minutes, time.seconds);
      function minutesChange(seconds, minutes, hour) {
        let input = prompt("Введіть кількість хвилин:");
        minutes += input * 1;
        if (minutes >= 60) {
          do {
            minutes = minutes - 60;
            hour += 1;
          } while (minutes >= 60);
          if (hour >= 24) {
            do {
              hour = hour - 24;
            } while (hour >= 24);
          }
        }
        time = { hour: hour, minutes: minutes, seconds: seconds };
        return time;
      }
      time = hourChange(time.seconds, time.minutes, time.hour);
      timeshow(time.hour, time.minutes, time.seconds);
      function hourChange(seconds, minutes, hour) {
        let input = prompt("Введіть кількість годин:");
        hour += input * 1;
        if (hour >= 24) {
          do {
            hour = hour - 24;
          } while (hour >= 24);
        }
        time = { hour: hour, minutes: minutes, seconds: seconds };
        return time;
      }
      timeSpan.innerHTML = `${time.hour}:${time.minutes}:${time.seconds}`;
    }
    break;
  case 3:
    {
      let undertask = prompt("Введіть номер підзавдання: ");
      switch (+undertask) {
        case 1:
          {
            let product1 = { name: "milk", quantity: 1, bought: true };
            let product2 = { name: "bread", quantity: 1, bought: false };
            let product3 = { name: "sugar", quantity: 2, bought: true };
            let product4 = { bought: false };
            let product5 = { bought: false };
            let product6 = { bought: false };
            let product7 = { bought: false };
            let empty = [product4, product5, product6, product7];
            let products = [product1, product2, product3];
            list(products);

            function list(mas) {
              let mas2 = [];
              for (let i = 0; i < mas.length; i++) {
                if (mas[i].bought === false) {
                  //mas.splice(i,1)
                  mas2.unshift(mas[i]);
                } else mas2.push(mas[i]);
              }
              newlist = "";
              for (i = 0; i < mas2.length; i++) {
                newlist += `${mas2[i].name}, ${mas2[i].quantity}, ${mas2[i].bought}\n`;
              }
              alert(newlist);
            }

            productCreate(products, empty);
            function productCreate(mas, empty) {
              let product = prompt("введіть назву продукту:");
              let quanity,
                found = false;
              for (let i = 0; i < mas.length; i++) {
                if (product == mas[i].name) {
                  quanity = prompt(
                    "Схоже що такий продукт вже є в листі. " +
                      "Введіть нову кількість цього продукту: "
                  );
                  mas[i].quantity = quanity;
                  found = true;
                }
              }
              if (found == false) {
                for (i = 0; i < empty.length; i++) {
                  if (empty[i].name == undefined) {
                    empty[i].name = product;
                    empty[i].quantity = prompt(
                      "Введіть  кількість цього продукту:"
                    );
                    mas.push(empty[i]);
                    break;
                  }
                }
              }
              list(products);
            }
            let prodBought = document.getElementById("prodBought");

            productBought(products);
            function productBought(mas) {
              let product = prompt("введіть назву придбаного продукту:");
              for (let i = 0; i < mas.length; i++) {
                if (product == mas[i].name) {
                  mas[i].bought = true;
                }
              }
              list(products);
            }
          }
          break;
        case 2:
          {
            mas = [
              { name: "milk", quantity: 2, price: 30 },
              { name: "bread", quantity: 1, price: 20 },
              { name: "sugar", quantity: 3, price: 40 },
            ];
            check(mas);
            function check(mas) {
              newlist = "";
              for (i = 0; i < mas.length; i++) {
                newlist += `${mas[i].name}, ${mas[i].quantity}, ${mas[i].price}\n`;
              }
              alert(newlist);
            }
            i = amountCount(mas);
            alert(`amount: ${i}`);
            function amountCount(mas) {
              let amount = 0;
              for (let i = 0; i < mas.length; i++) {
                amount += mas[i].quantity * mas[i].price;
              }
              return amount;
            }
            i = TheLargestAmount(mas);
            alert(`The Largest Amount:\n ${i}`);
            function TheLargestAmount(mas) {
              let summ = 0,
                amount = 0,
                result = "";
              for (let i = 0; i < mas.length; i++) {
                summ = mas[i].quantity * mas[i].price;
                if (summ > amount) amount = summ;
                result = `${mas[i].name}: ${summ}`;
              }
              return result;
            }
            i = arithmeticMean(mas);
            alert(`arithmetic mean: ${i}`);
            function arithmeticMean(mas) {
              amount = amountCount(mas);
              let mean = amount / mas.length;
              return mean;
            }
          }
          break;
        default: {
          alert("Помилка!");
        }
      }
    }
    break;
  default: {
    alert("Помилка!");
  }
}
