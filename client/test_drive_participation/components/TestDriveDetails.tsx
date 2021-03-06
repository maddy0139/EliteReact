import Promise from "ts-promise";
import * as React from 'react';
import { Link } from "react-router-dom";
import { TestDriveInstance } from '../model';
import Services from '../../common/services/services';
import { EliteProfile } from '../../home/model';
import { Messages, ColumnsValues } from '../../common/services/constants';
import ui from 'redux-ui';
<<<<<<< HEAD
import Popup from '../../common/components/Popups';
import * as $ from 'jquery';
=======
import Popup from 'react-popup';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
interface TestDriveDetailsProps {
    testDriveInstance: TestDriveInstance;
    createTestDriveInstance: (testDriveInstance: TestDriveInstance) => any;
    updateUI: (any) => any;
    ui: any;
};
@ui({
    state: {
        showPopUp: false,
        requirmentMessage: ''
    }
})
class TestDriveDetails extends React.Component<TestDriveDetailsProps> {
    constructor(props, context) {
        super(props, context);
        this.participate = this.participate.bind(this);
        this.isUserEligible = this.isUserEligible.bind(this);
    }

    checkForElements(array1: string[], array2: string[]) {
        var matchedElements = [];
        var matchedElement;
        array1.filter((item1: any) => {
            matchedElement = array2.filter((item2: any) => {
                return item1.Label == item2.Label;
            })
            matchedElement && matchedElement.length && matchedElements.push(matchedElement);
        });
        return matchedElements.length == array1.length;
    }   

