import { STATUS_CODES } from "http";

export class Lists {
    static TEST_DRIVES = 'Test Drives';
    static TEST_CASES = 'Test Cases';
    static SURVEY_QUESTIONS = 'Survey Questions';
    static RACE_LEVELS = 'Race Levels';
    static POINTS_CONFIGURATIONS = 'Points Configurations'
    static USER_INFORMATION = 'User Information';
    static REPORT_BUG = 'Report Bug';
    static TEST_DRIVE_INSTANCES = 'Test Drive Instances';
    static POINTS = 'Points';
    static AVATAR = 'Avatars';
    static CARMASTER = 'Car Master';
    static BADGES = 'Badges';
    static APPLICATION_CONFIGURATIONS = "Application Configuration";
    static TEST_CASE_RESPONSES = "Test Case Responses";
    static SURVEY_RESPONSES = "Survey Responses";
    static VIDEOS = "Videos";
    static PRIZES = "Converted Prize"
}

export class CacheKeys {
    static CONFIGURATIONS = 'configurations';
    static ELITE_PROFILE = 'ELITE_PROFILE';
    static APPLICATION_CONFIGURATIONS = 'APPLICATION_CONFIGURATIONS';

}

export class Columns {
    static TITLE = 'Title';
    static USER_REGION = 'Elite_UserRegion';
    static USER_REGION_TEXT = 'UserRegionText';
    static ID = 'ID';
    static TEST_DRIVE_NAME = 'TestDriveName';
    static ELITE_DESCRIPTION = 'EliteDescription';
    static TESTDRIVE_STATUS = 'TestDriveStatus';
    static TEST_DRIVE_START_DATE = 'TestDriveStartDate';
    static TESTDRIVE_END_DATE = 'TestDriveEndDate';
    static TOTAL_POINTS = 'TotalPoints';
    static TEST_DRIVE_DEPARTMENT = 'TestDriveDepartment';
    static TEST_DRIVE_LOCATION = 'TestDriveLocation';
    static AVAILABLE_DEVICES = 'AvailableDevices';
    static ELITE_USERDEPARTMENT = 'Elite_UserDepartment';
    static AVAILABLE_OS = 'AvailableOS';
    static MAX_TESTDRIVERS = 'MaxTestDrivers';
    static LEVEL_ID = 'LevelID';
    static LEVEL_NAME = 'LevelName';
    static TESTDRIVE_OWNER = 'TestDriveOwner';
    static USER_NAME = 'UserInfoName';
    static TESTCASE_ID = 'TestCaseID';
    static QUESTION_ID = 'QuestionID';
    static EXPECTED_BUSINESS_VALUE = 'ExpectedBusinessValue';
    static CAR_IMAGE = 'CarImage';
    static CAR_NAME = 'CarName';
    static CAR_LEVEL = 'CarLevel';
    static Car_ID = 'CarID';
    static AVATAR_IMAGE = 'AvatarImage';
    static AVATAR_NAME = 'AvatarName';
    static AVATAR_ID = 'AvatarID';
    static COMPLETED_TEST_DRIVES = 'CompletedTestDrives';
    static COMPLETED_TEST_CASES = 'CompletedTestCases';
    static DATE_JOINED = 'DateJoined';
    static USER_ROLE = 'UserRole';
    static POINTS = 'Points';
    static TYPE = 'Type';
    static SCENARIO = 'Scenario';
    static TEST_CASE_OUTCOME = 'TestCaseOutcome';
    static TEST_CASE_PRIORITY = 'TestCasePriority';
    static RETEST = 'ReTest';
    static QUESTION = 'Question';
    static RESPONSES = 'Responses';
    static RESPONSETYPE = 'ResponseType';
    static USER_ID = 'UserID';
    static USER_LOCATION = 'UserLocation';
    static PERCENTAGE_COMPLETION = "PercentageCompletion";
    static CURRENT_POINTS = "CurrentPoints";
    static STATUS = "Status";
    static TEST_CASE_COMPLETED = "TestCaseCompleted";
    static TEST_DRIVE_ID = "TestDriveID";
    static TEST_CASE_RESPONSE = "TestCaseResponse";
    static TEST_CASE_RESPONSE_STATUS = "TestCaseResponseStatus";
    static SURVEY_RESPONSE = "SurveyResponse";
    static Selected_Response = "SelectedResponse";
    static USER_INFO_NAME = "UserInfoName"
    static ACCOUNT_NAME = "AccountName";
    static RESPONSE_ATTACHMENTS = "ResponseAttachments";
    static LevelNumber = "LevelNumber";
    static USER_EMAIL = "UserEMail";
<<<<<<< HEAD
    static SURVEY_STATUS = "SurveyStatus";
    static JOINING_BONUS = "JoiningBonus";
    static COMPLETION_BONUS = "CompletionBonus";
    static PASS_PERCENTAGE_TO_DEPLOY = "PassPercentageToDeploy";
=======
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc

}

