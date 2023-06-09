import { Platform } from 'react-native';

export const colors = {
	primaryRed: '#FF2C58',
	primaryButton: '#FF1647',
	green: '#1B8700',
	darkRed: '#6C001F',
	lightInputGrey: '#919191',
	secondaryButton: '#315991',
	lightInput: '#6C757D',
	headerOrange: '#F37965',
	lightGrey: '#D3D3D3',
	grey: '#C0C0C0',
	darkGrey: '#5A5A5A',
	white: '#FFFFFF',
	bgGrey: '#F0F0F0',
	black: '#000000',
	golden: '#EBB55F',
	pink: '#FFC0CB',
	orange: '#FFA500',
	lightBlack: '#343A40',
	placeholderGrey: '#D9D9D9',
	yellow: '#FFD600',
};

export const fonts = {
	...Platform.select({
		ios: {
			Ovo: 'Ovo',
			Pattaya: 'Pattaya-Regular',
			Oxygen: 'Oxygen-Regular',
			OxygenLight: 'Oxygen-Light',
			OxygenBold: 'Oxygen-Bold',
			PoppinsBlack: 'Poppins-Black',
			PoppinsBlackItalic: 'Poppins-BlackItalic',
			PoppinsBold: 'Poppins-Bold',
			PoppinsBoldItalic: 'Poppins-BoldItalic',
			PoppinsExtraBold: 'Poppins-ExtraBold',
			PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
			PoppinsExtraLight: 'Poppins-ExtraLight',
			PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
			PoppinsItalic: 'Poppins-Italic',
			PoppinsLight: 'Poppins-Light',
			PoppinsLightItalic: 'Poppins-LightItalic',
			PoppinsMedium: 'Poppins-Medium',
			PoppinsMediumItalic: 'Poppins-MediumItalic',
			PoppinsRegular: 'Poppins-Regular',
			PoppinsSemiBold: 'Poppins-SemiBold',
			PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
			PoppinsThin: 'Poppins-Thin',
			PoppinsThinItalic: 'Poppins-ThinItalic',
		},
		android: {
			Ovo: 'Ovo-Regular',
			Pattaya: 'Pattaya-Regular',
			Oxygen: 'Oxygen-Regular',
			OxygenLight: 'Oxygen-Light',
			OxygenBold: 'Oxygen-Bold',
			PoppinsBlack: 'Poppins-Black',
			PoppinsBlackItalic: 'Poppins-BlackItalic',
			PoppinsBold: 'Poppins-Bold',
			PoppinsBoldItalic: 'Poppins-BoldItalic',
			PoppinsExtraBold: 'Poppins-ExtraBold',
			PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
			PoppinsExtraLight: 'Poppins-ExtraLight',
			PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
			PoppinsItalic: 'Poppins-Italic',
			PoppinsLight: 'Poppins-Light',
			PoppinsLightItalic: 'Poppins-LightItalic',
			PoppinsMedium: 'Poppins-Medium',
			PoppinsMediumItalic: 'Poppins-MediumItalic',
			PoppinsRegular: 'Poppins-Regular',
			PoppinsSemiBold: 'Poppins-SemiBold',
			PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
			PoppinsThin: 'Poppins-Thin',
			PoppinsThinItalic: 'Poppins-ThinItalic',
		},
	}),
};
