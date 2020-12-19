import React from 'react'

const Home = () => {
    return (
        <div className="home-page-main-container">
            <div className="home-page-left-panel">
                <div className="categories-section">

                    <h2 className="categories-heading">Categories</h2>
                    <ul className="categories-list">
                        <li ><a className="categories-list-item" href="/#">Linux</a></li>
                        <li ><a className="categories-list-item" href="/#">Aws</a></li>
                        <li ><a className="categories-list-item" href="/#">Python</a></li>
                        <li ><a className="categories-list-item" href="/#">Node Js</a></li>
                        <li ><a className="categories-list-item" href="/#">Go Lang</a></li>
                        <li ><a className="categories-list-item" href="/#">Personal</a></li>
                    </ul>
                </div>
            </div>
            <div className="home-page-content">

                <div className="entry-card">
                    <a href="/new">
                        <div className="entry-card-heading-new">
                            <h2 className="entry-card-heading-new-text">Crete new entry</h2>
                        </div>
                        <div className="entry-card-info">
                            <h6 className="entry-card-info-user">Tony</h6>
                            <h6 className="entry-card-info-date">16 Nov 20</h6>
                        </div>
                    </a>
                </div>

                <h2 className="home-page-tittle">Recent</h2>

                <div className="entry-card">
                    <a href="/test">
                        <div className="entry-card-heading">
                            <h2 className="entry-card-heading-text">Heading</h2>
                        </div>
                        <div className="entry-card-info">
                            <h6 className="entry-card-info-user">Tony</h6>
                            <h6 className="entry-card-info-date">19 Dic 20</h6>
                        </div>
                    </a>
                </div>

                <div className="entry-card">
                    <a href="/#">
                        <div className="entry-card-heading">
                            <h2 className="entry-card-heading-text">Heading</h2>
                        </div>
                        <div className="entry-card-info">
                            <h6 className="entry-card-info-user">Tony</h6>
                            <h6 className="entry-card-info-date">19 Dic 20</h6>
                        </div>
                    </a>
                </div>

                <div className="entry-card">
                    <a href="/#">
                        <div className="entry-card-heading">
                            <h2 className="entry-card-heading-text">Heading</h2>
                        </div>
                        <div className="entry-card-info">
                            <h6 className="entry-card-info-user">Tony</h6>
                            <h6 className="entry-card-info-date">19 Dic 20</h6>
                        </div>
                    </a>
                </div>

                <div className="entry-card">
                    <a href="/#">
                        <div className="entry-card-heading">
                            <h2 className="entry-card-heading-text">Heading</h2>
                        </div>
                        <div className="entry-card-info">
                            <h6 className="entry-card-info-user">Tony</h6>
                            <h6 className="entry-card-info-date">19 Dic 20</h6>
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Home
