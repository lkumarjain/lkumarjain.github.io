const InfograpicService = {
    Sort: (record) => {
        if (record.Articles) { record.Articles.sort((a, b) => (a.Order - b.Order)) }
        return record;
    },

    NilRecord: (prefix) => {
        return {
            Key: prefix + "_" + Date.now(),
            SectionHeight: prefix === "article" ? "150px" : "",
            Layout: prefix === "article" ? "layout-3321" : "",
        }
    },

    AddOrReplace: (record, value, parent) => {
        if (record.Key === value.Key) { return value; }

        function identify(r, key, selector) {
            if (!r[selector]) { r[selector] = []; }
            let length = r[selector].length;

            for (let i = 0; i < length; i++) {
                let a = r[selector][i];
                if (a.Key === key) { return { value: a, index: i }; }
            }
        }

        let article = identify(record, value.Key, "Articles");
        if (article) {
            record.Articles[article.index] = value;
            return record;
        }

        article = identify(record, parent, "Articles");
        if (article) {
            let section = identify(article.value, value.Key, "Sections");
            if (section) {
                article.value.Sections[section.index] = value;
                record.Articles[article.index] = article.value;
                return record;
            }

            value.Order = article.value.Sections.length;
            article.value.Sections.push(value);
            record.Articles[article.index] = article.value;
            return record;
        }

        value.Order = record.Articles.length;
        record.Articles.push(value);
        return record;
    },

    Remove: (record, value) => {
        if (record.Articles && value) {
            let Order = 0;
            for (let index = 0; index < record.Articles.length; index++) {
                const e = record.Articles[index];
                if (e) {
                    if (e.Key === value.Key) { delete record.Articles[index]; }
                    else { e.Order = Order++; }
                }
            }
        }
        return record;
    },
}

export default InfograpicService;