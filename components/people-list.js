'use strict';

// define your own author constants
const ZENING = 'Zening Qu';
const BILL_HOWE = 'Bill Howe';
const EVA = 'Eva Maxfield Brown'

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
      <div className="people">People</div>

      <Person
        name = {ZENING}
        image = 'images/zeningqu.jpg'
        twitter = 'https://twitter.com/zeningqu'
        github = 'https://github.com/light-and-salt'
      />

      <Person
        name = {EVA}
        image = 'images/eva.jpeg'
        twitter = 'https://twitter.com/evamaxfieldb'
        github = 'https://github.com/evamaxfield'
      />

    </div>
  );
}

const domContainer = document.querySelector('#people-list');
ReactDOM.render(e(PeopleList), domContainer);