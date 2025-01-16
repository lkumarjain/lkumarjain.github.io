import domtoimage from 'dom-to-image-more';

const CommonService = {
    Download: function (blob, fileName) {
        let element = document.createElement('a');
        element.setAttribute('href', blob);
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },

    GenerateSnapshot: async function (node, scale) {
        const style = {
            transform: 'scale(' + scale + ')',
            transformOrigin: 'top left',
            width: (node.offsetWidth) + "px",
            height: node.offsetHeight + "px",
        }

        const param = {
            height: node.offsetHeight * scale,
            width: (node.offsetWidth) * scale,
            quality: 1,
            style
        }

        const base64Image = await domtoimage.toPng(node, param)
        return base64Image;
    },

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
    }
}

export default CommonService;