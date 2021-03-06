import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import Loader from 'react-loader-advanced';
import ui from 'redux-ui';
import services from '../../common/services/services';
import { TestDrive } from '../../test_drive/model';
import Footer from '../../common/components/Footer';
import { Link } from "react-router-dom";
import { Tabs, Pane } from '../../common/components/Tabs';
import Service from '../../common/services/services';
import * as Constants from '../../common/services/constants';
<<<<<<< HEAD
import * as $ from 'jquery';
=======
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc

import {
  ApprovalPendingContainer,
  MyTestDrivesContainer,
  TestDrivesIRunContainer,
  TestDriveIRunItem,
  model,
  editTestDrive,
  deleteTestDrive,
  loadTestDrives,
  loadMyCompletedTestDrives,
  loadMyInprogressTestDrives,
  loadInProgressTestDrivesIRun,
  loadUpcommingTestDrivesIRun,
  loadCompletedTestDrivesIRun,
  loadDraftedTestDrivesIRun,
  loadSubmittedTestDrivesIRun,
  loadActiveTestDrives,
  loadUpCommingTestDrives,
  loadApprovedTestDrives,
  loadTestDrivesWaitingForApproval,
  approveTestDrive
} from '../../test_drive';


import ActiveTestDrivesContainer from '../../test_drive/components/ActiveTestDrivesContainer';
import UpCommingTestdrivesContainer from '../../test_drive/components/UpCommingTestdrivesContainer';
<<<<<<< HEAD
import Services from '../../common/services/data_service';
=======
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc

interface AppProps {
  testDriveState: model.IState;
  testDriveIRun: model.TestDrive[];
  dispatch: Dispatch<{}>;
  myCompletedTestDrives: model.MyTestDrive[];
  myCompletedTestDrivesLoading: boolean;
  myInprogressTestDrives: model.MyTestDrive[];
  myInprogressTestDrivesLoading: boolean;
  inProgressTestDrivesIRun: model.TestDriveIRun[];
  inProgressTestDrivesIRunLoading: boolean;
  upcommingTestDrivesIRun: TestDrive[]
  upcommingTestDrivesIRunLoading: boolean;
  completedTestDrivesIRun: model.TestDriveIRun[];
  completedTestDrivesIRunLoading: boolean;
  draftedTestDrivesIRun: TestDrive[];
  draftedTestDrivesIRunLoading: boolean;
  submittedTestDrivesIRun: TestDrive[];
  submittedTestDrivesIRunLoading: boolean;
  activeTestDrives: TestDrive[];
  activeTestDrivesLoading: boolean;
  upCommingTestDrives: TestDrive[];
  upCommingTestDrivesLoading: boolean;
  approvedTestDrives: TestDrive[];
  approvedTestDrivesLoading: boolean;
  testDrivesWaitingForApproval: TestDrive[];
  testDrivesWaitingForApprovalLoading: boolean;
  saveTestDriveApprovalLoading: boolean;
  activeTab: string;
  updateUI: (any) => any;
  ui: any;
}
@ui({
  state: {
<<<<<<< HEAD
    activeTab: 0,
    isCreaseTestDriveVisible: false,
    testDriveCarImage:""
=======
    activeTab: 0
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
  }
})

class TestDrivesCentralContainer extends React.Component<AppProps> {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    document.body.className = "black-bg";
    this.props.dispatch(loadTestDrives(services.getCurrentUserID()));
<<<<<<< HEAD

