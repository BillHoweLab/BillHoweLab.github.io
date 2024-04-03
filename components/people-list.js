'use strict';

// define your own author constants
const BILL_HOWE = 'Bill Howe';
const BINGBING = 'Bingbing Wen';
const BIN = 'Bin Han';
const EVA = 'Eva Maxfield Brown'
const ISAAC = 'Isaac Slaughter';
const YIWEI = 'Yiwei Yang';
const ZENING = 'Zening Qu';

const e = React.createElement;

function Person(props) {
  return (
    <div className="person">

      {/* add image */}
      <img class="headshot" src={props.image} alt={props.name} />
      <div className="person-name">{props.name}</div>

      <div className="links">
        {<a href={props.twitter}>Twitter</a>}

        {<a href={props.github}>GitHub</a>}
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
        />

        <Person
          name = {BILL_HOWE}
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