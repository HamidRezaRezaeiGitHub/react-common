// Base interface for all address field components
export interface BaseFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  errors?: string[];
}

export interface AddressData {
  unitNumber?: string;
  streetNumber?: string;
  streetName: string;
  city: string;
  stateOrProvince: string;
  postalOrZipCode?: string;
  country: string;
}

// Create an empty address data object
export const createEmptyAddress = (): AddressData => ({
  unitNumber: '',
  streetNumber: '',
  streetName: '',
  city: '',
  stateOrProvince: '',
  postalOrZipCode: '',
  country: ''
});

// Flexible Address Form Component (Primary Address Form)
export { addressFieldConfigs, default as FlexibleAddressForm, parseStreetNumber } from './FlexibleAddressForm';
export type { AddressFieldConfig, FlexibleAddressFormProps } from './FlexibleAddressForm';

// Individual Address Field Components
export { CityField } from './City';
export { CountryField } from './Country';
export { PostalCodeField } from './PostalCode';
export { StateProvinceField } from './StateProvince';
export { StreetNameField } from './StreetName';
export { StreetNumberField } from './StreetNumber';
export { StreetNumberNameField } from './StreetNumberName';
export { UnitNumberField } from './UnitNumber';

// Field Component Prop Types
export type { CityFieldProps } from './City';
export type { CountryFieldProps } from './Country';
export type { PostalCodeFieldProps } from './PostalCode';
export type { StateProvinceFieldProps } from './StateProvince';
export type { StreetNameFieldProps } from './StreetName';
export type { StreetNumberFieldProps } from './StreetNumber';
export type { StreetNumberNameFieldProps } from './StreetNumberName';
export type { UnitNumberFieldProps } from './UnitNumber';

