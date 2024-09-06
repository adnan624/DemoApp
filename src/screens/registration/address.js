import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import StatusBarBackground from '../../components/StatusBarBackground';
import Header from '../../components/header';
import InputBox from '../../components/inputBox';
import DropDownBox from '../../components/dropDownBox';
import ButtonCompo from '../../components/buttonCompo';
import LeftArrow from 'react-native-vector-icons/AntDesign';
import BuildingIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
let styles = require('../../assets/styles/styles.js');

function Address({navigation}) {
  const [inputs, setInputs] = useState({
    address: '',
    landmark: '',
    city: '',
    pincode: '',
    isValidateAddress: true,
    isValidateLandmark: true,
    isValidateCity: true,
    isValidatePincode: true,
    check_textInputChange: false,
  });
  const leftArrowIcon = (
    <LeftArrow name="arrowleft" size={25} color="#384144" />
  );
  const buildingIcon = <BuildingIcon name="building" size={20} color="#000" />;
  const [isFocus, setIsFocus] = useState(false);
  const state_data = [
    {
      label: 'Maharashtra',
      value: 'mh',
    },
    {
      label: 'Gujarat',
      value: 'gu',
    },
    {
      label: 'Karnataka',
      value: 'kk',
    },
    {
      label: 'Madhya Pradesh',
      value: 'mp',
    },
    {
      label: 'Delhi',
      value: 'dl',
    },
    {
      label: 'Others',
      value: 'ot',
    },
  ];
  const [errors, setErrors] = useState(null);
  const textInputAddress = val => {
    if (val.trim().length >= 3) {
      setInputs({
        ...inputs,
        address: val,
        check_textInputChange: true,
        isValidateAddress: true,
      });
    } else {
      setInputs({
        ...inputs,
        address: val,
        check_textInputChange: false,
        isValidateAddress: false,
      });
    }
  };
  const handleValidAddress = val => {
    if (val.trim().length >= 3) {
      setInputs({
        ...inputs,
        isValidateAddress: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateAddress: false,
      });
    }
  };
  const textInputLandmark = val => {
    if (val.trim().length >= 3) {
      setInputs({
        ...inputs,
        landmark: val,
        check_textInputChange: true,
        isValidateLandmark: true,
      });
    } else {
      setInputs({
        ...inputs,
        landmark: val,
        check_textInputChange: false,
        isValidateLandmark: false,
      });
    }
  };
  const handleValidLandmark = val => {
    if (val.trim().length >= 3) {
      setInputs({
        ...inputs,
        isValidateLandmark: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateLandmark: false,
      });
    }
  };
  const textInputCity = val => {
    if (val.trim().length >= 3 && inputs.city.match(/^[A-Za-z]+$/)) {
      setInputs({
        ...inputs,
        city: val,
        check_textInputChange: true,
        isValidateCity: true,
      });
    } else {
      setInputs({
        ...inputs,
        city: val,
        check_textInputChange: false,
        isValidateCity: false,
      });
    }
  };
  const handleValidCity = val => {
    if (val.trim().length >= 3 && inputs.city.match(/^[A-Za-z]+$/)) {
      setInputs({
        ...inputs,
        isValidateCity: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateCity: false,
      });
    }
  };
  const textInputPincode = val => {
    if (val.trim().length >= 6 && inputs.pincode.match(/[^0-9]/g)) {
      setInputs({
        ...inputs,
        pincode: val,
        check_textInputChange: true,
        isValidatePincode: true,
      });
    } else {
      setInputs({
        ...inputs,
        pincode: val,
        check_textInputChange: false,
        isValidatePincode: false,
      });
    }
  };
  const handleValidPincode = val => {
    if (val.trim().length >= 6 && inputs.pincode.match(/[^0-9]/g)) {
      setInputs({
        ...inputs,
        isValidatePincode: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidatePincode: false,
      });
    }
  };
  const handleSubmit = () => {
    if (!inputs.address) {
      setErrors('Please Enter Address');
    } else if (!inputs.landmark) {
      setErrors('Please Enter Landmark');
    } else if (!inputs.city) {
      setErrors('Please Enter City');
    } else if (!inputs.pincode) {
      setErrors('Please Enter Pincode');
    } else {
      setErrors(null);
      Alert.alert('its done');
    }
  };
  return (
    <>
      <StatusBarBackground />
      <View style={styles.mainContainerCommon}>
        {/* Header */}
        <Header
          touchIcon={
            <TouchableOpacity onPress={() => navigation.pop()}>
              <MaterialIcons name="arrow-back" size={20} color="#293364" />
            </TouchableOpacity>
          }
          headerTxt={'Your Address'}
        />
        {/* mainContent starts here */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainScrollViewCommon}>
          <View>
            <View style={{}}>
              <InputBox
                //  apartment

                feildIcon={
                  <MaterialIcons name="apartment" size={20} color="#293364" />
                }
                placeHolderText="Address"
                handleChange={val => textInputAddress(val)}
                checkUserInput={e => handleValidAddress(e.nativeEvent.text)}
              />
              {inputs.isValidateAddress ? null : (
                <Text style={styles.errorTxtMsg1}>
                  Address should be more than 3 characters
                </Text>
              )}
            </View>
            <View style={{}}>
              <InputBox
                feildIcon={
                  <MaterialIcons name="apartment" size={20} color="#293364" />
                }
                placeHolderText="Landmark"
                handleChange={val => textInputLandmark(val)}
                checkUserInput={e => handleValidLandmark(e.nativeEvent.text)}
              />
              {inputs.isValidateLandmark ? null : (
                <Text style={styles.errorTxtMsg1}>
                  landmark should be more than 3 characters
                </Text>
              )}
            </View>
            <View style={{}}>
              <InputBox
                feildIcon={
                  <MaterialIcons name="apartment" size={20} color="#293364" />
                }
                placeHolderText="City"
                handleChange={val => textInputCity(val)}
                checkUserInput={e => handleValidCity(e.nativeEvent.text)}
              />
              {inputs.isValidateCity ? null : (
                <Text style={styles.errorTxtMsg1}>
                  only charecters are allowed
                </Text>
              )}
            </View>
            <View style={{top: -40}}>
              <DropDownBox
                placeTxt={!isFocus ? 'Select Your State' : '...'}
                drop_data={state_data}
              />
            </View>
            <View style={{top: -30}}>
              <InputBox
                feildIcon={
                  <MaterialIcons name="apartment" size={20} color="#293364" />
                }
                placeHolderText="Pin Code"
                handleChange={val => textInputPincode(val)}
                checkUserInput={e => handleValidPincode(e.nativeEvent.text)}
                dataLength={6}
                keyboardType={'numeric'}
              />
              {inputs.isValidatePincode ? null : (
                <Text style={styles.errorTxtMsg1}>
                  please enter 6 digit pincode no
                </Text>
              )}
            </View>
            {errors ? (
              <Text style={styles.errorTxtMsg}>{errors}</Text>
            ) : (
              <Text />
            )}
            <ButtonCompo btnTxt={'Submit'} onClickBtn={() => handleSubmit()} />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Address;
