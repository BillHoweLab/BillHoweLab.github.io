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

      <a className="person-name" href={props.website}>{props.name}</a>

      <a href={props.twitter}><i class="fa-brands fa-x-twitter"></i></a>

      <a href={props.github}><i class="fab fa-github-alt"></i></a>
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
        />

        <Person
          name = {NIC}
          image = 'images/nic.jpg'
          twitter = 'https://twitter.com/billghowe'
          github = 'https://github.com/billhowe'
          website = 'https://nicweber.info/'
        />

        <Person
          name = {BERNEASE}
          image = 'images/billhowe.png'
          twitter = 'https://twitter.com/billghowe'
          github = 'https://github.com/billhowe'
        />

        <Person
          name = {EVA}
          image = 'images/eva.jpeg'
          twitter = 'https://twitter.com/evamaxfieldb'
          github = 'https://github.com/evamaxfield'
        />

        <Person
          name = {ISAAC}
          image = 'images/isaac.jpg'
          twitter = 'https://twitter.com/evamaxfieldb'
          github = 'https://github.com/evamaxfield'
        />

        <Person
          name = {ZENING}
          image = 'images/zeningqu.jpg'
          twitter = 'https://twitter.com/zeningqu'
          github = 'https://github.com/light-and-salt'
        />
      </div>

    </div>
  );
}

const domContainer = document.querySelector('#people-list');
ReactDOM.render(e(PeopleList), domContainer);