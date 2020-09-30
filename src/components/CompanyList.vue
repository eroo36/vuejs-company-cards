<template>
	<div>
			<ListItem
				v-for="(company, index) in $store.state.companies"
				v-bind:key="index"
				v-bind:companyName="company.companyName"
				v-bind:maxSpend="company.maxSpend"
				v-bind:minSpend="company.minSpend"
				v-bind:_id="company._id"
			/>
	</div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  components: {
    ListItem,
  },
};
</script>

<style>

</style>
