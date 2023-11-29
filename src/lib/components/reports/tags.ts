import { v4 as uuidv4 } from "uuid";

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

// DID A SUBSET FOR THE ALPHA
const FFTagsDONE = [
  {
    client1Personal: `I want to find out client 1s personal information, all of the information i wish to know are inside this example JSON object 
      ###{ 
          Client1Title: 'what is client 1s title', 
          Client1OtherTitles: 'does client 1 have any other titles if so provide them', 
          Client1FirstName: 'what is client 1s first name', 
          Client1MiddleName: 'what is client 1s middle name', 
          Client1LastName: 'what is client 1s last name' , 
          Client1Salutation: 'what is client 1s salutation', 
          Client1MaidenPreviousName: 'does client 1 have a maiden or previous name', 
          Client1DOB: 'what is client 1s date of birth if possible provide me it in DD/MM/YYY format', 
          Client1Age: 'what is client 1s age', 
          Client1Gender: 'what is client 1s gender', 
          Client1MaritalStatus: 'what is client 1s marital status' , 
          Client1MarriedSince: 'when did client 1 get married what was the date', 
          Client1Nationality: 'what client 1s nationality', 
          Client1NationalInsuranceNum: 'what is client 1s national insurance number', 
          Client1CountryOfResidence: 'client 1s country of residence', 
          Client1CountryOfDomicile: 'what is client 1s country of domicile', 
          Client1Expatriate: 'is client 1 an expatriate' ,
          Client1CountryOfBirth:  'what is client 1s country of birth', 
          Client1PlaceOfBirth: 'what is client 1s place of birth', 
          Client1HaveValidWill: 'does client 1 have a valid will in place', 
          Client1IsWillUpToDate: 'Is client 1s will upto date', 
          Client1BeenAdvisedToMakeAWill: 'has client 1 been advised to make a will', 
          Client1PowerOfAttorneyGranted: 'has client 1 granted a power of attorney', 
          Client1AttorneyName: 'what is client 1s attorneys name', 
          Client1ASmoker: 'is client 1 a smoker', 
          Client1SmokedInLast12Months: 'has client 1 smoked in last 12 months', 
          Client1InGoodHealth: 'is client 1 in good health',
          Client1Notes: 'are their any notes regarding client 1 if there are please provide them',
          Client1MedicalConditions: 'does client 1 have any medical conditions',
          Client1AnyConsiderationsToBeTaken: 'does client 1 have any considerations to be taken'
      }### . Please return this JSON object but with the values replaced with the correct data, please keep context and dont return anything you are unsure of.`,
  },
  {
    client2Personal: `I want to find out client 2s personal information, all of the information i wish to know are inside this example JSON object 
      { 
          Client2Title: what is client 2s title, 
          Client2OtherTitles: does client 2 have any other titles if so provide them, 
          Client2FirstName: what is client 2s first name, 
          Client2MiddleName: what is client 2s middle name, 
          Client2LastName: what is client 2s last name , 
          Client2Salutation: what is client 2s salutation, 
          Client2MaidenPreviousName: does client 2 have a maiden or previous name, 
          Client2DOB: what is client 2s date of birth if possible provide me it in DD/MM/YYY format, 
          Client2Age: what is client 2s age, 
          Client2Gender: what is client 2s gender, 
          Client2MaritalStatus: what is client 2s marital status , 
          Client2MarriedSince:when did client 2 get married what was the date, 
          Client2Nationality: what client 2s nationality, 
          Client2NationalInsuranceNum: what is client 2s national insurance number, 
          Client2CountryOfResidence:client 2s country of residence, 
          Client2CountryOfDomicile: what is client 2s country of domicile, 
          Client2Expatriate: is client 2 an expatriate ,
          Client2CountryOfBirth:  what is client 2s country of birth, 
          Client2PlaceOfBirth: what is client 2s place of birth, 
          Client2HaveValidWill: does client 2 have a valid will in place, 
          Client2IsWillUpToDate: Is client 2s will upto date, 
          Client2BeenAdvisedToMakeAWill:has client 2 been advised to make a will, 
          Client2PowerOfAttorneyGranted:has client 2 granted a power of attorney, 
          Client2AttorneyName: what is client 2s attorneys name, 
          Client2ASmoker: is client 2 a smoker, 
          Client2SmokedInLast12Months:has client 2 smoked in last 12 months, 
          Client2InGoodHealth: is client 2 in good health,
          Client2Notes: are their any notes regarding client 2 if there are please provide them,
          Client2MedicalConditions: does client 2 have any medical conditions,
          Client2AnyConsiderationsToBeTaken: does client 2 have any considerations to be taken,
      } . Please only return this JSON object but with the values replaced with the correct data, please keep context and dont return anything you are unsure of.`,
  },
  {
    client1Address: `I want to find out client 1s address information, all of the information i wish to know are inside this example JSON object 
      { 
          Client1AddressLine1: what is line 1 of client 1s address,
          Client1AddressLine2: what is line 2 of client 1s address Only return if this is different to line 1 of the address,
          Client1AddressLine3: what is line 3 of client 1s address Only return if this is different to line 1 of the address,
          Client1AddressLine4: what is line 4 of client 1s address Only return if this is different to line 1 of the address,
          Client1City: what is city from client 1s address Only return if this is has not already been stated ,
          Client1Country: what is country from client 1s address Only return if this is has not already been stated ,
          Client1Postcode: what is post code from client 1s address Only return if this is has not already been stated ,
          Client1AddressType: what is client 1s place of residence type ,
          Client1ResidencyStatus: what is client 1s residency status ,
          Client1DateStartedAtAddress: when did client 1 move into their address,
          Client1DateEndedAtAddress: if client 1 has moved out of their address when did this happen,
          Client1DefaultAddress: what is client 1s default place of residence,
          Client1AddressStatus: what is client 1s address status,
          Client1RegisteredOnElecoralRoll: is client 1 registered on the electoral roll,
          Client1TimeAtAddressInMonths: how long has client 1 lived at their current address, return the time in months,
      } . Please only return this JSON object but with the values replaced with the correct data, please keep context and dont return anything you are unsure of.`,
  },
  {
    client2Address: `I want to find out client 2s address information, all of the information i wish to know are inside this example JSON object 
      { 
          Client2AddressLine1: what is line 1 of client 2s address,
          Client2AddressLine2: what is line 2 of client 2s address Only return if this is different to line 1 of the address,
          Client2AddressLine3: what is line 3 of client 2s address Only return if this is different to line 1 of the address,
          Client2AddressLine4: what is line 4 of client 2s address Only return if this is different to line 1 of the address,
          Client2City: what is city from client 2s address Only return if this is has not already been stated ,
          Client2Country: what is country from client 2s address Only return if this is has not already been stated ,
          Client2Postcode: what is post code from client 2s address Only return if this is has not already been stated ,
          Client2AddressType: what is client 2s place of residence type ,
          Client2ResidencyStatus: what is client 2s residency status ,
          Client2DateStartedAtAddress: when did client 2 move into their address,
          Client2DateEndedAtAddress: if client 2 has moved out of their address when did this happen,
          Client2DefaultAddress: what is client 2s default place of residence,
          Client2AddressStatus: what is client 2s address status,
          Client2RegisteredOnElecoralRoll: is client 2 registered on the electoral roll,
          Client2TimeAtAddressInMonths: how long has client 2 lived at their current address, return the time in months,
      } . Please only return this JSON object but with the values replaced with the correct data, please keep context and dont return anything you are unsure of.`,
  },
  {
    adviserDetails: `I want to find out the advisers information, all of the information i wish to know are inside this example JSON object 
      { 
          Adviser: Who is the adviser,
          DateFirstInterview: what was the Date of the first interview with the adviser,
          TypeOfInterview: what type of advice interview did they have,
          AnyoneElsePresentinInterview: Who else was present in the advice interview not including the adviser client 1 and client 2,
          DoTheyHaveProtection: do they want advice on protection,
          DoTheyHaveAMortgage:  do they want advice on mortgages,
          RetirementPlanning: do they want advice on retirement planning,
          SavingsAndInvestments: do they want advice on savings and investments,
          EstatePlanning: do they want advice on estate planning,
          Client1PhoneNumber: what is client 1s phone number,
          Client1PhoneNumberPreferred: does client 1 prefer to be contacted by phone,
          Client1Email: what is client 1s email,
          Client1EmailPreferred: does client 1 prefer to be contacted by email,
          Client2PhoneNumber: what is client 2s phone number,
          Client2PhoneNumberPreferred: does client 2 prefer to be contacted by phone,
          Client2Email: what is client 2s email,
          Client2EmailPreferred: does client 2 prefer to be contacted by email
      } . The advisers information will NOT be client 1 or client 2s personal information so dont use that. Please only return this JSON object but with the values replaced with the correct data, please keep context and dont return anything you are unsure of.`,
  },
  {
    client1Bank: `I want to find out client 1s banking information, all of the information i wish to know are inside this example JSON object 
      { 
          Client1BankName: what is client 1s bank name,
          Client1AccountHolder: who is the account holder for client 1s bank account,
          Client1BankAddressLine1: what is line 1 of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressLine2: what is line 2 of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressLine3: what is line 3 of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressLine4: what is line 4 of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressCity: what is the city of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressCountyStateProvince: what is the county of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressCountry: what is the country of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAddressPostCode: what is the postcode of client 1s bank account address Only return if this is different to line 1 of the bank address,
          Client1BankAccountNumber: what is client 1s bank account account number,
          Client1BankAccountSortCode: what is client 1s bank account sort number,
          Client1BankDefault: Is client 1s bank account their default bank account,       
      } . Please only return this JSON object but with the values replaced with the correct data,Do not provide Client 1s personal address as the address details for the bank. please keep context and dont return anything you are unsure of.`,
  },
  {
    client2Bank: `I want to find out client 2s banking information, all of the information i wish to know are inside this example JSON object 
      { 
        Client2BankName: what is client 2s bank name,
        Client2AccountHolder: who is the account holder for client 2s bank account,
        Client2BankAddressLine1: what is line 1 of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressLine2: what is line 2 of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressLine3: what is line 3 of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressLine4: what is line 4 of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressCity: what is the city of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressCountyStateProvince: what is the county of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressCountry: what is the country of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAddressPostCode: what is the postcode of client 2s bank account address Only return if this is different to line 1 of the bank address,
        Client2BankAccountNumber: what is client 2s bank account account number,
        Client2BankAccountSortCode: what is client 2s bank account sort number,
        Client2BankDefault: Is client 2s bank account their default bank account,       
      } . Please only return this JSON object but with the values replaced with the correct data,Do not provide Client 2s personal address as the address details for the bank. please keep context and dont return anything you are unsure of.`,
  },
];
// DID NOT DO THESE
const FFTagsNotDone = [
  //NOT DONE
  {
    client1Documents: `I want to find out client 1s information around their personal documents, all of the information i wish to know are inside this example JSON object 
      { 
        Client1DrivingLicenseSeen: Has client 1s drivers license been seen,
        Client1DrivingLicenseRef: what is client 1s drivers license ref,
        Client1DrivingLicenseExpiry: what is client 1s drivers license expiry date,
        Client1PassportSeen: Has client 1s passport been seen,
        Client1CountryOfOrigin: what is client 1s country of origin,
        Client1PassportExpiryDate: what is client 1s passport expiry date,
        Client1PassportRef: what is client 1s passport reference number,
        Client1PassportExpiryDate: what is client 1s passport expiry date,
        Client1MothersMaidenName: what is client 1s mothers maiden name,
        Client1ElectricityBillRef: what is client 1s electricity bill reference,
        Client1InlandRevenueTaxNotification: what is client 1s inland revenue tax notification,
        Client1HomeVisit: Has client 1 had a home visit,
        Client1PremisesEntered: Has client 1s home premises been entered,
        Client1BankStatementSeen: Has client 1s bank statement been seen,
        Client1MortgageStatementSeen: Has client 1s mortgage statement been seen,
        Client1CouncilTaxBillSeen: Has client 1s council tax bill been seen,
        Client1UtilitiesBillSeen: Has client 1s council utilities bill been seen,
        Client1FirearmCertSeen: Has client 1s firearm certificate been seen,
        Client1FirearmCertRef: what is client 1s firearm certificate reference number,
        Client1FirearmExpiryDate: what is client 1s firearm certificate expiry date,
        Client1MicroFicheIssueDate: what is client 1s micro fiche issue date,
        Client1MicroFicheNumber: what is client 1s micro fiche number,
        Client1IDCheckCompletedDate: what was the date that client 1s identity check was completed,
        Client1IDCheckExpiryDate: what is the date that client 1s identity will expire,
        Client1GeneratedRiskProfile: what is client 1s generated risk profile,
        Client1GeneratedRiskProfileAgree: Does client 1s agree with their generated risk profile,
        Client1GeneratedRiskProfileNotes: what are client 1s generated risk profile notes,        
      } . Please only return this JSON object but with the values replaced with the correct data, please dont assume and please keep context and dont return anything you are unsure of.`,
  },
  {
    client2Documents: `I want to find out client 2s information around their personal documents, all of the information i wish to know are inside this example JSON object 
      { 
        Client2DrivingLicenseSeen: Has client 2s drivers license been seen,
        Client2DrivingLicenseRef: what is client 2s drivers license ref,
        Client2DrivingLicenseExpiry: what is client 2s drivers license expiry date,
        Client2PassportSeen: Has client 2s passport been seen,
        Client2CountryOfOrigin: what is client 2s country of origin,
        Client2PassportExpiryDate: what is client 2s passport expiry date,
        Client2PassportRef: what is client 2s passport reference number,
        Client2PassportExpiryDate: what is client 2s passport expiry date,
        Client2MothersMaidenName: what is client 2s mothers maiden name,
        Client2ElectricityBillRef: what is client 2s electricity bill reference,
        Client2InlandRevenueTaxNotification: what is client 2s inland revenue tax notification,
        Client2HomeVisit: Has client 2 had a home visit,
        Client2PremisesEntered: Has client 2s home premises been entered,
        Client2BankStatementSeen: Has client 2s bank statement been seen,
        Client2MortgageStatementSeen: Has client 2s mortgage statement been seen,
        Client2CouncilTaxBillSeen: Has client 2s council tax bill been seen,
        Client2UtilitiesBillSeen: Has client 2s council utilities bill been seen,
        Client2FirearmCertSeen: Has client 2s firearm certificate been seen,
        Client2FirearmCertRef: what is client 2s firearm certificate reference number,
        Client2FirearmExpiryDate: what is client 2s firearm certificate expiry date,
        Client2MicroFicheIssueDate: what is client 2s micro fiche issue date,
        Client2MicroFicheNumber: what is client 2s micro fiche number,
        Client2IDCheckCompletedDate: what was the date that client 2s identity check was completed,
        Client2IDCheckExpiryDate: what is the date that client 2s identity will expire,
        Client2GeneratedRiskProfile: what is client 2s generated risk profile,
        Client2GeneratedRiskProfileAgree: Does client 2s agree with their generated risk profile,
        Client2GeneratedRiskProfileNotes: what are client 2s generated risk profile notes,        
      } . Please only return this JSON object but with the values replaced with the correct data, please dont assume and please keep context and dont return anything you are unsure of.`,
  },
  {
    client1Earnings: `I want to find out client 1s work and earnings information, all of the information i wish to know are inside this example JSON object 
      { 
        Client1ProfileNotes: what are client 1s profile notes,
        Client1AnnualSalary: what is client 1s annual salary,
        Client1HighestRateOfIncomeTaxPaid: what is client 1s highest rate of income tax that they have paid,
        Client1CompanyOwner:what is client 1s company number,
        Client1EmploymentStatus: what is client 1s employment status,
        Client1Occupation: what is client 1s occupation,
        Client1Employer: who is client 1s employer,
        Client1EmploymentBusinessType: what is client 1s business type,
        Client1EmploymentAddressLine1: what is line 1 of client 1s employment address,
        Client1EmploymentAddressLine2: what is line 2 of client 1s employment address do not return anything if this is the same as line 1 of client 1s employment address,
        Client1EmploymentAddressLine3: what is line 3 of client 1s employment address do not return anything if this is the same as line 1 of client 1s employment address,
        Client1EmploymentAddressLine4: what is line 4 of client 1s employment address do not return anything if this is the same as line 1 of client 1s employment address,
        Client1EmploymentAddressCity: what is the city of client 1s employment address,
        Client1EmploymentAddressCounty: what is the county of client 1s employment address,
        Client1EmploymentAddressCountry: what is the country of client 1s employment address,
        Client1EmploymentAddressPostCode: what is the post code of client 1s employment address,
        Client1IntendedRetirementAge: what is client 1s intended retirement age,
        Client1EmploymentStartDate: what was client 1s employment start date,
        Client1EmploymentEndDate: what is client 1s employment end date,
        Client1EmploymentMostRecentAnnualNetProfit: what is client 1s most recent annual net profit,
        Client1EmploymentMostRecentAnnualNetDividend: what is client 1s most recent annual net dividend,
        Client1EmploymentMostRecentAnnualAccountsSalary: what is client 1s most recent annual accounts salary,
        Client1EmploymentAnnualAccountsYearEnd: what is client 1s annual accounts year end,
        Client1EmploymentYear2AnnualAccountsNetProfit: what is client 1s year 2 annual accounts net profit,
        Client1EmploymentYear2AnnualAccountsNetDividend: what is client 1s year 2 annual accounts dividend,
        Client1EmploymentYear2AnnualAccountsSalary: what is client 1s year 2 annual accounts salary,
        Client1EmploymentYear2YearEnd: what is client 1s year 2 year end,
        Client1EmploymentYear3AnnualAccountsNetProfit: what is client 1s year 3 annual accounts net profit,
        Client1EmploymentYear3AnnualAccountsNetDividend: what is client 1s year 3 annual accounts dividend,
        Client1EmploymentYear3AnnualAccountsSalary: what is client 1s year 3 annual accounts salary,
        Client1EmploymentYear3YearEnd: what is client 1s year 3 year end,
        Client1EmploymentGrossBasicAnnualIncome: what is client 1s gross basic annual income,
        Client1EmploymentNetBasicMonthlyIncome: what is client 1s net basic monthly income,
        Client1EmploymentReceiveOvertimeIncome: does client 1s receive overtime income,
        Client1EmploymentGrossGuaranteedAnnualOvertime: what is client 1s gross guaranteed annual overtime,
        Client1EmploymentNetGuaranteedMonthlyOvertime: what is client 1s net guaranteed monthly overtime,
        Client1EmploymentGrossRegularAnnualOvertime: what is client 1s gross regular annual overtime,
        Client1EmploymentNetRegularMonthlyOvertime: what is client 1s net regular monthly overtime,
        Client1DoYouReceiveBonusIncome: Does client 1 receieve bonus income,
        Client1GrossGuaranteedAnnualBonus: what is client 1s gross guaranteed annual bonus,
        Client1NetGuaranteedAnnualBonus: what is client 1s net guaranteed annual bonus,
        Client1GrossRegularAnnualBonus: what is client 1s gross regular annual bonus,
        Client1NetRegularAnnualBonus: what is client 1s net regular annual bonus,
        Client1OtherGrossIncome: what is client 1s other gross income,
        Client1TotalGrossAnnualEarnings: what is client 1s total gross annual earnings,
        Client1ContinuousEmploymentInMonths: what is client 1s continuous employment in months,
        Client1EmploymentInProbation: is client 1 in employment probation,
        Client1EmploymentInProbationTimeInMonths: if client 1 is still in employment probation how long is left in months,
        Client1EmploymentNotes: are there any employment notes for client 1 if so what are they        
      } . Please only return this JSON object but with the values replaced with the correct data, please dont assume and please keep context and dont return anything you are unsure of.`,
  },
  {
    client2Earnings: `I want to find out client 2s work and earnings information, all of the information i wish to know are inside this example JSON object 
      { 
        Client2ProfileNotes: what are client 2s profile notes,
        Client2AnnualSalary: what is client 2s annual salary,
        Client2HighestRateOfIncomeTaxPaid: what is client 2s highest rate of income tax that they have paid,
        Client2CompanyOwner:what is client 2s company number,
        Client2EmploymentStatus: what is client 2s employment status,
        Client2Occupation: what is client 2s occupation,
        Client2Employer: who is client 2s employer,
        Client2EmploymentBusinessType: what is client 2s business type,
        Client2EmploymentAddressLine1: what is line 1 of client 2s employment address,
        Client2EmploymentAddressLine2: what is line 2 of client 2s employment address do not return anything if this is the same as line 1 of client 2s employment address,
        Client2EmploymentAddressLine3: what is line 3 of client 2s employment address do not return anything if this is the same as line 1 of client 2s employment address,
        Client2EmploymentAddressLine4: what is line 4 of client 2s employment address do not return anything if this is the same as line 1 of client 2s employment address,
        Client2EmploymentAddressCity: what is the city of client 2s employment address,
        Client2EmploymentAddressCounty: what is the county of client 2s employment address,
        Client2EmploymentAddressCountry: what is the country of client 2s employment address,
        Client2EmploymentAddressPostCode: what is the post code of client 2s employment address,
        Client2IntendedRetirementAge: what is client 2s intended retirement age,
        Client2EmploymentStartDate: what was client 2s employment start date,
        Client2EmploymentEndDate: what is client 2s employment end date,
        Client2EmploymentMostRecentAnnualNetProfit: what is client 2s most recent annual net profit,
        Client2EmploymentMostRecentAnnualNetDividend: what is client 2s most recent annual net dividend,
        Client2EmploymentMostRecentAnnualAccountsSalary: what is client 2s most recent annual accounts salary,
        Client2EmploymentAnnualAccountsYearEnd: what is client 2s annual accounts year end,
        Client2EmploymentYear2AnnualAccountsNetProfit: what is client 2s year 2 annual accounts net profit,
        Client2EmploymentYear2AnnualAccountsNetDividend: what is client 2s year 2 annual accounts dividend,
        Client2EmploymentYear2AnnualAccountsSalary: what is client 2s year 2 annual accounts salary,
        Client2EmploymentYear2YearEnd: what is client 2s year 2 year end,
        Client2EmploymentYear3AnnualAccountsNetProfit: what is client 2s year 3 annual accounts net profit,
        Client2EmploymentYear3AnnualAccountsNetDividend: what is client 2s year 3 annual accounts dividend,
        Client2EmploymentYear3AnnualAccountsSalary: what is client 2s year 3 annual accounts salary,
        Client2EmploymentYear3YearEnd: what is client 2s year 3 year end,
        Client2EmploymentGrossBasicAnnualIncome: what is client 2s gross basic annual income,
        Client2EmploymentNetBasicMonthlyIncome: what is client 2s net basic monthly income,
        Client2EmploymentReceiveOvertimeIncome: does client 2s receive overtime income,
        Client2EmploymentGrossGuaranteedAnnualOvertime: what is client 2s gross guaranteed annual overtime,
        Client2EmploymentNetGuaranteedMonthlyOvertime: what is client 2s net guaranteed monthly overtime,
        Client2EmploymentGrossRegularAnnualOvertime: what is client 2s gross regular annual overtime,
        Client2EmploymentNetRegularMonthlyOvertime: what is client 2s net regular monthly overtime,
        Client2DoYouReceiveBonusIncome: Does client 2 receieve bonus income,
        Client2GrossGuaranteedAnnualBonus: what is client 2s gross guaranteed annual bonus,
        Client2NetGuaranteedAnnualBonus: what is client 2s net guaranteed annual bonus,
        Client2GrossRegularAnnualBonus: what is client 2s gross regular annual bonus,
        Client2NetRegularAnnualBonus: what is client 2s net regular annual bonus,
        Client2OtherGrossIncome: what is client 2s other gross income,
        Client2TotalGrossAnnualEarnings: what is client 2s total gross annual earnings,
        Client2ContinuousEmploymentInMonths: what is client 2s continuous employment in months,
        Client2EmploymentInProbation: is client 2 in employment probation,
        Client2EmploymentInProbationTimeInMonths: if client 2 is still in employment probation how long is left in months,
        Client2EmploymentNotes: are there any employment notes for client 2 if so what are they 
      } . Please only return this JSON object but with the values replaced with the correct data, please dont assume and please keep context and dont return anything you are unsure of.`,
  },
  {
    professionalContactDetails: `I want to find out the professional contacts contact information, all of the information i wish to know are inside this example JSON object 
      { 
        ProfessionalContactType: what is the professional contact type,
        ProfessionalContactName: what is the professional contacts name,
        ProfessionalContactCompanyName: what is the professional contacts company name,
        ProfessionalContactAddressLine1: what is line 1 of the the professional contacts address This is not client 1 or client 2s address,
        ProfessionalContactAddressLine2: what is line 2 of the the professional contacts address do not return if its the same as line 1 of the professional contacts address,
        ProfessionalContactAddressLine3: what is line 3 of the the professional contacts address do not return if its the same as line 1 of the professional contacts address,
        ProfessionalContactAddressLine4: what is line 4 of the the professional contacts address do not return if its the same as line 1 of the professional contacts address,
        ProfessionalContactAddressCity: what is city of the the professional contacts address,
        ProfessionalContactAddressPostCode: what is post code of the the professional contacts address,
        ProfessionalContactPhoneNumber: what is phone number of the the professional contact,
        ProfessionalContactFacsimilieNumber: what is facsimilie number of the the professional contact,
        ProfessionalContactMobileNumber: what is mobile phone number of the the professional contact,
        ProfessionalContactEmail: what is email of the the professional contact,
        ProfessionalContactPermissionToContact: do we have permission to contact the professional contact,
        ProfessionalContactProvidingSourceOfFunds: is the professional contact providing source of funds       
      } .The professional contacts information will NOT be client 1 or client 2s personal information so dont use that Please only return this JSON object but with the values replaced with the correct data, please dont assume and please keep context and dont return anything you are unsure of.`,
  },
];