export class ColumnsValues {
    static COMPLETE_STATUS = 'Complete';
<<<<<<< HEAD
    static PARTIAL_COMPLETE = 'PartialComplete';
    static ACTIVE = 'Active';
    static READY_FOR_LAUNCH = 'Ready for Launch';
    static APPROVAL_PENDING = 'Approval Pending';
=======
    static ACTIVE = 'Active';
    static READY_FOR_LAUNCH = 'Ready for Launch';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
    static DRAFT = "Draft";
    static INPROGRESS = "Inprogress";
    static SUBMIT = "Submit";
    static TEST_CASE_COMPLETION = 'Test Case Bonus';
    static QUESTION_TYPE_OBJECTIVE = "Objective";
    static SITE_OWNER = "Site Owner"
    static TEST_DRIVER = "Test Drivers";
    static TEST_DRIVE_OWNER = "Test Drive Owner";
    static SITE_OWNER_DISPLAY_NAME = "Site Owner"
<<<<<<< HEAD
    static TEST_DRIVER_DISPLAY_NAME = "Test Driver";
    static TEST_DRIVE_OWNER_DISPLAY_NAME = "Test Drive Owner";    
    static EDIT_VIEW = "EDIT";
    static DISPLAY_VIEW = "DISPLAY";
    static TEST_DRIVE_COMPLETED = "Completed";
}

export class Globals {
    static IMAGE_BASE_URL = '/Style%20Library/Elite/images';
=======
    static TEST_DRIVER_DISPLAY_NAME = "Test Drivers";
    static TEST_DRIVE_OWNER_DISPLAY_NAME = "Test Drive Owner";

}

export class Globals {
    static IMAGE_BASE_URL = '/sites/elite/Style%20Library/Elite/images';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
    static TEST_DRIVE_THAT_I_RUN = "testDriveThatIRun";
    static UPCOMMING_Test_Drive = "upTestDrive";
}

