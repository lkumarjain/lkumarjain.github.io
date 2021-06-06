const InfograpicService = {
    Sort: (record) => {
        if (record.Articles) { record.Articles.sort((a, b) => (a.Order - b.Order)) }
        return record;
    },

    Types: ["article", "section", "standalone"],
    Patterns: ["isometric", "paper", "rectangles", "rhombus", "zigzag", "wave", "diagonal-line", "triangle", "moon", "dot-box"],

    NilArticle: (prefix) => {
        return {
            Key: prefix + "_" + Date.now(),
            Type: "article",
            "GridTemplate": [
                4,
                6,
                12
            ]
        }
    },

    AddOrReplace: (record, article) => {
        if (record.Key === article.Key) { return article; }

        if (!record.Articles) { record.Articles = []; }
        let length = record.Articles.length;

        for (let i = 0; i < length; i++) {
            let a = record.Articles[i];
            if (a.Key === article.Key) {
                record.Articles[i] = article;
                return record;
            }
        }

        article.order = length;
        record.Articles.push(article);
        return record;
    },

    Remove: (record, value) => {
        if (record.Articles && value) {
            let order = 0;
            for (let index = 0; index < record.Articles.length; index++) {
                const e = record.Articles[index];
                if (e) {
                    if (e.Key === value.Key) { delete record.Articles[index]; }
                    else { e.Order = order++; }
                }
            }
        }
        return record;
    },
}

export default InfograpicService;