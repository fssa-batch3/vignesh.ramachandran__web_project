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

  console.log(place);

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
  form_id.addEventListener("click", () => {
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

    if (findAddress.default === "true") {
      findAddress.default = "false";
      findAddress.status = "false";
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
        default: "true",
        status: "true",
        selected: "false",
      });
    } else {
      findAddress.default = "false";
      findAddress.status = "false";
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
    }
    localStorage.setItem("addressData", JSON.stringify(addressData));
    alert("Address Updated Sucessfully");
    window.history.back();
  });
} else {
  const form_id = document.querySelector("#address-form");
  form_id.addEventListener("submit", () => {
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

    // localStorage.setItem("addressData", JSON.stringify(addressData));
    alert("Address added sucessfully");
    window.history.back();
  });
}
