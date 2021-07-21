import rammbo_home from 'assets/Rammbo-home.gif';
import rammbo_gp from 'assets/Rammbo.gif';
import aster_home from 'assets/home.png';
import aster_gp from 'assets/gameplay.png';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('assets/', false, /\.(png|jpe?g|svg|gif)$/));
console.log(typeof rammbo_home,images['lar_home.png'])
export const cardItems = [
{
    id: 1,
    title: 'Rammbo',
    description: `My very first game of my life,since i was freshmen.
    Theme of this game is about Vietnam war, as you can see above it's inspired by movie 'Rammbo'.
    At first I planed to have many levels,many weapons,many types of enemies,
    but due to lack of my exp and time, it turned out to be a survival game.`,
    gif: rammbo_home,
},
{
    id: 2,
    title: 'Brief Features',
    description: `This game let you play as the protagonist.What you need to do is kill as many as 
    possible to achieve highest score.You are able to shoot, but watch out it's limited.
    You have health bar and armor bar, and can be refill with item boxes drop upon enemy dead.`,
    gif: rammbo_gp,
},
{
    id: 3,
    title: 'Asteriod',
    description: `My second game after the first one, pretty similar to Rammbo.
    Point of this game is to practice writing inheritance of OOP methodology.`,
    gif: aster_home,
},
{
    id: 4,
    title: '',
    description: '',
    gif: aster_gp,
},
];
export const webcardItems = [
{
    id: 1,
    title: 'Authentication',
    description: `Authentication system with mySQL comes with logging system that records any matter for standard website security.`,
    gif: images['lar_login.png'].default,
},
{
    id: 2,
    title: 'Field of View',
    description: `This page allow you to search through items of interest.Each role has different views and actions depends on permissions they've got.
    `,
    gif: images['lar_censor.png'].default,
},
{
    id: 3,
    title: 'Roles Management',
    description: `Authorise or Limit premission to a group of people via role.For instance, "Executive" role is able to see detail only, where as related employee like "clerk" role can add/edit/delete entry.`,
    gif: images['lar_role_change2.png'].default,
},
{
    id: 4,
    title: 'Users Management',
    description: 
    `You can add/edit/delete any user or their role individually.
    `,
    gif: images['lar_profile_list.png'].default,
},
];
export const objectcardItems = [
{
    id: 1,
    title: 'Rammbo',
    description: `My very first game of my life,since i was freshmen.
    Theme of this game is about Vietnam war, as you can see above it's inspired by movie 'Rammbo'.
    At first I planed to have many levels,many weapons,many types of enemies,
    but due to lack of my exp and time, it turned out to be a survival game.`,
    gif: rammbo_home,
},
{
    id: 2,
    title: 'Brief Features',
    description: `This game let you play as the protagonist.What you need to do is kill as many as 
    possible to achieve highest score.You are able to shoot, but watch out it's limited.
    You have health bar and armor bar, and can be refill with item boxes drop upon enemy dead.`,
    gif: rammbo_gp,
},
{
    id: 3,
    title: 'Asteriod',
    description: `My second game after the first one, pretty similar to Rammbo.
    Point of this game is to practice writing inheritance of OOP methodology.`,
    gif: aster_home,
},
{
    id: 4,
    title: '',
    description: '',
    gif: aster_gp,
},
];