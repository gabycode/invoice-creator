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

function renderServices() {
  let service = ""
  for(let i = 0; i < myServices.length; i++) {
    service += `
        <div class="content">
        <p class="services">${myServices[i].service}</p> 
        <p class="price"><span class="dollar">$</span>${myServices[i].price}</p>
        </div>`
  }
  servicesContainer.innerHTML = service
  note.textContent = "We accept cash, credit card, or PayPal"
}

washCarBtn.addEventListener("click", function() {
  myServices.push(washCar)
  renderServices()
  washCarBtn.disabled = true
  sum += washCar.price;
  totalAmount.textContent = "$" + sum
})

mowLawnBtn.addEventListener("click", function() {
  myServices.push(mowLawn)
  renderServices()
  mowLawnBtn.disabled = true
  sum += mowLawn.price;
  totalAmount.textContent = "$" + sum
})

pullWeedsBtn.addEventListener("click", function() {
  myServices.push(pullWeeds)
  renderServices()
  pullWeedsBtn.disabled = true
  sum += pullWeeds.price;
  totalAmount.textContent = "$" + sum
})

sendInvoice.addEventListener("click", function(){
  sum = 0
  totalAmount.textContent = "$" + sum
  myServices = []
  note.textContent = ""
  pullWeedsBtn.disabled = false
  washCarBtn.disabled = false
  mowLawnBtn.disabled = false
  servicesContainer.textContent = ""
})