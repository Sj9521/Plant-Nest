document.addEventListener("DOMContentLoaded", function () {

    loadOrderSummary();

    const paymentOptions =
        document.querySelectorAll('input[name="payment"]');

    paymentOptions.forEach(function (option) {

        option.addEventListener("change", function () {

            showPaymentDetails(this.value);

        });

    });

});



/* =========================
   LOAD CART
========================= */

function getCart() {

    return JSON.parse(
        localStorage.getItem("plantnest_cart")
    ) || [];

}



/* =========================
   PLANT IMAGES
========================= */

function getPlantImage(name) {

    const images = {

        "Aloe Vera": "../images/aloe-vera.jpg",

        "Snake Plant": "../images/snakeplant.jpg",

        "Peace Lily": "../images/peacelily.jpg",

        "Money Plant": "../images/moneyplant.jpg",

        "Spider Plant": "../images/spiderplant.jpg",

        "Monstera Deliciosa": "../images/monstera.jpg",

        "Areca Palm": "../images/areca.jpg",

        "Jade Plant": "../images/jadeplant.jpg"

    };

    return images[name] || "../images/plantguide.webp";

}



/* =========================
   ORDER SUMMARY
========================= */

function loadOrderSummary() {

    const cart = getCart();

    const orderItems =
        document.getElementById("order-items");

    const subtotalElement =
        document.getElementById("subtotal");

    const deliveryElement =
        document.getElementById("delivery-charge");

    const totalElement =
        document.getElementById("checkout-total");


    if (cart.length === 0) {

        orderItems.innerHTML = `
            <p style="
                color:#7b8780;
                font-size:13px;
                padding:10px 0;
            ">
                Your cart is empty.
            </p>
        `;

        subtotalElement.textContent = "₹0";
        deliveryElement.textContent = "₹0";
        totalElement.textContent = "₹0";

        return;

    }


    let subtotal = 0;

    orderItems.innerHTML = "";


    cart.forEach(function (item) {

        const price = Number(
            String(item.price)
                .replace("₹", "")
                .replace(/,/g, "")
        ) || 0;


        const quantity = item.quantity || 1;

        const itemTotal = price * quantity;

        subtotal += itemTotal;


        orderItems.innerHTML += `

            <div class="order-item">

                <img
                    src="${getPlantImage(item.name)}"
                    alt="${item.name}"
                    class="order-image"
                >

                <div class="order-info">

                    <strong>${item.name}</strong>

                    <span>
                        Quantity: ${quantity}
                    </span>

                </div>

                <span class="order-price">
                    ₹${itemTotal.toLocaleString("en-IN")}
                </span>

            </div>

        `;

    });


    let delivery = 0;


    if (subtotal < 999) {

        delivery = 49;

        deliveryElement.textContent = "₹49";

    } else {

        delivery = 0;

        deliveryElement.textContent = "FREE";

    }


    const total = subtotal + delivery;


    subtotalElement.textContent =
        "₹" + subtotal.toLocaleString("en-IN");


    totalElement.textContent =
        "₹" + total.toLocaleString("en-IN");

}



/* =========================
   PAYMENT DETAILS
========================= */

