function Paper(props) {
    const authorCount = props.authors.length;
    return (
        <div className="paper">
            <div className="paper-title">{props.title}.</div>

            <div>{props.authors.map((author, index) => {
                return (
                <span key = {index} className={author === ZENING ? "me" : ""}>
                    {author}
                    {(index + 1) === authorCount ? '.' : ', '}
                </span>
                );
            })}</div>

            <div><i>{props.venue + `, `}</i>{props.date}.</div>

            <div>{props.acceptanceRate && `[${props.acceptanceRate}% Acceptance Rate]`}</div>

            {props.awardType === HONORABLE_MENTION &&
                <div className="honorable-mention">
                <i className="fas fa-award"></i>
                <span>{props.award}</span>
                </div>
            }

            <div className="links">
                {props.pdf && <a href={props.pdf}>PDF</a>}

                {props.video && <span>{`  `}<a href={props.video}>VIDEO</a></span>}

                {props.slides && <span> {`  `} <a href={props.slides}>SLIDES</a> </span>}

                {props.code && <span> {`  `} <a href={props.code}>CODE</a> </span>}
            </div>
        </div>
    );
}
