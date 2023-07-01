
function shareSection(key, list) {
    let sections=[["prairies", "rockies"],
    ["upcoming", "live", "completed"],
    ["promotional"],
    ["2024", "2023"],
    []]

    for (let element of list) {
        console.log(element)
        for (let section of sections) {
            if (section.includes(key) && section.includes(element)) {return element}
        }
    }
    console.log(key, list)
    return null;
}

export default shareSection