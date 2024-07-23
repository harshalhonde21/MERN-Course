function getSeason(monthNumber) {
    let season;

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Fall';
            break;
        default:
            season = 'Invalid month number';
    }

    return season;
}

getSeason()

console.log(getSeason(8));
console.log(getSeason(13));