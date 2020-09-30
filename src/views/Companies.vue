<template>
	<div class="companies">
		<div>
			<router-link class="addItemBtn" :to="'/add-company'">Add Company</router-link>		
			<CompanyList />
		</div>
	</div>
</template>

<script>
import CompanyList from "../components/CompanyList";

export default {
  components: {
    CompanyList,
  },
};
</script>

<style>
.addItemBtn {
  border-radius: 10px;
  max-width: 9%;
  text-align: center;
  left: 80%;
  position: absolute;
  padding: 10px;
  background-color: green;
  color: white !important;
  text-decoration: none;
}
</style>
