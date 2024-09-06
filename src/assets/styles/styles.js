import {Dimensions, StyleSheet} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let primaryColor = '#FFFFFF';
let secondaryColor = '#000000';
let commonBtnColor = '#293364';
let boldFont = 'Poppins-Bold';
let regularFont = 'Poppins-Regular';

module.exports = StyleSheet.create({

  //Common Container
  
  mainContainerCommon: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: primaryColor,
  },
  mainScrollViewCommon: {
    flex: 1,
    width: width,
    backgroundColor: primaryColor,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  mainContainerCommonView: {
    paddingBottom: 20,
  },

  // Header

  headerMainView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
    alignSelf:'center'
  },
  headerLeftView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: -22,
  },
  headerCenterView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    // backgroundColor:'red'
  },
  headerRightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: -10,
  },
  headerMainTxt: {
    fontSize: 28,
    fontFamily: boldFont,
    color: '#000000',
    fontWeight: '800',
    textAlign: 'center',
  },
  
  //Register

  basicInfoImageView:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    left: 15
  },
  basicInfoImage:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 80/2,
    borderColor: '#000',
    borderWidth: 1,
  },
  basicInfoTouchEdit:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    left: -15
  },
  basicInfoEditImgView:{
    height: 80,
    width: 80,
    borderRadius: 80/2,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  basicInfoTouchEdit1:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 20,
    left: 10,
    backgroundColor: '#fff',
  },
  basicInputContainer: {
    flex: 1,
  },
  basicInputHeadingTxt:{
    fontSize:14,
    color: '#000',
    fontWeight: '800',
    paddingVertical: 5,
  },

  //Info Page

  infoInputHeadingTxt: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
  infoInputFeildTxt:{
    fontSize:14,
    color: '#000',
    fontWeight: '800',
    paddingVertical: 5,
  },
 
  //Buttons

  btnTouchView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#293364',
    borderRadius: 5,
    marginTop: 30,
  },
  btnTouchTxt: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: regularFont,
    fontWeight: '800',
  },
  btnTouchInfoContainer :{
    flexDirection: 'row',
  },
  btnTouchInfoPre: {
    width: 100,
    flex: 1,
    marginRight: 10,
    backgroundColor: '#fff',
    borderColor: '#293364',
    borderWidth:1,
  },
  btnTouchTxtPre: {
    color: '#293364',
    fontSize: 13,
    fontFamily: regularFont,
    fontWeight: '800',
  },
  btnTouchInfoNext: {
    width: 100,
    flex:1,
    //marginLeft: 10,
  },
  //error message

  errorTxtMsg: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center'
  },
  errorTxtMsg1 :{
    fontSize: 11,
    color: 'red',
    textAlign: 'center',
    bottom: 6,
  },

  //InputBox
  
    inputBoxView: {
      backgroundColor: '#FFFFFF',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      marginBottom: 10,
      alignItems:'center',
    },
    inputBoxTxtInput: {
      color: '#000000',
      fontSize: 15,
      fontFamily: boldFont,
      width: '90%',
      paddingHorizontal:10,
      // borderColor:'yellow',
      // borderWidth:1
    },
  
  //Radio Button

    radioBtnContainer:{
      flexDirection: 'row',
      flex:1,

    },
    radioBtnView:{
      flexDirection: 'row',
      flex:1,
    },
    radioBtnTouchContainer:{
      borderRadius: 10,
      borderWidth:1,
      borderColor: '#000',
      height:20,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    radioBtnTouchContainer1:{
      borderRadius: 10,
      borderWidth:1,
      borderColor: '#000',
      height:20,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioBtnTouchView:{
      borderRadius: 10,
      borderWidth:1,
      backgroundColor: '#293364',
      height:14,
      width: 14,
      alignSelf: 'center',
    },
    radioBtnTxt:{
      paddingLeft: 8,
    },

  //Dropdown

    dropdownBox: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    dropdownBoxTxt: {
      fontSize: 16,
      fontWeight: '700',
      color: '#000000',
      paddingVertical: 10,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },

});