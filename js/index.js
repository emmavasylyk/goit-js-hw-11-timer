class CountdownTimer{
    constructor({timerSel, targetDate}) {
        this.targetDate = targetDate;
        this.timerSel = timerSel
        this.refs = {
    clockFaceRefs: document.querySelector('#timer-1'),
    daysRefs: document.querySelector('[data-value="days"]'),
    hoursRefs: document.querySelector('[data-value="hours"]'),
    minsRefs: document.querySelector('[data-value="mins"]'),
    secsRefs:document.querySelector('[data-value="secs"]'),
}
    }

    start() {
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now()
            const {days, hours, mins, secs} = this.getTimeComponents(deltaTime)
            this.updateClockFace({days, hours, mins, secs})
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
    
    updateClockFace({ days, hours, mins, secs }) {
        this.refs.daysRefs.textContent = `${days}`
        this.refs.hoursRefs.textContent = `${hours}`
        this.refs.minsRefs.textContent = `${mins}`
        this.refs.secsRefs.textContent = `${secs}`
    }
}

    const timer = new CountdownTimer({
        timerSel: '#timer-1',
        targetDate: new Date('Oct 31, 2021'),
    });
    
timer.start()
    
