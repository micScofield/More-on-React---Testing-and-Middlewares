let reduxStateSchema = {
    "$schema": "https://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "comments",
        "auth"
    ],
    "properties": {
        "comments": {
            "title": "The comments Schema",
            "type": "object",
            "default": {},
            "required": [
                "comments",
                "fetchedComments"
            ],
            "properties": {
                "comments": {
                    "title": "The comments Schema",
                    "type": "array",
                    "default": [],
                    "items": {
                        "title": "A Schema",
                        "type": "string",
                        "examples": [
                            "Comment #1",
                            "Comment #2"
                        ]
                    },
                    "examples": [
                        ["Comment #1",
                            "Comment #2"
                        ]
                    ]
                },
                "fetchedComments": {
                    "title": "The fetchedComments Schema",
                    "type": "array",
                    "default": [],
                    "items": {
                        "title": "A Schema",
                        "type": "string",
                        "examples": [
                            "Comment #1",
                            "Comment #2"
                        ]
                    },
                    "examples": [
                        ["Comment #1",
                            "Comment #2"
                        ]
                    ]
                }
            },
            "examples": [{
                "comments": [
                    "Comment #1",
                    "Comment #2"
                ],
                "fetchedComments": [
                    "Comment #1",
                    "Comment #2"
                ]
            }]
        },
        "auth": {
            "title": "The auth Schema",
            "type": "object",
            "default": {},
            "required": [
                "isAuthenticated"
            ],
            "properties": {
                "isAuthenticated": {
                    "title": "The isAuthenticated Schema",
                    "type": "boolean",
                    "default": false,
                    "examples": [
                        true
                    ]
                }
            },
            "examples": [{
                "isAuthenticated": true
            }]
        }
    },
    "examples": [{
        "comments": {
            "comments": [
                "Comment #1",
                "Comment #2"
            ],
            "fetchedComments": [
                "Comment #1",
                "Comment #2"
            ]
        },
        "auth": {
            "isAuthenticated": true
        }
    }]
}

export default reduxStateSchema