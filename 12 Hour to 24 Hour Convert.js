// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

let time = '12:45:54PM';


function TimeConvert(s) {
    let timeSplite = s.split(":");

    let amOrPm = timeSplite[2].match(/[PMpmamAM]+/g);
    let second = timeSplite[2].match(/[0-9]+/g);

    if (amOrPm[0].toLowerCase() === 'am') {
        return `${timeSplite[0] === '12' ? '00' : timeSplite[0]}:${timeSplite[1]}:${second[0]}`
    }

    let hour = timeSplite[0][0] === '0' ? timeSplite[0][1] : timeSplite[0];

    return `${hour !== '12' ? Number(hour) + 12 :hour}:${timeSplite[1]}:${second[0]}`

}

console.log(TimeConvert(time))