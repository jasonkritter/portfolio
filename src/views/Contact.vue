<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>
      Please complete the fields below. All fields are required unless marked
      (optional).
    </p>
    <p class="notice">
      Note: This form is for validation testing and is not connected to a database.
    </p>
    <div class="form">
      <section>
        <h3>What is your name?</h3>
        <div class="row">
          <div
            class="field-wrapper"
            v-bind:class="contact.firstName.hasError ? 'error' : ''"
          >
            <label for="firstName">{{ contact.firstName.label }}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              v-model="contact.firstName.control"
              placeholder="Enter first name"
            />
            <p class="error-text" v-if="contact.firstName.hasError">
              {{ contact.firstName.errorMessage }}
            </p>
          </div>
          <div class="field-wrapper">
            <label for="lastName"
              >{{ contact.lastName.label }} <small>(optional)</small></label
            >
            <input
              type="text"
              id="lastName"
              name="lastName"
              v-model="contact.lastName.control"
              placeholder="Enter last name"
            />
          </div>
        </div>
      </section>
      <section>
        <h3>What is your email?</h3>
        <div
          class="field-wrapper"
          v-bind:class="contact.email.hasError ? 'error' : ''"
        >
          <label for="facilitator">{{ contact.email.label }}</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model="contact.email.control"
            placeholder="Enter email address"
          />
          <p class="error-text" v-if="contact.email.hasError">
            {{ contact.email.errorMessage }}
          </p>
        </div>
      </section>
      <section>
        <h3>What is your message?</h3>
        <div
          class="field-wrapper"
          v-bind:class="contact.message.hasError ? 'error' : ''"
        >
          <label for="message">{{ contact.message.label }}</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Enter message"
            v-model="contact.message.control"
          ></textarea>
          <p class="error-text" v-if="contact.message.hasError">
            {{ contact.message.errorMessage }}
          </p>
        </div>
      </section>
      <button v-on:click="validateForm">Submit</button>
    </div>
    <br>
    <!--<pre>{{contact}}</pre>-->
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  data: function () {
    return {
      contact: {
        firstName: {
          label: "First Name",
          control: "",
          hasError: false,
          errorMessage: "",
        },
        lastName: {
          label: "Last Name",
          control: "",
        },
        email: {
          label: "Email",
          control: "",
          hasError: false,
          errorMessage: "",
        },
        message: {
          label: "Message",
          control: "",
          hasError: false,
          errorMessage: "",
        },
      },
    };
  },
  methods: {
    validateForm: function () {
      this.checkName(this.contact.firstName);
      this.checkEmail(this.contact.email);
      this.checkMessage(this.contact.message);
    },
    checkName: function (field) {
      let letters = /^[A-Za-z]+$/;
      field.hasError = false;
      field.errorMessage = "";
      if (!field.control.match(letters)) {
        field.errorMessage = "Name may contain only alphabetic characters";
        field.hasError = true;
      }
      if (field.control.length < 2) {
        field.errorMessage = "Name must be at least two characters";
        field.hasError = true;
      }
      if (!field.control.length) {
        field.errorMessage = "Field is required";
        field.hasError = true;
      }
    },
    checkEmail: function (field) {
      let emailTest = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      field.hasError = false;
      field.errorMessage = ";";
      if (!field.control.match(emailTest)) {
        field.errorMessage = "Enter a valid email";
        field.hasError = true;
      }
      if (!field.control.length) {
        field.errorMessage = "Field is required";
        field.hasError = true;
      }
    },
    checkMessage: function (field) {
      field.hasError = false;
      field.errorMessage = ";";
      if (!field.control.length) {
        field.errorMessage = "Field is required";
        field.hasError = true;
      }
    },
  },
};
</script>
