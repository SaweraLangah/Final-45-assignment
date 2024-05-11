"use strict";
//Assignment # 44
function make_sandwitch(...items) {
    console.log(`Making a sandwich with: ${items.join(" , ")}.`);
}
make_sandwitch("ham", "cheese");
make_sandwitch("turkey", "lettuce", "tomato");
make_sandwitch("avocado", "sprouts", "mustrad", "mayo");
