import { atom } from 'recoil'

const prefix = 'Dashboard'

export const FlightClassAtom = atom<number>({
	key: `${prefix}flightClass`,
	default: 1,
})

export const BookingTypeAtom = atom<number>({
	key: `${prefix}bookingType`,
	default: 1,
})
