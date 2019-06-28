import _ from 'lodash';
import './style.css';
import Icon from './me.jpg';
import Data from './data.xml';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello','Spring'],' ');
    element.classList.add('hello');

    //添加图像
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());