// ======================================
// KMD MONEY EXCHANGE
// ======================================


// Selected values

let selectedType = "";
let selectedNeed = "";



// ======================================
// SELECT TYPE
// ======================================

function selectType(type) {

    selectedType = type;


    // Remove active status

    document
        .getElementById("cashButton")
        .classList
        .remove("active");


    document
        .getElementById("upiButton")
        .classList
        .remove("active");


    // Add active status

    if (type === "CASH") {

        document
            .getElementById("cashButton")
            .classList
            .add("active");

    }


    if (type === "UPI") {

        document
            .getElementById("upiButton")
            .classList
            .add("active");

    }

}



// ======================================
// SELECT NEED
// ======================================

function selectNeed(need) {

    selectedNeed = need;


    // Remove active status

    document
        .getElementById("needCashButton")
        .classList
        .remove("active");


    document
        .getElementById("needUpiButton")
        .classList
        .remove("active");


    // Add active status

    if (need === "CASH") {

        document
            .getElementById("needCashButton")
            .classList
            .add("active");

    }


    if (need === "UPI") {

        document
            .getElementById("needUpiButton")
            .classList
            .add("active");

    }

}



// ======================================
// SUBMIT REQUEST
// ======================================

function submitRequest() {


    // Get form values

    const name =
        document
            .getElementById("name")
            .value
            .trim();


    const amount =
        document
            .getElementById("amount")
            .value;


    const contact =
        document
            .getElementById("contact")
            .value
            .trim();


    const location =
        document
            .getElementById("location")
            .value
            .trim();


    const result =
        document
            .getElementById("result");



    // ======================================
    // VALIDATION
    // ======================================


    // Name

    if (!name) {

        alert(
            "Please enter your name."
        );

        return;

    }



    // Type

    if (!selectedType) {

        alert(
            "Please select what you have."
        );

        return;

    }



    // Need

    if (!selectedNeed) {

        alert(
            "Please select what you need."
        );

        return;

    }



    // Type and Need cannot be same

    if (selectedType === selectedNeed) {

        alert(
            "TYPE and NEED cannot be the same."
        );

        return;

    }



    // Amount

    if (
        !amount ||
        Number(amount) <= 0
    ) {

        alert(
            "Please enter a valid amount."
        );

        return;

    }



    // Location

    if (!location) {

        alert(
            "Please enter your location."
        );

        return;

    }



    // WhatsApp number

    if (
        !/^[0-9]{10}$/.test(contact)
    ) {

        alert(
            "Please enter a valid 10-digit WhatsApp number."
        );

        return;

    }



    // ======================================
    // FORMAT AMOUNT
    // ======================================

    const formattedAmount =
        Number(amount)
            .toLocaleString("en-IN");



    // ======================================
    // WHATSAPP MESSAGE
    // ======================================

    const message =

`📢 KMD TRANSACTION REQUEST

👤 NAME: ${name}

TYPE: ${selectedType}

NEED: ${selectedNeed}

💰 AMOUNT: ₹${formattedAmount}

📍 LOCATION: ${location}

📱 CONTACT / WHATSAPP NO.: ${contact}`;



    // ======================================
    // KMD ADMIN NUMBER
    // ======================================

    const adminNumber =
        "917794057386";



    // ======================================
    // CREATE WHATSAPP URL
    // ======================================

    const whatsappURL =
        "https://wa.me/" +
        adminNumber +
        "?text=" +
        encodeURIComponent(message);



    // ======================================
    // SHOW SUCCESS
    // ======================================

    result.innerHTML = `

        <div class="success">

            <div class="success-title">

                ✅ Request Ready

            </div>


            <p>

                Your transaction request
                has been prepared.

            </p>


            <a
                class="whatsapp-button"
                href="${whatsappURL}"
                target="_blank"
                rel="noopener noreferrer">

                📲 Send to KMD Admin

            </a>

        </div>

    `;



    // Scroll to result

    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}