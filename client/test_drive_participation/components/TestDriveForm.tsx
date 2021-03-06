import * as React from 'react';
import ui from 'redux-ui';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { DateRange, Calendar } from 'react-date-range';
import { TestDriveInstance, IState } from '../model';
import Service from '../../common/services/services';
import * as $ from 'jquery';

// import { updateDate } from '../index';

interface TestDriveFormProps {
    testDrive: TestDriveInstance,
    saveTestDrive: (testDrive: TestDriveInstance) => any;
    submitTestDrive: (testDrive: TestDriveInstance) => any;
    onChange: (event: any, testDrive: TestDriveInstance) => any;
    updateMultiSelect: (value: any, control: string, testDrive: TestDriveInstance) => any;
    updateMaxPoints: () => any;
    updateDates: (dates: any) => any;
    updateUI: (any) => any;
    fieldDescriptions: any;
    ui: any;
}

interface TestDriveFormState {
    testDrive
};

@ui({
    state: {
        focusedInput: 'startDate',
        startDate: null,
        endDate: null,
        rangePicker: null,
        showDatePicker: false
    }
})
class TestDriveForm extends React.Component<TestDriveFormProps, TestDriveFormState> {
    constructor(props, state) {
        super(props, state);
        this.onChange = this.onChange.bind(this);
        this.regionChange = this.regionChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.deviceChange = this.deviceChange.bind(this);
        this.osChange = this.osChange.bind(this);
        this.updateLevel = this.updateLevel.bind(this);
    }

    onChange = (e) => {
        this.props.onChange(e, this.props.testDrive);
    }

    regionChange = (value) => {
        this.props.updateMultiSelect(value, "region", this.props.testDrive);
    }

    locationChange = (value) => {
        this.props.updateMultiSelect(value, "location", this.props.testDrive);
    }

    deviceChange = (value) => {
        this.props.updateMultiSelect(value, "requiredDevices", this.props.testDrive);
    }

    osChange = (value) => {
        this.props.updateMultiSelect(value, "requiredOs", this.props.testDrive);
    }

    updateLevel(value) {
        let e = {
            target: {
                type: 'custom-select',
                name: 'level',
                value: value
            }
        };
        this.onChange(e);
        this.props.updateMaxPoints();
    }

    testDriveTypes = [
        { value: 1, label: 'Level 1' },
        { value: 2, label: 'Level 2' },
        { value: 3, label: 'Level 3' },
    ]
    getRegions(input, callback) {
        const functions = Service.getRegions().then((regions: Array<any>) => {
            input = input.toLowerCase();
            var options = regions.filter((i: any) => {
                return i.Label.toLowerCase().indexOf(input) > -1;
            });
            var data = {
                options: options.slice(0, 5),
                complete: options.length <= 6,
            };
            callback(null, data);
        })
    }

    getLocations(input, callback) {
        const functions = Service.getLocations().then((locations: Array<any>) => {
            input = input.toLowerCase();
            var options = locations.filter((i: any) => {
                return i.Label.toLowerCase().indexOf(input) > -1;
            });
            var data = {
                options: options.slice(0, 5),
                complete: options.length <= 6,
            };
            callback(null, data);
        })
    }

    getDevices(input, callback) {
        const functions = Service.getDevices().then((devices: Array<any>) => {
            input = input.toLowerCase();
            var options = devices.filter((i: any) => {
                return i.Label.toLowerCase().indexOf(input) > -1;
            });
            var data = {
                options: options.slice(0, 5),
                complete: options.length <= 6,
            };
            callback(null, data);
        })
    }

    getOSes(input, callback) {
        const functions = Service.getOSes().then((oses: Array<any>) => {
            input = input.toLowerCase();
            var options = oses.filter((i: any) => {
                return i.Label.toLowerCase().indexOf(input) > -1;
            });
            var data = {
                options: options.slice(0, 5),
                complete: options.length <= 6,
            };
            callback(null, data);
        })
    }

    handleChange(which, payload) {
        this.props.updateDates({
            startDate: payload['startDate'].toISOString(),
            endDate: payload['endDate'].toISOString()
        })
        this.props.updateUI({
            [which]: payload
        });
    }

