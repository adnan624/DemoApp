import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import StatusBarBackground from '../../components/StatusBarBackground';
import Header from '../../components/header';
import InputBox from '../../components/inputBox';
import RadioCompo from '../../components/radioCompo';
import ButtonCompo from '../../components/buttonCompo';
import CallIcon from 'react-native-vector-icons/Ionicons';
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LockIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
let styles = require('../../assets/styles/styles.js');

function BasicInfo({navigation}) {
  const [inputs, setInputs] = useState({
    avatar: '',
    firstname: '',
    lastname: '',
    phone_no: '',
    email: '',
    password: '',
    confirm_password: '',
    isValidateFirstName: true,
    isValidateLastname: true,
    isValidatePhoneNo: true,
    check_textInputChange: false,
    secureTextEntry: false,
    isValidateEmail: true,
    isValidatePassword: true,
    isValidateConfirmPassword: true,
  });
  const [coverImage, setCoverImage] = useState();
  const [errors, setErrors] = useState(null);

  const textInputChange = val => {
    if (val.trim().length >= 3 && inputs.firstname.match(/^[A-Za-z]+$/)) {
      setInputs({
        ...inputs,
        firstname: val,
        check_textInputChange: true,
        isValidateFirstName: true,
      });
    } else {
      setInputs({
        ...inputs,
        firstname: val,
        check_textInputChange: false,
        isValidateFirstName: false,
      });
    }
  };
  const handleValidUser = val => {
    if (val.trim().length >= 3 && inputs.firstname.match(/^[A-Za-z]+$/)) {
      setInputs({
        ...inputs,
        isValidateFirstName: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateFirstName: false,
      });
    }
  };
  const textInputChange1 = val => {
    if (val.trim().length >= 3 && inputs.lastname.match(/^[A-Za-z]+$/)) {
      setInputs({
        ...inputs,
        lastname: val,
        check_textInputChange: true,
        isValidateLastname: true,
      });
    } else {
      setInputs({
        ...inputs,
        lastname: val,
        check_textInputChange: false,
        isValidateLastname: false,
      });
    }
  };
  const handleValidLastName = val => {
    if (val.trim().length >= 3 && inputs.lastname.match(/^[A-Za-z]+$/)) {
      setInputs({
        ...inputs,
        isValidateLastname: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateLastname: false,
      });
    }
  };
  const textInputChange3 = val => {
    if (
      inputs.email.length >= 1 &&
      inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setInputs({
        ...inputs,
        email: val,
        check_textInputChange: true,
        isValidateEmail: true,
      });
    } else {
      setInputs({
        ...inputs,
        email: val,
        check_textInputChange: false,
        isValidateEmail: false,
      });
    }
  };
  const handleValidEmail = val => {
    if (
      inputs.email.length >= 1 &&
      inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setInputs({
        ...inputs,
        isValidateEmail: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateEmail: false,
      });
    }
  };
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        const source = {uri: image.path};
        setCoverImage(source);
        setInputs(inputs => ({
          ...inputs,
          avatar: image.data,
          avatar_path: image.path,
        }));
      })
      .catch(error => {
        console.error('ImagePicker Error: ', error);
      });
  };

  function pickImageFromCamera() {
    ImagePicker.openCamera({
      width: 80,
      height: 80,
      borderRadius: 80 / 2,
      cropping: true,
      includeBase64: true,
    }).then(response => {
      const source = {uri: response?.path};
      setCoverImage(source ? source : null);
      setInputs(inputs => ({...inputs, ['avatar_path']: response.path}));
      setInputs(inputs => ({...inputs, ['avatar']: response.data}));
    });
  }

  const updateShow = () => {
    setInputs({
      ...inputs,
      secureTextEntry: !inputs.secureTextEntry,
    });
  };
  const textInputChange2 = val => {
    if (
      val.trim().length === 10 &&
      inputs.phone_no.match(
        /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
      )
    ) {
      setInputs({
        ...inputs,
        phone_no: val,
        check_textInputChange: true,
        isValidatePhoneNo: true,
      });
    } else {
      setInputs({
        ...inputs,
        phone_no: val,
        check_textInputChange: false,
        isValidatePhoneNo: false,
      });
    }
  };
  const handleValidPhoneNumber = val => {
    if (
      val.trim().length === 10 &&
      inputs.phone_no.match(
        /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
      )
    ) {
      setInputs({
        ...inputs,
        isValidatePhoneNo: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidatePhoneNo: false,
      });
    }
  };
  const textInputChange4 = val => {
    if (inputs.password.match(/^[0-9a-zA-Z]+$/)) {
      setInputs({
        ...inputs,
        password: val,
        check_textInputChange: true,
        isValidatePassword: true,
      });
    } else {
      setInputs({
        ...inputs,
        password: val,
        check_textInputChange: false,
        isValidatePassword: false,
      });
    }
  };
  const handleValidPassword = val => {
    if (inputs.password.match(/^[0-9a-zA-Z]+$/)) {
      setInputs({
        ...inputs,
        isValidatePassword: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidatePassword: false,
      });
    }
  };
  const handleValidateConfirmPassword = (value, name) => {
    setInputs(inputs => ({...inputs, [name]: value}));
  };
  const handleSubmit = () => {
    if (!inputs.firstname) {
      setErrors('Please Enter First Name');
    } else if (!inputs.lastname) {
      setErrors('Please Enter Last Name');
    } else if (!inputs.phone_no) {
      setErrors('Please Enter Phone Number');
    } else if (!inputs.email) {
      setErrors('Please Enter Email');
    } else if (!inputs.password) {
      setErrors('Please Enter Password');
    } else if (!inputs.confirm_password) {
      setErrors('Please Enter Confirm Password');
    } else if (inputs.password != inputs.confirm_password) {
      setErrors('password and confrim password does not match');
    } else {
      setErrors(null);
      navigation.navigate('infoPage');
    }
  };

  return (
    <>
      <StatusBarBackground />
      <View style={styles.mainContainerCommon}>
        {/* Header */}
        <Header headerTxt={'Register'} />

        {/* mainContent starts here */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainScrollViewCommon}>
          {coverImage ? (
            <View style={styles.basicInfoImageView}>
              <Image source={coverImage} style={styles.basicInfoImage} />
              <TouchableOpacity
                style={styles.basicInfoTouchEdit}
                onPress={() => pickImage()}>
                {/* {editIcon} */}

                <MaterialIcons name="account-edit" size={20} color="#293364" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.basicInfoEditImgView}>
              <TouchableOpacity
                style={[styles.basicInfoTouchEdit, {marginLeft: 100}]}
                onPress={() => pickImage()}>
                {/* {editIcon} */}
                <MaterialIcons name="mode-edit" size={20} color="#293364" />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.basicInputContainer}>
            <View style={{}}>
              <Text style={styles.basicInputHeadingTxt}>
                First Name<Text>*</Text>
              </Text>
              <InputBox
                // feildIcon = {nameIcon}
                feildIcon={
                  <MaterialIcons name="person" size={20} color="#293364" />
                }
                placeHolderText="Enter your first name here"
                handleChange={val => textInputChange(val)}
                checkUserInput={e => handleValidUser(e.nativeEvent.text)}
              />
              {inputs.isValidateFirstName ? null : (
                <Text style={styles.errorTxtMsg}>
                  Name should be more than 3 letter and only characters are
                  allowed
                </Text>
              )}
            </View>
            <View style={{}}>
              <Text style={styles.basicInputHeadingTxt}>
                Last Name<Text>*</Text>
              </Text>
              <InputBox
                // feildIcon = {nameIcon}
                feildIcon={
                  <MaterialIcons name="person" size={20} color="#293364" />
                }
                placeHolderText="Enter your last name here"
                handleChange={val => textInputChange1(val)}
                checkUserInput={e => handleValidLastName(e.nativeEvent.text)}
              />
              {inputs.isValidateLastname ? null : (
                <Text style={styles.errorTxtMsg}>
                  Name should be more than 3 letter and only characters are
                  allowed
                </Text>
              )}
            </View>
            <View style={{}}>
              <Text style={styles.basicInputHeadingTxt}>
                Phone Number<Text>*</Text>
              </Text>
              <InputBox
                // feildIcon = {callIcon}
                feildIcon={
                  <MaterialIcons name="call" size={20} color="#293364" />
                }
                placeHolderText="Enter your 10 digit phone number"
                dataLength={10}
                keyboardType={'numeric'}
                handleChange={val => textInputChange2(val)}
                checkUserInput={e => handleValidPhoneNumber(e.nativeEvent.text)}
              />
              {inputs.isValidatePhoneNo ? null : (
                <Text style={styles.errorTxtMsg}>
                  phone number should be of 10 digit
                </Text>
              )}
            </View>
            <View style={{}}>
              <Text style={styles.basicInputHeadingTxt}>
                Email<Text>*</Text>
              </Text>
              <InputBox
                // feildIcon = {emailIcon}
                feildIcon={
                  <MaterialIcons name="email" size={20} color="#293364" />
                }
                placeHolderText="Your email here"
                handleChange={val => textInputChange3(val)}
                checkUserInput={e => handleValidEmail(e.nativeEvent.text)}
              />
              {inputs.isValidateEmail ? null : (
                <Text style={styles.errorTxtMsg}>enter a valid email id</Text>
              )}
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.basicInputHeadingTxt}>Gender</Text>
              <View style={{}}>
                <RadioCompo />
              </View>
            </View>
            <View style={{}}>
              <Text style={styles.basicInputHeadingTxt}>
                Password<Text>*</Text>
              </Text>
              <InputBox
                feildIcon={
                  <MaterialIcons name="lock" size={20} color="#293364" />
                }
                placeHolderText="Password"
                secureTextEntry={inputs.secureTextEntry}
                handleChange={val => textInputChange4(val, 'password')}
                checkUserInput={e => console.log(e.nativeEvent.text)}
                showPassword={
                  <TouchableOpacity onPress={updateShow}>
                    <MaterialIcons
                      name={
                        inputs.secureTextEntry ? 'visibility' : 'visibility-off'
                      }
                      size={20}
                      color="#293364"
                    />
                  </TouchableOpacity>
                }
              />
              {inputs.isValidatePassword ? null : (
                <Text style={styles.errorTxtMsg}>
                  enter a valid combination of char, number password here
                </Text>
              )}
            </View>
            <View style={{}}>
              <Text style={styles.basicInputHeadingTxt}>
                Confirm Password<Text>*</Text>
              </Text>
              <InputBox
                // feildIcon = {lockIcon}
                feildIcon={
                  <MaterialIcons name="lock" size={20} color="#293364" />
                }
                placeHolderText="Confirm Password"
                secureTextEntry={true}
                handleChange={e =>
                  handleValidateConfirmPassword(e, 'confirm_password')
                }
              />
            </View>
            {errors ? (
              <Text style={styles.errorTxtMsg}>{errors}</Text>
            ) : (
              <Text />
            )}
            <ButtonCompo
              style={{marginBottom: 20}}
              btnTxt={'Next'}
              onClickBtn={() => handleSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default BasicInfo;
