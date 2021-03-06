import * as React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import EditProfilePopUp from "./EditProfilePopUp";
import MyProfileLeftContainer from "./MyProfileLeftContainer"
import MyProfileRightContainer from "./MyProfileRightContainer"
import MyProfileMiddleContainer from "./MyProfileMiddleContainer"
import { EliteProfile } from '../../home/model';
import Loader from 'react-loader-advanced';
import * as $ from 'jquery';
<<<<<<< HEAD
import '../../js/jssor.slider-27.0.2.min.js';
=======
// import '../../js/jssor.slider-27.0.2.min.js';
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
import ui from 'redux-ui';

declare var $Jease$: any;
declare var $JssorSlideshowRunner$: any;
declare var $JssorArrowNavigator$: any;
declare var $JssorThumbnailNavigator$: any;
declare var $JssorSlider$: any;
declare var $Jssor$: any;
declare var window: any;

import {
    loadEliteProfile,
    loadUserRank,
    loadUserPoints,
    loadCurrentTestDrives,
    updateMultiSelect,
    loadConfigurations,
    saveEliteProfile,
    setEditMode,
    loadCars,
    resetEliteProfile,
    loadTotalUserCount
} from '../';
import Services from '../../common/services/services';
import { Dispatch } from 'redux';

interface MyProfileProps {
    id: number,
    eliteProfile: EliteProfile;
    dispatch: Dispatch<{}>;
    rank: number;
    totalPoints: 0;
    currentTestDrives: 0;
    eliteProfileFields: object;
    configurationLoaded: boolean;
    updateUI: (any) => any;
    ui: any;
    avatars: string[];
    cars: any[];
    totalTestDrives: number;
    loading: boolean;
    totalCount: number;
};

@ui({
    state: {
        carSelectedID: 0,
        carSelectedImage: "",
        carSelectedName: "",
        carSliderInitialized: false
    }
})

class MyProfile extends React.Component<MyProfileProps> {
    constructor(props, context) {
        super(props, context);
        this.initializeCarousel = this.initializeCarousel.bind(this);
    }

    carSelected(car, baseUrl) {
        this.props.updateUI({
            carSelectedID: car.ID,
            carSelectedImage: baseUrl + car.FileRef,
            carSelectedName: car.CarName
        })
        updateMultiSelect(this.props.ui.carSelectedImage, "carImage", this.props.eliteProfile);
        // this.props.eliteProfile.carID = car.ID;
        this.props.eliteProfile.carImage = baseUrl + car.FileRef;
        this.props.eliteProfile.carName = car.CarName;
        saveEliteProfile(this.props.eliteProfile)
    }

    componentWillUnmount() {
        this.props.dispatch(resetEliteProfile());
    }

    componentDidMount() {
        var self = this;
        document.body.className = "plane_back";
        let user = Services.getUserProfileProperties();
<<<<<<< HEAD
        let userID = this.props.id || user.eliteProfileID;
=======
        let userID = this.props.id || user.eliteProfileID; 
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
        if (userID) {
            this.props.dispatch(loadEliteProfile(userID));
            this.props.dispatch(loadUserRank(userID));
            this.props.dispatch(loadUserPoints(userID));
            this.props.dispatch(loadCurrentTestDrives(userID));
            this.props.dispatch(loadTotalUserCount());
        }
        if (!this.props.configurationLoaded) {
            this.props.dispatch(loadConfigurations());
        }
        this.props.dispatch(loadCars());
      

    }

    componentDidUpdate() {
        // window.addEventListener('load', this.initializeCarousel);
        if ($(".car_pack").length >= 1 && !this.props.ui.carSliderInitialized) {
            this.initializeCarousel();
            this.props.updateUI({ carSliderInitialized: true })
        }
    }

    initializeCarousel() {
        var jssor_1_SlideshowTransitions = [
            { $Duration: 800, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 800, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        ];
        var jssor_1_options = {
            $AutoPlay: 0,
            $Cols: 1,
            $Align: 0,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 0
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 5,
                $SpacingX: 5,
                $SpacingY: 5,
                $Align: 390
            }
        };
        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
        /*#region responsive code begin*/
        var MAX_WIDTH = 980;
        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*#endregion responsive code end*/

        var currentPosition = 0;
        this.props.cars && this.props.eliteProfile && this.props.cars.map((car, index) => {
            if (car.CarName == this.props.eliteProfile.carName) {
                currentPosition = index;
            }
        });

        jssor_1_slider.$GoTo(currentPosition);

    }

