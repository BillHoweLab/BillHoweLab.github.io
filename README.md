# How To Run Our Lab Website Locally

```bash
yarn start
```

or

```bash
python3 -m http.server
```

and open `http://localhost:8000/` in your browser

# How To Add New Papers To Our Lab Website
In `components/paper-list.js`, add your own `<Paper/>` [component](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.).

Please:

* Define your own venue and author constants at the beginning of `paper-list.js` to re-use them for multiple `<Paper/>` entries.
* Upload your paper PDF to `/paper`, if you would like to host an author's copy on the lab website.
* Test locally, merge your commits into `gh-pages` branch when ready, and make sure your merge doesn't break our [remote website](https://billhowelab.github.io/)!

One example `<Paper/>` entry with venue and author `const`s:

```
const INFOVIS_17 = `IEEE Transactions on Visualization and Computer Graphics (Proc. InfoVis'17)`;
const ZENING = 'Zening Qu';

<Paper
    title =
    'Keeping Multiple Views Consistent: Constraints, Validations, and Exceptions in Visualization Authoring'
    authors = {[ZENING, JESSICA_HULLMAN]}
    venue = {INFOVIS_17}
    date = 'Jan 2018'
    pdf = 'paper/2018-Consistency-InfoVis.pdf'
    acceptanceRate = {23}
    award = {' Best Paper Honorable Mention'}
    awardType = {HONORABLE_MENTION}
    video = {`https://vimeo.com/238853591?ref=tw-share`}
    slides = {`https://github.com/ZeningQu/InfoVis17-Consistency-Slides`}
    />
```
