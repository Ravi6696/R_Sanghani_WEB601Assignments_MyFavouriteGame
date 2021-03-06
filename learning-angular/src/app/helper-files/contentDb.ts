import { Content } from "./content-interface";

export const GAMES: Content[] = [{
  id: 0,
  title: "Cricket",
  description: "Most Popular Game",
  creator: "South England",
  imgURL: "https://icricketcritique.com/wp-content/uploads/2021/10/News-from-around-the-cricketing-world-2.jpeg",
  type: "Outdoor",
  tags: ["cricketforlife", "favouritegame"]
}, {
  id: 1,
  title: "Chess",
  description: "Board game played between two players",
  creator: "India",
  imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_board_opening_staunton.jpg",
  tags: ["BoardGame"," abstractstrategygame"]
}, {
  id: 2,
  title: "Hockey",
  description: "Game played with curved sticks and a ball",
  creator: "England",
  imgURL: "https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2021/12/04/field-hockey-equipment.jpg",
  type: "Outdoor",
  tags: ["icehockey", "hockeyislife"]
}, {
  id: 3,
  title: "FootBall",
  description: "Game between two teams to score goal",
  creator: "Ebenezer Cobb Morley",
  imgURL: "",
  type: "Outdoor",
  tags: ["premierleague","footballplayer"]
}, {
  id: 4,
  title: "Table Tennis",
  description: "A sport in which two or four players hit a lightweight ball",
  creator: "Englishman David Foster",
  imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vYtb6c-cVp3q3C_rwtqJvFTdfdXrfOZMoQ&usqp=CAU",
  type: "Indoor",
  tags: ["pingpong","tabletennistournament "]
}, {
  id: 5,
  title: "Kabbadi",
  description: "Played between two teams of seven players",
  creator: "India",
  imgURL: "",
  tags: ["kabaddileague","indiankabaddi"]
}, {
  id: 6,
  title: "BasketBall",
  description: "A team sport in which two teams, most commonly of five players each",
  creator: "James Naismith",
  imgURL: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/isy0qmbfazbupgmsgpnr/basektball-net",
  type: "Indoor",
  tags: ["nbabasketball","basketballgame"]
}];