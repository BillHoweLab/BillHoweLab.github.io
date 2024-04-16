# Volitional AI Lab Website
https://billhowelab.github.io/

## To Run Locally
```bash
yarn start
```
and open `http://localhost:8000/` in your browser

## To Add Papers
1. In `components/paper-list.js`, define venue and author constants, add a new `<Paper/>` under one of the categories (`Conference Papers`, `Workshop Papers` etc.) in reverse chronological order, and fill out the optional properties:
    ```
    const VENUE = `IEEE Conference`;
    const AUTHOR = 'Bill Howe';

    <Paper
        title = ''
        authors = {[AUTHOR]}
        venue = {VENUE}
        date = ''
        pdf = 'paper/[add_your_own].pdf'
        acceptanceRate = {}
        awardType = {}
        video = {``}
        slides = {``}
    />
    ```
2. Add the paper PDF to `/paper` the folder
3. Run the website locally and make sure everything looks right to you and all the links are working
4. Commit your changes to the `gh-pages` branch, or send a pull request to merge into `gh-pages`
