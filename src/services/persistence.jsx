const Persistence = {
    Read: (location, defaultValue) => {
        let result = localStorage.getItem(location);
        if (result) {
            try { result = JSON.parse(result); } catch (e) { }
            return result;
        }
        return defaultValue;
    },
    
    Write: (location, value) => {
        console.log("Writing ", location, " = ", value);
        localStorage.setItem(location, value);
    },
}

export default Persistence;