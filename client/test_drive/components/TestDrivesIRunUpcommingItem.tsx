import * as React from 'react';
import { Link } from "react-router-dom";
import { TestDrive } from '../model';
import { ColumnsValues } from '../../common/services/constants';
import Services from '../../common/services/services';

interface ApprovalPendingItemProps {
    testDrive: TestDrive;
};
class ApprovalPendingItem extends React.Component<ApprovalPendingItemProps> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
<<<<<<< HEAD
        const { testDrive } = this.props;
        return (<div className="col-md-12 currtestdrive_list testdrive_I_runbox">
            <div className="row">
                <div className="col-md-12">
                    <Link to={'/testdrive/' + testDrive.id + '/display'}><h4>{testDrive.title}</h4></Link>
=======
        const { testDrive} = this.props;
        return (<div className="col-md-12 currtestdrive_list testdrive_I_runbox">
            <div className="row">
                <div className="col-md-12">
                    <h4>{testDrive.title}</h4>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <span className="orange">Start Date :</span>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <h5 style={{ marginTop: "0px" }}>{Services.formatDate(testDrive.startDate)}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 enddate_line">
                                        <div className="row inforow">
                                            <div className="col-md-4">
                                                <div className="row">
                                                    <span className="orange">End date :</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <h5>{Services.formatDate(testDrive.endDate)}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="orange">Difficulty Level</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="row">
<<<<<<< HEAD
                                                            <ul className="dragrace_indicator" dangerouslySetInnerHTML={{ __html: Services.getLevelHtml(testDrive.levelNumber) }}>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h5 className="race_neme">{testDrive.levelName}</h5>
=======
                                                            <ul className={Services.getLevelNameClass(testDrive.levelNumber)}>
                                                                <li></li>
                                                                <li></li>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h5 className="race_neme">{testDrive.level}</h5>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="orange">Possible Points</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="big_text">
                                                        {testDrive.maxPoints}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="orange">No. of test Cases</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="big_text">
                                                        {testDrive.testCaseIDs.length}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div className="col-md-1">
=======
                        <div className="col-md-2">
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12 ">
                                                <div className="row">
                                                    <span className="orange">Status</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12 enddate_line">
                                                <div className="row">
                                                    <h5>{testDrive.status}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
<<<<<<< HEAD

                            <div className="row social_box">
=======
                         
                                <div className="row social_box">
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                <div className="col-md-6">
                                    <Link to={"/testdrive/" + testDrive.id}>
                                        <i className="material-icons">mode_edit</i>
                                    </Link>
<<<<<<< HEAD
                                </div>
                                <div className="col-md-6">
                                    <Link to={"/testdrive/" + testDrive.id + "/display"}>
                                        <i className="material-icons">remove_red_eye</i>
                                    </Link>
                                </div>
                            </div>

=======
                                    </div>
                                    <div className="col-md-6">
                                    <Link to={"/testdrive/" + testDrive.id}>
                                        <i className="material-icons">remove_red_eye</i>
                                    </Link>
                                    </div>
                                </div>
                            
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default ApprovalPendingItem;