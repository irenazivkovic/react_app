const getCurrentTime = (): string => {
    const currentTime = ((new Date()).toISOString()).split('T');
    const curretHM = `${currentTime[1].slice(0, 2)}:00`;
    
    return `${currentTime[0]}T${curretHM}`;
}

export default getCurrentTime;