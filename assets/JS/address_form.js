const addressData = JSON.parse(localStorage.getItem("addressData")) || [];
const userId = JSON.parse(localStorage.getItem("user_unique"));

// address API
let autocomplete;
let address1Field;
// let address2Field;
let postalField;

function initAutocomplete() {
  address1Field = document.querySelector("#ship-address");
  //   address2Field = document.querySelector("#address2");
  postalField = document.querySelector("#postcode");
  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    types: ["address"],
    componentRestrictions: {
      country: "in",
    },
    fields: ["address_components", "geometry"],
  });
  address1Field.focus();
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  // console.log(place);

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  for (const component of place.address_components) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        break;
      }

      case "route": {
        address1 += component.long_name;
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      }
      case "locality":
        document.querySelector("#locality").value = component.long_name;
        break;

      case "administrative_area_level_1": {
        document.querySelector("#state").value = component.short_name;
        break;
      }

      case "administrative_area_level_3":
        document.querySelector("#district").value = component.long_name;
        break;

      case "sublocality_level_1":
        document.querySelector("#sub_locality").value = component.long_name;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  //   address2Field.focus();
}

window.initAutocomplete = initAutocomplete;

const mobileInput = document.getElementById("phone_number");
const errorMessage = document.querySelector(".error");

mobileInput.addEventListener("input", () => {
  const inputValue = mobileInput.value.trim(); // remove leading/trailing whitespace
  const isValidInput =
    /^[6-9]\d{9}$/.test(inputValue) && !/^\d*(\d)\1{9}\d*$/.test(inputValue);
  if (!isValidInput || inputValue === "") {
    if (inputValue === "") {
      errorMessage.textContent = "Please enter a mobile number.";
    }
    if (/^\d+$/.test(inputValue)) {
      errorMessage.textContent = "Enter a valid 10-digit mobile number.";
    } else {
      errorMessage.textContent = "Please enter digits only.";
    }
    errorMessage.style.color = "var(--text-color)";
  } else {
    errorMessage.textContent = "";
  }
});

const findUserAddress = addressData.filter((data) => data.userId === userId);
// console.log(findUserAddress);

const urlAddressId = new URLSearchParams(window.location.search).get(
  "addressId"
);
// console.log(urlAddressId);

if (urlAddressId) {
  const findAddress = addressData.find(
    (data) => data.addressId === urlAddressId
  );

  document.getElementById("name").value = findAddress.name;
  document.getElementById("email").value = findAddress.email;
  document.getElementById("phone_number").value = findAddress.phone_number;
  document.getElementById("ship-address").value = findAddress.street_name;
  document.getElementById("sub_locality").value = findAddress.sub_locality;
  document.getElementById("address2").value = findAddress.door_no;
  document.getElementById("locality").value = findAddress.city;
  document.getElementById("district").value = findAddress.district;
  document.getElementById("state").value = findAddress.state;
  document.getElementById("postcode").value = findAddress.pincode;

  const form_id = document.querySelector("#address-form");
  form_id.addEventListener("submit", (s) => {
    s.preventDefault();
    // getting data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone_number").value;
    const street_name = document.getElementById("ship-address").value;
    const sub_locality = document.getElementById("sub_locality").value;
    const door_no = document.getElementById("address2").value;
    const city = document.getElementById("locality").value;
    const district = document.getElementById("district").value;
    const state = document.getElementById("state").value;
    const pincode = document.getElementById("postcode").value;
    const uuid = uuidv4();

    const alreadyExists = findUserAddress.filter(
      (e) =>
        e.name === name &&
        e.email === email &&
        e.phone_number === phone_number &&
        e.street_name === street_name &&
        e.sub_locality === sub_locality &&
        e.door_no === door_no &&
        e.city === city &&
        e.district === district &&
        e.state === state &&
        e.pincode === pincode
    );

    if (alreadyExists.length === 0) {
      addressData.push({
        userId,
        addressId: uuid,
        name,
        email,
        phone_number,
        door_no,
        street_name,
        sub_locality,
        city,
        district,
        state,
        pincode,
        default: findAddress.default,
        status: "true",
        selected: "false",
      });
      findAddress.status = "false";
      findAddress.default = "false";
      localStorage.setItem("addressData", JSON.stringify(addressData));
      alert("Address Updated Sucessfully");
      window.history.back();
    } else if (alreadyExists[0].status === "true") {
      alert("This address already in your book");
      window.history.back();
    } else {
      findAddress.status = "false";
      alreadyExists[0].status = "true";
      alreadyExists[0].default = findAddress.default;
      localStorage.setItem("addressData", JSON.stringify(addressData));
      alert("Address Updated Sucessfully");
      window.history.back();
    }
  });
} else {
  const form_id = document.querySelector("#address-form");
  form_id.addEventListener("submit", (s) => {
    s.preventDefault();
    // getting data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone_number").value;
    const street_name = document.getElementById("ship-address").value;
    const sub_locality = document.getElementById("sub_locality").value;
    const door_no = document.getElementById("address2").value;
    const city = document.getElementById("locality").value;
    const district = document.getElementById("district").value;
    const state = document.getElementById("state").value;
    const pincode = document.getElementById("postcode").value;
    const uuid = uuidv4();

    console.log(findUserAddress);

    const alreadyExists = findUserAddress.filter(
      (e) =>
        e.name === name &&
        e.email === email &&
        e.phone_number === phone_number &&
        e.street_name === street_name &&
        e.sub_locality === sub_locality &&
        e.door_no === door_no &&
        e.city === city &&
        e.district === district &&
        e.state === state &&
        e.pincode === pincode
    );

    console.log(alreadyExists);

    if (!alreadyExists || alreadyExists.length === 0) {
      addressData.push({
        userId,
        addressId: uuid,
        name,
        email,
        phone_number,
        door_no,
        street_name,
        sub_locality,
        city,
        district,
        state,
        pincode,
        default: "false",
        status: "true",
        selected: "false",
      });
      localStorage.setItem("addressData", JSON.stringify(addressData));
      alert("Address added sucessfully");
      window.history.back();
    } else if (alreadyExists[0].status === "false") {
      alreadyExists[0].status = "true";
      localStorage.setItem("addressData", JSON.stringify(addressData));
      alert("Address added sucessfully");
      window.history.back();
    } else {
      alert("This address already exists");
    }
  });
}
