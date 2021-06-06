const colors = {
    Red: {
        "--C50": "#FFEBEE",
        "--C100": "#FFCDD2",
        "--C200": "#EF9A9A",
        "--C300": "#E57373",
        "--C400": "#EF5350",
        "--C500": "#F44336",
        "--C600": "#E53935",
        "--C700": "#D32F2F",
        "--C800": "#C62828",
        "--C900": "#B71C1C",
        "--CA100": "#FF8A80",
        "--CA200": "#FF5252",
        "--CA400": "#FF1744",
        "--CA700": "#D50000"
    },
    Pink: {
        "--C50": "#FCE4EC",
        "--C100": "#F8BBD0",
        "--C200": "#F48FB1",
        "--C300": "#F06292",
        "--C400": "#EC407A",
        "--C500": "#E91E63",
        "--C600": "#D81B60",
        "--C700": "#C2185B",
        "--C800": "#AD1457",
        "--C900": "#880E4F",
        "--CA100": "#FF80AB",
        "--CA200": "#FF4081",
        "--CA400": "#F50057",
        "--CA700": "#C51162"
    },
    Purple: {
        "--C50": "#F3E5F5",
        "--C100": "#E1BEE7",
        "--C200": "#CE93D8",
        "--C300": "#BA68C8",
        "--C400": "#AB47BC",
        "--C500": "#9C27B0",
        "--C600": "#8E24AA",
        "--C700": "#7B1FA2",
        "--C800": "#6A1B9A",
        "--C900": "#4A148C",
        "--CA100": "#EA80FC",
        "--CA200": "#E040FB",
        "--CA400": "#D500F9",
        "--CA700": "#AA00FF"
    },
    DeepPurple: {
        "--C50": "#EDE7F6",
        "--C100": "#D1C4E9",
        "--C200": "#B39DDB",
        "--C300": "#9575CD",
        "--C400": "#7E57C2",
        "--C500": "#673AB7",
        "--C600": "#5E35B1",
        "--C700": "#512DA8",
        "--C800": "#4527A0",
        "--C900": "#311B92",
        "--CA100": "#B388FF",
        "--CA200": "#7C4DFF",
        "--CA400": "#651FFF",
        "--CA700": "#6200EA"
    },
    Indigo: {
        "--C50": "#E8EAF6",
        "--C100": "#C5CAE9",
        "--C200": "#9FA8DA",
        "--C300": "#7986CB",
        "--C400": "#5C6BC0",
        "--C500": "#3F51B5",
        "--C600": "#3949AB",
        "--C700": "#303F9F",
        "--C800": "#283593",
        "--C900": "#1A237E",
        "--CA100": "#8C9EFF",
        "--CA200": "#536DFE",
        "--CA400": "#3D5AFE",
        "--CA700": "#304FFE"
    },
    Blue: {
        "--C50": "#E3F2FD",
        "--C100": "#BBDEFB",
        "--C200": "#90CAF9",
        "--C300": "#64B5F6",
        "--C400": "#42A5F5",
        "--C500": "#2196F3",
        "--C600": "#1E88E5",
        "--C700": "#1976D2",
        "--C800": "#1565C0",
        "--C900": "#0D47A1",
        "--CA100": "#82B1FF",
        "--CA200": "#448AFF",
        "--CA400": "#2979FF",
        "--CA700": "#2962FF"
    },
    LightBlue: {
        "--C50": "#E1F5FE",
        "--C100": "#B3E5FC",
        "--C200": "#81D4FA",
        "--C300": "#4FC3F7",
        "--C400": "#29B6F6",
        "--C500": "#03A9F4",
        "--C600": "#039BE5",
        "--C700": "#0288D1",
        "--C800": "#0277BD",
        "--C900": "#01579B",
        "--CA100": "#80D8FF",
        "--CA200": "#40C4FF",
        "--CA400": "#00B0FF",
        "--CA700": "#0091EA"
    },
    Cyan: {
        "--C50": "#E0F7FA",
        "--C100": "#B2EBF2",
        "--C200": "#80DEEA",
        "--C300": "#4DD0E1",
        "--C400": "#26C6DA",
        "--C500": "#00BCD4",
        "--C600": "#00ACC1",
        "--C700": "#0097A7",
        "--C800": "#00838F",
        "--C900": "#006064",
        "--CA100": "#84FFFF",
        "--CA200": "#18FFFF",
        "--CA400": "#00E5FF",
        "--CA700": "#00B8D4"
    },
    Teal: {
        "--C50": "#E0F2F1",
        "--C100": "#B2DFDB",
        "--C200": "#80CBC4",
        "--C300": "#4DB6AC",
        "--C400": "#26A69A",
        "--C500": "#009688",
        "--C600": "#00897B",
        "--C700": "#00796B",
        "--C800": "#00695C",
        "--C900": "#004D40",
        "--CA100": "#A7FFEB",
        "--CA200": "#64FFDA",
        "--CA400": "#1DE9B6",
        "--CA700": "#00BFA5"
    },
    Green: {
        "--C50": "#E8F5E9",
        "--C100": "#C8E6C9",
        "--C200": "#A5D6A7",
        "--C300": "#81C784",
        "--C400": "#66BB6A",
        "--C500": "#4CAF50",
        "--C600": "#43A047",
        "--C700": "#388E3C",
        "--C800": "#2E7D32",
        "--C900": "#1B5E20",
        "--CA100": "#B9F6CA",
        "--CA200": "#69F0AE",
        "--CA400": "#00E676",
        "--CA700": "#00C853"
    },
    LightGreen: {
        "--C50": "#F1F8E9",
        "--C100": "#DCEDC8",
        "--C200": "#C5E1A5",
        "--C300": "#AED581",
        "--C400": "#9CCC65",
        "--C500": "#8BC34A",
        "--C600": "#7CB342",
        "--C700": "#689F38",
        "--C800": "#558B2F",
        "--C900": "#33691E",
        "--CA100": "#CCFF90",
        "--CA200": "#B2FF59",
        "--CA400": "#76FF03",
        "--CA700": "#64DD17"
    },
    Lime: {
        "--C50": "#F9FBE7",
        "--C100": "#F0F4C3",
        "--C200": "#E6EE9C",
        "--C300": "#DCE775",
        "--C400": "#D4E157",
        "--C500": "#CDDC39",
        "--C600": "#C0CA33",
        "--C700": "#AFB42B",
        "--C800": "#9E9D24",
        "--C900": "#827717",
        "--CA100": "#F4FF81",
        "--CA200": "#EEFF41",
        "--CA400": "#C6FF00",
        "--CA700": "#AEEA00"
    },
    Yellow: {
        "--C50": "#FFFDE7",
        "--C100": "#FFF9C4",
        "--C200": "#FFF59D",
        "--C300": "#FFF176",
        "--C400": "#FFEE58",
        "--C500": "#FFEB3B",
        "--C600": "#FDD835",
        "--C700": "#FBC02D",
        "--C800": "#F9A825",
        "--C900": "#F57F17",
        "--CA100": "#FFFF8D",
        "--CA200": "#FFFF00",
        "--CA400": "#FFEA00",
        "--CA700": "#FFD600"
    },
    Amber: {
        "--C50": "#FFF8E1",
        "--C100": "#FFECB3",
        "--C200": "#FFE082",
        "--C300": "#FFD54F",
        "--C400": "#FFCA28",
        "--C500": "#FFC107",
        "--C600": "#FFB300",
        "--C700": "#FFA000",
        "--C800": "#FF8F00",
        "--C900": "#FF6F00",
        "--CA100": "#FFE57F",
        "--CA200": "#FFD740",
        "--CA400": "#FFC400",
        "--CA700": "#FFAB00"
    },
    Orange: {
        "--C50": "#FFF3E0",
        "--C100": "#FFE0B2",
        "--C200": "#FFCC80",
        "--C300": "#FFB74D",
        "--C400": "#FFA726",
        "--C500": "#FF9800",
        "--C600": "#FB8C00",
        "--C700": "#F57C00",
        "--C800": "#EF6C00",
        "--C900": "#E65100",
        "--CA100": "#FFD180",
        "--CA200": "#FFAB40",
        "--CA400": "#FF9100",
        "--CA700": "#FF6D00"
    },
    DeepOrange: {
        "--C50": "#FBE9E7",
        "--C100": "#FFCCBC",
        "--C200": "#FFAB91",
        "--C300": "#FF8A65",
        "--C400": "#FF7043",
        "--C500": "#FF5722",
        "--C600": "#F4511E",
        "--C700": "#E64A19",
        "--C800": "#D84315",
        "--C900": "#BF360C",
        "--CA100": "#FF9E80",
        "--CA200": "#FF6E40",
        "--CA400": "#FF3D00",
        "--CA700": "#DD2C00"
    },
    Brown: {
        "--C50": "#EFEBE9",
        "--C100": "#D7CCC8",
        "--C200": "#BCAAA4",
        "--C300": "#A1887F",
        "--C400": "#8D6E63",
        "--C500": "#795548",
        "--C600": "#6D4C41",
        "--C700": "#5D4037",
        "--C800": "#4E342E",
        "--C900": "#3E2723",
        "--CA100": "#78675d"
    },
    Grey: {
        "--C50": "#FAFAFA",
        "--C100": "#F5F5F5",
        "--C200": "#EEEEEE",
        "--C300": "#E0E0E0",
        "--C400": "#BDBDBD",
        "--C500": "#9E9E9E",
        "--C600": "#757575",
        "--C700": "#616161",
        "--C800": "#424242",
        "--C900": "#212121",
        "--CA100": "#E8E8E8"
    },
    BlueGrey: {
        "--C50": "#ECEFF1",
        "--C100": "#CFD8DC",
        "--C200": "#B0BEC5",
        "--C300": "#90A4AE",
        "--C400": "#78909C",
        "--C500": "#607D8B",
        "--C600": "#546E7A",
        "--C700": "#455A64",
        "--C800": "#37474F",
        "--C900": "#263238",
        "--CA100": "#536872"
    },
    Values: [
        "Red", "Pink", "Purple", "DeepPurple", "Indigo", "Blue", "LightBlue", "Cyan",
        "Teal", "Green", "LightGreen", "Lime", "Yellow", "Amber", "Orange",
        "DeepOrange", "Brown", "Grey", "BlueGrey"
    ],
}

export default colors;