    isUserEligible() {
        return new Promise((resolve, reject) => {
            var ctx = this;
            Services.getEliteProfileByID().then((user: EliteProfile) => {
<<<<<<< HEAD
                var message = Messages.TEST_DRIVE_PARTICIPATION_ERROR + '<br>';
=======
                var message = Messages.TEST_DRIVE_PARTICIPATION_ERROR;
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                var isUserEligible: boolean = true;
                var matchedLocation = ctx.props.testDriveInstance.location.filter((location: any) => {
                    return location.Label == user.location;
                });
                var matchedDepartment = ctx.props.testDriveInstance.department.filter((department: any) => {
                    return department.Label == user.department;
                });

<<<<<<< HEAD
                if ((ctx.props.testDriveInstance.location &&
                    ctx.props.testDriveInstance.location.length > 0) && (!matchedLocation || !matchedLocation.length)) {
                    message += Messages.TEST_DRIVE_LOCATION_ERROR + '<br>';
=======
                if (ctx.props.testDriveInstance.location && !matchedLocation || !matchedLocation.length) {
                    message += Messages.TEST_DRIVE_LOCATION_ERROR + '\n';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                    isUserEligible = false;
                }
                var matchedDevices = [];
                var matchedDevice;

<<<<<<< HEAD
                if ((ctx.props.testDriveInstance.requiredDevices &&
                    ctx.props.testDriveInstance.requiredDevices.length > 0)
                    && (!ctx.checkForElements(ctx.props.testDriveInstance.requiredDevices, user.availableDevices))) {
                    message += Messages.TEST_DRIVE_DEVICE_ERROR + '<br>';
                    isUserEligible = false;
                }

                if ((ctx.props.testDriveInstance.requiredOs && ctx.props.testDriveInstance.requiredOs.length > 0)
                    && (!ctx.checkForElements(ctx.props.testDriveInstance.requiredOs, user.availableOS))) {
                    message += Messages.TEST_DRIVE_OS_ERROR + '<br>';
=======
                if (ctx.props.testDriveInstance.requiredDevices && ctx.props.testDriveInstance.requiredDevices.length
                         &&  !ctx.checkForElements(ctx.props.testDriveInstance.requiredDevices, user.availableDevices)) {
                    message += Messages.TEST_DRIVE_DEVICE_ERROR + '\n';
                    isUserEligible = false;
                }

                if (ctx.props.testDriveInstance.requiredOs && ctx.props.testDriveInstance.requiredOs.length
                         && !ctx.checkForElements(ctx.props.testDriveInstance.requiredOs, user.availableOS)) {
                    message += Messages.TEST_DRIVE_OS_ERROR + '\n';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                    isUserEligible = false;
                }

                if ((ctx.props.testDriveInstance.department && ctx.props.testDriveInstance.department.length > 0)
                && (!matchedDepartment || !matchedDepartment.length)) {
                    message += Messages.TEST_DRIVE_DEPARTMENT_ERROR + '<br>';
                    isUserEligible = false;
                }
                resolve({ isUserEligible, message });
            })
        });
    }

    participate() {
        var ctx = this;
        const { maxTestDrivers, participants } = this.props.testDriveInstance;
<<<<<<< HEAD
        if (maxTestDrivers && maxTestDrivers < participants + 1) {
            $("#popupMaxTestDrivers").trigger('click');
        } else {
            this.isUserEligible().then((data: any) => {
                this.props.updateUI({ requirmentMessage: data.message });
                if (data.isUserEligible) {
                    ctx.props.createTestDriveInstance(this.props.testDriveInstance)
                } else {
                    $("#popupHitTheBreaks").trigger('click');
=======
        if (maxTestDrivers < participants + 1) {
            Popup.alert(Messages.MAX_TEST_DRIVER_LIMIT_REACHED);
        } else {
            this.isUserEligible().then((data: any) => {
                if (data.isUserEligible) {
                    ctx.props.createTestDriveInstance(this.props.testDriveInstance)
                } else {
                    Popup.plugins().prompt('Hit the brakes!', data.message);
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                }
            })
        }
    }

    componentDidMount() {
        const { testDriveInstance } = this.props;
        var testCaseCompletion = (testDriveInstance.numberOfTestCasesCompleted || 0) / (testDriveInstance.testCaseIDs.length || 1);
        var pointsEarned = testDriveInstance.currentPoint / (testDriveInstance.maxPoints || 1)
        Services.loadProgressBar("completed-test-cases-canvas", testCaseCompletion, 150);
        Services.loadProgressBar("test-drive-points-canvas", pointsEarned, 150);
<<<<<<< HEAD
=======

        /** Prompt plugin */
        Popup.registerPlugin('prompt', function (title, content, callback) {
            let promptValue = null;
            let promptChange = function (value) {
                promptValue = value;
            };

            this.create({
                title: title,
                content: content,
                buttons: {
                    left: [{
                        text: 'Test drive details',
                        action: function () {
                            Popup.close();
                        }
                    }],
                    center: [],

                    right: [{
                        text: 'Test drive central',
                        action: function () {
                            window.location.hash = "/testdrives";
                            Popup.close();
                        }
                    }, {
                        text: 'Edit profile',
                        action: function () {
                            window.location.hash = "/profile";
                            Popup.close();
                        }
                    }]
                }
            });
        });

        /** Call the plugin */
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
    }

    hitTheBreaksButtons = [{
        name: 'Dashboard',
        link: '/'
    },
    {
        name: 'Test Drive Center',
        link: '/testdrives/'
    },
    {
        name: 'Edit Profile',
        link: '/profile/'
    },
    ]

    alertButtons = [{
        name: 'Ok',
        link: '#'
    }
    ]

    render() {
        const { testDriveInstance, createTestDriveInstance, ui, updateUI } = this.props;
        var testCaseCompletion = (testDriveInstance.numberOfTestCasesCompleted || 0) / (testDriveInstance.testCaseIDs.length || 1) * 100;
        var pointsEarned = testDriveInstance.currentPoint

        return (<div className="container detailed_box">

            <div className="row">
<<<<<<< HEAD
                <Popup popupId="HitTheBreaks" title={"Hit the breaks!"}
                    body={ui.requirmentMessage}
                    buttons={this.hitTheBreaksButtons} />
                <Popup popupId="MaxTestDrivers" title={"Alert"}
                    body={Messages.MAX_TEST_DRIVER_LIMIT_REACHED} buttons={this.alertButtons} />

                <div className="container header_part">
                    <h2 className="header_prevlink">
                    <a href="javascript:;" onClick={() => Services.goBack()}><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                    {testDriveInstance.title}  
                    </a>
                    </h2>
                    <h4 className="cancel-btn"><Link to={"/"}>CANCEL</Link></h4>
                </div>
                <div className="container-fluid testdrive-detail_first-time">
                    <div className="wrapper">
                        <div className="col-md-12">
                            <div className="row">
                                {/* <div className="col-md-4">
                                    <span className="orange">
                                        <i>DESCRIPTION :</i>
                                    </span>
                                </div> */}
                                <div className="col-md-3 pull-right">

                                    <div className="row social_box">
                                        {/* <a href={"#/reportbug/"+testDriveInstance.testDriveID} title={Messages.REPORT_BUG_TITLE}                                            >
                                            <span className="report"></span>
                                        </a> */}
                                        <a href="javascript:;" title={Messages.SEND_EMAIL_TITLE}
                                            onClick={() => Services.emailOwner(testDriveInstance.ownerEmail, testDriveInstance.title)}>
=======
                <Popup />
                <div className="container header_part">
                    <h2>
                        <Link to={"/"}><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>{testDriveInstance.title}  </Link></h2>
                </div>
                <div className="container-fluid testdrive-detail_first-time" style={{ overflow: "auto" }}>
                    <div className="wrapper">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">

                                    <span className="orange">
                                        <i>DESCRIPTION :</i>
                                    </span>

                                </div>
                                <div className="col-md-3 pull-right">

                                    <div className="row social_box">
                                        <a href="javascript:void(0);" 
                                            onClick={()=> Services.reportAbug(testDriveInstance.ownerEmail, testDriveInstance.title)}>
                                            <span className="report"></span>
                                        </a>
                                        <a href="javascript:void(0);"
                                            onClick={()=> Services.emailOwner(testDriveInstance.ownerEmail, testDriveInstance.title)}>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                            <i className="material-icons">email</i>
                                        </a>
                                        {/* <a href="#">
                                            <span className="teams"></span>
                                        </a> */}
<<<<<<< HEAD
                                        <a href="javascript:;" title={Messages.SHARE_TITLE}
                                            onClick={() => Services.shareTestDrive(testDriveInstance.ownerEmail, testDriveInstance)}>
=======
                                        <a href="javascript:void(0);"
                                            onClick={()=> Services.shareTestDrive(testDriveInstance.ownerEmail, testDriveInstance.title)}>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                            <i className="material-icons">share</i>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 testdrivedetails_box">

                            <div className="row">
                                <div className="earn_box">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-2">

                                                <span className="orange">
                                                    <i>POINTS EARNED :</i>
                                                </span>
                                                <div className="row">
                                                    <canvas id="test-drive-points-canvas" width="140" height="140"></canvas>
                                                    <h3>{pointsEarned}</h3>
                                                    <div className="col-md-12">
                                                        <span className="small">{testDriveInstance.currentPoint} of {testDriveInstance.maxPoints} points earned</span>
                                                    </div>
                                                </div>
<<<<<<< HEAD

                                            </div>
                                            <div className="col-md-3 col-md-offset-1">

                                                <span className="orange">
                                                    <i>DRIVE COMPLETION :</i>
                                                </span>
                                                <div className="row">
                                                    <canvas id="completed-test-cases-canvas" width="140" height="140"></canvas>
                                                    <h3>{testCaseCompletion.toFixed(0)} %</h3>
                                                    <div className="col-md-12">
                                                        <span className="small">{testDriveInstance.numberOfTestCasesCompleted} of {testDriveInstance.testCaseIDs.length} tasks done</span>
                                                    </div>
                                                </div>

                                            </div>
=======

                                            </div>
                                            <div className="col-md-3 col-md-offset-1">

                                                <span className="orange">
                                                    <i>DRIVE COMPLETION :</i>
                                                </span>
                                                <div className="row">
                                                    <canvas id="completed-test-cases-canvas" width="140" height="140"></canvas>
                                                    <h3>{testCaseCompletion.toFixed(0)} %</h3>
                                                    <div className="col-md-12">
                                                        <span className="small">{testDriveInstance.numberOfTestCasesCompleted} of {testDriveInstance.testCaseIDs.length} tasks done</span>
                                                    </div>
                                                </div>

                                            </div>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 para">
<<<<<<< HEAD
                            <span className="orange">Test Drive Description :</span>
=======
                            <span className="orange">TEST DRIVE PITCH :</span>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                            <p>{testDriveInstance.description}</p>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-7  detailed_points profileinfo_box">
                                <div className="row inforow">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <span className="orange">TEST DRIVE OWNER :</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>{testDriveInstance.owner}</h5>
                                    </div>
                                </div>
                                <div className="row inforow">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <span className="orange">START DATE :</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <h5>{Services.formatDate(testDriveInstance.startDate)}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <span className="orange">END DATE :</span>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <h5>{Services.formatDate(testDriveInstance.endDate)}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row inforow">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <span className="orange">DIFFICULTY LEVEL :</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
<<<<<<< HEAD
                                            <h5>{testDriveInstance.levelName}</h5>
=======
                                            <h5>{testDriveInstance.level}</h5>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                        </div>
                                    </div>
                                </div>
                                <div className="row inforow">
                                    <div className="col-md-3">
                                        <div className="row">
<<<<<<< HEAD
                                            <span className="orange">Test Drivers :</span>
=======
                                            <span className="orange">PARTICIPAINTS :</span>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <h5>{testDriveInstance.participants || "0"}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 para">
                            <span className="orange">EXPECTED BUSINESS VALUE :</span>
                            <p>{testDriveInstance.expectedBusinessValue}</p>
                        </div>
                        <div className="col-md-12 para">
                            <span className="orange">ELIGIBLE DRIVER REGION :</span>
<<<<<<< HEAD
                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.region && testDriveInstance.region.map((region, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {region}
                                        </li>)
                                    })
                                }
                                {
                                    (!testDriveInstance.region || testDriveInstance.region.length == 0) && <p>{Messages.ALL_REGION_MSG}</p>
                                }
                            </ul>
                        </div>
                        <div className="col-md-12 para">
                            <span className="orange">ELIGIBLE DRIVER FUNCTION :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.department && testDriveInstance.department.map((department: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {department.Label}
                                        </li>)
                                    })
                                }
                                {
                                    (!testDriveInstance.department || testDriveInstance.department.length == 0) && <p>{Messages.ALL_DEPARTMENT_MSG}</p>
                                }
=======
                            <div className="row">
                                <ul className="select2-selection__rendered">
                                    {
                                        testDriveInstance.region && testDriveInstance.region.map((region, index) => {
                                            return (<li key={index} className="select2-selection__choice" title="iwatch">
                                                {region}
                                            </li>)
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 para">
                            <span className="orange">ELIGIBLE DRIVER LOCATION :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.location && testDriveInstance.location.map((location: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {location.Label}
                                        </li>)
                                    })
                                }
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                            </ul>

                        </div>
                        <div className="col-md-12 para">
<<<<<<< HEAD
                            <span className="orange">ELIGIBLE DRIVER LOCATION :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.location && testDriveInstance.location.map((location: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {location.Label}
                                        </li>)
                                    })
                                }
                                {
                                    (!testDriveInstance.location || testDriveInstance.location.length == 0) && <p>{Messages.ALL_LOCATION_MSG}</p>
                                }
=======
                            <span className="orange">DEVICES REQUIRED :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.requiredDevices && testDriveInstance.requiredDevices.map((device: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {device.Label}
                                        </li>)
                                    })}
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                            </ul>

                        </div>
                        <div className="col-md-12 para">
<<<<<<< HEAD
                            <span className="orange">DEVICES REQUIRED :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.requiredDevices && testDriveInstance.requiredDevices.map((device: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {device.Label}
                                        </li>)
                                    })
                                }
                                {
                                    (!testDriveInstance.requiredDevices || testDriveInstance.requiredDevices.length == 0) && <p>{Messages.ALL_DEVICES_MSG}</p>
                                }
                            </ul>

                        </div>
                        <div className="col-md-12 para">
                            <span className="orange">OS REQUIRED :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.requiredOs && testDriveInstance.requiredOs.map((os: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {os.Label}
                                        </li>)
                                    })
                                }
                                {
                                    (!testDriveInstance.requiredOs || testDriveInstance.requiredOs.length == 0) && <p>{Messages.ALL_OS_MSG}</p>
                                }
                            </ul>
