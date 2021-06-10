const CommonService = {
    Stringify: (record) => {
        return JSON.stringify(record, (key, value) => {
            return ['', null].includes(value)
                || (typeof value === 'object'
                    && (value.length === 0 || Object.keys(value).length === 0)) ? undefined : value;
        });
    },

    UpdateAttribute: (record, target) => {
        var data = { ...record };

        let value = target.value;
        value = target.type === 'number' ? parseInt(value) : value;

        var res = target.name.split(".");
        var result = data;
        for (let i = 0; i < res.length - 1; i++) {
            let key = res[i];
            let r = result[key];
            if (!r) { r = {}; }
            result[key] = r;
            result = r;
        }

        let key = res[res.length - 1];
        delete result[key];
        if (value !== '' && value !== 0) { result[key] = value; }
        return data;
    },
}

export default CommonService;