    componentDidMount() {
        $(document).mouseup((e) => {
            var container = $(".date_box");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                this.props.updateUI({ showDatePicker: false });
            }
        });
    }

    render() {
        const { testDrive, saveTestDrive, submitTestDrive, updateMultiSelect, ui, updateUI, fieldDescriptions} = this.props;
        const butttonGroup = {
            float: 'right'
        }
        const format = 'dddd, D MMMM YYYY';
        return (

            <form className="registration_form">
                <div className="col-xs-12 form_box">
                    <div className="col-md-12 register_input">
                        <input className="inputMaterial"
                            type="text"
                            required
                            onChange={this.onChange}
                            name="title"
                            value={testDrive.title || ""}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Test drive title</label>
                        <span className="help-text">
                            {fieldDescriptions && fieldDescriptions.TestDriveName}
                        </span>
                    </div>
                    <div className="col-md-12 register_input">
                        <textarea className="inputMaterial"
                            required
                            onChange={this.onChange}
                            name="description"
                            value={testDrive.description || ""}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="disc_lable">Description</label>
                        <span className="help-text">
                            {fieldDescriptions  && fieldDescriptions.EliteDescription}
                        </span>
                    </div>

                    <div className="col-md-6 register_input">
                        <div className="form-group">
                            <input className="form-control inputMaterial date_box"
                                id="startDate"
                                name="startDate"
                                placeholder="Start Date"
                                type="text"
                                value={Service.formatDate(testDrive.startDate) || ''}
                                onFocus={() => { updateUI({ showDatePicker: true }) }}
                                readOnly
                            />
                            <span className="help-text">
                                 {fieldDescriptions  && fieldDescriptions.TestDriveStartDate}
                            </span>
                        </div>
                    </div>


                    <div className="col-md-6 register_input">
                        <div className="form-group">
                            <input className="form-control inputMaterial date_box"
                                id="endDate"
                                name="endDate"
                                placeholder="End Date"
                                type="text"
                                value={Service.formatDate(testDrive.endDate) || ''}
                                onFocus={() => { updateUI({ showDatePicker: true }) }}
                                readOnly

                            />
                            <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.TestDriveEndDate}
                            </span>
                        </div>
                    </div>
                    {/*className={ui.showDatePicker ? "show-tab" : "hide-tab"}*/}
                    <div id="calandeDiv">
                        <div className={"register_input date-picker date_box " + (ui.showDatePicker ? "show-tab" : "hide-tab")}>
                            <DateRange
                                onChange={this.handleChange.bind(this, 'rangePicker')}
                                minDate={Service.formatDate("today")}
                                onFocus={() => { updateUI({ showDatePicker: true }) }}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 register_input">
                        <div className="form-group">
                            <input className="form-control inputMaterial date_box"
                                id="maxPoints"
                                name="maxPoints"
                                placeholder="Max Points"
                                type="text"
                                value={testDrive.maxPoints.toString() || '0'}
                                readOnly
                            />
                            <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.TotalPoints}
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 register_input">
                        <div className="form-group">
                            <Select
                                id="testDriveType"
                                onBlurResetsInput={false}
                                onSelectResetsInput={false}
                                options={this.testDriveTypes}
                                simpleValue
                                clearable={true}
                                name="level"
                                value={testDrive.level}
                                onChange={this.updateLevel}
                                rtl={false}
                                searchable={false}
                            />
                            <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.TotalPoints}
                            </span>
                        </div>
                    </div>


                    <div className="col-md-12 register_input">
                        <textarea className="inputMaterial"
                            name="expectedBusinessValue"
                            onChange={this.onChange}
                            value={testDrive.expectedBusinessValue || ""}
                            required
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="disc_lable">Expected Business Value</label>
                        <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.ExpectedBusinessValue}
                            </span>
                    </div>
                    <div className="col-md-12">
                        <label>Allowed Regions:</label>
                        <Select.Async multi={true}
                            value={testDrive.region}
                            onChange={this.regionChange}
                            valueKey="TermGuid"
                            labelKey="Label"
                            loadOptions={this.getRegions}
                            type="select-multiple"
                        />
                        <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.TestDriveRegion}
                            </span>
                        <br></br>
                        <label>Allowed Locations:</label>
                        <Select.Async multi={true}
                            value={testDrive.location}
                            onChange={this.locationChange}
                            valueKey="TermGuid"
                            labelKey="Label"
                            loadOptions={this.getLocations}
                            type="select-multiple"
                        />
                        <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.TestDriveLocation}
                            </span>

                        <br></br>
                         <label>Required Devices: </label>
                        <Select.Async multi={true}
                            value={testDrive.requiredDevices}
                            onChange={this.deviceChange}
                            valueKey="TermGuid"
                            labelKey="Label"
                            loadOptions={this.getDevices}
                            type="select-multiple"
                        />
                        <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.AvailableDevices}
                            </span>

                        <br></br>
                         <label>Required OS: </label>
                        <Select.Async multi={true}
                            value={testDrive.requiredOs}
                            onChange={this.osChange}
                            valueKey="TermGuid"
                            labelKey="Label"
                            loadOptions={this.getOSes}
                            type="select-multiple"
                        />
                        <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.AvailableOS}
                            </span>
                    </div>
                    <br></br>
                    <div className="col-md-12 register_input input-number" >
                        <input className="inputMaterial"
                            type="number"
                            onChange={this.onChange}
                            name="maxTestDrivers"
                            value={testDrive.maxTestDrivers || ""}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Maximum allowed test drivers.</label>
                        <span className="help-text">
                                {fieldDescriptions  && fieldDescriptions.MaxTestDrivers}
                            </span>
                    </div>
                    <div className="col-md-12 testdrive_actionbox">
                        <div style={butttonGroup}>
                            <input type="button" value="Next" className="button type1 nextBtn btn-lg pull-right" />
                            <input type="button" value="Save" className="button type1 nextBtn btn-lg pull-right"
                                onClick={() => { saveTestDrive(testDrive) }} />

                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default TestDriveForm;
