/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

let grades = [73, 67, 38, 33,]
let arr = [23,
    80,
    96,
    18,
    73,
    78,
    60,
    60,
    15,
    45,
    15,
    10,
    5,
    46,
    87,
    33,
    60,
    14,
    71,
    65,]
function gradingStudents(grades) {
    // console.log(grades)

    let result = [];

    grades.forEach(grade => {
        let makeRoundGrade = Number(String(grade)[0]) * 10 + 5;
        let isZero = Number(String(grade)[1]) == 0;
        let isFive = Number(String(grade)[1]) == 5;
        let roundGrade = 0;
        let minimunGrade = 38

        if (grade > makeRoundGrade && grade >= minimunGrade && !isZero && !isFive) {
            roundGrade = makeRoundGrade + 5
            if ((roundGrade - grade) < 3) {
                roundGrade = makeRoundGrade + 5
            } else {
                roundGrade = grade
            }

        } else if (grade < makeRoundGrade && grade >= minimunGrade && !isZero && !isFive) {
            roundGrade = makeRoundGrade
            if ((roundGrade - grade) < 3) {
                roundGrade = makeRoundGrade
            } else {
                roundGrade = grade
            }

        } else if (grade < 38 || isZero || isFive) {
            roundGrade = grade
        }

        result.push(roundGrade);
        console.log(`Orginal = ${grade} | Round = ${roundGrade}`);

        console.log("-----------------------")

    });

    console.log('Result: ' + result)
    return result;
}

gradingStudents(arr);