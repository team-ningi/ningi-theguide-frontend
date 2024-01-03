import { v4 as uuidv4 } from "uuid";

export const SuitabilityReportExample = [
  { Title: "client 1s title" },
  { FirstName: "client 1s first name" },
  { LastName: "client 1s last name" },
  { Email: "client 1s email" },
  { Age: "client 1s age" },
  { Occupation: "client 1s occupation" },
  { Employer: "client 1s employer" },
  { TotalAnnualEarnings: "client 1s total annual earnings" },
  { IsInGoodHealth: "is client 1 in good health" },
  { MedicalConditions: "client 1s medical conditions" },
  {
    Client1AgreesWithGeneratedRiskProfile:
      "does client 1 agree with the generated risk profile",
  },
  { Client1Notes: "client 1s notes" },
  { DependantRelationship: "client 1s relationship to their dependant" },
  { DependantName: "client 1s dependands name" },
  { TitleClient2: "client 2s title" },
  { FirstNameClient2: "client 2s first name" },
  { LastNameClient2: "client 2s last name" },
  { AgeClient2: "client 2s age" },
  { OccupationClient2: "client 2s occupation" },
  { EmployerClient2: "client 2s employer" },
  { TotalAnnualEarningsClient2: "client 2s total annual earnings" },
  { IsInGoodHealthClient2: "is client 2 in good health" },
  { MedicalConditionsClient2: "client 2s medical conditions" },
  {
    Client2AgreesWithGeneratedRiskProfile:
      "does client 2 agree with the generated risk profile ",
  },
  { Client2Notes: "client 2s notes" },
  { CurrentDate: "the current date" },
  { ReferenceNumber: "the reference number" },
  { BudgetNotes: "budget notes" },
  { MonthlyIncome: "monthly income" },
  { MonthlyExpenditure: "monthly expenditure" },
  { ProfileNotes: "profile notes" },
  { GoalsObjectivesNotes: "goals objectives notes" },
  { GoalsObjectivesDetails: "goals objectives details" },
  { GeneratedRiskScoreTitle: "generated risk score title" },
  { GeneratedRiskScoreDescription: "generated risk score description" },
  { WholeMarketProviderName: "whole market provider name" },

  { CurrentInvestmentProvider: "client 1s current investment provider" },
  { CurrentInvestmentPlanType: "client 1s current investment plan type" },
  {
    CurrentInvestmentPolicyNumber: "client 1s current investment policy number",
  },
  {
    CurrentInvestmentFundsAndSplit:
      "client 1s current investment funds and split",
  },
  { CurrentInvestmentValue: "client 1s current investment value" },
  {
    CurrentInvestmentTransferValue:
      "client 1s current investment transfer value",
  },
  {
    CurrentInvestmentRegularContribution:
      "client 1s current investment regular contribution",
  },
  {
    DoesCurrentInvestmentMatchRiskLevel:
      "does client 1s current investment match their risk level",
  },
  {
    CurrentInvestmentGuarantees:
      "does client 1s current investment have any guarentees",
  },
  {
    CurrentInvestmentOngoingChargesFund:
      "client 1s current investment ongoing charges Fund",
  },
  {
    CurrentInvestmentOngoingChargesDFM:
      "client 1s current investment ongoing charges DFM",
  },
  {
    CurrentInvestmentOngoingChargesAdviser:
      "client 1s current investment ongoing charges adviser",
  },
  {
    CurrentInvestmentOngoingChargesPlatform:
      "client 1s current investment ongoing charges platform",
  },
  {
    CurrentInvestmentSumOfOngoingCharges:
      "client 1s current investment sum of all ongoing charges",
  },
  {
    CurrentInvestmentInitialCharges:
      "client 1s current investment initial charges",
  },
  {
    CurrentInvestmentReductionInYield:
      "client 1s current investment reduction in yield",
  },
  { CurrentInvestmentTransfer: "client 1s current investment transfer" },
  { CurrentInvestmentReasons: "client 1s current investment reasons" },

  { CurrentPensionProvider: "client 1s current pension provider" },
  { CurrentPensionPlanType: "client 1s current pension plan type" },
  { CurrentPensionPolicyNumber: "client 1s current pension policy number" },
  { CurrentPensionFundsAndSplit: "client 1s current pension funds and split" },
  { CurrentPensionValue: "client 1s current pension value" },
  { CurrentPensionTransferValue: "client 1s current pension transfer value" },
  {
    CurrentPensionRegularContribution:
      "client 1s current pension regular contribution",
  },
  {
    DoesCurrentPensionMatchRiskLevel:
      "client 1s current pension match their risk level",
  },
  { CurrentPensionGuarantees: "does client 1s current pension guarentees" },
  {
    CurrentPensionOngoingChargesFund:
      "client 1s current pension ongoing charges Fund",
  },
  {
    CurrentPensionOngoingChargesDFM:
      "client 1s current pension ongoing charges DFM",
  },
  {
    CurrentPensionOngoingChargesAdviser:
      "client 1s current pension ongoing charges Adviser",
  },
  {
    CurrentPensionOngoingChargesPlatform:
      "client 1s current pension ongoing charges platform",
  },
  {
    CurrentPensionSumOfOngoingCharges:
      "client 1s current pension sum of all ongoing charges",
  },
  { CurrentPensionInitialCharges: "client 1s current pension initial charges" },
  {
    CurrentPensionReductionInYield:
      "client 1s current pension reduciton in yield",
  },
  { CurrentPensionTransfer: "client 1s current pension transfer" },
  { CurrentPensionReasons: "client 1s current pension reasons" },

  { RecommendProductProvider: "client 1s reccomended product provider" },
  { ReccomendedProductPlanType: "client 1s reccomended product plan type" },
  {
    ReccomendedProductFundsAndSplit:
      "client 1s reccomended product funds and split",
  },
  { ReccomendedProductValue: "client 1s reccomended product value" },
  {
    ReccomendedProductTransferValue:
      "client 1s reccomended product transfer value",
  },
  {
    ReccomendedProductRegularContribution:
      "client 1s reccomended product regular contribution",
  },
  {
    DoesReccomendedProductMatchRiskLevel:
      "does client 1s reccomended product match risk level",
  },
  {
    ReccomendedProductGuarantees:
      "does client 1s reccomended product have any guarentees",
  },
  {
    ReccomendedProductOngoingChargesFund:
      "client 1s reccomended product ongoing charges Fund",
  },
  {
    ReccomendedProductOngoingChargesDFM:
      "client 1s reccomended product ongoing charges DFM",
  },
  {
    ReccomendedProductOngoingChargesAdviser:
      "client 1s reccomended product ongoing charges Adviser",
  },
  {
    ReccomendedProductOngoingChargesPlatform:
      "client 1s reccomended product ongoing charges platform",
  },
  {
    ReccomendedProductSumOfOngoingCharges:
      "client 1s reccomended product sum of all the ongoing charges ",
  },
  {
    ReccomendedProductInitialCharges:
      "client 1s reccomended product initial charges",
  },
  {
    ReccomendedProductReductionInYield:
      "client 1s reccomended product reduction in yield",
  },
  { ReccomendedProductTransfer: "client 1s reccomended product transfer" },
  { ReccomendedProductReasons: "client 1s reccomended product reasons" },
];

