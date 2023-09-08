const day=document.getElementById('currentDay');
const timeUTC=document.getElementById('currentTime')
const today=new Date();

const months=today.toLocaleString('en',{month:'long'})
const timeHr=today.getHours();
const timeMin=today.getMinutes();
const seconds=today.getSeconds()
const weekDay=today.toLocaleString('en',{weekday:'long'})
const option={
    weekday:'long',
    date:'numeric',
    year:'numeric',
    month:'long',

}

day.textContent=weekDay
timeUTC.textContent=`${timeHr}:${timeMin}:${seconds}`

