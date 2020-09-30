<template>
	<div>
		<div class="backBtn">
			<router-link class="btn" :to="'/companies'">Back</router-link>
		</div>
		<div style="margin: 20px;">
			<form id="add-company-form" @submit="submitEvent">
				<div class="grid-container">
					<div @change="setCompanyName" class="item1">
						Company Name
						<input type="text" style="width: 36%">
					</div>
					<div v-on:change="minScope" class="item1">
						Company Min Spend
						<input
							style="width: 36%"
							min="0"
							:max="maxSpend"
							type="number"
						>
					</div>
					<div v-on:change="maxScope" class="item1">
						Company Max Spend
						<input style="width: 36%; height: 15%;"
							:min="minSpend"
              max="1000"
							type="number"
						>
					</div>
				</div>
				<div class="item2">
					<h3>Additional Notes</h3>
					<textarea
						@click="textAreaClick"
						id=""
						cols="30"
						rows="1"
						v-model="additionalNotes"
					></textarea>
				</div>
				<div id="myModal" class="modal">
					<div class="modal-content">
						<span @click="closeModal" class="close">&times;</span>
						<textarea
							id=""
							cols="145"
							rows="10"
							v-model="additionalNotes"
						></textarea>
					</div>
				</div>
				<div>
					<button class="btn" style="right: 82%" value="Submit" type="submit"
						>Save New Company</button
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      companyName: "",
      minSpend: -1,
      maxSpend: -1,
      additionalNotes: "",
    };
  },
  methods: {
    submitEvent: function(e) {
      e.preventDefault();
      let newCompanyObj = {
        companyName: this.companyName,
        minSpend: this.minSpend,
        maxSpend: this.maxSpend,
        additionalNotes: this.additionalNotes,
      };
      if (
        newCompanyObj.companyName.length == 0 ||
        newCompanyObj.minSpend == -1 ||
        newCompanyObj.maxSpend.length == -1
      ) {
        alert("Some fields are empty!");
        return;
      }

      this.$store.commit("addNewCompany", newCompanyObj);

      this.$router.push("companies");
      alert("Company successfully saved to vuex! ");
    },
    minScope: function(e) {
      this.minSpend = parseInt(e.target.value);
    },
    maxScope: function(e) {
      this.maxSpend = parseInt(e.target.value);
    },
    setCompanyName: function(e) {
      this.companyName = e.target.value;
    },
    textAreaClick: function() {
      let modal = document.querySelector(".modal");
      modal.classList.add("show");
    },
    closeModal: function() {
      let modal = document.querySelector(".modal");
      modal.classList.remove("show");
    },
  },
};
</script>

<style scoped>
.show {
  display: block !important;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.backBtn {
  width: 100%;
  text-align: right;
  padding: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: end;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-column: 1 / span 2;
}
.item2 {
  grid-column: 1 / span 2;
  text-align: center !important;
}
</style>