export class Messages {
    static SAVE_UNSAVED_QUESTION = 'Please save the unsaved question(Click on green check mark) and then try saving test drive again.';
    static SAVE_UNSAVED_TEST_CASE = 'Please save the unsaved test case(Click on green check mark) and then try saving test drive again.';
    static TEST_CASE_ERROR = 'Please fill all the required fields and save again.';
    static TEST_DRIVE_ERROR = 'Please fill all the required fields and save again.';
    static TEST_DRIVE_SAME_NAME_ERROR = 'Test drive with same name already exists. Please try different test drive name.';
    static TEST_DRIVE_APPROVE_MSG = 'Test drive has been approved successfully';
    static QUESTION_ERROR = 'Please fill all the required fields and save again.';
    static LOADING_QUESTIONS = 'Loading questions...';
    static LOADING_TSETCASES = 'Loading test cases...';
    static LOADING_TESTDRIVE = 'Loading test drive...';
    static SAVING_TESTCASE = 'Saving test case...';
    static Saving_question = 'Saving questions...';
    static REPORT_BUG_SUCCESS = 'Bug reported successfully.';
    static SAVING = 'Saving...';
    static LOADING = 'Loading...';
<<<<<<< HEAD
    static ERROR_IN_FORM = 'Please fill all the required fields and save again. Fields marked with * are mandatory.';
    static TEST_DRIVE_PARTICIPATION_ERROR = 'You can\'t participate in this test drive as : ';
    static TEST_DRIVE_LOCATION_ERROR = 'This test drive is not available for your location.';
    static TEST_DRIVE_DEVICE_ERROR = 'You don\'t have the required device to participate in this test drive.';
    static TEST_DRIVE_OS_ERROR = 'You don\'t have the required OS to participate in this test drive.';
    static TEST_DRIVE_DEPARTMENT_ERROR = 'This test drive is not available for your department.';
    static NO_TEST_CASE_ERROR = 'Please add at least one test case before submitting for approval.';
    static NO_QUESTION_ERROR = 'Please add atleast one question before submitting for approval.';
    static NO_OPTIONS_ERROR = 'Please add more than one question responses';
    static SURVEY_SUBMITTED = 'Survey submitted successfully.';
    static MAX_TEST_DRIVER_LIMIT_REACHED = 'You can’t participate in this test drive as maximum test drivers limit for this test drive is reached';
    static TEST_DRIVE_INPROGRESS_MSG = 'There are no test drives in progress.'
    static TEST_DRIVE_COMPLETED_MSG = "There are no completed test drives.";
    static TEST_DRIVE_UPCOMING_MSG = 'There are no upcoming test drives.';
    static TEST_DRIVE_DRAFTED_MSG = 'There are no drafted test drives.';
    static TEST_DRIVE_ACTIVE_MSG = 'There are no active test drives.';
    static TEST_DRIVE_PENDING_MSG = 'There are no test drives waiting for approval.';
    static TEST_DRIVE_APPROVED_MSG = 'There are no approved test drives.';
    static TEST_DRIVE_SAVEDDRAFT_MSG = 'Test drive saved as draft. This will be available under "DRAFTED TEST DRIVES" in "TEST DRIVE I RUN" tab in test drive center';
    static TEST_DRIVE_SUBMIT_MSG = 'Test drive submitted successfully.';
    static LEADERBOARD_GLOBAL_MSG = 'There are no global leaders to show here.';
    static LEADERBOARD_REGIONAL_MSG = 'There are no regional leaders to show here.';
    static ALL_REGION_MSG = 'All regions are eligible.';
    static ALL_LOCATION_MSG = 'All locations are eligible.';
    static ALL_DEPARTMENT_MSG = 'All departments are eligible.';
    static ALL_DEVICES_MSG = 'All devices are eligible.';
    static ALL_OS_MSG = 'All OS are eligible.';
    static REPORT_BUG_TITLE = 'Report a Bug';
    static SEND_EMAIL_TITLE = 'Send an email to TEST drive owner';
    static SHARE_TITLE = 'Share';
    static START_GREATER_ERROR = 'Start date can not be greater than end date';
    static POP_THE_FIZZ_1 = "You have successfully completed this test drive.";
    static POP_THE_FIZZ_2 = "You have completed all the test cases and survey questions."
    static POP_THE_FIZZ_3 = "You earned <span class='orange'>#0#</span> points.";
    static HIGH_FIVE_1 = "You have completed <span class='orange'>#0#</span> of #1# test cases successfully.";
    static HIGH_FIVE_2 = "You earned <span class='orange'>#0#</span> points for completing test cases and"
    static HIGH_FIVE_3 = "<span class='orange'>#0#</span> points as test drive joining bonus.";
    static HIGH_FIVE_4 = "You are <span class='orange'>#0#</span> points away from getting a #1#";
    static MISSING_OUT_1 = "You have completed <span class='orange'>#0#</span> of #1# test cases.";
    static MISSING_OUT_2 = "You earned <span class='orange'>#0#</span> points."
    static MISSING_OUT_3 = "You are now <span class='orange'>#0#</span> on the leaderboard.";
    static MISSING_OUT_4 = "You are <span class='orange'>#0#</span> points away from getting a #1#";
    static TEST_DRIVE_APPROVED = "Test drive approved successfully.";
    static SENARIO_EMPTY = "Senario can not be empty";
    static EXPECTED_OUTCOME_EMPTY = "Ecpected outcome can not be empty."

=======
    static ERROR_IN_FORM = 'Please fill all the required fields and save again. Fields marked with * are mandetory.';
    static TEST_DRIVE_PARTICIPATION_ERROR = 'You can\'t participate in this test drive as : ';
    static TEST_DRIVE_LOCATION_ERROR = 'This test drive is not available for your location.';
    static TEST_DRIVE_DEVICE_ERROR = 'You don\'t have the required device to participate in this test drive.';
    static TEST_DRIVE_OS_ERROR = 'You don\'t have the required os to participate in this test drive.';
    static NO_TEST_CASE_ERROR = 'Please add atleast one test case before submiting for approval.';
    static NO_QUESTION_ERROR = 'Please add atleast one question before submiting for approval.';
    static NO_OPTIONS_ERROR = 'Please add more that one question responses';
    static SURVEY_SUBMITTED = 'Survey submitted successfully.';
    static MAX_TEST_DRIVER_LIMIT_REACHED = 'You can’t participate in this test drive as maximum test drivers limit for this test drive is reached';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
}
