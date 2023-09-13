export function timeForSeconds(time: string) {

    // const [hours, minutes, seconds] = time.split(':').map(Number);
    
    // return (hours * 60 * 60) + (minutes * 60) + seconds;

    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

    const hourSecond = Number(hours) * 3600;
    const minuteSecond = Number(minutes) * 60;

    return hourSecond + minuteSecond + Number(seconds);


}