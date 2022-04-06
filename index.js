let myServices = []

let washCarBtn = document.getElementById("wash-car-btn")
const washCar = {
  service: "Wash Car",
  price: 10
}

let mowLawnBtn = document.getElementById("mow-lawn-btn")
const mowLawn = {
  service: "Mow Lawn",
  price: 20
}

let pullWeedsBtn = document.getElementById("pull-weeds-btn")
const pullWeeds = {
  service: "Pull Weeds",
  price: 30
}

let servicesContainer = document.getElementById("services-container")
let sendInvoice = document.getElementById("send-invoice")
let totalAmount = document.getElementById("total-amount")
let note = document.getElementById("note")
let sum = 0