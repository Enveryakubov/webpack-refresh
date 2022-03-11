import Post from './Post';
import './styles/styles.css';
import './styles/test.scss';
import png from '@assets/mario.png';
import * as $ from 'jquery';

const post = new Post('Enver', png);

$('pre').html(post.toString());

(async () => {
  console.log('Async is working!');
})();

class Util {
  static id = Date.now();
}

console.log(Util.id);
