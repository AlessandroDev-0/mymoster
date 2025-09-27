const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
import Player from  "../classes/Player.js"


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const Player = new Player();