function showPaymentDetails(payment) {

    const container =
        document.getElementById("payment-details");


    /* UPI */

    if (payment === "UPI") {

        container.innerHTML = `

            <div class="payment-details-box">

                <h3>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    Enter UPI Details
                </h3>

                <div class="payment-field">

                    <label>UPI ID</label>

                    <input
                        type="text"
                        id="upiId"
                        placeholder="example@upi">

                </div>

                <p class="payment-info-note">

                    Example:
                    yourname@oksbi,
                    mobilenumber@ybl

                </p>

            </div>

        `;

    }



    /* CARD */

    else if (payment === "Card") {

        container.innerHTML = `

            <div class="payment-details-box">

                <h3>
                    <i class="fa-solid fa-credit-card"></i>
                    Card Details
                </h3>

                <div class="card-brands">

                    <span class="card-brand">VISA</span>

                    <span class="card-brand">MASTERCARD</span>

                    <span class="card-brand">RuPay</span>

                </div>


                <div class="payment-field">

                    <label>Cardholder Name</label>

                    <input
                        type="text"
                        id="cardName"
                        placeholder="Name on card">

                </div>


                <div class="payment-field">

                    <label>Card Number</label>

                    <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        maxlength="19"
                        oninput="formatCardNumber(this)">

                </div>


                <div class="payment-row">

                    <div class="payment-field">

                        <label>Expiry Date</label>

                        <input
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                            maxlength="5">

                    </div>


                    <div class="payment-field">

                        <label>CVV</label>

                        <input
                            type="password"
                            id="cvv"
                            placeholder="CVV"
                            maxlength="3">

                    </div>

                </div>


                <p class="payment-info-note">

                    <i class="fa-solid fa-lock"></i>
                    Your card details are only used for this
                    frontend demo and are not stored.

                </p>

            </div>

        `;

    }



    /* NET BANKING */

    else if (payment === "Net Banking") {

        container.innerHTML = `

            <div class="payment-details-box">

                <h3>
                    <i class="fa-solid fa-building-columns"></i>
                    Select Your Bank
                </h3>


                <div class="payment-field">

                    <label>Bank</label>

                    <select id="bank">

                        <option value="">
                            Select your bank
                        </option>

                        <option>State Bank of India</option>

                        <option>HDFC Bank</option>

                        <option>ICICI Bank</option>

                        <option>Axis Bank</option>

                        <option>Kotak Mahindra Bank</option>

                        <option>Punjab National Bank</option>

                        <option>Bank of Baroda</option>

                        <option>Canara Bank</option>

                        <option>Union Bank of India</option>

                        <option>Other Bank</option>

                    </select>

                </div>


                <p class="payment-info-note">

                    You will normally be redirected to your
                    bank's secure payment page.

                </p>

            </div>

        `;

    }



    /* WALLET */

    else if (payment === "Wallet") {

        container.innerHTML = `

            <div class="payment-details-box">

                <h3>
                    <i class="fa-solid fa-wallet"></i>
                    Select Wallet
                </h3>


                <div class="payment-field">

                    <label>Wallet</label>

                    <select id="wallet">

                        <option value="">
                            Select wallet
                        </option>

                        <option>Paytm</option>

                        <option>Amazon Pay</option>

                        <option>Mobikwik</option>

                        <option>Freecharge</option>

                    </select>

                </div>


                <p class="payment-info-note">

                    Wallet payment will be completed
                    through the wallet provider.

                </p>

            </div>

        `;

    }



    /* COD */

    else if (payment === "Cash on Delivery") {

        container.innerHTML = `

            <div class="payment-details-box">

                <h3>
                    <i class="fa-solid fa-money-bill-wave"></i>
                    Cash on Delivery
                </h3>

                <p class="payment-info-note">

                    You can pay in cash when your PlantNest
                    order is delivered to your address.

                </p>

            </div>

        `;

    }

}



/* =========================
   CARD NUMBER FORMAT
========================= */

function formatCardNumber(input) {

    let value = input.value
        .replace(/\D/g, "")
        .substring(0, 16);


    let formatted = value.match(/.{1,4}/g);


    if (formatted) {

        input.value = formatted.join(" ");

    } else {

        input.value = "";

    }

}



/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

    const cart = getCart();


    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    const name =
        document.getElementById("fullName").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const house =
        document.getElementById("house").value.trim();

    const area =
        document.getElementById("area").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const pincode =
        document.getElementById("pincode").value.trim();

    const state =
        document.getElementById("state").value;


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    /* DELIVERY VALIDATION */

    if (
        !name ||
        !mobile ||
        !email ||
        !house ||
        !area ||
        !city ||
        !pincode ||
        !state
    ) {

        alert(
            "Please fill in all delivery details."
        );

        return;

    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    if (!/^[0-9]{6}$/.test(pincode)) {

        alert(
            "Please enter a valid 6-digit pincode."
        );

        return;

    }


    if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    /* PAYMENT VALIDATION */

    if (!payment) {

        alert(
            "Please select a payment method."
        );

        return;

    }


    const paymentMethod = payment.value;


    if (paymentMethod === "UPI") {

        const upi =
            document.getElementById("upiId").value.trim();

        if (!upi || !upi.includes("@")) {

            alert("Please enter a valid UPI ID.");

            return;

        }

    }


    if (paymentMethod === "Card") {

        const cardName =
            document.getElementById("cardName").value.trim();

        const cardNumber =
            document.getElementById("cardNumber").value
                .replace(/\s/g, "");

        const expiry =
            document.getElementById("expiry").value.trim();

        const cvv =
            document.getElementById("cvv").value.trim();


        if (
            !cardName ||
            cardNumber.length !== 16 ||
            !/^[0-9]{4}$/.test(cvv) &&
            !/^[0-9]{3}$/.test(cvv) ||
            !/^\d{2}\/\d{2}$/.test(expiry)
        ) {

            alert(
                "Please enter valid card details."
            );

            return;

        }

    }


    if (paymentMethod === "Net Banking") {

        const bank =
            document.getElementById("bank").value;

        if (!bank) {

            alert("Please select your bank.");

            return;

        }

    }


    if (paymentMethod === "Wallet") {

        const wallet =
            document.getElementById("wallet").value;

        if (!wallet) {

            alert("Please select your wallet.");

            return;

        }

    }


    /* CREATE ORDER ID */

    const orderId =
        "PN" +
        Date.now().toString().slice(-8);


    document.getElementById("order-id")
        .textContent = orderId;


    /* SHOW SUCCESS */

    document
        .getElementById("success-modal")
        .classList.add("show");


    /*
       FRONTEND DEMO:
       Clear cart after successful order.
    */

    localStorage.removeItem("plantnest_cart");

}



/* =========================
   GO HOME
========================= */

function goHome() {

    window.location.href = "home.html";

}