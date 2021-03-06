import * as React from 'react';
import { Link } from "react-router-dom";
import { TestDrive } from '../model';
import { ColumnsValues } from '../../common/services/constants';
import Services from '../../common/services/services';

interface ApprovalPendingItemProps {
    testDrive: TestDrive;
    saveTestDriveApprovalLoading: boolean;
    approveTestDrive: (id: number) => any;
};
class ApprovalPendingItem extends React.Component<ApprovalPendingItemProps> {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        const { testDrive, approveTestDrive, saveTestDriveApprovalLoading } = this.props;
        return (<div className="col-md-12 currtestdrive_list testdrive_I_runbox">
            <div className="row">
                <div className="col-md-12">
<<<<<<< HEAD
                <Link to={'/participation/' + testDrive.id}><h4>{testDrive.title}</h4></Link>
=======
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
                                            <div className="col-md-7">
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
                                                    <span className="orange">End date : </span>
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
                        <div className="col-md-2" style={{marginLeft: "-55px" }}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
<<<<<<< HEAD
                                        
                                        <span className="orange">Difficulty Level:</span>
                                               
=======
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="orange">Difficulty Level:</span>
                                                </div>
                                            </div>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="row">
<<<<<<< HEAD
                                                            <ul className="dragrace_indicator" dangerouslySetInnerHTML={{__html: Services.getLevelHtml(testDrive.levelNumber)}}>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h5 className="race_neme">{testDrive.levelName}</h5>
=======
                                                            <ul className={Services.getLevelNameClass(testDrive.levelNumber)}>
                                                                <li><span></span></li>
                                                                <li><span></span></li>
                                                                <li><span></span></li>
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
                                                    <span className="orange">Possible Points:</span>
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
                                                    <span className="orange">No of test Cases :</span>
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
                        <div className="col-md-1">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row inforow">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <span className="orange">Status :</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
<<<<<<< HEAD
                                    <div className="col-md-12  enddate_line">
=======
                                    <div className="col-md-12">
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                        <div className="row inforow">
                                            <div className="col-md-12">
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
                            <div className="col-md-12">
                                <div className="row">
                                    {testDrive.status == ColumnsValues.SUBMIT ?
                                        <div className="testdrive_actionbox">
                                             <div className="button type1 nextBtn btn-lg pull-right animated_button">
                                            <input type="button" value="Approve" disabled={saveTestDriveApprovalLoading}
                                                onClick={() => approveTestDrive(testDrive.id)} />
                                                </div>
                                        </div> : ''
                                    }
                                    
                                </div>
                            </div>

                          
                        </div>


<<<<<<< HEAD
                        <div className="col-md-1" style={{marginLeft:"27px",marginTop:"10px"}}>
                        
                        <div className="row social_box" style={{position:"relative",right:"-60px"}}>
<Link to={"/testdrive/" + testDrive.id}>
                                        <i className="material-icons">mode_edit</i>
                                </Link>
                                    {/* <Link to={"/testdrive/" + testDrive.id}>
                                        <i className="material-icons">remove_red_eye</i>
                                    </Link> */}
=======
                        <div className="col-md-1" style={{marginLeft:"55px;"}}>
                        
                        <div className="row social_box" style={{position:"relative",right:"-60px"}}>
{/*<Link to={"/testdrive/" + testDrive.id}>
                                        <i className="material-icons">mode_edit</i>
                                </Link>*/}
                                    <Link to={"/testdrive/" + testDrive.id}>
                                        <i className="material-icons">remove_red_eye</i>
                                    </Link>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default ApprovalPendingItem;