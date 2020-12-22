import React from 'react';
import Logo from '../Logo/Logo';
import classes from './About.module.css';
const about = ( props ) => {

    return(
        <div className='uk-container'>
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center uk-animation-scale-up uk-margin-top">
                <article className="uk-comment">
                    <header className="uk-comment-header">
                        <div className="uk-grid-medium uk-flex-middle">
                            <div className={classes.Logo}>
                                <Logo logo='hashcode'/>
                            </div>
                            <div className="uk-width-expand">
                                <h4 className="uk-comment-title uk-margin-remove">
                                    <div className='uk-flex'>
                                        <div className={classes.LogoSmall}>
                                            <Logo/>
                                        </div>
                                        <a class="uk-link-reset uk-margin-small-left" href="/">
                                            DiveLog
                                        </a>
                                    </div>
                                </h4>
                                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                    <li><a href="https://github.com/HashCodeCooperative" uk-icon="icon: github">#Code Team </a></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <div className="uk-comment-body">
                        <p>An easy application for divers developed by the #Code team.</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default about;