    getRideSelectionBox(car, eliteProfile, baseUrl) {
        if (this.props.totalPoints >= car.PointsRequired) {
            if (car.CarName == eliteProfile.carName) {
                return <p><a href="javascript:;" className="present_ride">
                    <img src="/Style%20Library/Elite/images/done.png" />Your ride!</a></p>
            } else {
                return <p><a href="javascript:;"
                    onClick={() => this.carSelected(car, baseUrl)}
                    className="present_ride"><img src="/Style%20Library/Elite/images/empty.png" />Get this ride</a></p>
            } 
        } else {
            return <p className="locked_ride orange">
                <img src="/Style%20Library/Elite/images/lock.png" />{car.PointsRequired} points required</p>
        }
    }

    // componentDidUpdate() {
    //     var slider = $(".present_ride");
    //     if (slider.length) {
    //         window.jssor_1_slider_init();
    //     }
    // }


    render() {
        const { eliteProfile, rank, totalPoints,
            currentTestDrives, dispatch,
            eliteProfileFields, updateUI, ui,
            totalTestDrives, loading, avatars, cars, totalCount } = this.props;
        let baseUrl = location.protocol + "//" + location.hostname;

        return (<div className="container">
            <Loader show={loading} message={'Loading...'}>
                {
                    eliteProfile &&
                    <div className="row">
                        <div className="container header_part">
<<<<<<< HEAD
                            <h2 className="header_prevlink">  <a href="javascript:;" onClick={() => Services.goBack()}>
                                <span className="glyphicon glyphicon-menu-left" aria-hidden="true">
                                </span> {(!this.props.id && this.props.id != -1) ? "My Profile" : "Profile"}
                            </a>
                            </h2>
                            <h4 className="cancel-btn"><Link to={"/"}>CANCEL</Link></h4>
=======
                            <h2> <Link to={"/"} >
                                <span className="glyphicon glyphicon-menu-left" aria-hidden="true">
                                </span> {(!this.props.id && this.props.id != -1) ? "My Profile" : "Profile"}
                                 </Link>
                            </h2>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                        </div>
                        <div className="col-md-12" style={{ overflow: "auto" }}>
                            <div className="wrapper">
                                <div className="col-md-12 profile_box">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={eliteProfile.avatarImage} className="img-responsive" />
                                        </div>
                                        <div className="col-md-10">

                                            <div className="col-md-12">
<<<<<<< HEAD
                                                <div className="col-md-8 pull-left">
                                                    <div className="row">
                                                        <h2>{eliteProfile.displayName}</h2>
                                                    </div>
=======
                                                <div className="col-md-5 pull-left">
                                                    <div className="row">
                                                        <h2>{eliteProfile.displayName}</h2>
                                                    </div>
                                                </div>
                                                {
                                                    (!this.props.id && this.props.id != -1) &&
                                                    <div className="col-md-1 edit_profile pull-right">
                                                        <a data-toggle="modal" onClick={() => dispatch(setEditMode())} data-target="#edit_pro">
                                                            <i className="material-icons">mode_edit</i>
                                                        </a>
                                                    </div>

                                                }
                                            </div>
                                            {/* Edit profile modal starts here */}
                                            {
                                                (!this.props.id && this.props.id != -1) ?
                                                <div id="edit_pro" className="modal fade" role="dialog">
                                                    {eliteProfile.isInEditMode &&
                                                        <EditProfilePopUp eliteProfile={eliteProfile}
                                                            dispatch={dispatch}
                                                            updateUI={updateUI}
                                                            ui={ui}
                                                            avatars={avatars}
                                                            saveEliteProfile={(t) => dispatch(saveEliteProfile(t))}
                                                            updateMultiSelect={(value, control, eliteProfile) => dispatch(updateMultiSelect(value, control, eliteProfile))}
                                                            fieldDescriptions={eliteProfileFields}
                                                        />}
                                                </div> : ''
                                            }
                                            
                                    {/* <!-- Edit profile modal starts here--> */}
                                            <MyProfileLeftContainer eliteProfile={eliteProfile} />
                                            <MyProfileRightContainer eliteProfile={eliteProfile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MyProfileMiddleContainer eliteProfile={eliteProfile} currentTestDrives={currentTestDrives} />
                            <div className="row car_sliderbox">
                                <div className="profile_overviewbox">
                                    <div className="container">
                                        <div className="col-md-12 overview imp_points">
                                            <div className="col-md-4 text-center">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="testd_box">
                                                        <div className="row">
                                                            <p>
                                                                <span className="testd_count">
                                                                    {rank}
                                                                </span>
                                                                <div className="toplevel">
                                                                
                                                                <span className="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                                                                <span className="increase_num">+1</span>
                                                                </div>

                                                                <div className="outof_count">
                                                                 <span className="of">of </span>
                                                                {totalCount}
                                                                </div>
                                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-left">
                                                        <h4 className="testcase_title">Your current position</h4>
                                                    </div>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                                </div>
                                                {
                                                    (!this.props.id && this.props.id != -1) &&
                                                    <div className="col-md-1 edit_profile pull-right">
                                                        <a data-toggle="modal" onClick={() => dispatch(setEditMode())} data-target="#edit_pro">
                                                            <i className="material-icons">mode_edit</i>
                                                        </a>
                                                    </div>

                                                }
                                            </div>
<<<<<<< HEAD
                                            {/* Edit profile modal starts here */}
                                            {
                                                (!this.props.id && this.props.id != -1) ?
                                                    <div id="edit_pro" className="modal fade" role="dialog">
                                                        {eliteProfile.isInEditMode &&
                                                            <EditProfilePopUp eliteProfile={eliteProfile}
                                                                dispatch={dispatch}
                                                                updateUI={updateUI}
                                                                ui={ui}
                                                                avatars={avatars}
                                                                saveEliteProfile={(t) => dispatch(saveEliteProfile(t))}
                                                                updateMultiSelect={(value, control, eliteProfile) => dispatch(updateMultiSelect(value, control, eliteProfile))}
                                                                fieldDescriptions={eliteProfileFields}
                                                            />}
                                                    </div> : ''
                                            }
                                            <MyProfileLeftContainer eliteProfile={eliteProfile} />
                                            <MyProfileRightContainer eliteProfile={eliteProfile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MyProfileMiddleContainer eliteProfile={eliteProfile} currentTestDrives={currentTestDrives} />
                            {(!this.props.id && this.props.id != -1 && eliteProfile.carName) ?
                                <div className="row car_sliderbox">
                                    <div className="profile_overviewbox">
                                        <div className="container">
                                            <div className="col-md-12 overview imp_points">
                                                <div className="col-md-4 text-center tpoints_earnedbox">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="testd_box">
                                                                <div className="row">
                                                                    <p>
                                                                        <div className="my_position">
                                                                        <span className="testd_count">
                                                                            {rank}
                                                                        </span>
                                                                        </div>
=======
                                            {/* <div className="col-md-4 text-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4>Level 5</h4>
                                            </div>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc

                                                                        <div className="arrow_outof">
                                                                        <span className="toplevel">

                                                                            <span className="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                                                                            <span className="increase_num">+1</span>
                                                                        </span>

                                                                        <span className="outof_count">
                                                                            <span className="of">of </span>
                                                                            {totalCount}
                                                                        </span>
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 text-left">
                                                            <h4 className="testcase_title">Current position</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 text-center pull-right tpoints_earnedbox">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p>
                                                                <span className="orange">
                                                                    <i>{totalPoints}</i>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <h4 className="testcase_title">Total Points Earned</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
<<<<<<< HEAD
                                    </div>
                                    <div className="col-md-12">
                                        <div id="jssor_1" className="car_boxslider">
                                            <div data-u="loading"
                                                className="jssorl-009-spin"
                                                style={{
                                                    position: 'absolute', top: '0px', left: '0px', width: '100%',
                                                    height: '100%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)'
                                                }}>
                                                <img style={{ marginTop: '-19px', position: 'relative', top: '50%', width: '38px', height: '38px' }} />
                                            </div>
                                            <div data-u="slides" style={{
                                                cursor: 'default', position: 'relative', top: '0px', left: '0px', width: '980px',
                                                height: '650px', overflow: 'hidden'
                                            }}>


                                                {
                                                    cars && cars.map((car, index) => {
                                                        return (
                                                            <div data-p="170.00" className={index == 0 ? "car_pack" : ''} key={index}>
                                                                <div className="row">
                                                                    <div className="col-md-12 text-center" style={{ marginTop: '-14px',color:'#fff'}}>
                                                                        <h4 className="text-center">{car.LevelName}</h4>
                                                                    </div>

                                                                    <div className="col-md-12 text-center" style={{ marginTop: '-10px'}}>
                                                                        <span className="orange" style={{ fontSize: '29px'}}><i>{car.CarName}</i></span>
                                                                    </div>
                                                                </div>

                                                                <img data-u="image" className={totalPoints < car.PointsRequired ? 'car_bigview locked' : 'car_bigview'} src={car.FileRef} />
                                                               {totalPoints < car.PointsRequired ? <div className="big_lock text-center"><img src="/Style%20Library/Elite/images/locked-car.png" data-events="auto" data-display="inline"/></div>:''}
                                                                <img data-u="thumb" src={car.FileRef} />
                                                                <div className="col-md-3 col-md-offset-5 jsOffset text-center">
                                                                    {
                                                                        this.getRideSelectionBox(car, eliteProfile, baseUrl)
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div data-u="thumbnavigator" className="jssort101"
                                                style={{ position: 'absolute', left: '0px', bottom: '0px', width: '980px', height: '100px', backgroundColor: '#000' }}
                                                data-autocenter="1"
                                                data-scale-bottom="0.75">
                                                <div data-u="slides">
                                                    <div data-u="prototype" className="p" style={{ width: '190px', height: '90px' }}>
                                                        <div data-u="thumbnailtemplate" className="t"></div>
=======
                                    </div>*/}
                                            <div className="col-md-4 text-center pull-right">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p>
                                                            <span className="orange">
                                                                <i>{totalPoints}</i>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <h4 className="testcase_title">Total Points Earned</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                            {
                                (!this.props.id && this.props.id != -1) &&

                                <div id="jssor_1" className="car_boxslider jsTop">
                                    <div data-u="loading" className="jssorl-009-spin jsLoading" >
                                        <img />
                                    </div>
                                    <div data-u="slides" className="jsSlides">
                                        {
                                            cars && cars.map((car, index) => {
                                                return (
                                                    <div key={index}>
                                                        {
                                                            (index == 0) ?
                                                                <div>
                                                                    <div data-p="170.00" className="car_pack">
                                                                        <div className="row">
                                                                            <div className="col-md-12 text-center">
                                                                                <h4 className="text-center">Level 5</h4>
                                                                            </div>
                                                                            <div className="col-md-12 text-center">
                                                                                <span className="orange"><i>{car.CarName}</i></span>
                                                                            </div>
                                                                        </div>
                                                                        <img data-u="image" className="car_bigview" src={car.FileRef} />
                                                                        <img data-u="thumb" src={car.FileRef} />
                                                                        <div className="car-selection"><a href="#"></a></div>
                                                                    </div>
                                                                    <div className="col-md-2 col-md-offset-5 jsOffset">
                                                                        {totalPoints < car.PointsRequired ?
                                                                            <p><a href="#" className="locked_ride"><img src="images/empty.png" />Locked Ride</a></p> :
                                                                            totalPoints > car.PointsRequired ?
                                                                                <p><a href="#" className="future_ride"><img src="images/empty.png" />Feature Ride</a></p>
                                                                                : car.CarName == eliteProfile.carName ?
                                                                                    <p><a href="#" className="present_ride"><img src="images/done.png" />current Ride.</a></p> :
                                                                                    <p><a href="javascript:void(0)" onClick={() => this.carSelected(car, baseUrl)} className="present_ride"><img src="images/done.png" />Get This Ride.</a></p>
                                                                        }
                                                                    </div>
                                                                </div> :
                                                                <div>
                                                                    <div data-p="170.00">
                                                                        <div className="car-name"> <h5>{car.CarName}</h5></div>
                                                                        <img data-u="image" className="car_bigview" src={car.FileRef} />
                                                                        <img data-u="thumb" src={car.FileRef} />
                                                                    </div>
                                                                    <div className="col-md-2 col-md-offset-5 jsOffset">
                                                                        {
                                                                            totalPoints < car.PointsRequired ?
                                                                                <p><a href="#" className="locked_ride"><img src="images/empty.png" />Locked Ride</a></p> :
                                                                                totalPoints > car.PointsRequired ? <p><a href="#" className="future_ride"><img src="images/empty.png" />Feature Ride</a></p>
                                                                                    : car.CarName == eliteProfile.carName ? <p><a href="#" className="present_ride"><img src="images/done.png" />current Ride.</a></p> :
                                                                                        <p><a href="javascript:void(0)" onClick={() => this.carSelected(car, baseUrl)} className="present_ride"><img src="images/done.png" />Get This Ride.</a></p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                        }
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                                                    </div>
                                                )
                                            })
                                        }
                                        <div data-p="170.00" className="car_pack">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <h4 className="text-center">Level 5</h4>
                                                </div>
<<<<<<< HEAD
                                            </div>

                                            <div data-u="arrowleft" className="jssora106" style={{ width: '55px', height: '55px', top: '162px', left: '30px' }}
                                                data-scale="0.75">
                                                <i className="material-icons">keyboard_arrow_left</i>
                                            </div>
                                            <div data-u="arrowright" className="jssora106"
                                                style={{ width: '55px', height: '55px', top: '162px', right: '30px' }} data-scale="0.75">
                                                <i className="material-icons">keyboard_arrow_right</i>
                                            </div>


                                        </div>
                                    </div>
                                </div> : ''
                            }
                        </div>
                        <div className="col-md-12 footer" style={{ height: "50px", background: "#000" }}>
                            <p className="text-right">&copy; 2018 Equinix inc. All rights reserved.</p>
=======
                                                <div className="col-md-12 text-center">
                                                    <span className="orange"><i>458 Itala</i></span>
                                                </div>
                                            </div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car1.png" />
                                            <img data-u="thumb" src="/Lists/CarMaster/car1.png" />
                                            <div className="car-selection"><a href="#"></a></div>
                                        </div>
                                        <div data-p="170.00">
                                            <div className="car-name"> <h5>Car 1</h5></div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car2.png" />
                                            <img data-u="thumb" id="present_ride" src="/Lists/CarMaster/car2.png" />
                                        </div>
                                        <div data-p="170.00">
                                            <div className="car-name"> <h5>Car 2</h5></div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car3.png" />
                                            <img data-u="thumb" src="/Lists/CarMaster/car3.png" className="future_ride" />
                                        </div>
                                        <div data-p="170.00">
                                            <div className="car-name"> <h5>Car 2</h5></div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car3.png" />
                                            <img data-u="thumb" src="/Lists/CarMaster/car3.png" className="lock_ride" />
                                        </div>
                                        <div data-p="170.00">
                                            <div className="car-name"> <h5>Car 2</h5></div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car3.png" />
                                            <img data-u="thumb" src="/Lists/CarMaster/car3.png" />
                                        </div>
                                        <div data-p="170.00">
                                            <div className="car-name"> <h5>Car 2</h5></div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car3.png" />
                                            <img data-u="thumb" src="/Lists/CarMaster/car3.png" />
                                        </div>
                                        <div data-p="170.00">
                                            <div className="car-name"> <h5>Car 2</h5></div>
                                            <img data-u="image" className="car_bigview" src="/Lists/CarMaster/car3.png" />
                                            <img data-u="thumb" src="/Lists/CarMaster/car3.png" />
                                    </div>
                                    </div>
                                    <div data-u="thumbnavigator" className="jssort101 jsSort" data-autocenter="1" data-scale-bottom="0.75">
                                        <div data-u="slides">
                                            <div data-u="prototype" className="p jsPrototype" >
                                                <div data-u="thumbnailtemplate" className="t"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-u="arrowleft" className="jssora106 jsArrowLeft" data-scale="0.75">
                                        <svg className="jsViewBox">
                                            <circle className="c" cx="8000" cy="8000" r="6260.9"></circle>
                                            <polyline className="a" points="7930.4,5495.7 5426.1,8000 7930.4,10504.3 "></polyline>
                                            <line className="a" x1="10573.9" y1="8000" x2="5426.1" y2="8000"></line>
                                        </svg>
                                    </div>
                                    <div data-u="arrowright" className="jssora106 jsArrowRight" data-scale="0.75">
                                        <svg className="jsViewBox">
                                            <circle className="c" cx="8000" cy="8000" r="6260.9"></circle>
                                            <polyline className="a" points="8069.6,5495.7 10573.9,8000 8069.6,10504.3 "></polyline>
                                            <line className="a" x1="5426.1" y1="8000" x2="10573.9" y2="8000"></line>
                                        </svg>
                                    </div>
                                </div>
                            }
                        </div> */}
                            </div>
>>>>>>> 526be23a3863531322114b1396c62b6fc68d77cc
                        </div>
                        <div className="col-md-12 footer" style={{ height: "50px", background: "#000" }}>
                            <p className="text-right">&copy; 2018 Equinix inc. All rights reserved.</p>
                        </div>
                    </div>
                }

            </Loader>
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.match.params.id;
    return {
        id: userId,
        eliteProfile: state.profileState.eliteProfile,
        totalPoints: state.profileState.userPoints,
        rank: state.profileState.rank,
        totalTestDrives: state.profileState.totalTestDrives,
        currentTestDrives: state.profileState.currentTestDrives,
        avatars: state.profileState.avatars,
        cars: state.profileState.cars,
        loading: state.profileState.loading,
        totalCount: state.homeState.totalCount,
    }
};

export default connect(mapStateToProps)(MyProfile);
