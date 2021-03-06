import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ui from 'redux-ui'
import { Link } from "react-router-dom";
import '../../js/bootstrap.min.js';
import '../../js/animation.js';
import '../../js/motion.js';
import '../../js/counter.js';
// import '../../sound/typing.mp3';
import '../../js/typewrite.js';
import '../../js/custommAnimations.js';
import Services from '../../common/services/services';
import { User } from '../model';
import * as $ from 'jquery';

interface WelcomeProps {
    totalUsers: number;
    currentUser: User;
    createEliteUserProfile: (currentUser: User) => any;
    isUserCreated: boolean;
};
class Welcome extends React.Component<WelcomeProps> {
    constructor(props, context) {
        super(props, context);

    }
    componentDidMount() {
        Services.getApplicationConfigurations().then((appConfig: any) => {
<<<<<<< HEAD
            var actions = [];
            var lines = appConfig.WelcomeText.split("\n");
            lines.forEach((line, index) => {
                actions.push({
                    type: line + ' '
                });
                if(index < lines.length -1 && line && line.length > 0){
                    actions.push({
                        type: "<br>"
                    });
                }
            });
            
            $('#typewriteText').typewrite({
                actions: actions
=======
            $('#typewriteText').typewrite({
                actions: [
                    { type: appConfig.WelcomeText }
                ]
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
            });
        })
    }
    render() {
        const { totalUsers, currentUser, createEliteUserProfile } = this.props;
        return (<div className="header-title person_name">
            <h1 className="title"></h1>
            <p className="first-text">WELCOME</p>
            <p className="next-text">{currentUser.firstName || currentUser.displayName}</p>
            <div id="typewriteText" style={{ animationDelay: "10s" }}></div>
            <div className="col-md-12 intro_actionbox testdrive_actionbox">
                <div className="button type1 pull-right animated_button letsgo">
<<<<<<< HEAD
                    <input value="Let's go!" type="button" onClick={() => createEliteUserProfile(currentUser)} />
=======
                    <input value="Let's go" type="button" onClick={() => createEliteUserProfile(currentUser)} />
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                </div>
            </div>
        </div>)
    }
}

export default Welcome;