    $(document).ready(function () {
      $(".total_testdrivebox ul:first li:first-child").click(function () {
        $(".car_box").attr('class', 'car_box first_place');
      });

      $(".total_testdrivebox ul:first li:nth-child(2)").click(function () {
        $(".car_box ").attr('class', 'car_box second_place');
      });

      $(".total_testdrivebox ul:first li:nth-child(3)").click(function () {
        $(".car_box ").attr('class', 'car_box third_place');
      });

      $(".total_testdrivebox ul:first li:nth-child(4)").click(function () {
        $(".car_box ").attr('class', 'car_box fourth_place');
      });

      $(".total_testdrivebox ul:first li:nth-child(5)").click(function () {
        $(".car_box ").attr('class', 'car_box fifth_place');
      });
    });
=======
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
  }

  getSelectedTab() {
    switch (this.props.activeTab.toLowerCase()) {
      case 'mytestdrive':
        return 0;
      case 'testdrivethatirun':
        return 1;
      case 'activetestdrive':
<<<<<<< HEAD
        return 3;
      case 'uptestdrive':
        return 2;
      case 'pendingapprovals':
        return 4;
=======
        return 2;
      case 'uptestdrive':
        return 3;
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
    }
  }

  render() {
    const { testDriveState, testDriveIRun, dispatch,
      myCompletedTestDrives,
      myCompletedTestDrivesLoading,
      myInprogressTestDrives,
      myInprogressTestDrivesLoading,
      inProgressTestDrivesIRun,
      inProgressTestDrivesIRunLoading,
      upcommingTestDrivesIRun,
      upcommingTestDrivesIRunLoading,
      completedTestDrivesIRun,
      completedTestDrivesIRunLoading,
      draftedTestDrivesIRun,
      draftedTestDrivesIRunLoading,
      submittedTestDrivesIRun,
      submittedTestDrivesIRunLoading,
      activeTestDrives,
      activeTestDrivesLoading,
      upCommingTestDrives,
      upCommingTestDrivesLoading,
      approvedTestDrives,
      approvedTestDrivesLoading,
      testDrivesWaitingForApproval,
      testDrivesWaitingForApprovalLoading,
      saveTestDriveApprovalLoading,
      updateUI,
      ui
    } = this.props;

<<<<<<< HEAD
    let userProfileProperty = Service.getUserProfileProperties();

    const role = userProfileProperty.role;    
    const isTestDriveIRunVisible = (role == "Test Drive Owner" ||
      role == "Site Owner");

    Services.getEliteProfileByID(userProfileProperty.eliteProfileID).then((data:any)=>
    { 
      this.props.updateUI({ testDriveCarImage:data.carImage });
    })



    const isApprover = (role == "Site Owner")

    this.props.updateUI({ isCreaseTestDriveVisible: isTestDriveIRunVisible })
=======
    const role = Service.getUserProfileProperties().role;
    const isTestDriveIRunVisible = (role == "Test Drive Owner" ||
      role == "Site Owner");
    const isApprover = (role == "Site Owner")
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
    return (
      <div className="testDrives container">
        <div>

          <div className="container header_part">
<<<<<<< HEAD
            <h2 className="header_prevlink"> <Link to={"/"} >
              <span className="glyphicon glyphicon-menu-left" aria-hidden="true">
              </span> Test Drive Center</Link>
            </h2>
            <h4 className="cancel-btn"><Link to={"/"}>CANCEL</Link></h4>
=======
            <h2> <Link to={"/"} >
              <span className="glyphicon glyphicon-menu-left" aria-hidden="true">
              </span> Test Drives</Link>
            </h2>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
          </div>

          <div className="clearBoth"></div>
          <div className="col-md-12 total_testdrivebox">
<<<<<<< HEAD
            <div className="car_box first_place">
              <img src={ui.testDriveCarImage} style={{height:'45px'}}/>
            </div>
            <div className="row">
              <div className="well">

=======
            <div className="car_box">
              <img src="/sites/elite/Style%20Library/Elite/images/car.png" />
            </div>
            <div className="row">
              <div className="well">
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                <Tabs selected={this.getSelectedTab()}>
                  <Pane label="MY TEST DRIVES">
                    <MyTestDrivesContainer
                      myCompletedTestDrives={myCompletedTestDrives}
                      myCompletedTestDrivesLoading={myCompletedTestDrivesLoading}
                      myInprogressTestDrives={myInprogressTestDrives}
                      myInprogressTestDrivesLoading={myInprogressTestDrivesLoading}
                      loadMyCompletedTestDrives={(skip, top) => dispatch(loadMyCompletedTestDrives(skip, top))}
                      loadMyInprogressTestDrives={(skip, top) => dispatch(loadMyInprogressTestDrives(skip, top))}
                      ui={ui}
                      updateUI={updateUI} />
                  </Pane>

                  {
                    isTestDriveIRunVisible ? <Pane label="TEST DRIVES I RUN">
                      <TestDrivesIRunContainer
                        draftedTestDrivesIRun={draftedTestDrivesIRun}
                        draftedTestDrivesIRunLoading={draftedTestDrivesIRunLoading}
                        upcommingTestDrivesIRun={upcommingTestDrivesIRun}
                        upcommingTestDrivesIRunLoading={upcommingTestDrivesIRunLoading}
<<<<<<< HEAD
                        inProgressTestDrivesIRun={inProgressTestDrivesIRun}
                        inProgressTestDrivesIRunLoading={inProgressTestDrivesIRunLoading}
                        completedTestDrivesIRunLoading={completedTestDrivesIRunLoading}
                        completedTestDrivesIRun={completedTestDrivesIRun}
                        loadUpcommingTestDrivesIRun={(skip, top) => dispatch(loadUpcommingTestDrivesIRun(skip, top))}
                        loadDraftedTestDrivesIRun={(skip, top) => dispatch(loadDraftedTestDrivesIRun(skip, top))}
                        loadInProgressTestDrivesIRun={(skip, top) => dispatch(loadInProgressTestDrivesIRun(skip, top))}
                        loadCompletedTestDrivesIRun={(skip, top) => dispatch(loadCompletedTestDrivesIRun(skip, top))}
=======
                        loadUpcommingTestDrivesIRun={(skip, top) => dispatch(loadUpcommingTestDrivesIRun(skip, top))}
                        loadDraftedTestDrivesIRun={(skip, top) => dispatch(loadDraftedTestDrivesIRun(skip, top))}
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                        ui={ui}
                        updateUI={updateUI}
                      />
                    </Pane> : ''
                  }
<<<<<<< HEAD

=======
                  
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                  <Pane label="Upcoming Test Drive">
                    <UpCommingTestdrivesContainer
                      upCommingTestDrives={upCommingTestDrives}
                      upCommingTestDrivesLoading={upCommingTestDrivesLoading}
                      loadUpCommingTestDrives={(skip, top) => dispatch(loadUpCommingTestDrives(skip, top))}
                      ui={ui}
                      updateUI={updateUI} />
                  </Pane>

<<<<<<< HEAD
                  <Pane label="Active Test Drives">
=======
                  <Pane label="Active Test Drive">
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                    <ActiveTestDrivesContainer
                      activeTestDrives={activeTestDrives}
                      activeTestDrivesLoading={activeTestDrivesLoading}
                      loadActiveTestDrives={(skip, top) => dispatch(loadActiveTestDrives(skip, top))}
                      ui={ui}
                      updateUI={updateUI} />
                  </Pane>
<<<<<<< HEAD

=======
                  
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                  {
                    isApprover ? <Pane label="PENDING APPROVALS">
                      <ApprovalPendingContainer
                        approvedTestDrives={approvedTestDrives}
                        approvedTestDrivesLoading={approvedTestDrivesLoading}
                        testDrivesWaitingForApproval={testDrivesWaitingForApproval}
                        testDrivesWaitingForApprovalLoading={testDrivesWaitingForApprovalLoading}
                        loadApprovedTestDrives={(skip, top) => dispatch(loadApprovedTestDrives(skip, top))}
                        loadTestDrivesWaitingFormApproval={(skip, top) => dispatch(loadTestDrivesWaitingForApproval(skip, top))}
                        saveTestDriveApprovalLoading={saveTestDriveApprovalLoading}
                        approveTestDrive={(id) => dispatch(approveTestDrive(id))}
                        ui={ui}
                        updateUI={updateUI}
                      />
                    </Pane> : ''
                  }
                </Tabs>
              </div>
<<<<<<< HEAD

=======
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let activeTab = ownProps.match.params.activeTab;
  state.testDriveState.loading = state.testDriveState.loading ||
    state.asyncInitialState.loading;

  const {
    testDriveState,
    testDriveIRun,
    myCompletedTestDrives,
    myCompletedTestDrivesLoading,
    myInprogressTestDrives,
    myInprogressTestDrivesLoading,
    inProgressTestDrivesIRun,
    inProgressTestDrivesIRunLoading,
    upcommingTestDrivesIRun,
    upcommingTestDrivesIRunLoading,
    completedTestDrivesIRun,
    completedTestDrivesIRunLoading,
    draftedTestDrivesIRun,
    draftedTestDrivesIRunLoading,
    submittedTestDrivesIRun,
    submittedTestDrivesIRunLoading,
    activeTestDrives,
    activeTestDrivesLoading,
    upCommingTestDrives,
    upCommingTestDrivesLoading,
    approvedTestDrives,
    approvedTestDrivesLoading,
    testDrivesWaitingForApproval,
    testDrivesWaitingForApprovalLoading,
    saveTestDriveApprovalLoading
  } = state.testDriveState;

  return {
    testDriveState,
    testDriveIRun,
    myCompletedTestDrives,
    myCompletedTestDrivesLoading,
    myInprogressTestDrives,
    myInprogressTestDrivesLoading,
    inProgressTestDrivesIRun,
    inProgressTestDrivesIRunLoading,
    upcommingTestDrivesIRun,
    upcommingTestDrivesIRunLoading,
    completedTestDrivesIRun,
    completedTestDrivesIRunLoading,
    draftedTestDrivesIRun,
    draftedTestDrivesIRunLoading,
    submittedTestDrivesIRun,
    submittedTestDrivesIRunLoading,
    activeTestDrives,
    activeTestDrivesLoading,
    upCommingTestDrives,
    upCommingTestDrivesLoading,
    approvedTestDrives,
    approvedTestDrivesLoading,
    testDrivesWaitingForApproval,
    testDrivesWaitingForApprovalLoading,
    saveTestDriveApprovalLoading,
    activeTab: activeTab || 'mytestdrive'
  }
};

export default connect(mapStateToProps)(TestDrivesCentralContainer);