// THE CURRENT FF TEMPLATES 133 Tags
export const FactFindExample = [
  { Client1Title: "what is client 1s title" },
  {
    Client1OtherTitles:
      "does client 1 have any other titles if so provide them",
  },
  { Client1FirstName: "what is client 1s first name" },
  { Client1MiddleName: "what is client 1s middle name" },
  { Client1LastName: "what is client 1s last name" },
  { Client1Salutation: "what is client 1s salutation" },
  { Client1MaidenPreviousName: "does client 1 have a maiden or previous name" },
  {
    Client1DOB:
      "what is client 1s date of birth if possible provide me it in DD/MM/YYY format",
  },
  { Client1Age: "what is client 1s age" },
  { Client1Gender: "what is client 1s gender" },
  { Client1MaritalStatus: "what is client 1s marital status" },
  { Client1MarriedSince: "when did client 1 get married what was the date" },
  { Client1Nationality: "what client 1s nationality" },
  {
    Client1NationalInsuranceNum: "what is client 1s national insurance number",
  },
  { Client1CountryOfResidence: "client 1s country of residence" },
  { Client1CountryOfDomicile: "what is client 1s country of domicile" },
  { Client1Expatriate: "is client 1 an expatriate" },
  { Client1CountryOfBirth: "what is client 1s country of birth" },
  { Client1PlaceOfBirth: "what is client 1s place of birth" },
  { Client1HaveValidWill: "does client 1 have a valid will in place" },
  { Client1IsWillUpToDate: "Is client 1s will upto date" },
  { Client1BeenAdvisedToMakeAWill: "has client 1 been advised to make a will" },
  { Client1PowerOfAttorneyGranted: "has client 1 granted a power of attorney" },
  { Client1AttorneyName: "what is client 1s attorneys name" },
  { Client1ASmoker: "is client 1 a smoker" },
  { Client1SmokedInLast12Months: "has client 1 smoked in last 12 months" },
  { Client1InGoodHealth: "is client 1 in good health" },
  {
    Client1Notes:
      "are their any notes regarding client 1 if there are please provide them",
  },
  { Client1MedicalConditions: "does client 1 have any medical conditions" },
  {
    Client1AnyConsiderationsToBeTaken:
      "does client 1 have any considerations to be taken",
  },
  { Client2Title: "what is client 2s title" },
  {
    Client2OtherTitles:
      "does client 2 have any other titles if so provide them",
  },
  { Client2FirstName: "what is client 2s first name" },
  { Client2MiddleName: "what is client 2s middle name" },
  { Client2LastName: "what is client 2s last name" },
  { Client2Salutation: "what is client 2s salutation" },
  { Client2MaidenPreviousName: "does client 2 have a maiden or previous name" },
  {
    Client2DOB:
      "what is client 2s date of birth if possible provide me it in DD/MM/YYY format",
  },
  { Client2Age: "what is client 2s age" },
  { Client2Gender: "what is client 2s gender" },
  { Client2MaritalStatus: "what is client 2s marital status" },
  { Client2MarriedSince: "when did client 2 get married what was the date" },
  { Client2Nationality: "what client 2s nationality" },
  {
    Client2NationalInsuranceNum: "what is client 2s national insurance number",
  },
  { Client2CountryOfResidence: "client 2s country of residence" },
  { Client2CountryOfDomicile: "what is client 2s country of domicile" },
  { Client2Expatriate: "is client 2 an expatriate" },
  { Client2CountryOfBirth: "what is client 2s country of birth" },
  { Client2PlaceOfBirth: "what is client 2s place of birth" },
  { Client2HaveValidWill: "does client 2 have a valid will in place" },
  { Client2IsWillUpToDate: "Is client 2s will upto date" },
  { Client2BeenAdvisedToMakeAWill: "has client 2 been advised to make a will" },
  { Client2PowerOfAttorneyGranted: "has client 2 granted a power of attorney" },
  { Client2AttorneyName: "what is client 2s attorneys name" },
  { Client2ASmoker: "is client 2 a smoker" },
  { Client2SmokedInLast12Months: "has client 2 smoked in last 12 months" },
  { Client2InGoodHealth: "is client 2 in good health" },
  {
    Client2Notes:
      "are their any notes regarding client 2 if there are please provide them",
  },
  { Client2MedicalConditions: "does client 2 have any medical conditions" },
  {
    Client2AnyConsiderationsToBeTaken:
      "does client 2 have any considerations to be taken",
  },
  { Client1AddressLine1: "what is line 1 of client 1s address" },
  {
    Client1AddressLine2:
      "what is line 2 of client 1s address Only return if this is different to line 1 of the address",
  },
  {
    Client1AddressLine3:
      "what is line 3 of client 1s address Only return if this is different to line 1 of the address",
  },
  {
    Client1AddressLine4:
      "what is line 4 of client 1s address Only return if this is different to line 1 of the address",
  },
  {
    Client1City:
      "what is city from client 1s address Only return if this is has not already been stated",
  },
  {
    Client1Country:
      "what is country from client 1s address Only return if this is has not already been stated",
  },
  {
    Client1Postcode:
      "what is post code from client 1s address Only return if this is has not already been stated",
  },
  { Client1AddressType: "what is client 1s place of residence type" },
  { Client1ResidencyStatus: "what is client 1s residency status" },
  { Client1DateStartedAtAddress: "when did client 1 move into their address" },
  {
    Client1DateEndedAtAddress:
      "if client 1 has moved out of their address when did this happen",
  },
  { Client1DefaultAddress: "what is client 1s default place of residence" },
  { Client1AddressStatus: "what is client 1s address status" },
  {
    Client1RegisteredOnElecoralRoll:
      "is client 1 registered on the electoral roll",
  },
  {
    Client1TimeAtAddressInMonths:
      "how long has client 1 lived at their current address, return the time in months",
  },
  { Client2AddressLine1: "what is line 1 of client 2s address" },
  {
    Client2AddressLine2:
      "what is line 2 of client 2s address Only return if this is different to line 1 of the address",
  },
  {
    Client2AddressLine3:
      "what is line 3 of client 2s address Only return if this is different to line 1 of the address",
  },
  {
    Client2AddressLine4:
      "what is line 4 of client 2s address Only return if this is different to line 1 of the address",
  },
  {
    Client2City:
      "what is city from client 2s address Only return if this is has not already been stated",
  },
  {
    Client2Country:
      "what is country from client 2s address Only return if this is has not already been stated",
  },
  {
    Client2Postcode:
      "what is post code from client 2s address Only return if this is has not already been stated",
  },
  { Client2AddressType: "what is client 2s place of residence type" },
  { Client2ResidencyStatus: "what is client 2s residency status" },
  { Client2DateStartedAtAddress: "when did client 2 move into their address" },
  {
    Client2DateEndedAtAddress:
      "if client 2 has moved out of their address when did this happen",
  },
  { Client2DefaultAddress: "what is client 2s default place of residence" },
  { Client2AddressStatus: "what is client 2s address status" },
  {
    Client2RegisteredOnElecoralRoll:
      "is client 2 registered on the electoral roll",
  },
  {
    Client2TimeAtAddressInMonths:
      "how long has client 2 lived at their current address, return the time in months",
  },
  { Adviser: "Who is the adviser" },
  {
    DateFirstInterview:
      "what was the Date of the first interview with the adviser",
  },
  { TypeOfInterview: "what type of advice interview did they have" },
  {
    AnyoneElsePresentinInterview:
      "Who else was present in the advice interview not including the adviser client 1 and client 2",
  },
  { DoTheyHaveProtection: "do they want advice on protection" },
  { DoTheyHaveAMortgage: "do they want advice on mortgages" },
  { RetirementPlanning: "do they want advice on retirement planning" },
  { SavingsAndInvestments: "do they want advice on savings and investments" },
  { EstatePlanning: "do they want advice on estate planning" },
  { Client1PhoneNumber: "what is client 1s phone number" },
  {
    Client1PhoneNumberPreferred:
      "does client 1 prefer to be contacted by phone",
  },
  { Client1Email: "what is client 1s email" },
  { Client1EmailPreferred: "does client 1 prefer to be contacted by email" },
  { Client2PhoneNumber: "what is client 2s phone number" },
  {
    Client2PhoneNumberPreferred:
      "does client 2 prefer to be contacted by phone",
  },
  { Client2Email: "what is client 2s email" },
  { Client2EmailPreferred: "does client 2 prefer to be contacted by email" },
  { Client1BankName: "what is client 1s bank name" },
  {
    Client1AccountHolder:
      "who is the account holder for client 1s bank account",
  },
  {
    Client1BankAddressLine1:
      "what is line 1 of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressLine2:
      "what is line 2 of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressLine3:
      "what is line 3 of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressLine4:
      "what is line 4 of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressCity:
      "what is the city of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressCountyStateProvince:
      "what is the county of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressCountry:
      "what is the country of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client1BankAddressPostCode:
      "what is the postcode of client 1s bank account address Only return if this is different to line 1 of the bank address",
  },
  { Client1BankAccountNumber: "what is client 1s bank account account number" },
  { Client1BankAccountSortCode: "what is client 1s bank account sort number" },
  {
    Client1BankDefault: "Is client 1s bank account their default bank account",
  },
  { Client2BankName: "what is client 2s bank name" },
  {
    Client2AccountHolder:
      "who is the account holder for client 2s bank account",
  },
  {
    Client2BankAddressLine1:
      "what is line 1 of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressLine2:
      "what is line 2 of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressLine3:
      "what is line 3 of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressLine4:
      "what is line 4 of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressCity:
      "what is the city of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressCountyStateProvince:
      "what is the county of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressCountry:
      "what is the country of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  {
    Client2BankAddressPostCode:
      "what is the postcode of client 2s bank account address Only return if this is different to line 1 of the bank address",
  },
  { Client2BankAccountNumber: "what is client 2s bank account account number" },
  { Client2BankAccountSortCode: "what is client 2s bank account sort number" },
  {
    Client2BankDefault: "Is client 2s bank account their default bank account",
  },
];

