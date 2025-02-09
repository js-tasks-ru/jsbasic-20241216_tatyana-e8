import createElement from '../../assets/lib/create-element.js';
<<<<<<< HEAD
import escapeHtml from '../../assets/lib/escape-html.js';

let categories = [
  {
    id: '',
    name: 'All'
  },
  {
    id: 'salads', // уникальный идентификатор категории
    name: 'Salads' // имя категории для отображения
  },
  {
    id: 'soups',
    name: 'Soups'
  },
  // и другие...
];

let ribbonMenu = new RibbonMenu(categories);
=======
>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
<<<<<<< HEAD
=======

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
    this.render();
    this.addEventListeners();
    this.value = '';
  }
<<<<<<< HEAD
=======

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
  render() {
    this.elem = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
        </button>
        <nav class="ribbon__inner"></nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
        </button>
      </div>
    `);
<<<<<<< HEAD
=======

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
    for (let category of this.categories) {
      let categoryElem = createElement(`<a href="#" class="ribbon__item"></a>`);
      categoryElem.textContent = category.name; // insert as text, not as HTML!
      categoryElem.dataset.id = category.id;
      this.elem.querySelector('.ribbon__inner').append(categoryElem);
    }
<<<<<<< HEAD
    this.sub('item').classList.add('ribbon__item_active');
  }
  addEventListeners() {
    this.sub('arrow_left').onclick = (event) => this.onArrowLeftClick(event);
    this.sub('arrow_right').onclick = (event) => this.onArrowRightClick(event);
=======

    this.sub('item').classList.add('ribbon__item_active');
  }

  addEventListeners() {
    this.sub('arrow_left').onclick = (event) => this.onArrowLeftClick(event);
    this.sub('arrow_right').onclick = (event) => this.onArrowRightClick(event);

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
    this.elem.onclick = (event) => {
      let itemElem = event.target.closest('.ribbon__item');
      if (itemElem) {
        this.onItemClick(itemElem);
        event.preventDefault();
      }
    };
<<<<<<< HEAD
    this.sub('inner').onscroll = (event) => this.onScroll(event);
  }
=======

    this.sub('inner').onscroll = (event) => this.onScroll(event);
  }

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
  onArrowRightClick(event) {
    let offset = 350;
    this.sub('inner').scrollBy(offset, 0);
    this.updateArrows();
  }
<<<<<<< HEAD
=======

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
  onArrowLeftClick(event) {
    let offset = 350;
    this.sub('inner').scrollBy(-offset, 0);
    this.updateArrows();
  }
<<<<<<< HEAD
=======

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
  onItemClick(itemElem) {
    let oldActive = this.sub('item_active');
    if (oldActive) {
      oldActive.classList.remove('ribbon__item_active');
    }
<<<<<<< HEAD
    itemElem.classList.add('ribbon__item_active');
    this.value = itemElem.dataset.id;
=======

    itemElem.classList.add('ribbon__item_active');

    this.value = itemElem.dataset.id;

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
    this.elem.dispatchEvent(
      new CustomEvent('ribbon-select', {
        detail: this.value,
        bubbles: true,
      })
    );
  }
<<<<<<< HEAD
  onScroll(event) {
    this.updateArrows();
  }
  sub(ref) {
    return this.elem.querySelector(`.ribbon__${ref}`);
  }
  scrollRight() {
    return this.sub('inner').scrollWidth - (this.sub('inner').scrollLeft + this.sub('inner').clientWidth);
  }
  scrollLeft() {
    return this.sub('inner').scrollLeft;
  }
=======

  onScroll(event) {
    this.updateArrows();
  }

  sub(ref) {
    return this.elem.querySelector(`.ribbon__${ref}`);
  }

  scrollRight() {
    return this.sub('inner').scrollWidth - (this.sub('inner').scrollLeft + this.sub('inner').clientWidth);
  }

  scrollLeft() {
    return this.sub('inner').scrollLeft;
  }

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
  updateArrows() {
    if (this.scrollLeft() > 0) {
      this.sub('arrow_left').classList.add('ribbon__arrow_visible');
    } else {
      this.sub('arrow_left').classList.remove('ribbon__arrow_visible');
    }
<<<<<<< HEAD
=======

>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
    let scrollRight = this.scrollRight();
    scrollRight = scrollRight < 1 ? 0 : scrollRight; // Это нужно для ситуации, когда скролл произошел с погрешностью
    if (scrollRight > 0) {
      this.sub('arrow_right').classList.add('ribbon__arrow_visible');
    } else {
      this.sub('arrow_right').classList.remove('ribbon__arrow_visible');
    }
  }
<<<<<<< HEAD
=======

}
>>>>>>> 1f7d6bd603018849e23eee888ec39f1cffafab4e
