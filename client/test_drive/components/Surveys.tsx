import * as React from 'react';
import { TestDrive, IState, Question } from '../model';
import SurveyForm from './SurveyForm';
import { ColumnsValues } from '../../common/services/constants';
import Services from '../../common/services/services';
import ui from 'redux-ui';
import {
    model,
    saveQuestion,
    editQuestion,
    deleteQuestion,
    updateQuestion
} from '../../test_drive';

interface SurveysProps {
    questions: Question[];
    newQuestion: Question;
    addQuestion: () => any;
    deleteQuestion: (id: number) => any;
    saveQuestion: (question: Question, formID: string) => any;
    editQuestion: (question: Question) => any;
    onChange: (event: any, question: Question) => any;
    saveTestDrive: (testDrive: TestDrive, formID: string, action: string) => any;
    testDrive: TestDrive;
    updateUI: (any) => any;
    ui: any;
    loadQuestions: (questionIds: number[]) => any
    questionIds: number[];
    fieldDescriptions: any;
    view: string;
    currentUserRole: string;
    approveTestDrive: (any) => any;
};
@ui({
    state: {
        helpText: ''
    }
})
class Surveys extends React.Component<SurveysProps> {
    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.getHelpText = this.getHelpText.bind(this);
        //  this.handleEdit = this.handleEdit.bind(this);
    }

    onSubmit() {
<<<<<<< HEAD
        this.props.updateUI({ saveLoading: true });
        var testDrive = this.props.testDrive;
        this.props.saveTestDrive(testDrive, "test-drive-form" + testDrive.id, "submit");
=======
        var testDrive = this.props.testDrive;
        testDrive.status = ColumnsValues.SUBMIT;
        this.props.saveTestDrive(testDrive, "test-drive-form" + testDrive.id);
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
    }

    componentDidMount() {
        const questions = this.props.questions;
        if (!questions || questions.length == 0) {
            this.props.loadQuestions(this.props.questionIds);
        }
        this.getHelpText();
    }

    getHelpText() {
        Services.getApplicationConfigurations().then((appConfig: any) => {
            this.props.updateUI({ helpText: appConfig.QuestionHelpText });
        })
    }

    render() {
        const {
            testDrive,
            questions,
            saveQuestion,
            editQuestion,
            onChange,
            newQuestion,
            deleteQuestion,
            addQuestion,
            saveTestDrive,
            ui,
            updateUI,
            fieldDescriptions,
            view,
            currentUserRole,
            approveTestDrive
        } = this.props;
        return (
            <div className="test-case-container col-xs-12">
<<<<<<< HEAD
                <div className="col-md-10 sample_text">
                    <p>{ui.helpText}</p>
                </div>
                <div className="add-button col-md-2 add_test pull-right text-right">
                    <a href="javascript:;" onClick={addQuestion}> + ADD QUESTION </a>
=======
                <div className="col-md-8 sample_text">
                    <p>{ui.helpText}</p>
                </div>
                <div className="add-button col-md-2 add_test pull-right text-right">
                    <a href="javascript:void(0);" onClick={addQuestion}> + ADD QUESTION </a>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                </div>
                <div className="col-md-12">
                    {
                        questions && questions.map(question => {
                            return <SurveyForm
                                question={(question && question.isInEditMode) ?
                                    { ...newQuestion, isInEditMode: true } : question}
                                saveQuestion={saveQuestion}
                                editQuestion={editQuestion}
                                deleteQuestion={deleteQuestion}
                                onChange={onChange}
                                updateUI={updateUI}
                                ui={ui}
                                key={question.id}
                                fieldDescriptions={fieldDescriptions}
                            />
                        })
                    }
                </div>

                <div className="col-md-12 testdrive_actionbox">
<<<<<<< HEAD
                    <div className="button type1 nextBtn btn-lg animated_button pull-left left_mnone">
                        <input type="button" value="Back" onClick={() => updateUI({ activeTab: ui.activeTab - 1 })} />
                    </div>
                    {
                        testDrive.status == ColumnsValues.DRAFT && view && view.toUpperCase() == ColumnsValues.EDIT_VIEW ? <div className="button type1 nextBtn btn-lg pull-right animated_button">
                            <input type="button" value="Save as a draft"
                                onClick={() => { saveTestDrive(testDrive, "test-drive-form" + testDrive.id, "save") }} />
                        </div> : ''
                    }

                    {
                        view && view.toUpperCase() == ColumnsValues.EDIT_VIEW ?
                            <div className="button type1 nextBtn btn-lg pull-right animated_button">
                                <input disabled={testDrive.status == ColumnsValues.ACTIVE || testDrive.saveIsInProgress || ui.saveLoading} type="button" value="Submit"
                                    onClick={this.onSubmit} />
                            </div> : ''
                    }

                    {testDrive.status == ColumnsValues.SUBMIT && currentUserRole == ColumnsValues.SITE_OWNER ?
                        <div className="button type1 nextBtn btn-lg pull-right animated_button">
                            <input type="button" value="Approve"
                                disabled={ui.saveTestDriveApprovalLoading}
                                onClick={() => approveTestDrive(testDrive.id)} />
                        </div>
                        : ''
                    }


=======
                    <div className="button type1 nextBtn btn-lg pull-right animated_button back_btn">
                        <input type="button" value="Back" onClick={() => updateUI({ activeTab: ui.activeTab - 1 })} />
                    </div>
                    <div className="button type1 nextBtn btn-lg pull-right animated_button">
                        <input type="button" value="Save as a draft"
                            onClick={() => { saveTestDrive(testDrive, "test-drive-form" + testDrive.id) }} />
                    </div>

                    <div className="button type1 nextBtn btn-lg pull-right animated_button">
                        <input type="button" value="Submit"
                            onClick={this.onSubmit} />
                    </div>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                </div>
            </div>
        );
    }
}

export default Surveys;
