import * as React from 'react';
import { Link } from "react-router-dom";

interface TestDrivesIRunDraftedItemsProps {

};
class TestDrivesIRunDraftedItems extends React.Component<TestDrivesIRunDraftedItemsProps> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div className="col-md-12 TestDrivesIRunDraftedItems">
            <p className="text-right">&copy; 2018 Equinix inc. All rights reserved.</p>
        </div>)
    }
}

export default TestDrivesIRunDraftedItems;
