import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  I18nManager,
  Image,
  ImageBackground,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import {
  useLazyFetchOneQuery,
  useLoginRequestMutation,
} from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import LinearGradient from 'react-native-linear-gradient'
import {
  getDeviceLang,
  israelPhoneCode,
  phoneNoRegex,
  windowHeight,
  windowWidth,
} from '@/Utilities/helper'
import { styles } from './styles'
import LottieView from 'lottie-react-native'
import LeftArrowIcon from '@/Assets/icons/left-arrow.svg'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { t } from 'i18next'
import BackgroundImage from '@/Assets/backgrounds/login-background.svg'
import DrHackImage from '@/Assets/icons/dr-hack.svg'
import ButtonSolid from '@/Components/Buttons/ButtonSolid'
import GradientHOC from '@/Components/GradientHOC'

const schema = yup
  .object({
    phone: yup
      .string()
      .required(t('phoneErrorRequired'))
      .matches(phoneNoRegex, t('phoneError')),
  })
  .required()

const Login = ({ navigation }) => {
  const { t } = useTranslation()
  const [loginRequest, { data, error, isLoading }] = useLoginRequestMutation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const onSubmit = async data => {
    // const res = await loginRequest({ ...data, countryCode: israelPhoneCode })
    const res = await loginRequest({
      phone: '8146529337',
      countryCode: '+91',
      password: 'password',
    })
    navigation.navigate('OtpScreen')
    console.log(res)
  }
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <ScrollView style={Layout.fill} contentContainerStyle={[Layout.fill]}>
        <GradientHOC>
          <View style={styles.lottieView}>
            <LottieView
              style={styles.lottie}
              source={require('./circle-dots.json')}
              autoPlay
              loop
            />
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.accountLogin}>{t('login')}</Text>
            <Text style={styles.loginMessage}>{t('loginMessage')}</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder={t('phone')}
                  style={styles.input}
                  value={value}
                  maxLength={10}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  keyboardType="number-pad"
                />
              )}
              name="phone"
            />
            <View style={styles.errorContainer}>
              {errors?.phone ? (
                <Text style={styles.errors}>{errors?.phone?.message}</Text>
              ) : (
                <Text style={styles.errorTransparent}>
                  {errors?.phone?.message}
                </Text>
              )}
            </View>
            <ButtonSolid
              translatableText={'loginAction'}
              onPress={() => handleSubmit(onSubmit)}
              isLoading={isLoading}
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
            <View style={styles.forgotContainer}>
              <Text style={styles.forgotText}>{t('forgotLogin')}</Text>
              <Text style={styles.protectText}>{t('accountProtect')}</Text>
            </View>
          </View>
          <View style={styles.appNameBanner}>
            <DrHackImage />
            {/* <Text style={styles.appNameBannerText}>Dr Hack</Text> */}
          </View>
          <View style={styles.backgroundContainer}>
            {/* <BackgroundImage width={windowWidth*1.1} height={windowHeight/1.2} /> */}
            <Image
              resizeMode="stretch"
              source={require('@/Assets/backgrounds/BackgroundLogo.png')}
              style={styles.backgroundImage}
            />
          </View>
        </GradientHOC>
      </ScrollView>
    </View>
  )
}

export default Login
