/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cosmos',
                            symbolName: 'cosmos',
                            type: 'rect',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1536', '2048', 'auto', 'auto'],
                            overflow: 'scroll',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cosmos}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cosmos}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "cosmos": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1536px', '2048px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'canvas',
                            type: 'group',
                            rect: ['271', '405', '1040', '1213', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Haus_Krebs',
                                symbolName: 'Haus_Krebs',
                                rect: ['471', '549', '854', '1139', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                rect: ['372px', '-71px', '706px', '1001px', 'auto', 'auto'],
                                type: 'image',
                                id: 'hauszwilling_ohneschaukelCopy',
                                opacity: '1',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/hauszwilling_ohneschaukel-new.jpg', '0px', '0px']
                            },
                            {
                                rect: ['831', '473', '230', '237', 'auto', 'auto'],
                                id: 'zwillinge_schaukeln',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/zwillinge_schaukeln.gif', '0px', '0px']
                            },
                            {
                                rect: ['-208', '649', '1000px', '1254px', 'auto', 'auto'],
                                id: 'waldhuette2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/waldhuette.gif', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                display: 'none',
                                symbolName: 'haus-steinbock',
                                rect: ['-333', '312', '854', '1139', 'auto', 'auto'],
                                id: 'haus-steinbock'
                            },
                            {
                                rect: ['-271', '-845', '854', '1139', 'auto', 'auto'],
                                id: 'haus-waage',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/haus_waage_newone_small.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                transform: [[], [], [], ['0.55599', '0.55599']],
                                display: 'none',
                                symbolName: 'haus_pudding_spritesheet2_symbol_1',
                                rect: ['467', '-188', '1536', '2048', 'auto', 'auto'],
                                id: 'haus-pudding'
                            },
                            {
                                rect: ['834', '522', '1536px', '2048px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.4', '0.4']],
                                id: 'hochhaus_destruction_small2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/hochhaus_destruction_small.png', '0px', '0px']
                            },
                            {
                                rect: ['832', '521', '1536px', '2048px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.4', '0.4']],
                                type: 'image',
                                id: 'hochhaus_destruction_ending',
                                opacity: '1',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/hochhaus_destruction_final2_ending.gif', '0px', '0px']
                            },
                            {
                                rect: ['950', '947', '736px', '1398px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.2', '0.2']],
                                id: 'hochhaus_glas_nostars',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/hochhaus_glas_stars.gif', '0px', '0px']
                            },
                            {
                                rect: ['504', '-538', '2070px', '2048px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'poolhouse_withoutstar2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/poolhouse_withoutstar.gif', '0px', '0px']
                            },
                            {
                                rect: ['695', '-1211', '2898', '3864', 'auto', 'auto'],
                                transform: [[], [], [], ['0.3', '0.3']],
                                id: 'plateau_fin_ohnesterne',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/plateau_fin_ohnesterne.gif', '0px', '0px']
                            },
                            {
                                type: 'video',
                                source: ['media/steinbock.mp4'],
                                id: 'steinbock',
                                opacity: '1',
                                preload: 'auto',
                                loop: 'loop',
                                display: 'none',
                                transform: [[], [], [], ['1.5', '1.5']],
                                rect: ['-209', '446', '600', '800', 'auto', 'auto'],
                                tag: 'video'
                            },
                            {
                                rect: ['-606', '-604', '1691px', '300px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.3', '0.3']],
                                type: 'image',
                                id: 'vogelflug_small',
                                display: 'none',
                                clip: 'rect(0px 180px 220px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/vogelflug_small.png', '0px', '0px']
                            },
                            {
                                rect: ['-518', '-1165', '3545', '3536', 'auto', 'auto'],
                                id: 'cosmos_neu',
                                opacity: '0.97',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/cosmos-new.jpg', '0px', '0px']
                            },
                            {
                                id: 'sternenGruppe',
                                type: 'group',
                                rect: ['-156', '-301', '1413', '1912', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['99', '-4', '372', '312', 'auto', 'auto'],
                                    transform: [[], [], [], ['0.84', '0.84']],
                                    id: 'sterne_waage_small',
                                    type: 'image',
                                    display: 'block',
                                    fill: ['rgba(0,0,0,0)', 'images/haus_waage_newone_sterne.gif', '0px', '0px']
                                },
                                {
                                    id: 'Sterne',
                                    type: 'group',
                                    rect: ['273', '648', '1575', '1756', 'auto', 'auto'],
                                    c: [
                                    {
                                        rect: ['-167px', '359px', '246px', '403px', 'auto', 'auto'],
                                        id: 'sterne_steinbock_klein',
                                        transform: [[], [], [], ['0.63', '0.63']],
                                        type: 'image',
                                        fill: ['rgba(0,0,0,0)', 'images/sterne_steinbock%20_small.gif', '0px', '0px']
                                    },
                                    {
                                        rect: ['422px', '-347px', '390px', '393px', 'auto', 'auto'],
                                        id: 'sterne_zwilling_klein',
                                        transform: [[], [], [], ['0.7', '0.7']],
                                        type: 'image',
                                        fill: ['rgba(0,0,0,0)', 'images/sterne_zwilling_small.gif', '0px', '0px']
                                    }]
                                },
                                {
                                    id: 'poolhouse_star',
                                    type: 'image',
                                    rect: ['1802', '804', '235px', '303px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/poolhouse_star.gif', '0px', '0px']
                                },
                                {
                                    rect: ['927', '1298', '269px', '216px', 'auto', 'auto'],
                                    id: 'sterne_krebs_klein',
                                    transform: [[], [], [], ['0.7', '0.7']],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/sterne_krebs_small.gif', '0px', '0px']
                                },
                                {
                                    rect: ['382', '1547', '503', '300', 'auto', 'auto'],
                                    id: 'sterne_widder',
                                    type: 'image',
                                    display: 'block',
                                    fill: ['rgba(0,0,0,0)', 'images/sterne_widder.png', '0px', '0px']
                                },
                                {
                                    rect: ['1298', '1647', '357px', '600px', 'auto', 'auto'],
                                    id: 'hochhaus_glas_starsonly',
                                    transform: [[], ['-1'], [], ['0.46', '0.46']],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/hochhaus_glas_starsonly.gif', '0px', '0px']
                                },
                                {
                                    rect: ['2373', '1263', '225px', '166px', 'auto', 'auto'],
                                    id: 'plateau_fin_sterne22',
                                    transform: [[], [], [], ['0.65', '0.65']],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/plateau_fin_sterne2.gif', '0px', '0px']
                                },
                                {
                                    rect: ['1281', '816', '200px', '300px', 'auto', 'auto'],
                                    transform: [[], [], [], ['0.62', '0.62']],
                                    id: 'leo',
                                    type: 'image',
                                    display: 'block',
                                    fill: ['rgba(0,0,0,0)', 'images/sterne_leo_small.gif', '0px', '0px']
                                }]
                            }]
                        },
                        {
                            rect: ['0', '746', '1536px', '250px', 'auto', 'auto'],
                            type: 'image',
                            id: 'perinthia_headline',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/perinthia_headline2_small.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '731', '1536px', '265px', 'auto', 'auto'],
                            type: 'image',
                            id: 'perinthia_text',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/perinthia_text_vonhand_small.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0%', '100%', '100%', 'auto', 'auto'],
                            stroke: [1, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            id: 'ButtonStart',
                            opacity: '0.1953125',
                            display: 'block',
                            fill: ['rgba(213,125,125,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1536', '2048']
                        }
                    }
                },
                timeline: {
                    duration: 38500,
                    autoPlay: false,
                    labels: {
                        "anfang": 0,
                        "text": 2000,
                        "anfang2": 3000,
                        "zwilling": 4000,
                        "steinbock": 7000,
                        "krebs": 10000,
                        "waage": 13000,
                        "vogel": 15000,
                        "widder": 16000,
                        "pudding": 19000,
                        "Hochhaus": 29500,
                        "plateau": 33000,
                        "poolhouse": 36000
                    },
                    data: [
                        [
                            "eid273",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "left",
                            13000,
                            0,
                            "linear",
                            "${haus-waage}",
                            '-271px',
                            '-271px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '0.97',
                            '0'
                        ],
                        [
                            "eid50",
                            "opacity",
                            7000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid64",
                            "opacity",
                            10000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "opacity",
                            13000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            16000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            19000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            29500,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid244",
                            "opacity",
                            33000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid264",
                            "opacity",
                            36000,
                            2000,
                            "linear",
                            "${cosmos_neu}",
                            '0.55913363821138',
                            '0'
                        ],
                        [
                            "eid124",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${waldhuette2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${waldhuette2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "left",
                            15000,
                            800,
                            "linear",
                            "${vogelflug_small}",
                            '-606px',
                            '-917px'
                        ],
                        [
                            "eid231",
                            "display",
                            21251,
                            0,
                            "linear",
                            "${leo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            27249,
                            0,
                            "linear",
                            "${leo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hochhaus_glas_nostars}",
                            'none',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${hochhaus_glas_nostars}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            31753,
                            0,
                            "linear",
                            "${hochhaus_glas_nostars}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${sterne_widder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            27500,
                            0,
                            "linear",
                            "${sterne_widder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "background-position",
                            15000,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid202",
                            "background-position",
                            15100,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,0],
                            [-186,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid203",
                            "background-position",
                            15200,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-186,0],
                            [-373,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid204",
                            "background-position",
                            15300,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-373,0],
                            [-551,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid205",
                            "background-position",
                            15400,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-551,0],
                            [-742,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid206",
                            "background-position",
                            15500,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-742,0],
                            [-935,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid207",
                            "background-position",
                            15600,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-935,0],
                            [-1114,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid208",
                            "background-position",
                            15700,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-1114,0],
                            [-1294,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid209",
                            "background-position",
                            15800,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [-1294,0],
                            [-1484,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid181",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hochhaus_destruction_small2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${hochhaus_destruction_small2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "display",
                            31753,
                            0,
                            "linear",
                            "${hochhaus_destruction_small2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "left",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-115px'
                        ],
                        [
                            "eid36",
                            "left",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '-115px',
                            '1016px'
                        ],
                        [
                            "eid61",
                            "left",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '-432px'
                        ],
                        [
                            "eid76",
                            "left",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '271px',
                            '898px'
                        ],
                        [
                            "eid119",
                            "left",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '264px',
                            '653px'
                        ],
                        [
                            "eid149",
                            "left",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '264px',
                            '653px'
                        ],
                        [
                            "eid176",
                            "left",
                            29500,
                            2000,
                            "linear",
                            "${canvas}",
                            '264px',
                            '-1367px'
                        ],
                        [
                            "eid235",
                            "left",
                            33000,
                            2000,
                            "linear",
                            "${canvas}",
                            '-1367px',
                            '-2690px'
                        ],
                        [
                            "eid258",
                            "left",
                            36000,
                            2000,
                            "linear",
                            "${canvas}",
                            '-1367px',
                            '-1527px'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${haus-pudding}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${haus-pudding}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            27500,
                            0,
                            "linear",
                            "${haus-pudding}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '405px',
                            '743px'
                        ],
                        [
                            "eid34",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '743px',
                            '-77px'
                        ],
                        [
                            "eid59",
                            "top",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '405px',
                            '-505px'
                        ],
                        [
                            "eid77",
                            "top",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '405px',
                            '2000px'
                        ],
                        [
                            "eid117",
                            "top",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '402px',
                            '-825px'
                        ],
                        [
                            "eid147",
                            "top",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '402px',
                            '-825px'
                        ],
                        [
                            "eid175",
                            "top",
                            29500,
                            2000,
                            "linear",
                            "${canvas}",
                            '402px',
                            '-245px'
                        ],
                        [
                            "eid234",
                            "top",
                            33000,
                            2000,
                            "linear",
                            "${canvas}",
                            '-245px',
                            '191px'
                        ],
                        [
                            "eid256",
                            "top",
                            36000,
                            2000,
                            "linear",
                            "${canvas}",
                            '-245px',
                            '731px'
                        ],
                        [
                            "eid198",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${sterne_waage_small}",
                            'block',
                            'block'
                        ],
                        [
                            "eid253",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poolhouse_withoutstar2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid254",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${poolhouse_withoutstar2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "height",
                            0,
                            0,
                            "linear",
                            "${cosmos_neu}",
                            '3536px',
                            '3536px'
                        ],
                        [
                            "eid86",
                            "width",
                            0,
                            0,
                            "linear",
                            "${cosmos_neu}",
                            '3545px',
                            '3545px'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${perinthia_headline}",
                            '1',
                            '0'
                        ],
                        [
                            "eid266",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${hauszwilling_ohneschaukelCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            6039,
                            0,
                            "linear",
                            "${hauszwilling_ohneschaukelCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid227",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${leo}",
                            '1281px',
                            '1281px'
                        ],
                        [
                            "eid229",
                            "left",
                            21500,
                            0,
                            "linear",
                            "${leo}",
                            '1281px',
                            '343px'
                        ],
                        [
                            "eid270",
                            "width",
                            4000,
                            0,
                            "linear",
                            "${hauszwilling_ohneschaukelCopy}",
                            '706px',
                            '706px'
                        ],
                        [
                            "eid95",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${perinthia_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${perinthia_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid62",
                            "scaleX",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid174",
                            "scaleX",
                            29500,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            33000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid259",
                            "scaleX",
                            36000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid245",
                            "top",
                            33742,
                            0,
                            "linear",
                            "${plateau_fin_ohnesterne}",
                            '-1211px',
                            '-1211px'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${haus-steinbock}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${haus-steinbock}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${haus-steinbock}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${haus-steinbock}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "scaleY",
                            4000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            7000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            10000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            13000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            16000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid148",
                            "scaleY",
                            19000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            29500,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid236",
                            "scaleY",
                            33000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid257",
                            "scaleY",
                            36000,
                            2000,
                            "linear",
                            "${canvas}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid210",
                            "clip",
                            15000,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid211",
                            "clip",
                            15100,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid212",
                            "clip",
                            15200,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid213",
                            "clip",
                            15300,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,220,0],
                            [0,180,235,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid214",
                            "clip",
                            15400,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,235,0],
                            [0,180,261,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid215",
                            "clip",
                            15500,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,261,0],
                            [0,180,261,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid216",
                            "clip",
                            15600,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,261,0],
                            [0,180,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid217",
                            "clip",
                            15700,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,272,0],
                            [0,180,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid218",
                            "clip",
                            15800,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            [0,180,272,0],
                            [0,180,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hochhaus_destruction_ending}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            31500,
                            0,
                            "linear",
                            "${hochhaus_destruction_ending}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "display",
                            31753,
                            0,
                            "linear",
                            "${hochhaus_destruction_ending}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "height",
                            4000,
                            0,
                            "linear",
                            "${hauszwilling_ohneschaukelCopy}",
                            '1001px',
                            '1001px'
                        ],
                        [
                            "eid171",
                            "left",
                            19000,
                            2251,
                            "linear",
                            "${haus-pudding}",
                            '467px',
                            '-477px'
                        ],
                        [
                            "eid265",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${hauszwilling_ohneschaukelCopy}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid269",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${hauszwilling_ohneschaukelCopy}",
                            '372px',
                            '372px'
                        ],
                        [
                            "eid141",
                            "top",
                            0,
                            16000,
                            "linear",
                            "${cosmos_neu}",
                            '-1165px',
                            '-1179px'
                        ],
                        [
                            "eid228",
                            "top",
                            19000,
                            0,
                            "linear",
                            "${leo}",
                            '816px',
                            '816px'
                        ],
                        [
                            "eid230",
                            "top",
                            21500,
                            0,
                            "linear",
                            "${leo}",
                            '816px',
                            '1675px'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${haus-waage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${haus-waage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${haus-waage}",
                            'block',
                            'block'
                        ],
                        [
                            "eid221",
                            "display",
                            15800,
                            0,
                            "linear",
                            "${haus-waage}",
                            'block',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plateau_fin_ohnesterne}",
                            'none',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            33000,
                            0,
                            "linear",
                            "${plateau_fin_ohnesterne}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            35500,
                            0,
                            "linear",
                            "${plateau_fin_ohnesterne}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "top",
                            19000,
                            2251,
                            "linear",
                            "${haus-pudding}",
                            '-188px',
                            '271px'
                        ],
                        [
                            "eid219",
                            "display",
                            0,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            'none',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${perinthia_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${perinthia_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${perinthia_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid223",
                            "top",
                            15000,
                            0,
                            "linear",
                            "${vogelflug_small}",
                            '-604px',
                            '-604px'
                        ],
                        [
                            "eid246",
                            "left",
                            33742,
                            0,
                            "linear",
                            "${plateau_fin_ohnesterne}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid121",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${zwillinge_schaukeln}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            6039,
                            0,
                            "linear",
                            "${zwillinge_schaukeln}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ButtonStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${ButtonStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${ButtonStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${perinthia_headline}",
                            'block',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${perinthia_headline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${cosmos_neu}",
                            '-518px',
                            '-518px'
                        ],
                        [
                            "eid193",
                            "display",
                            0,
                            0,
                            "linear",
                            "${steinbock}",
                            'none',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${steinbock}",
                            'none',
                            'block'
                        ],
                        [
                            "eid191",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${steinbock}",
                            'block',
                            'none'
                        ],
                            [ "eid194", "trigger", 7000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${steinbock}', [] ] ],
                            [ "eid165", "trigger", 19000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${haus-pudding}', [0] ] ]
                    ]
                }
            },
            "haus-steinbock": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus_steinbock_klein',
                            opacity: '1',
                            rect: [0, 0, 854, 1139, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus_steinbock_klein.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 854, 1139]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "haus-zwilling": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus_zwilling_klein',
                            opacity: '1',
                            rect: [0, 0, 854, 1139, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hauszwilling_ohneschaukel.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 854, 1139]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "haus_pudding_spritesheet2_symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['0%', '0%']],
                            id: 'haus_pudding_spritesheet2',
                            type: 'image',
                            rect: [0, 0, 1536, 2048, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus_pudding_spritesheet2-kleiner.jpg', '0px', '0px', '7680px 6144px', '6144px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 8249,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "height",
                            0,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            '0px',
                            '2048px'
                        ],
                        [
                            "eid153",
                            "left",
                            0,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "background-position",
                            3374,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [0,0],
                            [-1536,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid50",
                            "background-position",
                            3749,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-1536,0],
                            [-3072,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid51",
                            "background-position",
                            4124,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-3072,0],
                            [-4608,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid52",
                            "background-position",
                            4499,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-4608,0],
                            [-6144,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid53",
                            "background-position",
                            4874,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-6144,0],
                            [0,-2048],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid54",
                            "background-position",
                            5249,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [0,-2048],
                            [-1536,-2048],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid55",
                            "background-position",
                            5624,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-1536,-2048],
                            [-3072,-2048],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid56",
                            "background-position",
                            5999,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-3072,-2048],
                            [-4608,-2048],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid57",
                            "background-position",
                            6374,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-4608,-2048],
                            [-6144,-2048],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid58",
                            "background-position",
                            6749,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-6144,-2048],
                            [0,-4096],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid59",
                            "background-position",
                            7124,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [0,-4096],
                            [-1536,-4096],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid60",
                            "background-position",
                            7499,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-1536,-4096],
                            [-3072,-4096],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid61",
                            "background-position",
                            7874,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-3072,-4096],
                            [-4608,-4096],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid62",
                            "background-position",
                            8249,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            [-4608,-4096],
                            [-6144,-4096],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid47",
                            "width",
                            0,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            '0px',
                            '1536px'
                        ],
                        [
                            "eid164",
                            "top",
                            0,
                            0,
                            "linear",
                            "${haus_pudding_spritesheet2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Haus_Krebs": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '214px', '851px', '726px', 'auto', 'auto'],
                            id: 'haus_krebs_klein-new',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/haus_krebs_klein-new.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '854px', '1139px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("start_edgeActions.js");
})("EDGE-4595408");