// PAUSED (WHEN 2 CLIENTS) THIS HAS BEEN PAUSED TO FOCUS ON THE SR -> using FF-WithTomsNotes.docx as the reference on what to keep
const FactFindExampleFromTomsNotes = [
  { Client1Title: "what is client 1s title" },
  {
    Client1OtherTitles:
      "does client 1 have any other titles if so provide them",
  },
  { Client1FirstName: "what is client 1s first name" },
  { Client1MiddleName: "what is client 1s middle name" },
  { Client1LastName: "what is client 1s last name" },
  { Client1Salutation: "what is client 1s salutation" },
  { Client1MaidenPreviousName: "does client 1 have a maiden or previous name" },
  {
    Client1DOB:
      "what is client 1s date of birth if possible provide me it in DD/MM/YYY format",
  },
  { Client1Age: "what is client 1s age" },
  { Client1Gender: "what is client 1s gender" },
  { Client1MaritalStatus: "what is client 1s marital status" },
  { Client1Nationality: "what client 1s nationality" },
  {
    Client1NationalInsuranceNum: "what is client 1s national insurance number",
  },
  { Client1CountryOfResidence: "client 1s country of residence" },
  { Client1CountryOfDomicile: "what is client 1s country of domicile" },
  { Client1Expatriate: "is client 1 an expatriate" },
  { Client1CountryOfBirth: "what is client 1s country of birth" },
  { Client1HaveValidWill: "does client 1 have a valid will in place" },
  { Client1IsWillUpToDate: "Is client 1s will upto date" },
  { Client1BeenAdvisedToMakeAWill: "has client 1 been advised to make a will" },
  { Client1PowerOfAttorneyGranted: "has client 1 granted a power of attorney" },
  { Client1AttorneyName: "what is client 1s attorneys name" },
  { Client1ASmoker: "is client 1 a smoker" },
  { Client1SmokedInLast12Months: "has client 1 smoked in last 12 months" },
  { Client1InGoodHealth: "is client 1 in good health" },
  { Client1MedicalConditions: "does client 1 have any medical conditions" },
  {
    Client1AnyConsiderationsToBeTaken:
      "does client 1 have any considerations to be taken",
  },
  { Client2Title: "what is client 2s title" },
  {
    Client2OtherTitles:
      "does client 2 have any other titles if so provide them",
  },
  { Client2FirstName: "what is client 2s first name" },
  { Client2MiddleName: "what is client 2s middle name" },
  { Client2LastName: "what is client 2s last name" },
  { Client2Salutation: "what is client 2s salutation" },
  { Client2MaidenPreviousName: "does client 2 have a maiden or previous name" },
  {
    Client2DOB:
      "what is client 2s date of birth if possible provide me it in DD/MM/YYY format",
  },
  { Client2Age: "what is client 2s age" },
  { Client2Gender: "what is client 2s gender" },
  { Client2MaritalStatus: "what is client 2s marital status" },
  { Client2Nationality: "what client 2s nationality" },
  {
    Client2NationalInsuranceNum: "what is client 2s national insurance number",
  },
  { Client2CountryOfResidence: "client 2s country of residence" },
  { Client2CountryOfDomicile: "what is client 2s country of domicile" },
  { Client2Expatriate: "is client 2 an expatriate" },
  { Client2CountryOfBirth: "what is client 2s country of birth" },
  { Client2HaveValidWill: "does client 2 have a valid will in place" },
  { Client2IsWillUpToDate: "Is client 2s will upto date" },
  { Client2BeenAdvisedToMakeAWill: "has client 2 been advised to make a will" },
  { Client2PowerOfAttorneyGranted: "has client 2 granted a power of attorney" },
  { Client2AttorneyName: "what is client 2s attorneys name" },
  { Client2ASmoker: "is client 2 a smoker" },
  { Client2SmokedInLast12Months: "has client 2 smoked in last 12 months" },
  { Client2InGoodHealth: "is client 2 in good health" },
  { Client2MedicalConditions: "does client 2 have any medical conditions" },
  {
    Client2AnyConsiderationsToBeTaken:
      "does client 2 have any considerations to be taken",
  },
  { Client1AddressLine1: "what is line 1 of client 1s address" },
  {
    Client1AddressLine2:
      "what is line 2 of client 1s address Only return if this is different to line 1 of the address",
  },
  {
    Client1AddressLine3:
      "what is line 3 of client 1s address Only return if this is different to line 1 of the address",
  },
  {
    Client1AddressLine4:
      "what is line 4 of client 1s address Only return if this is different to line 1 of the address",
  },
  {
    Client1City:
      "what is city from client 1s address Only return if this is has not already been stated",
  },
  {
    Client1Country:
      "what is country from client 1s address Only return if this is has not already been stated",
  },
  {
    Client1Postcode:
      "what is post code from client 1s address Only return if this is has not already been stated",
  },
  { Client1AddressType: "what is client 1s place of residence type" },
  { Client1ResidencyStatus: "what is client 1s residency status" },
  { Client1DateStartedAtAddress: "when did client 1 move into their address" },
  {
    Client1DateEndedAtAddress:
      "if client 1 has moved out of their address when did this happen",
  },
  { Client1DefaultAddress: "what is client 1s default place of residence" },
  {
    Client1RegisteredOnElecoralRoll:
      "is client 1 registered on the electoral roll",
  },
  { Client2AddressLine1: "what is line 1 of client 2s address" },
  {
    Client2AddressLine2:
      "what is line 2 of client 2s address Only return if this is different to line 1 of the address",
  },
  {
    Client2AddressLine3:
      "what is line 3 of client 2s address Only return if this is different to line 1 of the address",
  },
  {
    Client2AddressLine4:
      "what is line 4 of client 2s address Only return if this is different to line 1 of the address",
  },
  {
    Client2City:
      "what is city from client 2s address Only return if this is has not already been stated",
  },
  {
    Client2Country:
      "what is country from client 2s address Only return if this is has not already been stated",
  },
  {
    Client2Postcode:
      "what is post code from client 2s address Only return if this is has not already been stated",
  },
  { Client2AddressType: "what is client 2s place of residence type" },
  { Client2ResidencyStatus: "what is client 2s residency status" },
  { Client2DateStartedAtAddress: "when did client 2 move into their address" },
  {
    Client2DateEndedAtAddress:
      "if client 2 has moved out of their address when did this happen",
  },
  { Client2DefaultAddress: "what is client 2s default place of residence" },
  {
    Client2RegisteredOnElecoralRoll:
      "is client 2 registered on the electoral roll",
  },
  { Adviser: "Who is the adviser" },
  {
    DateOfIssueForClientAgreement:
      "What date was the issue of the client agreement",
  },
  {
    DateFirstInterview:
      "what was the Date of the first interview with the adviser",
  },
  { TypeOfInterview: "what type of advice interview did they have" },
  {
    AnyoneElsePresentinInterview:
      "Who else was present in the advice interview not including the adviser client 1 and client 2",
  },
  {
    AdviceAreaProvideDetails:
      "Who was present in the advice meeting not including the advisor",
  },
  { DoTheyHaveProtection: "do they want advice on protection" },
  { DoTheyHaveAMortgage: "do they want advice on mortgages" },
  { RetirementPlanning: "do they want advice on retirement planning" },
  { SavingsAndInvestments: "do they want advice on savings and investments" },
  { EstatePlanning: "do they want advice on estate planning" },
  {
    DataProtectionAgreementDate:
      "what is the dat of the data protection agreement date",
  },
  {
    DataProtectionStatement1: "is the client aware of their rights",
  },
  {
    DataProtectionStatement2: "has the client given their consent",
  },
  {
    DataProtectionStatement3:
      "is the client aware they have access to the information that the adviser holds",
  },
  { Client1PhoneNumber: "what is client 1s phone number" },
  {
    Client1PhoneNumberPreferred:
      "does client 1 prefer to be contacted by phone",
  },
  { Client1Email: "what is client 1s email" },
  { Client1EmailPreferred: "does client 1 prefer to be contacted by email" },
  { Client2PhoneNumber: "what is client 2s phone number" },
  {
    Client2PhoneNumberPreferred:
      "does client 2 prefer to be contacted by phone",
  },
  { Client2Email: "what is client 2s email" },
  { Client2EmailPreferred: "does client 2 prefer to be contacted by email" },
  { Dependant1FullName: "client 1s first dependants full name" },
  { Dependant1DOB: "client 1s first dependants date of birth" },
  { Dependant1Age: "client 1s first dependants age" },
  {
    Dependant1Relationship:
      "client 1s first dependants relationship to the client",
  },
  {
    Dependant1FinanciallyDependant:
      "is client 1s first dependant financially reliant on the client",
  },
  {
    Dependant1LivingWith:
      "is client 1s first dependant currently living with the client",
  },
  { Dependant2FullName: "client 1s second dependants full name" },
  { Dependant2DOB: "client 1s second dependants date of birth" },
  { Dependant2Age: "client 1s second dependants age" },
  {
    Dependant2Relationship:
      "client 1s second dependants relationship to the client",
  },
  {
    Dependant2FinanciallyDependant:
      "is client 1s second dependant financially reliant on the client",
  },
  {
    Dependant2LivingWith:
      "is client 1s second dependant currently living with the client",
  },
  {
    IDCheckCompletionClient1: "is client 1s id check completed",
  },
  {
    IDCheckExpirationDateClient1: "what is client 1s id check expiration date",
  },
  {
    IDCheckCompletionClient2: "is client 2s id check completed",
  },
  {
    IDCheckExpirationDateClient2: "what is client 2s id check expiration date",
  },
  {
    Client1SelectedRiskProfile: "what is client 1s selected risk profile",
  },
  {
    Client1GeneratedRiskProfile: "what is client 1s generated risk profile",
  },
  {
    Client1AgreeWithGenerated:
      "does client 1 agree with generated risk profile",
  },
  {
    Client1DateRiskProfileCompleted:
      "what was the date that client 1s risk profile was completed",
  },
  {
    Client1ProfileNotes: "what are the profile notes for client 1",
  },

  {
    Client2SelectedRiskProfile: "what is client 2s selected risk profile",
  },
  {
    Client2GeneratedRiskProfile: "what is client 1s generated risk profile",
  },
  {
    Client2AgreeWithGenerated:
      "does client 2 agree with generated risk profile",
  },
  {
    Client2DateRiskProfileCompleted:
      "what was the date that client 2s risk profile was completed",
  },
  {
    Client2ProfileNotes: "what are the profile notes for client 2",
  },
  // repeat the below --- i paused work on this at 'Intended Retirement Age'
  {
    Client1TotalIncome:
      "what is client 1s total annual income including self-employed Net Profit, Net Dividend, Salary/employed gross basic, guaranteed and regular overtime and bonus incomes",
  },
  {
    Client1EmploymentOwner: "who is client 1s employment owner",
  },
  {
    Client1EmploymentStatus: "what is client 1s employment status",
  },
  {
    Client1Occupation: "what is client 1s occupation",
  },
  {
    Client1Employer: "who is client 1s employer",
  },
  {
    Client1BusinessType: "what is client 1s business type",
  },
];
