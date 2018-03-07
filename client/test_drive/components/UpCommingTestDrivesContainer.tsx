import * as React from 'react';
import { Link } from "react-router-dom";
import { Dispatch } from 'redux';
import Loader from 'react-loader-advanced';
import ui from 'redux-ui';
import Pager from 'react-pager';
import {
    TestDriveCardItem,
    loadUpCommingTestDrives,
    model,
} from '../../test_drive';
import { Messages } from '../../common/services/constants';


interface UpCommingTestDrivesContainerProps {
    upCommingTestDrives: model.TestDrive[];
    upCommingTestDrivesLoading: boolean;
    loadUpCommingTestDrives: (skip: number, top: number) => any;
    updateUI: (any) => any;
    ui: any;
};


@ui({
    state: {
        itemsPerPage: 3,
        total: 11,
        current: 0,
        visibleItems: [],
        visiblePages: 4,
    }
})
class UpCommingTestDrivesContainer extends React.Component<UpCommingTestDrivesContainerProps> {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.loadUpCommingTestDrives(0, 100);
    }

    getVisibleItems(newPage) {
        let skip = newPage * this.props.ui.itemsPerPage;
        this.props.updateUI({
            current: newPage,
            visibleItems: this.props.upCommingTestDrives.slice(skip, skip + this.props.ui.itemsPerPage)
        });
    }

    
    componentWillUpdate(){
        this.initialize();
    }

    initialize(){
        const { upCommingTestDrives, upCommingTestDrivesLoading, ui, updateUI } = this.props;
        if (!upCommingTestDrivesLoading && upCommingTestDrives && upCommingTestDrives.length && !ui.visibleItems.length) {
            var currentPage = ui.current;
            if ((ui.visibleItems.length < ui.visibleItems * ui.itemsPerPage) && ui.current != 0) {
                currentPage = currentPage - 1;
            }
            this.getVisibleItems(currentPage);
        }

    }



    render() {
        const { upCommingTestDrives, upCommingTestDrivesLoading, ui, updateUI } = this.props;
        return (<div>
            {ui.isCreaseTestDriveVisible ? <div className="centralbox_button row">
                <div className="button type1 nextBtn btn-lg pull-right animated_button">
                  <Link to={"/testdrive"} >Create Test Drive</Link>
                </div>
              </div> : ''}
            <Loader show={upCommingTestDrivesLoading} message={'Loading...'}>
                {
                    (!upCommingTestDrivesLoading && ui.visibleItems && ui.visibleItems.length) ?
                        ui.visibleItems.map((testDriveObj, index) => {
                            return (<TestDriveCardItem
                                key={index}
                                participants={testDriveObj.participents}
                                testDrive={testDriveObj.testDrive} 
                                isActive={false}/>)
                        }) : (!upCommingTestDrivesLoading && <div className="no-data-message">{Messages.TEST_DRIVE_UPCOMING_MSG}</div>)
                }
                {
                    (!upCommingTestDrivesLoading && ui.visibleItems && ui.visibleItems.length > 0) &&
                    <Pager
                        total={Math.ceil(upCommingTestDrives.length / ui.itemsPerPage)}
                        current={ui.current}
                        visiblePages={ui.visiblePages}
                        titles={{ first: '<', last: '>' }}
                        className="pagination-sm pull-right"
                        onPageChanged={(newPage) => this.getVisibleItems(newPage)}
                    />
                }
            </Loader>
        </div>)
    }
}

export default UpCommingTestDrivesContainer;