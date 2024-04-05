'use strict';

// define your own author constants
const BILL_HOWE = 'Bill Howe';
const NIC = 'Nic Weber';
const BERNEASE = 'Bernease Herman';
const BINGBING = 'Bingbing Wen';
const BIN = 'Bin Han';
const EVA = 'Eva Maxfield Brown'
const ISAAC = 'Isaac Slaughter';
const LUCAS = 'Lucas Rosenblatt';
const ROBERT = 'Robert Wolfe';
const YIWEI = 'Yiwei Yang';
const ZENING = 'Zening Qu';

const e = React.createElement;

function Person(props) {
  return (
    <div className="person">

      <a href={props.website}>
        <img className="headshot" src={props.image} alt={props.name}/>
      </a>

      <div className="contact">
        <a className="person-name" href={props.website}>{props.name}</a>
        {props.twitter && <a href={props.twitter}><i class="fa-brands fa-x-twitter"></i></a>}
        {props.github && <a href={props.github}><i class="fab fa-github-alt"></i></a>}
      </div>

    </div>
  );
}

function PeopleList() {
  return (
    <div>
      <div className="subtitle">People</div>

      <div className="people-list">
        <Person
          name = {BILL_HOWE}
          image = 'images/billhowe.png'
          twitter = 'https://twitter.com/billghowe'
          github = 'https://github.com/billhowe'
          website = 'https://faculty.washington.edu/billhowe/'
        />

        <Person
          name = {NIC}
          image = 'images/nic.jpg'
          twitter = 'https://twitter.com/nniiicc'
          github = 'https://github.com/nniiicc'
          website = 'https://nicweber.info/'
        />

        <Person
          name = {BERNEASE}
          image = 'images/bernease.png'
          twitter = 'https://twitter.com/bernease'
          github = 'https://github.com/bernease'
          website = 'https://www.berneaseherman.com'
        />

        <Person
          name = {BIN}
          image = 'images/bin.jpeg'
          twitter = 'https://twitter.com/Volitional_AI'
          github = 'https://github.com/BeanHam'
          website = 'https://beanham.github.io/'
        />

        <Person
          name = {BINGBING}
          image = 'images/bingbing.png'
          twitter = 'https://twitter.com/bingbingwen1'
          github = 'https://github.com/bbwen'
          website = 'https://bbwen.github.io/'
        />

        <Person
          name = {EVA}
          image = 'images/eva.jpeg'
          twitter = 'https://twitter.com/evamaxfieldb'
          github = 'https://github.com/evamaxfield'
          website = 'https://evamaxfield.github.io/'
        />

        <Person
          name = {ISAAC}
          image = 'images/isaac.jpg'
          github = 'https://github.com/isaacOnline'
          website = 'https://www.slaughter.page/'
        />

        <Person
          name = {LUCAS}
          image = 'images/lucas.jpeg'
          // twitter = 'https://twitter.com/billghowe'
          github = 'https://github.com/lurosenb'
          website = 'https://lucasrosenblatt.com/'
        />

        <Person
          name = {ROBERT}
          image = 'images/robert.jpeg'
          twitter = 'https://twitter.com/wolferobert3'
          github = 'https://github.com/wolferobert3'
          website = 'https://wolferobert3.github.io/'
        />

        <Person
          name = {YIWEI}
          image = 'images/yiwei.jpg'
          twitter = 'https://twitter.com/yanyiwei_44'
          github = 'https://github.com/yanyiwei'
          website = 'https://yanyiwei.github.io/'
        />

        <Person
          name = {ZENING}
          image = 'images/zeningqu.jpg'
          twitter = 'https://twitter.com/zeningqu'
          github = 'https://github.com/light-and-salt'
          website = 'https://light-and-salt.github.io/'
        />
      </div>

    </div>
  );
}

const domContainer = document.querySelector('#People');
ReactDOM.render(e(PeopleList), domContainer);
