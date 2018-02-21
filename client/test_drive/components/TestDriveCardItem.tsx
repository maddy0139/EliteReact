import * as React from 'react';
import { Link } from "react-router-dom";
import { TestDrive } from '../model';
import Services from '../../common/services/services';

interface TestDriveCardItemProps {
    testDrive: TestDrive;
    participants: number;
};
class TestDriveCardItem extends React.Component<TestDriveCardItemProps> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { testDrive, participants} = this.props;
        return (<div className="col-md-4">
            <div className="col-md-12 progress_drivebox">
                <h4>{testDrive.title}</h4>
                <div className="col-md-12 pull-right">
                    <div className="row">
                        <div className="col-md-12 social_box">
                            <div className="row">
                                <a href="#"><i className="material-icons">bug_report</i></a>
                                <a href="#"><i className="material-icons">email</i></a>
                                <a href="#"><span className="teams"></span></a>
                                <a href="#"><i className="material-icons">share</i></a>
                            </div>
                        </div>
                        <div className="col-md-12 partcipant_enddate">
                            <div className="row">
                                <div className="col-md-6 enddate_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <span className="orange"><i>START DATE</i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <h5>{Services.formatDate(testDrive.startDate)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 partcipant_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <span className="orange"><i>END DATE</i>
                                                    <img src="/sites/elite-dev-akash/Style%20Library/Elite/images/flag.png" /></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <h5>{Services.formatDate(testDrive.endDate)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 partcipant_enddate">
                            <div className="row">
                                <div className="col-md-6 partcipant_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <span className="orange"><i>PARTICIPANTS</i>
                                                    <img src="/sites/elite-dev-akash/Style%20Library/Elite/images/helmet.png" /></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <h5>{participants ? participants.toString() : '0'}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 partcipant_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <span className="orange">Difficulty Level</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row race_type">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <ul className={Services.getLevelNameClass(testDrive.levelNumber)}>
                                                    <li><span></span></li>
                                                    <li><span></span></li>
                                                    <li><span></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 partcipant_enddate">
                            <div className="row">
                                <div className="col-md-6 enddate_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-12 para">
                                                    <span className="orange">DEVICE REQUIRED</span>
                                                    <div className="row">
                                                        <ul className="select2-selection__rendered">
                                                            {(testDrive.requiredDevices && testDrive.requiredDevices.length) ?
                                                                testDrive.requiredDevices.map((device: any, index) => {
                                                                    return (<li key={index} className="select2-selection__choice" title="iwatch">
                                                                        {device.Label || ''}
                                                                    </li>)
                                                                }) : ''
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-12 para">
                                                    <span className="orange">OS REQUIRED</span>
                                                    <div className="row">
                                                        <ul className="select2-selection__rendered">
                                                            {(testDrive.requiredOs && testDrive.requiredOs.length) ?
                                                                testDrive.requiredOs.map((os: any, index) => {
                                                                    return (<li key={index} className="select2-selection__choice" title="iwatch">
                                                                        {os.Label || ''}
                                                                    </li>)
                                                                }) : ''
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 partcipant_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <span className="orange">POSSIBLE POINTS</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <span className="big_text">{testDrive.maxPoints}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 partcipant_Section">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <span className="orange">No. OF TEST CASES</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <span className="big_text">{testDrive.testCaseIDs.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default TestDriveCardItem;