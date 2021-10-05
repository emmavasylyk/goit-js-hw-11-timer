const refs = {
    clockFaceRefs: document.querySelector('#timer-1'),
    daysRefs: document.querySelector('[data-value="days"]'),
    hoursRefs: document.querySelector('[data-value="hours"]'),
    minsRefs: document.querySelector('[data-value="mins"]'),
    secsRefs:document.querySelector('[data-value="secs"]'),
}

class CountdownTimer{
    constructor({onTick, targetDate}) {
        this.targetDate = targetDate;
        this.onTick = onTick
    }

    start() {
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now()
            const {days, hours, mins, secs} = this.getTimeComponents(deltaTime)
            this.onTick({days, hours, mins, secs})
        },1000)
    }
    
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
    }
    
    pad(value) {
    return String(value).padStart(2, '0')
}
}

    const timer = new CountdownTimer({
        timerSel: '#timer-1',
        targetDate: new Date('Oct 31, 2021'),
        onTick: updateClockFace,
    });
    
timer.start()
    

    function updateClockFace({ days, hours, mins, secs }) {
        refs.daysRefs.textContent = `${days}`
        refs.hoursRefs.textContent = `${hours}`
        refs.minsRefs.textContent = `${mins}`
        refs.secsRefs.textContent = `${secs}`
    }