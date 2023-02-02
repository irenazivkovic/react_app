const getUpdateTime = (): string => {
    const currentTime = new Date();
    
    console.log(currentTime.getUTCMonth())

    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} on the ${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
}

export default getUpdateTime;