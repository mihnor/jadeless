Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Value Proposition",
        max: 200,
        autoform: {
            'label-type': 'stacked'
        }
    },
    body: {
        type: String,
        autoform: {
            rows: 3,
            'label-type': 'stacked'
        }
    },
    published: {
        type: Boolean,
        defaultValue: true,
        autoform: {
            type: 'toggle'
        }
    }
}));


CanvasSimple = new Mongo.Collection('canvassimple');

CanvasSimple.attachSchema(new SimpleSchema({

    title: {
        type: String,
        label: "Name of Project",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    field1: {
        type: String,
        label: "Value Proposition",
        autoform: {
            rows: 3,
            'label-type': 'stacked',
            placeholder:"Ser o maior"
        },

    },
    field2: {
        type: String,
        label: "Customer Segments"
    },
    field3: {
        type: String,
        label: "Customer Relationship"
    },
    field4: {
        type: String,
        label: "Channels"
    },
    field5: {
        type: String,
        label: "Key Activities"
    },
    field6: {
        type: String,
        label: "Key Resources"
    },
    field7: {
        type: String,
        label: "Key Partners"
    },
    field8: {
        type: String,
        label: "Cost Structure"
    },
    field9: {
        type: String,
        label: "Revenue Streams"
    },
    lastEdited: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
}));

Canvas = new Mongo.Collection('canvas');

Canvas.attachSchema(new SimpleSchema({

    title: {
        type: String,
        label: "Name of Project",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    valpro: {
        type: String,
        label: "Value Proposition",
        autoform: {
            rows: 3,
            'label-type': 'stacked',
            placeholder:"Ser o maior"
        },

    },
    cusseg: {
        type: String,
        label: "Customer Segments"
    },
    cusrel: {
        type: String,
        label: "Customer Relationship"
    },
    channels: {
        type: String,
        label: "Channels"
    },
    keyact: {
        type: String,
        label: "Key Activities"
    },
    keyres: {
        type: String,
        label: "Key Resources"
    },
    keypar: {
        type: String,
        label: "Key Partners"
    },
    cosstr: {
        type: String,
        label: "Cost Structure"
    },
    revstr: {
        type: String,
        label: "Revenue Streams"
    },
    lastEdited: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
}));
