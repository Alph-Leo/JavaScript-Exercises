let prompt = require("prompt-sync")();
let log = console.log;

for(let row = 0; row < 8; row++){
    let row = ""
    for(column = 0; column < 8; column++){
        if(row % 2 == 0){
             row += " * "
            } else if(row % 2 != 0){
            row += "  *"
            }

    }
    log(row)
}
