import tinycolor from 'tinycolor2'

const inspectRGBvalue = (char) => {
    if (char > 255) {
        return 255
    }
    else if (char < 0) {
        return 0
    }
    else return char
};


export default hash => {
    const [r,g,b] = hash.slice(0,3).split('').map((char) => inspectRGBvalue(char.charCodeAt(0)))

    const color = tinycolor({r,g,b}).lighten(10).saturate(10).toString();
    const lightColor = tinycolor(color).lighten(25).saturate(15).toString();
    return {color, lightColor}
}


/* MD5 HASH */