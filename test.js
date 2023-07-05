//soal challenge 9.1
function tentukanDeretGeometri(series) {
    let ratio = series[1]/series[0]

    for(let i=0; i<series.length-1; i++) {
        let currRatio = series[i+1]/series[i]

        console.log("i ", i, "ratio ", ratio, "currRatio", currRatio)

        if(currRatio != ratio) {
            return false
        }
    }
    
    return true
}

console.log("[1, 3, 9, 27, 81]", tentukanDeretGeometri([1,3,9,27,81])) //TRUE
console.log("[1, 3, 9, 27, 48]", tentukanDeretGeometri([1,3,9,27,48])) //FALSE

//soal challenge 9.2
function mengelompokkanAngka(series) {
    let result = [[], [], []];

    series.forEach(function(num) {
        if (num % 2 === 0) {
            result[0].push(num);
        } else if (num % 2 === 1) {
            result[1].push(num);
        } 

        if (num % 3 === 0) {
            result[2].push(num);
        }
    });

    return result;
}

console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

//soal challenge 9.3

//soal challenge 9.4

//soal challenge 9.5

//soal challenge 10
function graduates(data) {
  let result = {};

  for (let i = 0; i < data.length; i++) {
    let student = data[i];
    let className = student.class;

    if (student.score > 75) {
      if (!result[className]) {
        result[className] = [];
      }

      result[className].push({
        name: student.name,
        score: student.score
      });
    }
  }

  return result;
}

console.log(graduates([
    { 
        name: 'Dimitri', 
        score: 90, 
        class: 'foxes' 
      },
      { 
        name: 'Alexei', 
        score: 85, 
        class: 'wolves' 
      },
      { 
        name: 'Sergei', 
        score: 74, 
        class: 'foxes' 
      },
      { 
        name: 'Anastasia', 
        score: 78, 
        class: 'wolves' 
      },
]))