=======
                            <span className="orange">OS REQUIRED :</span>

                            <ul className="select2-selection__rendered">
                                {
                                    testDriveInstance.requiredOs && testDriveInstance.requiredOs.map((os: any, index) => {
                                        return (<li key={index} className="select2-selection__choice" title="iwatch">
                                            {os.Label}
                                        </li>)
                                    })
                                }
                            </ul>

                        </div>

                        <div className="col-md-12 participation_actionbox">
                            <div className="button type1 nextBtn btn-lg pull-left animated_button">
                                <input onClick={this.participate} type="button" value="Go For Drive" />
                            </div>
                            <button id="participationButton" style={{ display: 'none' }} type="participationError" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="participationError" className={"modal fade " + (ui.showPopUp ? 'in' : '')}
                role="dialog" style={{ display: ui.showPopUp ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <input
                                onClick={() => { updateUI({ showPopUp: false }) }}
                                type="button" className="close" data-dismiss="modal" value="X" />
                            <h4 className="modal-title">ERROR :</h4>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                        </div>
                        <div className="col-md-12 participation_actionbox">
                            {
                                (testDriveInstance.testDriveStatus == ColumnsValues.ACTIVE) ? <div className="button type1 nextBtn btn-lg pull-left animated_button">
                                    <input onClick={this.participate} type="button" value="Go for a drive" />
                                </div> : ""
                            }

                            <button id="participationButton" style={{ display: 'none' }} type="participationError" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default TestDriveDetails;
