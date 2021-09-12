import js from './img/js.png';
import css from './img/css.png';
import html from './img/html.png';
import git from './img/git.png';
import wp from './img/wp.png';
import ps from './img/ps.png';
import react from './img/react.png';
import redux from './img/redux.png';
import sc from './img/styled.png';
import ubuntu from './img/ubuntu.png';
import mongo from './img/mongo.png';
import { v4 as uuidv4 } from 'uuid';

class Technology {
   
    constructor(name, src, id, width){
        this.name = name;
        this.src = src;
        this.id = id;
        this.width = width; 
    }
}

const tech1 = new Technology ('Javascript', js, uuidv4() ,'75%' );
const tech2 = new Technology ('Css 3', css,  uuidv4() ,'80%' );
const tech3 = new Technology ('HTML 5', html,  uuidv4() ,'85%' );
const tech4 = new Technology ('React', react, uuidv4() ,'70%' );
const tech5 = new Technology ('Redux', redux,  uuidv4() ,'70%' );
const tech6 = new Technology ('Styled Components', sc,  uuidv4() ,'85%' );
const tech7 = new Technology ('Git', git,  uuidv4() ,'70%' );
const tech8 = new Technology ('Ubuntu linux', ubuntu, uuidv4() ,'65%' );
const tech9 = new Technology ('MongoDB', mongo, uuidv4() ,'65%' );
const tech10 = new Technology ('Photoshop', ps, uuidv4() ,'85%' );
const tech11 = new Technology ('Wordpress CMS', wp, uuidv4() ,'90%' );


export  const techs = [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10, tech11];