import * as React from 'react';
import TestDriveItem from './TestDriveItem';
import { Link } from "react-router-dom";
import {
    model
} from '../../test_drive';

interface AppProps {
    testDrives: model.TestDrive[];
    editTestDrive: (t: model.TestDrive) => void;
    deleteTestDrive: (id: number) => any;

};

class TestDrives extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { editTestDrive, deleteTestDrive, testDrives } = this.props
        return (<div>
            <h2 className="page-heading">Create Test Drive</h2>
            <h4 className="cancel-btn"><Link to={"/home"}>Cancel</Link></h4>
            <div className="clearBoth">
                {
                    testDrives && testDrives.map(testDrive => {
                        return <TestDriveItem
                            key={testDrive.id}
                            indexKey={testDrive.id}
                            testDrive={testDrive}
                            editTestDrive={editTestDrive}
                            deleteTestDrive={deleteTestDrive} />
                    })

                }
            </div>
        </div>)
    }
}

export default TestDrives