class NitroBlock { //In both instances, NitroBlock will be the name in both instances
    getInfo() {
        let substringy = {
            "opcode": "substringy", //This will be the ID code for the block
            "blockType": "reporter", //This can either be Boolean, reporter, command, or hat
            "text": "letters [num1] through [num2] of [string]", //This is the block text, and how it will display in the Scratch interface
            "arguments": { //Arguments are the input fields in the block. In the block text, place arguments in square brackets with the corresponding ID
                "num1": { //This is the ID for your argument
                    "type": "number", //This can be either Boolean, number, or string
                    "defaultValue": "2" //This is the default text that will appear in the input field, you can leave this blank if you wish
                },
                "num2": {
                    "type": "number",
                    "defaultValue": "5"
                },
                "string": {
                    "type": "string",
                    "defaultValue": "hello world"
                }
            }
        };
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [
                substringy,
            ],
            "menus": { //we will get back to this in a later tutorial
            }
        };
    }
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
}
Scratch.extensions.register(new NitroBlock());