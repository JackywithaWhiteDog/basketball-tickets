// data for table

function createData(name, calories, fat, carbs, protein) {
    return [ name, calories, fat, carbs, protein]
}

function createTitle(name, calories, fat, carbs, protein, button) {
    return [ name, calories, fat, carbs, protein, button]
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const title = createTitle('Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)', 'Favorite');

// data for PlayerSelect

const Player_pos = {name:"position", items:["大前鋒","小前鋒","中鋒","控球後衛","得分後衛"], default:"All"};
const Player_team = {name:"team", items:["team1","team2","team3","team4"], default:"All"};
const Player_order = {name:"sort by", items:["performance"], default:"name"};

// data for TeamSelect

const Team_order = {name:"sort by", items:["win rate"], default:"name"};

// data for GameSelect

const Game_team1 = {name:"team1", items:["team1","team2","team3","team4"], default:"All"};
const Game_team2 = {name:"team2", items:["team1","team2","team3","team4"], default:"All"};
const Game_order = {name:"sort by", items:[], default:"date"};

export {rows, title, Player_pos, Player_team, Player_order, Team_order, Game_team1, Game_team2, Game_order};