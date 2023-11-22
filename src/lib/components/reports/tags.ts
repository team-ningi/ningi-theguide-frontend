import { v4 as uuidv4 } from "uuid";

export const FactFindExample = [
  {
    tag: "Client1Title",
    data: "what is client 1s title",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1OtherTitles",
    data: "does client 1 have any other titles, if so provide them",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1FirstName",
    data: "what is client 1s first name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MiddleName",
    data: "client 1s middle names if they have any",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1LastName",
    data: "what is client 1s last name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Salutation",
    data: "what is client 1s salutation",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MaidenPreviousName",
    data: "does client 1 have a maiden or previous name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DOB",
    data: "what is client 1s date of birth, if possible provide me it in DD/MM/YYY format",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Age",
    data: "what is client 1s age",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Gender",
    data: "what is client 1s gender",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MaritalStatus",
    data: "what is client 1s marital status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MarriedSince",
    data: "what is client 1s date of marriage",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Nationality",
    data: "what is client 1s nationality",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1NationalInsuranceNum",
    data: "what is client 1s national insurance number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1CountryOfDomicile",
    data: "what is client 1s country of domicile",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1CountryOfResidence",
    data: "what is client 1s country of residence",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Expatriate",
    data: "client 1s expatriate",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1CountryOfBirth",
    data: "what is client 1s country of birth",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PlaceOfBirth",
    data: "what is client 1s place of birth",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1HaveValidWill",
    data: "does client 1 have a valid will in place",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1IsWillUpToDate",
    data: "Is client 1s will upto date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BeenAdvisedToMakeAWill",
    data: "has client 1 been advised to make a will",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PowerOfAttorneyGranted",
    data: "has client 1 granted a power of attorney",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AttorneyName",
    data: "what is client 1s attorney name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1ASmoker",
    data: "is client 1 a smoker",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1SmokedInLast12Months",
    data: "has client 1 smoked in last 12 months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1InGoodHealth",
    data: "is client 1 in good health",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Notes",
    data: "are their any notes regarding client 1, if there are please provide them",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MedicalConditions",
    data: "does client 1 have any medical conditions",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AnyConsiderationsToBeTaken",
    data: "does client 1 have any considerations to be taken",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AddressLine1",
    data: "what is line 1 of client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AddressLine2",
    data: "what is line 2 of client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AddressLine3",
    data: "what is line 3 of client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AddressLine4",
    data: "what is line 4 of client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1City",
    data: "what is the city from client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Country",
    data: "what is the country from client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Postcode",
    data: "what is the postcode from client 1s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AddressType",
    data: "what is client 1s place of residence type",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1ResidencyStatus",
    data: "what client 1s residency status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DateStartedAtAddress",
    data: "when did client 1 move into their address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DateEndedAtAddress",
    data: "if client 1 has moved out of their address when did this happen",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DefaultAddress",
    data: "what is client 1s default place of residence",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AddressStatus",
    data: "what is client 1s address status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1RegisteredOnElecoralRoll",
    data: "is client 1 registered on the electoral roll",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1TimeAtAddressInMonths",
    data: "how long has client 1 lived at their current address, return the time in months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Title",
    data: "what is client 2s title",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2OtherTitles",
    data: "does client 2 have any other titles if so what are they",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2FirstName",
    data: "what is client 2s first name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MiddleName",
    data: "what is client 2s middle names if they have any",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2LastName",
    data: "what is client 2s last name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Salutation",
    data: "what is client 2s salutation",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MaidenPreviousName",
    data: "what is client 2s maiden or previous name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DOB",
    data: "what is client 2s date of birth, if possible provide me it in DD/MM/YYY format",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Age",
    data: "what is client 2s age",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Gender",
    data: "what is client 2s gender",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MaritalStatus",
    data: "what is client 2s marital status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MarriedSince",
    data: "when did client 2 get married",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Nationality",
    data: "what is client 2s nationality",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2NationalInsuranceNum",
    data: "what is client 2s national insurance number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2CountryOfDomicile",
    data: "what is client 2s country of domicile",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2CountryOfResidence",
    data: "what is client 2s country of residence",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Expatriate",
    data: "client 2s expatriate",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2CountryOfBirth",
    data: "what is client 2s country of birth",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PlaceOfBirth",
    data: "what is client 2s place of birth",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2HaveValidWill",
    data: "does client 2 have a valid will in place",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2IsWillUpToDate",
    data: "Is client 2s will upto date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BeenAdvisedToMakeAWill",
    data: "has client 2 been advised to make a will",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PowerOfAttorneyGranted",
    data: "has client 2 granted a power of attorney",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AttorneyName",
    data: "what is client 2s attorney name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2ASmoker",
    data: "is client 2 a smoker",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2SmokedInLast12Months",
    data: "has client 2 smoked in last 12 months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2InGoodHealth",
    data: "is client 2 in good health",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Notes",
    data: "are their any notes made regarding client 2",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MedicalConditions",
    data: "does client 2 have any medical conditions",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AnyConsiderationsToBeTaken",
    data: "does client 2 have any considerations to be taken",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AddressLine1",
    data: "what is line 1 of client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AddressLine2",
    data: "what is line 2 of client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AddressLine3",
    data: "what is line 3 of client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AddressLine4",
    data: "what is line 4 of client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2City",
    data: "what is the city from client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Country",
    data: "what is the country from client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Postcode",
    data: "what is the postcode from client 2s address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AddressType",
    data: "what is client 2s place of residence type",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2ResidencyStatus",
    data: "what is client 2s residency status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DateStartedAtAddress",
    data: "what date did client 2s move into their address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DateEndedAtAddress",
    data: "if client2 has moved out of their address , when did this happen",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DefaultAddress",
    data: "what is the default place of residence for client 2",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AddressStatus",
    data: "what is client 2s address status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2RegisteredOnElecoralRoll",
    data: "is client 2 registered on the electoral roll",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2TimeAtAddressInMonths",
    data: "how long has client 2 lived at their current address, tell me in months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Adviser",
    data: "Who is the adviser",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "DateFirstInterview",
    data: "Date of first interview with the adviser",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "TypeOfInterview",
    data: "Type of advice interview",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "AnyoneElsePresentinInterview",
    data: "Who else was present in the advice interview",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "DoTheyHaveProtection",
    data: "do they want advice on protection",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "DoTheyHaveAMortgage",
    data: "do they want advice on mortgages",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "RetirementPlanning",
    data: "do they want advice on retirement planning",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "SavingsAndInvestments",
    data: "do they want advice on savings and investments",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "EstatePlanning",
    data: "do they want advice on estate planning",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PhoneNumber",
    data: "what is client 1s phone number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PhoneNumberPreferred",
    data: "does client 1 prefer to be contacted by phone",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Email",
    data: "what is client 1s email",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmailPreferred",
    data: "does client 1 prefer to be contacted by email",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankName",
    data: "what is client 1s bank name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AccountHolder",
    data: "who is the account holder for client 1s bank account",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressLine1",
    data: "what is client 1s bank account address, return line 1 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressLine2",
    data: "what is client 1s bank account address, return line 2 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressLine3",
    data: "what is client 1s bank account address, return line 3 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressLine4",
    data: "what is client 1s bank account address, return line 4 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressCity",
    data: "what is client 1s bank account address, return the city of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressCountyStateProvince",
    data: "what is client 1s bank account address, return the county of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressCountry",
    data: "what is client 1s bank account address, return the country of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAddressPostCode",
    data: "what is client 1s bank account address, return the postcode of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAccountNumber",
    data: "what is client 1s bank account, account number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankAccountSortCode",
    data: "what is client 1s bank account sort number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankDefault",
    data: "Is client 1s bank account their default bank account",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DrivingLicenseSeen",
    data: "Has client 1s drivers license been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DrivingLicenseRef",
    data: "what is client 1s drivers license ref",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DrivingLicenseExpiry",
    data: "what is client 1s drivers license expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PassportSeen",
    data: "Has client 1s passport been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1CountryOfOrigin",
    data: "what is client 1s country of origin",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PassportExpiryDate",
    data: "what is client 1s passport expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PassportRef",
    data: "what is client 1s passport reference number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PassportExpiryDate",
    data: "what is client 1s passport expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MothersMaidenName",
    data: "what is client 1s mothers maiden name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1ElectricityBillRef",
    data: "what is client 1s electricity bill reference",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1InlandRevenueTaxNotification",
    data: "what is client 1s inland revenue tax notification",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1HomeVisit",
    data: "Has client 1 had a home visit",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1PremisesEntered",
    data: "Has client 1s home premises been entered",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1BankStatementSeen",
    data: "Has client 1s bank statement been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MortgageStatementSeen",
    data: "Has client 1s mortgage statement been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1CouncilTaxBillSeen",
    data: "Has client 1s council tax bill been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1UtilitiesBillSeen",
    data: "Has client 1s council utilities bill been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1FirearmCertSeen",
    data: "Has client 1s firearm certificate been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1FirearmCertRef",
    data: "what is client 1s firearm certificate reference number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1FirearmExpiryDate",
    data: "what is client 1s firearm certificate expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MicroFicheIssueDate",
    data: "what is client 1s micro fiche issue date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1MicroFicheNumber",
    data: "what is client 1s micro fiche number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1IDCheckCompletedDate",
    data: "what was the date that client 1s identity check was completed",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1IDCheckExpiryDate",
    data: "what is the date that client 1s identity will expire",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1GeneratedRiskProfile",
    data: "what is client 1s generated risk profile",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1GeneratedRiskProfileAgree",
    data: "Does client 1s agree with their generated risk profile",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1GeneratedRiskProfileNotes",
    data: "what are client 1s generated risk profile notes",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1ProfileNotes",
    data: "what are client 1s profile notes",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AnnualSalary",
    data: "what is client 1s annual salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1HighestRateOfIncomeTaxPaid",
    data: "what is client 1s highest rate of income tax that they have paid",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1CompanyOwner",
    data: "what is client 1s company number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentStatus",
    data: "what is client 1s employment status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Occupation",
    data: "what is client 1s occupation",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Employer",
    data: "who is client 1s employer",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentBusinessType",
    data: "what is client 1s business type",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressLine1",
    data: "what is line 1 of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressLine2",
    data: "what is line 2 of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressLine3",
    data: "what is line 3 of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressLine4",
    data: "what is line 4 of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressCity",
    data: "what is the city of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressCounty",
    data: "what is the county of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressCountry",
    data: "what is the country of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAddressPostCode",
    data: "what is the post code of client 1s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1IntendedRetirementAge",
    data: "what is client 1s intended retirement age",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentStartDate",
    data: "what was client 1s employment start date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentEndDate",
    data: "what is client 1s employment end date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentMostRecentAnnualNetProfit",
    data: "what is client 1s most recent annual net profit",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentMostRecentAnnualNetDividend",
    data: "what is client 1s most recent annual net dividend",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentMostRecentAnnualAccountsSalary",
    data: "what is client 1s most recent annual accounts salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentAnnualAccountsYearEnd",
    data: "what is client 1s annual accounts year end",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear2AnnualAccountsNetProfit",
    data: "what is client 1s year 2 annual accounts net profit",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear2AnnualAccountsNetDividend",
    data: "what is client 1s year 2 annual accounts dividend",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear2AnnualAccountsSalary",
    data: "what is client 1s year 2 annual accounts salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear2YearEnd",
    data: "what is client 1s year 2 year end",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear3AnnualAccountsNetProfit",
    data: "what is client 1s year 3 annual accounts net profit",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear3AnnualAccountsNetDividend",
    data: "what is client 1s year 3 annual accounts dividend",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear3AnnualAccountsSalary",
    data: "what is client 1s year 3 annual accounts salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentYear3YearEnd",
    data: "what is client 1s year 3 year end",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentGrossBasicAnnualIncome",
    data: "what is client 1s gross basic annual income",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentNetBasicMonthlyIncome",
    data: "what is client 1s net basic monthly income",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentReceiveOvertimeIncome",
    data: "does client 1s receive overtime income",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentGrossGuaranteedAnnualOvertime",
    data: "what is client 1s gross guaranteed annual overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentNetGuaranteedMonthlyOvertime",
    data: "what is client 1s net guaranteed monthly overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentGrossRegularAnnualOvertime",
    data: "what is client 1s gross regular annual overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentNetRegularMonthlyOvertime",
    data: "what is client 1s net regular monthly overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1DoYouReceiveBonusIncome",
    data: "Does client 1 receieve bonus income",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1GrossGuaranteedAnnualBonus",
    data: "what is client 1s gross guaranteed annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1NetGuaranteedAnnualBonus",
    data: "what is client 1s net guaranteed annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1GrossRegularAnnualBonus",
    data: "what is client 1s gross regular annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1NetRegularAnnualBonus",
    data: "what is client 1s net regular annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1OtherGrossIncome",
    data: "what is client 1s other gross income",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1TotalGrossAnnualEarnings",
    data: "what is client 1s total gross annual earnings",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1ContinuousEmploymentInMonths",
    data: "what is client 1s continuous employment in months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentInProbation",
    data: "is client 1 in employment probation",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentInProbationTimeInMonths",
    data: "if client 1 is still in employment probation, how ;long is left in months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1EmploymentNotes",
    data: "are there any employment notes for client 1, if so what are they",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },

  {
    tag: "Client2PhoneNumber",
    data: "what is client 2s phone number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PhoneNumberPreferred",
    data: "does client 2 prefer to be contacted by phone",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Email",
    data: "what is client 2s email",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmailPreferred",
    data: "does client 2 prefer to be contacted by email",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankName",
    data: "what is client 2s bank name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AccountHolder",
    data: "who is the account holder for client 2s bank account",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressLine1",
    data: "what is client 2s bank account address, return line 1 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressLine2",
    data: "what is client 2s bank account address, return line 2 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressLine3",
    data: "what is client 2s bank account address, return line 3 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressLine4",
    data: "what is client 2s bank account address, return line 4 of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressCity",
    data: "what is client 2s bank account address, return the city of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressCountyStateProvince",
    data: "what is client 2s bank account address, return the county of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressCountry",
    data: "what is client 2s bank account address, return the country of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAddressPostCode",
    data: "what is client 2s bank account address, return the postcode of this address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAccountNumber",
    data: "what is client 2s bank account, account number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankAccountSortCode",
    data: "what is client 2s bank account sort number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankDefault",
    data: "Is client 2s bank account their default bank account",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DrivingLicenseSeen",
    data: "Has client 2s drivers license been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DrivingLicenseRef",
    data: "what is client 2s drivers license ref",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DrivingLicenseExpiry",
    data: "what is client 2s drivers license expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PassportSeen",
    data: "Has client 2s passport been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2CountryOfOrigin",
    data: "what is client 2s country of origin",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PassportExpiryDate",
    data: "what is client 2s passport expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PassportRef",
    data: "what is client 2s passport reference number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PassportExpiryDate",
    data: "what is client 2s passport expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MothersMaidenName",
    data: "what is client 2s mothers maiden name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2ElectricityBillRef",
    data: "what is client 2s electricity bill reference",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2InlandRevenueTaxNotification",
    data: "what is client 2s inland revenue tax notification",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2HomeVisit",
    data: "Has client 2 had a home visit",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2PremisesEntered",
    data: "Has client 2s home premises been entered",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2BankStatementSeen",
    data: "Has client 2s bank statement been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MortgageStatementSeen",
    data: "Has client 2s mortgage statement been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2CouncilTaxBillSeen",
    data: "Has client 2s council tax bill been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2UtilitiesBillSeen",
    data: "Has client 2s council utilities bill been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2FirearmCertSeen",
    data: "Has client 2s firearm certificate been seen",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2FirearmCertRef",
    data: "what is client 2s firearm certificate reference number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2FirearmExpiryDate",
    data: "what is client 2s firearm certificate expiry date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MicroFicheIssueDate",
    data: "what is client 2s micro fiche issue date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2MicroFicheNumber",
    data: "what is client 2s micro fiche number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2IDCheckCompletedDate",
    data: "what was the date that client 2s identity check was completed",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2IDCheckExpiryDate",
    data: "what is the date that client 2s identity will expire",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2GeneratedRiskProfile",
    data: "what is client 2s generated risk profile",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2GeneratedRiskProfileAgree",
    data: "Does client 2s agree with their generated risk profile",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2GeneratedRiskProfileNotes",
    data: "what are client 2s generated risk profile notes",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2ProfileNotes",
    data: "what are client 2s profile notes",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AnnualSalary",
    data: "what is client 2s annual salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2HighestRateOfIncomeTaxPaid",
    data: "what is client 2s highest rate of income tax that they have paid",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2CompanyOwner",
    data: "what is client 2s company number",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentStatus",
    data: "what is client 2s employment status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Occupation",
    data: "what is client 2s occupation",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Employer",
    data: "who is client 2s employer",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentBusinessType",
    data: "what is client 2s business type",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressLine1",
    data: "what is line 1 of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressLine2",
    data: "what is line 2 of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressLine3",
    data: "what is line 3 of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressLine4",
    data: "what is line 4 of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressCity",
    data: "what is the city of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressCounty",
    data: "what is the county of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressCountry",
    data: "what is the country of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAddressPostCode",
    data: "what is the post code of client 2s employment address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2IntendedRetirementAge",
    data: "what is client 2s intended retirement age",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentStartDate",
    data: "what was client 2s employment start date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentEndDate",
    data: "what is client 2s employment end date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentMostRecentAnnualNetProfit",
    data: "what is client 2s most recent annual net profit",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentMostRecentAnnualNetDividend",
    data: "what is client 2s most recent annual net dividend",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentMostRecentAnnualAccountsSalary",
    data: "what is client 2s most recent annual accounts salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentAnnualAccountsYearEnd",
    data: "what is client 2s annual accounts year end",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear2AnnualAccountsNetProfit",
    data: "what is client 2s year 2 annual accounts net profit",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear2AnnualAccountsNetDividend",
    data: "what is client 2s year 2 annual accounts dividend",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear2AnnualAccountsSalary",
    data: "what is client 2s year 2 annual accounts salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear2YearEnd",
    data: "what is client 2s year 2 year end",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear3AnnualAccountsNetProfit",
    data: "what is client 2s year 3 annual accounts net profit",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear3AnnualAccountsNetDividend",
    data: "what is client 2s year 3 annual accounts dividend",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear3AnnualAccountsSalary",
    data: "what is client 2s year 3 annual accounts salary",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentYear3YearEnd",
    data: "what is client 2s year 3 year end",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentGrossBasicAnnualIncome",
    data: "what is client 2s gross basic annual income",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentNetBasicMonthlyIncome",
    data: "what is client 2s net basic monthly income",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentReceiveOvertimeIncome",
    data: "does client 2s receive overtime income",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentGrossGuaranteedAnnualOvertime",
    data: "what is client 2s gross guaranteed annual overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentNetGuaranteedMonthlyOvertime",
    data: "what is client 2s net guaranteed monthly overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentGrossRegularAnnualOvertime",
    data: "what is client 2s gross regular annual overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentNetRegularMonthlyOvertime",
    data: "what is client 2s net regular monthly overtime",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2DoYouReceiveBonusIncome",
    data: "Does client 2 receieve bonus income",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2GrossGuaranteedAnnualBonus",
    data: "what is client 2s gross guaranteed annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2NetGuaranteedAnnualBonus",
    data: "what is client 2s net guaranteed annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2GrossRegularAnnualBonus",
    data: "what is client 2s gross regular annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2NetRegularAnnualBonus",
    data: "what is client 2s net regular annual bonus",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2OtherGrossIncome",
    data: "what is client 2s other gross income",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2TotalGrossAnnualEarnings",
    data: "what is client 2s total gross annual earnings",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2ContinuousEmploymentInMonths",
    data: "what is client 2s continuous employment in months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentInProbation",
    data: "is client 2 in employment probation",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentInProbationTimeInMonths",
    data: "if client 2 is still in employment probation, how ;long is left in months",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2EmploymentNotes",
    data: "are there any employment notes for client 2, if so what are they",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactType",
    data: "what is the professional contact type",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactName",
    data: "what is the professional contacts name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactCompanyName",
    data: "what is the professional contacts company name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactAddressLine1",
    data: "what is line 1 of the the professional contacts address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactAddressLine2",
    data: "what is line 2 of the the professional contacts address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactAddressLine3",
    data: "what is line 3 of the the professional contacts address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactAddressLine4",
    data: "what is line 4 of the the professional contacts address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactAddressCity",
    data: "what is city of the the professional contacts address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactAddressPostCode",
    data: "what is post code of the the professional contacts address",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactPhoneNumber",
    data: "what is phone number of the the professional contact",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactFacsimilieNumber",
    data: "what is facsimilie number of the the professional contact",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactMobileNumber",
    data: "what is mobile phone number of the the professional contact",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactEmail",
    data: "what is email of the the professional contact",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactPermissionToContact",
    data: "do we have permission to contact the professional contact",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfessionalContactProvidingSourceOfFunds",
    data: "is the professional contact providing source of funds",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
];

export const SuitabilityReportExample = [
  {
    tag: "Title",
    data: "client 1s title",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "FirstName",
    data: "client 1s first name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "LastName",
    data: "client 1s last name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Email",
    data: "client 1s email",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "Age",
    data: "client 1s age",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Occupation",
    data: "client 1s occupation",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Employer",
    data: "client 1s employer",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "TotalAnnualEarnings",
    data: "client 1s total annual earnings",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "IsInGoodHealth",
    data: "is client 1 in good health",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "MedicalConditions",
    data: "client 1s medical conditions",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1AgreesWithGeneratedRiskProfile",
    data: "does client 1 agree with the generated risk profile ",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client1Notes",
    data: "client 1s notes",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "DependantRelationship",
    data: "client 1s relationship to their dependant",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "DependantName",
    data: "client 1s dependands namne",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "TitleClient2",
    data: "client 2s title",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "FirstNameClient2",
    data: "client 2s first name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "LastNameClient2",
    data: "client 2s last name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "AgeClient2",
    data: "client 2s age",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "OccupationClient2",
    data: "client 2s occupation",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "EmployerClient2",
    data: "client 2s employer",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "TotalAnnualEarningsClient2",
    data: "client 2s total annual earnings",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "IsInGoodHealthClient2",
    data: "is client 2 in good health",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "MedicalConditionsClient2",
    data: "client 2s medical conditions",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2AgreesWithGeneratedRiskProfile",
    data: "does client 2 agree with the generated risk profile ",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "Client2Notes",
    data: "client 2s notes",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "CurrentDate",
    data: "the current date",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "ReferenceNumber",
    data: "the reference number",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "BudgetNotes",
    data: "budget notes",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "MonthlyIncome",
    data: "monthly income",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "MonthlyExpenditure",
    data: "monthly expenditure",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "ProfileNotes",
    data: "profile notes",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "GoalsObjectivesNotes",
    data: "goals objectives notes",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "GoalsObjectivesDetails",
    data: "goals objectives details",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "GeneratedRiskScoreTitle",
    data: "generated risk score title",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "GeneratedRiskScoreDescription",
    data: "generated risk score description",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "WholeMarketProviderName",
    data: "whole market provider name",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
];

export const BasicReportExample = [
  {
    tag: "first_name",
    data: "first name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "last_name",
    data: "last name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "meeting_date",
    data: "company join date",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "company_name",
    data: "company name",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "dob",
    data: "date of birth",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "martial_status",
    data: "martial status",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "dependants",
    data: "number of dependants",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "tax_status",
    data: "tax status",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "uptodate_will",
    data: "uptodate will in place",
    prompt:
      "{{data}} . return the answer to this query as a boolean with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "state_of_health",
    data: "current state of health",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "investment_type",
    data: "investment type",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "investment_provider",
    data: "investment provider",
    prompt:
      "{{data}} . return the answer to this query on its own, please keep context and dont return anything you are unsure of.",
    uuid: uuidv4(),
  },
  {
    tag: "policy_number",
    data: "policy number",
    prompt:
      "{{data}} . return the answer to this query as simple as possible with no additional text that is out of context.",
    uuid: uuidv4(),
  },
  {
    tag: "amount_invested",
    data: "amount invested in their investment",
    prompt:
      "{{data}} . return the answer to this query as a number with no additional text and please do not go out of context.",
    uuid: uuidv4(),
  },
];
