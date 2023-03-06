Blockly.defineBlocksWithJsonArray([{
    "type": "assumeguarantee",
    "message0": "always assume %1 %2 %3 always guarantee %4 %5 ",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "assume"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "guarantee"
        }
    ],
    "colour": '#e6b710',
    "tooltip": "",
    "helpUrl": ""
},
    {
        "type": "new",
        "message0": "[ %1 <- color %2 %3 %4 ]",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "shapes",
                "options": [
                    [
                        "cubeColor",
                        "cubeColor"
                    ],
                    [
                        "sphereColor",
                        "sphereColor"
                    ],
                    [
                        "polyColor",
                        "polyColor"
                    ]
                ]
            },
            {
                "type": "field_number",
                "name": "fst",
                "value": 0,
                "min": 0,
                "max": 255
            },
            {
                "type": "field_number",
                "name": "snd",
                "value": 0,
                "min": 0,
                "max": 255
            },
            {
                "type": "field_number",
                "name": "trd",
                "value": 0,
                "min": 0,
                "max": 255
            }
        ],
        "output": null,
        "colour": '#34bf4b',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "start",
        "message0": "%1",
        "args0": [
            {
                "type": "input_value",
                "name": "NAME"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#e6b710',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "mut_ex",
        "message0": "! (  %1 && %2 ) ",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "in1",
                "options": [
                    [
                        "pressR(e)",
                        "pressR(e)"
                    ],
                    [
                        "pressL(e)",
                        "pressL(e)"
                    ],
                    [
                        "pressSpace(e)",
                        "pressSpace(e)"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "in2",
                "options": [
                    [
                        "pressR(e)",
                        "pressR(e)"
                    ],
                    [
                        "pressL(e)",
                        "pressL(e)"
                    ],
                    [
                        "pressSpace(e)",
                        "pressSpace(e)"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#e8860e',
        "tooltip": "Mutual Exclusion",
        "helpUrl": ""
    },
    {
        "type": "logic_2input",
        "message0": "( %1 %2 %3 %4 %5 )",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "left"
            },
            {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                        "&&",
                        "&&"
                    ],
                    [
                        "||",
                        "||"
                    ],
                    [
                        "U",
                        "U"
                    ],
                    [
                        "W",
                        "W"
                    ],
                    [
                        "->",
                        "->"
                    ],
                    [
                        "<->",
                        "<->"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "right"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": '#e8860e',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "logic_1input",
        "message0": "( %1 %2 %3 %4 )",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                        "F",
                        "F"
                    ],
                    [
                        "G",
                        "G"
                    ],
                    [
                        "X",
                        "X"
                    ],
                    [
                        "!",
                        "!"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "right"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": '#e8860e',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "update",
        "message0": "[ %1 %2 <- %3 %4 ]",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "NAME"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "right"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": '#34bf4b',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sinsaw",
        "message0": " %1 ( %2 ) ",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "sin",
                "options": [
                    [
                        "sin",
                        "sin"
                    ],
                    [
                        "saw",
                        "saw"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "NAME"
            }
        ],
        "output": null,
        "colour": '#4a88d9',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "vars",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "vars",
                "options": [
                    [
                        "count",
                        "count"
                    ],
                    [
                        "t",
                        "t"
                    ],
                    [
                        "rand",
                        "rand"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "math",
        "message0": "%1 %2 %3 %4",
        "args0": [
            {
                "type": "input_value",
                "name": "left"
            },
            {
                "type": "field_dropdown",
                "name": "ops",
                "options": [
                    [
                        "+",
                        "+"
                    ],
                    [
                        "-",
                        "_"
                    ],
                    [
                        "*",
                        "*"
                    ],
                    [
                        "/",
                        "/"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "right"
            }
        ],
        "output": null,
        "colour": '#7352bf',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "cube_rot",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "cube_rot",
                "options": [
                    [
                        "cube.rotation.x",
                        "cube.rotation.x"
                    ],
                    [
                        "cube.rotation.y",
                        "cube.rotation.y"
                    ],
                    [
                        "cube.rotation.z",
                        "cube.rotation.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sphere_rot",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "sphere_rot",
                "options": [
                    [
                        "sphere.rotation.x",
                        "sphere.rotation.x"
                    ],
                    [
                        "sphere.rotation.y",
                        "sphere.rotation.y"
                    ],
                    [
                        "sphere.rotation.z",
                        "sphere.rotation.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "poly_rot",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "poly_rot",
                "options": [
                    [
                        "polygon.rotation.x",
                        "polygon.rotation.x"
                    ],
                    [
                        "polygon.rotation.y",
                        "polygon.rotation.y"
                    ],
                    [
                        "polygon.rotation.z",
                        "polygon.rotation.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "cube_scale",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "cube_scale",
                "options": [
                    [
                        "cube.scale.x",
                        "cube.scale.x"
                    ],
                    [
                        "cube.scale.y",
                        "cube.scale.y"
                    ],
                    [
                        "cube.scale.z",
                        "cube.scale.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sphere_scale",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "sphere_scale",
                "options": [
                    [
                        "sphere.scale.x",
                        "sphere.scale.x"
                    ],
                    [
                        "sphere.scale.y",
                        "sphere.scale.y"
                    ],
                    [
                        "sphere.scale.z",
                        "sphere.scale.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "poly_scale",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "poly_scale",
                "options": [
                    [
                        "polygon.scale.x",
                        "polygon.scale.x"
                    ],
                    [
                        "polygon.scale.y",
                        "polygon.scale.y"
                    ],
                    [
                        "polygon.scale.z",
                        "polygon.scale.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "cube_pos",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "cube_pos",
                "options": [
                    [
                        "cube.pos.x",
                        "cube.position.x"
                    ],
                    [
                        "cube.pos.y",
                        "cube.position.y"
                    ],
                    [
                        "cube.pos.z",
                        "cube.position.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sphere_pos",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "sphere_pos",
                "options": [
                    [
                        "sphere.pos.x",
                        "sphere.position.x"
                    ],
                    [
                        "sphere.pos.y",
                        "sphere.position.y"
                    ],
                    [
                        "sphere.pos.z",
                        "sphere.position.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "poly_pos",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "poly_pos",
                "options": [
                    [
                        "polygon.pos.x",
                        "polygon.position.x"
                    ],
                    [
                        "polygon.pos.y",
                        "polygon.position.y"
                    ],
                    [
                        "polygon.pos.z",
                        "polygon.position.z"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#20b0d4',
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "insignal",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "signIn",
                "options": [
                    [
                        "pressL(e)",
                        "pressL(e)"
                    ],
                    [
                        "pressR(e)",
                        "pressR(e)"
                    ],
                    [
                        "pressSpace(e)",
                        "pressSpace(e)"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": '#ba56a3',
        "tooltip": "Input",
        "helpUrl": ""
    },
    {
        "type": "var_man",
        "message0": "[ %1 <- %2 %3 %4 %5 ]",
        "args0": [
            {
                "type": "input_value",
                "name": "var"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "var1"
            },
            {
                "type": "field_dropdown",
                "name": "op",
                "options": [
                    [
                        "+",
                        "+"
                    ],
                    [
                        "-",
                        "-"
                    ],
                    [
                        "*",
                        "*"
                    ]
                ]
            },
            {
                "type": "field_number",
                "name": "NAME",
                "value": 0
            }
        ],
        "output": null,
        "colour": '#34bf4b',
        "tooltip": "",
        "helpUrl": ""
    }
]);
