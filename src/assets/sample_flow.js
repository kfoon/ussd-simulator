
/**
 * FLOW DEFINITION
 *
 * 1 ----- 2 ----- 3 ----- 4 ----- 5 ----- 6 ----- 7
 *          \ 2a /  \ 3a /  \ 4a /  \ 5a /  \ --- 7a ---- 8 ----- 9 ----- 10
 * 
 */

/* 1 - HOME */

function displayHomeMenu() {
  return render({
    content: `Menu
    ${datasetToList(home)}`,
    dataset: home
  })
}

var home = [
  null,
  { title: "Request a shipment", confirm: displaySenders },
  { title: "Check shipment status" },
  { title: "Repeat recent jobs" },
  { title: "Register new user or location" },
  { title: "Help / Other services" },
]

/* 2 - SENDERS */

function displaySenders() {
  return render({
    content: `Enter sender
    ${datasetToList(senders)}`,
    dataset: senders
  })
}

var senders = [
  null,
  { title: "Me", confirm: displayPickupLocations },
  { title: "Doreen Gashuga", confirm: displayPickupLocations },
  { title: "Pacific Tuyishime", confirm: displayPickupLocations },
  { title: "Angelique Kantengwa", confirm: displayPickupLocations },
  { title: "Viola Dub", confirm: displayPickupLocations },
  { title: "Manuel Arzuah", confirm: displayPickupLocations },
  { title: "Someone else", confirm: displayArbitrarySender },
]

/* 2a alternative path - ARBITRARY SENDER NUMBER */

function displayArbitrarySender() {
  return render({
    content: "Enter sender phone number",
    dataset: displayPickupLocations,
    status: "answerStandby"
  })
}

/* 3 - PICK UP LOCATIONS */

function displayPickupLocations() {
  return render({
    content: `Enter pickup location
    ${datasetToList(pickUpLocations)}`,
    dataset: pickUpLocations
  })
}

var pickUpLocations = [
  null,
  { title: "Saved location 1", confirm: displayReceivers },
  { title: "Saved location 2", confirm: displayReceivers },
  { title: "Saved location 3", confirm: displayReceivers },
  { title: "Find public location near me", confirm: displayArbitraryPickupLocationCode },
  { title: "Enter a location code", confirm: displayArbitraryPickupLocationCode },
  { title: "MTN branch code", confirm: displayArbitraryPickupLocationCode },
]

/* 3a alternative path - ARBITRARY PICK UP LOCATION CODE */

function displayArbitraryPickupLocationCode() {
  return render({
    content: "Enter pickup location code",
    dataset: displayReceivers,
    status: "answerStandby"
  })
}

/* 4 - RECEIVERS */

function displayReceivers() {
  return render({
    content: `Enter receiver
    ${datasetToList(receivers)}`,
    dataset: receivers
  })
}

var receivers = [
  null,
  { title: "Me", confirm: displayDropOffLocations },
  { title: "Doreen Gashuga", confirm: displayDropOffLocations },
  { title: "Pacific Tuyishime", confirm: displayDropOffLocations },
  { title: "Angelique Kantengwa", confirm: displayDropOffLocations },
  { title: "Viola Dub", confirm: displayDropOffLocations },
  { title: "Manuel Arzuah", confirm: displayDropOffLocations },
  { title: "Someone else", confirm: displayArbitraryReceiver },
]

/* 4a alternative path - ARBITRARY RECEIVER */

function displayArbitraryReceiver() {
  return render({
    content: "Enter receiver phone number",
    dataset: displayDropOffLocations,
    status: "answerStandby"
  })
}

/* 5 - DROP OFF LOCATIONS */

function displayDropOffLocations() {
  return render({
    content: `Enter drop off location
    ${datasetToList(dropOffLocations)}`,
    dataset: dropOffLocations
  })
}

var dropOffLocations = [
  null,
  { title: "Saved location 1", confirm: displayGoods },
  { title: "Saved location 2", confirm: displayGoods },
  { title: "Saved location 3", confirm: displayGoods },
  { title: "Find public location near me", confirm: displayArbitraryDropOffLocationCode },
  { title: "Enter a location code", confirm: displayArbitraryDropOffLocationCode },
  { title: "MTN branch code", confirm: displayArbitraryDropOffLocationCode },
]

/* 5a alternative path - ARBITRARY DROP OFF LOCATION */

function displayArbitraryDropOffLocationCode() {
  return render({
    content: "Enter drop off location code",
    dataset: displayGoods,
    status: "answerStandby"
  })
}

/* 6 - GOODS */

function displayGoods() {
  return render({
    content: `Select what's being shipped
    ${datasetToList(goods)}`,
    dataset: goods
  })
}

var goods = [
  null,
  { title: "Loose goods", confirm: displayThanksWithCallInfo, },
  { title: "Packaged goods", confirm: displaySelectPackagingType, },
  { title: "Livestock", confirm: displayThanksWithCallInfo, },
  { title: "Unusual shapes", confirm: displayThanksWithCallInfo, },
]

/* 7 - THANKS WITH CALL INFO (FINAL) */

function displayThanksWithCallInfo() {
  return render({
    content: `Thank you for requesting a shipment.
    We will call you shortly to confirm what will be shipped and provide a quote.`,
    status: "final"
  })
}

/* 7 alternative path - SELECT PACKAGE TYPE */

function displaySelectPackagingType() {
  return render({
    content: `Select packaging type
    ${datasetToList(packagingType)}`,
    dataset: packagingType,
  })
}

var packagingType = [
  null,
  { title: "20kg sack", confirm: displaySelectPackageQuantity },
  { title: "Small crate", confirm: displaySelectPackageQuantity },
  { title: "Large crate", confirm: displaySelectPackageQuantity },
]

/* 8 - SELECT PACKAGE QUANTITY */

function displaySelectPackageQuantity() {
  return render({
    content: "Select quantity of packages",
    dataset: displaySelectDeliveryDate,
    status: "answerStandby"
  })
}

/* 9 - SELECT DELIVERY DATE */

function displaySelectDeliveryDate() {
  return render({
    content: `Choose date and time
    ${datasetToList(deliveryDates)}`,
    dataset: deliveryDates,
  })
}

var deliveryDates = [
  null,
  { title: "24/06/2020 AM: R₣ 2,000", confirm: displayThanksWithSmsInfo },
  { title: "24/06/2020 PM: R₣ 1,800", confirm: displayThanksWithSmsInfo },
  { title: "25/06/2020 AM: R₣ 1,500", confirm: displayThanksWithSmsInfo },
  { title: "25/06/2020 PM: R₣ 1,500", confirm: displayThanksWithSmsInfo },
  { title: "26/06/2020 AM: R₣ 1,200", confirm: displayThanksWithSmsInfo },
  { title: "26/06/2020 PM: R₣ 1,200", confirm: displayThanksWithSmsInfo },
]

/* 10 - THANKS WITH SMS INFO (FINAL) */

function displayThanksWithSmsInfo() {
  return render({
    content: `Thank you for requesting a shipment.
    You will receive a SMS to confirm your booking once the other party has confirmed they can make/accept delivery.`,
    status: 'final'
  })
}
