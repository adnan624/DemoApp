import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import StatusBarBackground from '../../components/StatusBarBackground';
import Header from '../../components/header';
import InputBox from '../../components/inputBox';
import DropDownBox from '../../components/dropDownBox';
import LeftArrow from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

let styles = require('../../assets/styles/styles.js');

function InfoPage({navigation}) {
  const [inputs, setInputs] = useState({
    grade: '',
    experience: '',
    isValidateGrade: true,
    isValidateExperience: true,
    check_textInputChange: false,
  });
  const [isFocus, setIsFocus] = useState(false);
  const leftArrowIcon = (
    <LeftArrow name="arrowleft" size={25} color="#384144" />
  );

  const qualification_data = [
    {
      label: 'Post Graduate',
      value: 'pg',
    },
    {
      label: 'Graduate”',
      value: 'g',
    },
    {
      label: 'HSC/Diploma',
      value: 'hd',
    },
    {
      label: 'SSC',
      value: 'sc',
    },
  ];
  const year_data = [
    {
      label: '2019',
      value: '2019',
    },
    {
      label: '2020',
      value: '2020',
    },
    {
      label: '2021',
      value: '2021',
    },
    {
      label: '2022',
      value: '2022',
    },
  ];
  const designation_data = [
    {
      label: 'Software Developer',
      value: 'sd',
    },
    {
      label: 'Mobile App Developer',
      value: 'md',
    },
    {
      label: 'Manager',
      value: 'm',
    },
    {
      label: 'Sales Person',
      value: 'sp',
    },
  ];
  const domain_data = [
    {
      label: 'IT',
      value: 'it',
    },
    {
      label: 'HR',
      value: 'hr',
    },
    {
      label: 'Management',
      value: 'mn',
    },
    {
      label: 'Accounts',
      value: 'ac',
    },
  ];

  const textInputChange = val => {
    var letters = /^[0-9a-zA-Z]+$/;
    if (inputs.grade.match(letters)) {
      setInputs({
        ...inputs,
        grade: val,
        check_textInputChange: true,
        isValidateGrade: true,
      });
    } else {
      setInputs({
        ...inputs,
        grade: val,
        check_textInputChange: false,
        isValidateGrade: false,
      });
    }
  };
  const handleValidGrade = val => {
    var letters = /^[0-9a-zA-Z]+$/;
    if (inputs.grade.match(letters)) {
      setInputs({
        ...inputs,
        isValidateGrade: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateGrade: false,
      });
    }
  };

  const textInputChange1 = val => {
    var letters = /^[0-9]+$/;
    if (inputs.experience.match(letters)) {
      setInputs({
        ...inputs,
        experience: val,
        check_textInputChange: true,
        isValidateExperience: true,
      });
    } else {
      setInputs({
        ...inputs,
        experience: val,
        check_textInputChange: false,
        isValidateExperience: false,
      });
    }
  };
  const handleValidExperience = val => {
    var letters = /^[0-9]+$/;
    if (inputs.experience.match(letters)) {
      setInputs({
        ...inputs,
        isValidateExperience: true,
      });
    } else {
      setInputs({
        ...inputs,
        isValidateExperience: false,
      });
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
          headerTxt={'Your Info'}
        />
        {/* mainContent starts here */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainScrollViewCommon}>
          <View>
            <Text style={styles.infoInputHeadingTxt}>Educational Info</Text>
            <DropDownBox
              dropTxt={'Education'}
              placeTxt={!isFocus ? 'Select Qualification' : '...'}
              drop_data={qualification_data}
            />
            <DropDownBox
              dropTxt={'Year Of Passing'}
              placeTxt={!isFocus ? 'Year of Passing' : '...'}
              drop_data={year_data}
            />
            <View style={{}}>
              <Text style={styles.infoInputFeildTxt}>
                Grade<Text>*</Text>
              </Text>
              <InputBox
                placeHolderText="Enter your Grade of Percentage"
                handleChange={val => textInputChange(val)}
                checkUserInput={e => handleValidGrade(e.nativeEvent.text)}
              />
              {inputs.isValidateGrade ? null : (
                <Text style={styles.errorTxtMsg}>
                  mention your grade in charecters or percentage
                </Text>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.infoInputHeadingTxt}>Professional Info</Text>
            <View style={{}}>
              <Text style={styles.infoInputFeildTxt}>
                Experience<Text>*</Text>
              </Text>
              <InputBox
                placeHolderText="Enter your years of Experience"
                handleChange={val => textInputChange1(val)}
                checkUserInput={e => handleValidExperience(e.nativeEvent.text)}
                keyboardType={'numeric'}
              />
              {inputs.isValidateExperience ? null : (
                <Text style={styles.errorTxtMsg}>
                  mention your no experience in years
                </Text>
              )}
            </View>
            <DropDownBox
              dropTxt={'Designation'}
              placeTxt={!isFocus ? 'Select Designation' : '...'}
              drop_data={designation_data}
            />
            <DropDownBox
              dropTxt={'Domain'}
              placeTxt={!isFocus ? 'Select Domain' : '...'}
              drop_data={domain_data}
            />
          </View>
          <View style={styles.btnTouchInfoContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              style={[styles.btnTouchView, styles.btnTouchInfoPre]}>
              <Text style={styles.btnTouchTxtPre}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('address')}
              activeOpacity={0.7}
              style={[styles.btnTouchView, styles.btnTouchInfoNext]}>
              <Text style={styles.btnTouchTxt}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default InfoPage;
