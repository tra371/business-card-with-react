import './InfoSection.css'

function InfoSection() {
    return (
        <section className="card-section">
            <article className="article-about">
                <h3>About</h3>
                <p>I am a backend developer specializing in Python and Django framework. I'm learning Reactjs so I can write myself some dapp or anything that's associated with decentralized tech.</p>
            </article>
            <article className="article-interests">
                <h3>Interests</h3>
                <p>I'm starting to learn and interested in web3 and decentralized technology. I have worked with some decentralized networks such as Matrix and Mastodon.</p>
            </article>
        </section>
    )
}

export default InfoSection