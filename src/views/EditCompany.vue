<template>
	<div>
		<div class="">
			<router-link class="backBtn btn" :to="'/companies'">Back</router-link>
		</div>
		<div style="margin: 20px;">
			<form id="edit-company-form" @submit="submitEvent">
				<div class="grid-container">
					<div @change="setCompanyName" style="text-align: center;" >
						Company Name
						<input
            class="input-group"
						style=""
							:placeholder="getCompanyObj[0].companyName"
						>
					</div>
					<div v-on:change="minScope" style="text-align: center; margin-top: 15px;" >
						Company Min Spend
						<input
						style="width: 30%; margin-left: auto; margin-right: auto; margin-top: 15px;"
             class="input-group"
							:placeholder="getCompanyObj[0].minSpend"
							min="0"
							step="0.1"
							max="1000"
							type="number"
						>
					</div>
					<div v-on:change="maxScope" style="text-align: center; margin-top: 15px;" >
						Company Max Spend
						<input
						style="width: 30%; margin-left: auto; margin-right: auto;"
             class="input-group"
							:placeholder="getCompanyObj[0].maxSpend"
							:min="minSpend"
							step="0.1"
							max="1000"
							type="number"
						>
					</div>
					<div class="item2" style="">
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
						<span @click="closeModal" class="close" >&times;</span>
						<textarea
            class="text-span"
							id=""
							cols="145"
							rows="10"
							v-model="additionalNotes"
						></textarea>
					</div>
				</div>
				<div>
					<button class="btn" style="right: 82%" value="Submit" type="submit"
						>Save New Company</button>
				</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      companyName: this.$store.getters.getCompanyById(this.$route.params._id)[0]
        .companyName,
      minSpend: this.$store.getters.getCompanyById(this.$route.params._id)[0]
        .minSpend,
      maxSpend: this.$store.getters.getCompanyById(this.$route.params._id)[0]
        .maxSpend,
      additionalNotes: this.$store.getters.getCompanyById(
        this.$route.params._id
      )[0].additionalNotes,
    };
  },
  computed: {
    getCompanyObj: function() {
      let companyObj = this.$store.getters.getCompanyById(
        this.$route.params._id
      );
      return companyObj;
    },
  },
  methods: {
    submitEvent: function(e) {
      e.preventDefault();
      let companyObj = {
        companyName: this.companyName,
        minSpend: this.minSpend,
        maxSpend: this.maxSpend,
        additionalNotes: this.additionalNotes,
        _id: this.$store.getters.getCompanyById(this.$route.params._id)[0]._id,
      };
      if (
        companyObj &&
        companyObj.companyName &&
        companyObj.companyName.length == 0
      ) {
        alert("Company name can not be empty!");
        return;
      }
      this.$store.commit("editCompany", companyObj);
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
  text-align: center;
  padding: 10px;
}

.grid-container {
  display: column;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.input-group {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: right;
  align-items: right;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: start;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.item2 {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  text-align: center;
}
.text-span {
  width: 50%;
  margin-left: 25%;
  margin-top: 15px;
  text-align: center;
}
</style>
