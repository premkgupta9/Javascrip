const myObject = {
    js: 'javascript',
    c: 'c++',
    rb: 'ruby',
    swift: 'swift by aaple ',
}

// for in
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    }


    const programming = ["js", "rb", "py", "java", "cpp"]

    for (const key in programming) {
       console.log(programming[key]);
            
        }

        
        const map = new Map()
        map.set('IN', "INDIA")
        map.set('USA', "United State of America")
        map.set('Fr', "France")
        map.set('USA', "United State of America")

        for (const key in map) {
            console.log(key);
        }
        // here map is not iteratable
        