import { View, Text, Animated, I18nManager } from 'react-native'
import React from 'react'
import GradientHOC from '@/Components/GradientHOC'
import { RFValue } from 'react-native-responsive-fontsize'
import { windowHeight, windowWidth } from '@/Utilities/helper'
import LottieView from 'lottie-react-native'
import { styles } from './style'
import SecurityIcon from '@/Assets/icons/security.svg'
import { ExpandingDot } from 'react-native-animated-pagination-dots'
import ButtonSolid from '@/Components/Buttons/ButtonSolid'
import LeftArrowIcon from '@/Assets/icons/left-arrow.svg'
import DrHackImage from '@/Assets/icons/dr-hack.svg'
const WalkThrough = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <View style={{ flex: 1 }}>
      <GradientHOC>
        <View
          style={{
            alignSelf: 'center',
            marginTop: RFValue(80),
            borderRadius: 200,
            width: RFValue(180),
            height: RFValue(180),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00C4FF',
          }}
        >
          <View style={styles.lottieView}>
            <LottieView
              style={styles.lottie}
              source={require('./circle-dots.json')}
              autoPlay
              loop
            />
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              // marginTop: RFValue(120),
              borderRadius: 200,
              width: RFValue(180),
              height: RFValue(180),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#00C4FF',
            }}
          >
            {/* <View style={styles.InnerCircleLottieView}> */}
            <LottieView
              style={styles.innerCircleLottie}
              source={require('./circle-trim.json')}
              autoPlay
              loop
            />
            {/* </View> */}
            <View style={{ position: 'absolute' }}>
              <SecurityIcon width={RFValue(100)} height={RFValue(100)} />
            </View>
          </View>
        </View>
        <Text
          style={{
            width: RFValue(180),
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: RFValue(32),
            color: '#ffffff',
            fontSize: RFValue(24),
            fontFamily: 'NotoSansHebrew-Bold',
          }}
        >
          הגנה מקיפה על כל חשבונותיך
        </Text>
        <Text
          style={{
            width: '80%',
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: RFValue(15),
            color: '#ffffff',
            fontSize: RFValue(14),
            fontFamily: 'NotoSansHebrew-Regular',
          }}
        >
          מאובטח בתחומים שתי בעוד הראשון שונים השנייה הפיגוע גם ביטחוני, סך של
          ארגון ארגונית על ככורח מונחות והאמצעים אבטחה מוניטין
        </Text>
        <View
          style={{
            marginTop: RFValue(50),
          }}
        >
          <ExpandingDot
            data={[
              {
                key: 1,
              },
              {
                key: 2,
              },
              {
                key: 3,
              },
            ]}
            expandingDotWidth={20}
            scrollX={scrollX}
            inActiveDotOpacity={1}
            inActiveDotColor="rgba(255, 255, 255, 0.2)"
            dotStyle={{
              width: 20,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
            activeDotColor="white"
            containerStyle={{
              top: 0,
            }}
          />
        </View>
        <ButtonSolid
          containerStyle={{
            height: RFValue(45),
            width: '80%',
            alignSelf: 'center',
            marginTop: RFValue(40),
          }}
          textStyle={{
            fontSize: RFValue(16),
          }}
          translatableText={'הבא'}
          icon={
            <LeftArrowIcon
              width={21}
              height={17}
              style={{
                transform: [{ scaleX: I18nManager.isRTL ? 1 : -1 }],
              }}
            />
          }
        />
        <Text
          style={{
            width: '80%',
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: RFValue(15),
            color: 'rgba(0, 196, 255, 1)',
            fontSize: RFValue(14),
            fontFamily: 'NotoSansHebrew-Bold',
          }}
        >
          דלג/י לכניסה
        </Text>
        <View style={styles.appNameBanner}>
          <DrHackImage />
          {/* <Text style={styles.appNameBannerText}>Dr Hack</Text> */}
        </View>
      </GradientHOC>
    </View>
  )
}

export default WalkThrough
