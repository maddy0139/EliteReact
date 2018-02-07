import { handleActions, Action } from 'redux-actions';
import { TestDriveInstance, TestCaseInstance, QuestionInstance, IState } from './model';
import {
    LOAD_TestDriveInstanceByID_PENDING,
    LOAD_TestDriveInstanceByID_FULFILLED,
    LOAD_TestDriveInstanceByID_REJECTED,
    CREATE_TestDriveInstance_PENDING,
    CREATE_TestDriveInstance_FULFILLED,
    CREATE_TestDriveInstance_REJECTED

} from './constants/ActionTypes';

const initialState: IState = {
    testDriveInstance: {
        testDriveID: 0,
        instanceID: 0,
        title: "",
        description: "",
        maxPoints: 0,
        startDate: "",
        endDate: "",
        expectedBusinessValue: "",
        region: [],
        location: [],
        requiredDevices: [],
        requiredOs: [],
        maxTestDrivers: 5000,
        testCases: [],
        questions: [],
        status: 'Draft',
        level: 'Level1',
        currentPoint: 0,
        dateJoined: "",
        department: "",
        numberOfTestCasesCompleted: 0,
        questionIDs: [],
        testCaseIDs: []

    },
    testCaseInstance: {
        testCaseId: 0,
        testDriveID: 0,
        responseID: 0,
        userID: 0,
        title: '',
        description: '',
        expectedOutcome: '',
        isInEditMode: false,
        testCaseType: '',
        scenario: '',
        priority: '',
        points: 0,
        reTest: false,
        newItem: false,
        testCaseResponse: '',
        selectedResponse: '',
        responseStatus: ''
    },
    questionInstance: {
        questionID: 0,
        responseID: 0,
        testDriveID: 0,
        title: 'string',
        questionType: '',
        options: [],
        isInEditMode: false,
        newItem: false,
        responseStatus: '',
        questionResponse: '',
        selectedResponse: '',
        userID: 0
    },
    loading: true,
    activeTab: '1',
    configurationLoaded: false,
    configurations: {
        testCasePoints: 10,
        fieldDescription: {},
        testDriveLevelsConfig: {}
    }
};

export default handleActions<IState, any>({
    [LOAD_TestDriveInstanceByID_PENDING]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            loading: true
        }
    },
    [LOAD_TestDriveInstanceByID_FULFILLED]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            testDriveInstance: action.payload,
            loading: false
        }
    },

    [LOAD_TestDriveInstanceByID_REJECTED]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            loading: false
        }
    },

    [CREATE_TestDriveInstance_PENDING]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            loading: true
        }
    },
    [CREATE_TestDriveInstance_FULFILLED]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            testDriveInstance: action.payload,
            loading: false
        }
    },

    [CREATE_TestDriveInstance_REJECTED]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            loading: false
        }
    },
}, initialState);
